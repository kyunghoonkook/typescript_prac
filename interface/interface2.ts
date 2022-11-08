interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 이빈다.`);
}

hello2({ name: "mark", age: 32 });
hello2({ name: "Anna" });
