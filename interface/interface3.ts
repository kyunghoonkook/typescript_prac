interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`ㅎㅇ${person.name} 입니다`);
}

const p31: Person3 = { name: "Mark", age: 30 };

const p32: Person3 = { name: "Anna", systers: ["Sung", "Chan"] };

const p33: Person3 = { name: "John", father: p31, mother: p32 };

hello3(p33);
