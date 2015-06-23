This project incorporates a build process called Grunt, a command-line build utility.

Grunt, in turn, uses Node.js as a package manager.

This build process has the option to create a "dist[ribution]" version of the site where all
javascript files are validated and verified to be free of any dubious coding practices.
They are then concatenated, minified and obfuscated.

To utilize this method:

1:  Install Node.js (http://nodejs.org/)

2:  Open a Command Prompt in the root of this project and type "npm install".  This will install all of
the dependencies that the grunt process requires.

3:  Finally, type "grunt server" to create a packaged-up site in a newly-created "dist" folder.
This folder removes all of the cruft of the source files and plugin vendor libraries and only
contains the bare minimum required for the site to run.


==============================================================
Site Development Typical Workflow Scenario::

So, if you would like to add some javascript, to say, the *app.js* file to handle the Ajax form submission, add the required code and after saving enter the "grunt" command in the Command Window.  This will run the LESS css preprocessor and the javascript code-quality checkers.

If you get no errors in the output of the Command Window, you can then perform a "dist" build by entering "grunt server".  If you again get no errors you can put the contents of the "dist" folder onto the server in preparation for QA/UAT/STAGE/PROD.

If you have any questions with any of this, please do not hesitate to contact me:

Scott Roberson @ Primacy
scott.roberson@theprimacy.com


Alternately, you can contact the Primacy Project Management liason and she can contact me.