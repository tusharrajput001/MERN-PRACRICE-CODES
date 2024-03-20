//CALL

// const person = {
//     fullName: function(){
//         return this.firstName + " " +  this.lastName;
//     }
// }


// const person1 = {
//     firstName:"John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
// }


// person.fullName.call(person1);



// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.call(person1, "Oslo", "Norway");



//APPLY

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.apply(person1, ["Oslo", "Norway"]);



//BIND  --> Copy method an we can invoke it later rather than changing on original

// const obj = {name:"Tushar"};

// let greeting = function (a,b) {
//     return `${a} ${this.name}. ${b}`;
// }

// let bound  = greeting.bind(obj);

// console.log(bound("Hello","How are you?"));

