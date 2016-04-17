(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD init. No dependencies
        define(factory);
    } else {
        // Browser globals init
        root.moduleB = factory();
    }
}(this, function () { //moduleB impl
    
    function publicHello(msg) {
        _privateHello(msg)
    }; 
    function _privateHello(msg) {
		console.log('moduleB called ' + msg);
    }; 
    return {
    	hello: publicHello	
    }
}));