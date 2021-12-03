const username: string | number = 'omar';
const sum = (a: number, b:number) =>{
  return  a + b;
}

sum(1,2)

class Person {
  constructor(private age: number, public lastName: string){
  }
}

const omar = new Person(24,"Villada");
omar.lastName
