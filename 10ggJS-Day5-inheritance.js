class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () { //access the class property 'prototype', where all the characteristics and functions of the class resides
    return (this.w * this.h);
}


/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle { //extends the original blue print of the Rectangle's class
    constructor (len){
        super(len, len); //recall the original constructor of the 'parent' class
    }
}


if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}