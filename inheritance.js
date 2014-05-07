Function.prototype.inherits = function(superclass) {
  function Surrogate() {};

  Surrogate.prototype = superclass.prototype;

  // console.log('this: ' + this);
  this.prototype = new Surrogate();
};

// module.exports.inherits = Function.prototype.inherits;

// function Animal(name) {
//   this.name = name;
// };
// // Animal.prototype.speak = function () { console.log('sdfsd') };
// Animal.prototype.speak= function () { console.log(this.name) };
//
//
// function Dog(name) {
//   Animal.call(this, name);
// };
//
// Dog.inherits(Animal);
//
// new Dog().speak();
// puppy = new Dog("fluffy");
// puppy.speak();