define([
	"jquery",
	"underscore",
	"backbone"
], function($, _) {

    // ---------------------------------------
    // Define functions
    // ---------------------------------------

	var redRoses = new app.flower({
	  name: "Red Roses",
	  price: 39.95,
	  color: "Red",
	  img: "images/redRoses.jpg",
	  link: "redRose"
	});

	var rainbowRoses = new app.flower({
	  name: "Rainbow Roses",
	  price: 29.95,
	  color: "orange",
	  link: "rainbowRose"
	});

	var heirloomRoses = new app.flower({
	  name: "Heirloom roses",
	  price: 19.95,
	  img: "images/heirloomPinkRoses.jpg",
	  link: "heirloomRose"
	});

	// ---------------------------------------
	// Initialize functions
	// ---------------------------------------

	function build() {
		console.log(heirloomRoses.toJSON());
		console.log(rainbowRoses.toJSON());
		console.log(redRoses.toJSON());
	}

	return {
		init: build
	};


});




