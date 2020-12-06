function Device(name, switched, power) {
  this.name = name;
  this.switched = switched;
  this.power = power;
}

const computer = new Device('computer', false, 100);
const luster = new Device('luster', true, 20);
const tv = new Device('tv', false, 120);

function Room(room, hours, ...arg) {
  this.room = room;
  this.hours = hours;
  this.arg = arg;
}

const kitchen = new Room('kitchen', 4, computer, luster, tv);

Room.prototype.powerСonsumption = function () {
  const power = this.arg.reduce((acc, item) => (item.switched) ? acc + item.power : acc, 0)
  console.log(`В комнате ${this.room} за ${this.hours}часа, употребляет энергии ${power * this.hours}`)
}

kitchen.powerСonsumption();


