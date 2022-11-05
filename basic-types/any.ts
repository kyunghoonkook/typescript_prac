function retrunAny(message: any): any {
  console.log(message);
}

const any1 = retrunAny("리턴");

console.log(any1);

any1.toString();

let looselyTped: any = {};
const d = looselyTped.a.b.c.d;
