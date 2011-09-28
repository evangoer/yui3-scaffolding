// Module names should be lower case and use dashes for a separator.
YUI.add('example-component', function (Y) {  
    // Define all module code inside this anonymous function.
    
    // Y.Base is the building block for YUI components. Here we're using
    // the Y.Base.create() sugar method rather than vanilla Y.extend().
    Y.Example = Y.Base.create('example-component', Y.Base, [], {
        
        // Define your component's properties and methods here.
        hello: function () {
            return this.get('greeting');
        }
    }, {
        // Define attributes on the special ATTRS object. 
        ATTRS: {
            // The 'greeting' attribute just has a default value set. 
            // In general, attributes can have many fancy features. 
            greeting: {
                value: 'HI'
            }
        }
    })
}, 
// An arbitrary string version number for your module.
'0.1', 
{ 
    // An array of string module names that your module depends upon.
    requires: ['base']
});