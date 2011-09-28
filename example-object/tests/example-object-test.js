// YUI Test JS code is also in its own module. This module uses a
// simple, direct pattern for organizing tests:
YUI.add('example-basic-test', function (Y) {
        
    // For each object you need to test, create one test suite.
    var suite = new Y.Test.Suite('Test Suite for Y.Example');
    
    // For each method in the object to test, create one test case 
    // and add it to the object’s test suite. 
    suite.add(new Y.Test.Case({
        name: 'Testing hello()',

        // For each test case, create one test function for each input-output 
        // set in the method under test.
        testHello: function () {            
            Y.Assert.areEqual('HELLOSKI', Y.Example.hello());
        },
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['example-basic', 'test'] });