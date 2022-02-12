var x = 10;
console.log(10);
function display(content) {
    console.log("Name: " + content.name);
    console.log("Roll: " + content.roll);
    console.log("Age: " + content.age);
    if (content.bio) {
        console.log("Bio: " + content.bio);
    }
}
var Counter = /** @class */ (function () {
    function Counter(item) {
        this.count = item;
    }
    Counter.prototype.increase = function () {
        this.count++;
        console.log('increased!  ->' + this.count);
    };
    Counter.prototype.decrease = function () {
        this.count--;
        console.log('decreased!  ->' + this.count);
    };
    Counter.count = 0;
    return Counter;
}());
var him = { name: 'himanshu', roll: 12, age: 21, bio: 'DANKNESS' };
display(him);
var c1 = new Counter(10);
c1.increase();
c1.increase();
c1.decrease();
