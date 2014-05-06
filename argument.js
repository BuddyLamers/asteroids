//////////////////////////
// sum
sums = function() {
  var args = Array.prototype.slice.call(arguments);
  var sum  = 0;

  args.forEach(function(num) {sum += num} );
  return sum;
};

// console.log(sums(1,2,3,4));

////////////////////////
// myBind
Function.prototype.myBind = function (obj) {
  var f = this;
  var args1 = Array.prototype.slice.call(arguments);
  args1.shift();

  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    args3 = args1.concat(args2);

    f.apply(obj, args3);
  };
}

// dog = {name: function() {
//   arg = Array.prototype.slice.call(arguments);
//   console.log(arg);
//   arg.forEach(function(i) {console.log('hello ' + i);})
//   }
// };
//
// var dog_method = dog.name.myBind(dog, 1,2);
// dog_method(3,4);

////////////////////////
// curriedSum

var curriedSum = function(numArgs) {
  var numbers = [];
  var _curriedSum = function(num) {
    numbers.push(num);
    console.log(numbers + ' numArgs ' + numArgs);
    if (numbers.length === numArgs) {
      sum = 0;
      for (var i=0; i<numArgs; i++) {
        sum += numbers[i];
      }
      return (sum);
    } else {
      return (_curriedSum);
    }
  };
  return (_curriedSum);
};

// var f1 = curriedSum(3);
// var f2 = f1(4);
// var f3 = f2(5);
// var f4 = f3(6);

/////////////////////
// Function#curry(numArgs)

Function.prototype.curry = function(numArgs) {
  var args = [];
  original_func = this;
  console.log(original_func);
  var _curried = function(arg) {
    args.push(arg);
    console.log(args);
    if (args.length === numArgs) {
      return original_func.apply( null, args);
    } else {
      return _curried;
    }
  };
  return _curried;
};

var f1 = sums.curry(3);
var f2 = f1(4);
var f3 = f2(5);
var result = f3(6);
console.log(result);

