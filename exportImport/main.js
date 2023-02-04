const math = require('./math/index');

const {PI, sum} = require('./math/index');

const myOpetators = new math.math(12, 34);

console.log(myOpetators.div(), myOpetators.mult(), myOpetators.sub(), myOpetators.sum());


console.warn(PI, sum(PI,45), sum(45,78));