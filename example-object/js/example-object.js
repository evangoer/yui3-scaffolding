// Module names should be lower case. If you need a separator, use dashes
// as in 'my-example', not camel case, periods, or underscores.
YUI.add('example-object', function (Y) {  
    // Define all module code inside this anonymous function.
    
    // A private member that will be closed over.
    var greeting = "HELLOSKI";
    
    // Add public objects, methods and properties to the Y. 
    Y.Example = {};
    
    Y.Example.hello = function () {
        return greeting;
    }   
}, 
// An arbitrary string version number for your module.
'0.1', 
{ 
    // An array of string module names that your module depends upon.
    requires: []
});