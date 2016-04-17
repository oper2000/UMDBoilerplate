Boilerplate for UMD JS modules
JS module that run in AMD or plain browser
UMD - http://garrettn.github.io/blog/2014/02/19/write-modular-javascript-that-works-anywhere-with-umd/

Sample showcase 'moduleA' that depends on 'moduleB'.
If 'moduleB' is not "defined" 'moduleA' will used dummy mock.
Bothe modules are UMD.

jsamd.html starts and showes the AMD enabled environment usage.
jsbrowser.html starts and shows plain browser environment.

jsamd case:

app will print to the console: "moduleB called Hello" if moduleb is present and if not:

  define([
  'moduleA',
  //'moduleB'
  
  is commented out in app.js
  
  will print "dummy call"
  
  the same is with browser version:
  
  if 
  
     <title>JS Module Example (Non AMD)</title>
   <!--script type="text/javascript" src="libs/moduleB.js"></script-->
   <script type="text/javascript" src="libs/moduleA.js"></script>

    <script>
    moduleA.hello('Hello');
    </script>
</head>

moduleB is not includes, 'dummy call' will be printed.

This is achieved in moduleA.js in the following way:

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
        	root.moduleA = {hello: function(msg) {console.log('dummy call');}}
        }
        else {
        	root.moduleA = factory(root.moduleB);
        }
    }

