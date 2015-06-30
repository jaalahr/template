define([

    // ---------------------------------------
	// Define required libraries for module
    // ---------------------------------------

	"jquery",
	"jqueryUI", 
    "bootstrap",
    "console"

],function($){

	function initUserInterface() {
		log('init userInterface');

        // ---------------------------------------
        // Initialize functions
        // ---------------------------------------

        loremIpsum();
	}

    // ---------------------------------------
    // Define functions
    // ---------------------------------------

    function loremIpsum() {
        log("HELLO WORLD");
    }

	return {
		init: initUserInterface
	};


});
