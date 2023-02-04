class Math {
  v1 = 0; v2 = 0;
  constructor(v1, v2){
    this.v1 = v1;
    this.v2 = v2;
  }


  sum(){return this.v1 + this.v2;}
  sub(){return this.v1 - this.v2;}
  mult(){return this.v1 * this.v2;}
  div(){return this.v1 / this.v2;}
}

function sum(v1, v2){ return v1 + v2; }
function sub(v1, v2){ return v1 - v2; }
function mult(v1, v2){ return v1 * v2; }
function div(v1, v2){ return v1 / v2; }

const PI = 3.18;


module.exports = {
  math: Math,
  sum:sum,
  sub:sub,
  mult:mult,
  div:div,
  PI: PI
}

// module.exports.sum = sum;
// module.exports.sub = sub;
// module.exports.mult = mult;
// module.exports.div = div;