/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(side_lens) {
      this.side_lens = side_lens;
    }
    
    perimeter() {
        //console.log("Lati : ", this.side_lens);
        let perim = 0;
        for(let i of this.side_lens) {
            perim += i;
        }
        return perim;
    }
  }
  