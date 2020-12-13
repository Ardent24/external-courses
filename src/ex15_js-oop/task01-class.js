class Candy {
  constructor(brand, weight, totalWeight) {
    this.brand = brand;
    this.weight = weight;
    this.totalWeight = totalWeight;
  }
}

const candyNsk = new Candy('Новосибирские', 55, 500);
const candyRzn = new Candy('Рязанские', 45, 400);

class Present {
  constructor(totalWeight, ...arg) {
    this.totalallWeight = totalWeight;
    this.arg = arg;
  }

  createPresent() {
    const totalWeightCandy = this.totalallWeight / this.arg.length;
    let sum = 0;
    this.arg.forEach(item => {
      console.log(`
      Детский подарок весом: ${this.totalallWeight} состоит из: ${'\r\n'}
          - ${item.brand} каждая конфета весит "${item.weight}грамм" ${'\r\n'}
          для подарка нам надо "${Math.round(totalWeightCandy / item.weight)} штук ${'\r\n'}
          общий вес конфет равен ${sum += item.totalWeight} грамм
      `);
    });
  }

  sortCandyWeight(property) {
    return this.arg.sort((a, b) => a.property - b.property);
  }

}

const childrenPresent = new Present(1000, candyNsk, candyRzn);

childrenPresent.createPresent();
console.log(childrenPresent.sortCandyWeight('weight'));
