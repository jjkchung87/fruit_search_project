//Key Variables

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let results = '';
const fruits =  ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let userInput = "";

//Event Listeners
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);



function searchHandler(input) { //Triggered when user types into search bar. Assigns what user types to UserInput variable which is then run through 'search' function.
	userInput = input.target.value.trim()
	if(userInput !==''){ 
		search(userInput);
	} else {
		while (suggestions.firstChild) { //if nothing is in the search bar, drop-down list disappears
			suggestions.removeChild(suggestions.firstChild);
		  }
	}
}

function search(str) { //Returns array called Results which contains any element from 'Fruit' that contains a sub-string that matches what is typed in search bar.
	results = fruits.filter((f) => f.toLowerCase().includes(str.toLowerCase()))
	showSuggestions(results,userInput)
}



function showSuggestions(results, inputVal) { //displays the Results array as listed items.  Bolds the sub-string that matches what's typed in the search bar.
	while (suggestions.firstChild) { // removes previous suggestions first before new list of suggestions is shown. Results in the list "dynamically" changing will user types
		suggestions.removeChild(suggestions.firstChild);
	  }
	
	
	for (let i = 0; i < results.length; i++) { //looping through every fruit in the 'results' array to create LI
		const suggestion = document.createElement("li");
		const result = results[i];
		const boldIndex = result.toLowerCase().indexOf(inputVal.toLowerCase());
		const boldedText = result.substring(boldIndex, boldIndex + inputVal.length);
		const restOfText = result.substring(boldIndex + inputVal.length);
	
		suggestion.innerHTML = `${result.substring(0, boldIndex)}<b>${boldedText}</b>${restOfText}`;
		suggestions.append(suggestion);
	}	
}

function useSuggestion(e) { //Populates the search bar with the option user selects from the drop-down list
	
	if (e.target === suggestions) {
		return;
	  }
	  input.value = e.target.innerText;


	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild); //removes the drop-down list once the user clicks on a fruit from the drop-down list 
	  }
}


