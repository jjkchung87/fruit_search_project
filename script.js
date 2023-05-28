const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let suggestion = '';
let results = '';

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


const fruit =  ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let userInput = "";

function searchHandler(input) { //Triggered when user types into search bar. Assigns what user types to UserInput variable which is then run through 'search' function.
	userInput = input.target.value.trim()
	if(userInput !==''){
		search(userInput);	
	} else {
		while (suggestions.firstChild) {
			suggestions.removeChild(suggestions.firstChild);
		  }
	}
}

function search(str) { //Returns array called Results which contains any element from 'Fruit' that contains a sub-string that matches what is typed in search bar.
	results = fruit.filter((f) => f.toLowerCase().includes(str.toLowerCase()))
	showSuggestions(results,userInput)
}



function showSuggestions(results, inputVal) { //displays the Results array as listed items. Maximum of 5 items. Bolds the sub-string that matches what's typed in the search bar.
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	  }
	
	const limit = Math.min(results.length, 5)
	
	for (let i = 0; i < limit; i++) {
		const suggestion = document.createElement("li");
		const result = results[i];
		const index = result.toLowerCase().indexOf(inputVal.toLowerCase());
		const boldedText = result.substring(index, index + inputVal.length);
		const restOfText = result.substring(index + inputVal.length);
	
		suggestion.innerHTML = `${result.substring(0, index)}<b>${boldedText}</b>${restOfText}`;
		suggestions.append(suggestion);
	}	
}

function useSuggestion(e) { //Populates the search bar with the option user selects from the drop-down list
	e.target !== suggestions ? input.value = e.target.innerText : input.value = ''
	
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	  }
}


