require(["help"], function(help) {
    //This function is called when scripts/help.js is loaded.
    //If help.js calls define(), then this function is not fired until
    //help's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    help.message();
});