const apiKey = "3x6hCt6LcuCGAsLG1CUZwR3FF6LwyPfA_O_5VMxSUcy-2J1Pw9Y4d8kkG1v1lNZ55UKpMez2JZOWhmqzPALtBvtuerAe-v6aa_D8Emh86y1-fNKan366_sWvFMTPXnYx";

Yelp= {

};

function search(term, location, sortBy) {

	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term={term}&location={location}&sort_by={sortBy}`);

}