(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD init. 
       if (require.specified("moduleB")) {
        	define(['moduleB'], factory);
        }
        else { //dependency is not loaded, using DUMMY impl
        	define({hello: function(msg) {console.log('dummy call');}}, factory);
        }
    } else {
        // Browser globals init
        if (!root.moduleB) { //dependency not founded, using DUMMY impl
        	root.moduleA = factory({hello: function(msg) {console.log('dummy call');}});
        }
        else {
        	root.moduleA = factory(root.moduleB);
        }
    }
}(this, function (moduleB) { //moduleA impl
    function publicHello(msg) {
        _privateMethod(msg)
    }; 
    function _privateMethod(msg) {
        moduleB.hello(msg)
    }; 
    return {
    	hello: publicHello	
    }
}));