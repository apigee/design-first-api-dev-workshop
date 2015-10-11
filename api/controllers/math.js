'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.

  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require('util');


module.exports = {
  sum: sum
};


function sum(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var inputs = req.swagger.params.inputs.value;

  var x = inputs.x ;
  var y = inputs.y ;
  
  var z = {};
  z.z = x+y;
  
  res.json(z);
}
