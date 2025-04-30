let person = {
    name: "Alice",
    age: 28,
    city: "New York",
    hobbies: ["reading", "traveling", "cooking"]
  };
  
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("City:", person.city);
  console.log("Hobbies:", person.hobbies);
  
  person.job = "Software Developer";
  person.age = 29;
  
  person.greet = function() {
    return "Hello, my name is " + this.name + "!";
  };
  
  console.log("Job:", person.job);
  console.log("Updated Age:", person.age);
  console.log("Greeting:", person.greet());
  