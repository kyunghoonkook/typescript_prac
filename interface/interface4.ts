interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "mark",
  age: 30,
  hello: function (): void {
    console.log(`안녕하세요 ${this.name} 입니다`);
  },
};

const p42: Person4 = {
  name: "mark",
  age: 30,
  hello(): void {
    console.log(`안녕하세요 ${this.name} 입니다`);
  },
};

const p43: Person4 = {
  name: "mark",
  age: 30,
  hello: (this: Person4): void => {
    // 화살표 함수에서는 this를 쓸 수 없음
    console.log(`안녕하세요 ${this.name} 입니다`);
  },
};
