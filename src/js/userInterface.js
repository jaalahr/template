define([

    // ---------------------------------------
	// Define required libraries for module
    // ---------------------------------------

	"jquery",
	"libs/vendor/jquery-ui/jquery-ui.min",
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
