const isFetching: boolean = true;

let someNumber: number = 10;

const message: string = "Hello typescript";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "Typescript"];

//Tuple
const contact: [string, number] = ["Evgeniy", 1234567];

let variable: any = 42;
variable = "New string";
variable = [];

function sayMyName(name: string): void {
  // void - ничего не возвращает
  console.log(name);
}
sayMyName("Kharkov");

//Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

//Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 2;

type ID = string | number;
const id: ID = 1234;
const id2: ID = "Evgeniy";
// const id3: ID = true;

type SomeType = string | null | undefined;
