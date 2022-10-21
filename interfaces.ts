interface Rect {
  readonly id: string; // только для чтения
  color?: string; // необязательный параметр
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 10,
    height: 10,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 5,
    height: 5,
  },
};

rect2.color = "black"; // можно добавить то, что есть в интерфейсе
// rect2.id = '123';       readonly

const rect3 = {} as Rect; //привязка к типу(интерфейсу)
const rect4 = <Rect>{}; // -||-

interface IRectWithArea extends Rect {
  getArea: () => number;
}

const rect5: IRectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

interface Styles {
  [key: string]: string; // все ключи/значения в данном интерфейсе
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
