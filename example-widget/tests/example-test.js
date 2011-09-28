// YUI Test JS code is also in its own module.
YUI.add('example-test', function (Y) {
    
    // A simple pattern for organizing your YUI Test tests:
    // 1. For each object you need to test, create one test suite.
    // 2. For each method in the object to test, create one test case 
    //    and add it to the object’s test suite.
    // 3. For each test case, create one test function for each input-output 
    //    set in the method under test.
    var suite = new Y.Test.Suite('Test Suite for Y.Example');
    
    suite.add(new Y.Test.Case({
        name: 'Testing hello()',

        testHello: function () {            
            Y.Assert.areEqual('HELLOSKI', Y.Example.hello());
        },
    }));
    
    Y.Test.Runner.add(suite);
}, "1.0", { requires: ['example', 'test'] });