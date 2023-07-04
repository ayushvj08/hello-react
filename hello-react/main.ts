type stringArray = string[]

let username: any = "ayushvj08"
username = 22;

function printHello() : void {
    console.log("Print Hello")
}

function throwError() : never {
    throw new Error("An error occured!");
}


interface User {
    name: string;
    id: number;
    greet(): string;
  }
  const user: User = {
    name: 'Alice',
    id: 1,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };
  interface GetGreetingFn {
    (user: User): string;
  }
  const getGreeting: GetGreetingFn = (user: User) => {
    return user.greet();
  };
//   console.log(user.greet()) 
  console.log(getGreeting(user));
  interface Employee extends User {
    salary: number;
  }

  class Manager implements Employee {
    name: string;
    id: number;
    salary: number;
  
    constructor(name: string, id: number, salary: number) {
      this.name = name;
      this.id = id;
      this.salary = salary;
    }
  
    greet() {
      return `Hi, my name is ${this.name} and I am the manager.`;
    }
  }
  
  const manager = new Manager('Bob', 4, 50000);
  console.log(getGreeting(manager)); // "Hi, my name is Bob and I am the manager."