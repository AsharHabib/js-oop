class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  get activity() {
    const today = new Date();
    const hour = today.getHours();
    if (hour > 8 && hour <= 20) {
      return 'playing';
    } else {
      return 'sleeping';
    }
  }

  get owner() {
    return this._owner;
  }

  set owner(owner) {
    this._owner = owner;
  }

  speak() {
    console.log(this.sound);
  }
}

class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  set phone(phone) {
    this._phone = phone;
  }
  get phone() {
    return this._phone;
  }
}






const ernie = new Pet('dog',1,'pug','woof');
ernie.owner = new Owner('Ashman', '12407 ashman street')
ernie.owner.phone = '555 555 5555'
console.log(ernie.owner);
