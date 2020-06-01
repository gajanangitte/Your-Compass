const apiKey = "";

const Yelp = {
 search(term, location, sortBy) {

	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
		headers : {
			Authorization: `Bearer ${apiKey}`
		}
	} ).then( (response) => {
		return response.json();
	}).then( (jsonResponse) => {
		if(jsonResponse.businesses) {
			return jsonResponse.businesses.map( (business) => {
				return {
					id: business.id,
					imageSrc: business.image_url,
					name: business.name,
					address: business.location.address1,
					city: business.location.city,
					state: business.location.state,
					zipCode: business.location.zip_code,
					category: business.categories[0].title,
					rating: business.rating,
					reviewCount: business.review_count,
				}
			})

		} else {
			  
			  return {
			  id: 'Not Available',
			  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
			  name: 'Not Available',
			  address: 'Not Available',
			  city: 'Not Available',
			  state: 'Not Available',
			  zipCode: 'Not Available',
			  category: 'Not Available',
			  rating: 0,
			  reviewCount: 0
			  }
		}


	} );

	}

};

export default Yelp;