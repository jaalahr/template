define([
	"jquery",
	"module.flower"
], function($) {

	'use strict';

	// ---------------------------------------
    // Define functions
    // ---------------------------------------

    function helloWorld() {
        console.log("HELLO WORLD");
    }

	// ---------------------------------------
	// List functions
	// ---------------------------------------

	function build() {
        helloWorld();
	}

	return {
		init: build
	};


});
