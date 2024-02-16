/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */

// solve this without using the built-in Function.call method.

// my own follow up - solve this without using in-built apply method

Function.prototype.callPolyfill = function(context, ...args) {
  const key = Symbol('key')
  context[key] = this;
  const result = context[key](...args)
  delete context.key
  return result
}

/**
* function increment() { this.count++; return this.count; }
* increment.callPolyfill({count: 1}); // 2
*/
// q - 2693

// Example 1:

// Input:
// fn = function add(b) {
//   return this.a + b;
// }
// args = [{"a": 5}, 7]
// Output: 12
// Explanation:
// fn.callPolyfill({"a": 5}, 7); // 12
// callPolyfill sets the "this" context to {"a": 5}. 7 is passed as an argument.
// Example 2:

// Input: 
// fn = function tax(price, taxRate) { 
//  return `The cost of the ${this.item} is ${price * taxRate}`; 
// }
// args = [{"item": "burger"}, 10, 1.1]
// Output: "The cost of the burger is 11"
// Explanation: callPolyfill sets the "this" context to {"item": "burger"}. 10 and 1.1 are passed as additional arguments.