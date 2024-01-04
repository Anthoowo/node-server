
class Person {
constructor(name,age){
this.name = name;
this.age = age;
}
file= __filename;

greet(){

    console.log(`hi my name is ${this.name} and my age is ${this.age}`)
}


}

module.exports= Person;