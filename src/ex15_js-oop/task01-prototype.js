function Candy(brand, weight, totalWeight) {
  this.brand = brand;
  this.weight = weight;
  this.totalWeight = totalWeight;
}

const candyNsk = new Candy('Новосибирские', 55, 500);
const candyRzn = new Candy('Рязанские', 45, 400);

function CreatePresent(totalWeight, ...arg) {
  this.totalWeight = totalWeight;
  this.arg = arg;
  console.log(totalWeight, arg)

}

const childrenPresent = new CreatePresent(1000, candyNsk, candyRzn);

CreatePresent.prototype.createPresent = function () {
  const totalWeightCandy = this.totalWeight / this.arg.length;
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

childrenPresent.createPresent();

CreatePresent.prototype.createPresent = function (property) {
  return this.arg.sort((a, b) => a.property - b.property);
}

childrenPresent.createPresent('brand')