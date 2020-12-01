class Candy {

  constructor(brand, weight) {
    this.brand = brand;
    this.weight = weight;
  }

}

const candyNsk = new Candy('Новосибирские', 55);
const candyRzn = new Candy('Рязанские', 45);

class Present {
  constructor(totalWeight, ...arg) {
    this.totalallWeight = totalWeight;
    this.arg = arg;
  }

  createPresent() {
    const totalWeightCandy = +this.totalallWeight / this.arg.length;

    this.arg.forEach(item => {
      console.log(`
      Детский подарок весом: ${this.totalallWeight} состоит из: ${'\r\n'}
          - ${item.brand} каждая конфета весит "${item.weight}грамм" ${'\r\n'}
          для подарка нам надо "${Math.round(totalWeightCandy / item.weight)} штук"
      `)
    });
  }

  sortCandyWeight() {
    return this.arg.sort((a, b) => a.weight - b.weight)
  }
  sortCandyBrand() {
    return this.arg.sort((a, b) => a.brand - b.brand)
  }
}

const childrenPresent = new Present('1000', candyNsk, candyRzn);

childrenPresent.createPresent();
console.log(childrenPresent.sortCandyWeight());
console.log(childrenPresent.sortCandyBrand());

// module.exports = candy;
