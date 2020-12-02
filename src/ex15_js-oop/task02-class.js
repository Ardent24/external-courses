class Device {
  constructor(name, switched, power) {
    this.name = name;
    this.switched = switched;
    this.power = power;
  }
}

const computer = new Device('computer', false, 100);
const luster = new Device('luster', true, 20);
const tv = new Device('tv', false, 120);

class Room extends Device {
  constructor(room, hours, ...arg) {
    super();
    this.room = room;
    this.hours = hours;
    this.arg = arg;
  }

  powerСonsumption() {
    let power = 0;

    this.arg.forEach(item => {
      if (item.switched) power += item.power
    });
    console.log(`В комнате ${this.room} за ${this.hours}часа, употребляет энергии ${power * this.hours}`)
  }
}

const kitchen = new Room('kitchen', 4, computer, luster, tv);
kitchen.powerСonsumption();


