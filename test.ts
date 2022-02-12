var x: number = 10;
console.log(10);

interface User {
  readonly name: string;
  roll: number;
  age: number;
  // optional
  bio?: string;
}

function display(content: User): void {
  console.log(`Name: ${content.name}`);
  console.log(`Roll: ${content.roll}`);
  console.log(`Age: ${content.age}`);
  if (content.bio) {
    console.log(`Bio: ${content.bio}`);
  }
}

class Counter {
  static count = 0;
  private count: number;
  constructor(item: number) {
    this.count = item;
  }
  increase() {
    this.count++;
    console.log('increased!  ->' + this.count);
  }
  decrease() {
    this.count--;
    console.log('decreased!  ->' + this.count);
  }
}
var him: User = { name: 'himanshu', roll: 12, age: 21, bio: 'DANKNESS' };
display(him);

var c1: Counter = new Counter(10);
c1.increase();
c1.increase();
c1.decrease();
