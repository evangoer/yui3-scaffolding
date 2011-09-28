// Module names should be lower case and use dashes for a separator.
YUI.add('example-widget', function (Y) {  
    // Define all module code inside this anonymous function.
    
    // Y.Widget is the building block for YUI widgets. Here we're using
    // the Y.Base.create() sugar method rather than vanilla Y.extend().
    Y.Example = Y.Base.create('example-widget', Y.Widget, [], {
        // Define your widget's properties and methods here.
        
        // Custom setup logic. The constructor automatically calls all
        // initializer() methods in this object's inheritance chain.
        initializer: function () {},

        // Custom teardown logic. Calling destroy() calls all
        // destructor() methods in this object's inheritance chain.
        destructor: function () {},
        
        // Calling render() calls the following three methods in order: 
        // 1. Set up the initial markup your widget needs.
        renderUI: function () {},
        
        // 2. Bind event listeners to nodes on the page.
        bindUI: function () {},
        
        // 3. Refresh the widget's appearance according to its current state.
        //    You can call this method again in response to attribute changes.
        syncUI: function() {}
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
    requires: ['widget', 'base-build'], 
    
    // Remove or set to false if your module does not have a skin.
    skinnable: true
});