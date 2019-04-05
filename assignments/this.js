/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This binds to the window when it is not pointing to any other object.

* 2. This implicitly bind to objects which means that it is automatic.

* 3. The new keyword allows the this keyword to bind to an objects properties and methods to the left
    of the dot when creating a new function.

* 4. This can also be binded in an explicit manner with methods in order to manually
    set which object the 'this' keyword binds to.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);


// Principle 2
// code example for Implicit Binding
const vegetable={
    greeting:"howdy",
    speak:function(name){
        console.log(`${this.greeting} I'm a ${name}`)
    }
}
vegetable.speak("carrot");

// Principle 3
// code example for New Binding
function Human(person){
    this.hobby="driving",
    this.city="San Deigo",
    this.speak=function(name){
        console.log(`I am ${person}, I live in ${this.city}`);
    };
}
const jay= new Human('James Bond');
const ojob= new Human("OddJob");
jay.speak("James Bond");
ojob.speak("OddJob");


// Principle 4
// code example for Explicit Binding
function Cars(model){
    this.name=model.name,
    this.color=model.color
}
const speak=function(){
    console.log(`I drive a ${this.name}`);
};

const zed= new Cars({
    name:"350z",
    color:"red",
});

const bmw= new Cars({
    name:"m3",
    color:"white",
});

const redy= speak.bind(zed);
redy();





