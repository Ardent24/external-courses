function CandyPrototype(brand, weight, totalWeight) {
  this.brand = brand;
  this.weight = weight;
  this.totalWeight = totalWeight;
}

const candyNskPrototype = new CandyPrototype('Новосибирские', 55, 500);
const candyRznPrototype = new CandyPrototype('Рязанские', 45, 400);

function createPresentPrototype(totalWeight, ...arg) {
  this.totalWeight = totalWeight;
  this.arg = arg;
  console.log(totalWeight, arg)

}

const childrenPresentPrototype = new createPresentPrototype('1000', candyNskPrototype, candyRznPrototype);

createPresentPrototype.prototype.createPresentPrototype = function () {
  const totalWeightCandy = +this.totalWeight / this.arg.length;
  let sum = 0;
  this.arg.forEach(item => {
    console.log(`
      Детский подарок весом: ${this.totalWeight} состоит из: ${'\r\n'}
          - ${item.brand} каждая конфета весит "${item.weight}грамм" ${'\r\n'}
          для подарка нам надо "${Math.round(totalWeightCandy / item.weight)} штук ${'\r\n'}
          общий вес конфет равен ${sum += item.totalWeight} грамм
      `)
  });
}

childrenPresentPrototype.createPresentPrototype();

createPresentPrototype.prototype.createPresentPrototype = function (property) {
  return this.arg.sort((a, b) => a.property - b.property);
}

childrenPresentPrototype.createPresentPrototype('brand')