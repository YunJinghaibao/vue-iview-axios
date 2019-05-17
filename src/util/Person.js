export default class Person {
    constructor(obj){
        // this.name = name;
        // this.age = age;
        this.vue = obj;
    }
    say(){
        // console.log('My name is ' + this.name + ', my age is ' + this.age + '!');
        console.log(this.vue);
    }
}
