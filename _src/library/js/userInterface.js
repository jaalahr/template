define([

    // ---------------------------------------
	// Define required libraries for module
    // ---------------------------------------

	"jquery",
    "migratePlugin",
	"jqueryUI", 
    "bootstrap",
    "console"

],function($, migratePlugin){

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
        console.log("HELLO WORLD");
    }

	return {
		init: initUserInterface
	};


});
