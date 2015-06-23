define([

    // ---------------------------------------
    // Define required libraries for module
    // ---------------------------------------

	"jquery",
    "migratePlugin",
	"client.userInterface.js",
	"console"

], function ($, migratePlugin, userInterface) {

    // ---------------------------------------
    // Scripts to execute on DOM ready
    // ---------------------------------------

	$(function () {

	});

	function initApp(){
		log('init app');

		userInterface.init();
	}

	return {
		init: initApp
	};

});





