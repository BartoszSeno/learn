import { FC, ChangeEvent, useState } from "react";

export enum HairColor {
  Blonde = "your hair is blonde, god for you",
  Brown = "col color",
  Pink = "woow",
}

interface Props {
  name?: string;
  age?: number;
  email?: string;
  hairColor?: HairColor;
}

const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");

  type NameType = "Pedro" | "Jack";

  const nameForType: NameType = "Pedro";

  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const add = (n1: number, n2: number) => n1 + n2;

  const number1: HTMLInputElement = document.querySelector(".fdsa");

  const number2 = 5;

  const result = add(Number(number1), number2);

  function combine(
    input1: number | string,
    input2: number | string,
    resultConvet: "as-number" | "as-text"
  ) {
    let result: any;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConvet === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }

  const combineAge = combine(30, 26, "as-number");

  const combineAgeString = combine("30", "26", "as-number");

  const combineNames = combine("max", "anna", "as-text");

  function addAndHasndle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }

  function add2(n1: number, n2: number) {
    return n1 + n2;
  }

  function printResult(num: number): void {
    console.log("result " + num);
  }

  printResult(add2(5, 12));

  let combine2: (a: number, b: number) => number;

  combine2 = add;

  console.log(combine2(9, 9));

  addAndHasndle(10, 20, (result) => {
    console.log(result);
  });
  return (
    <>
      <div className="write">{name}</div>
      <div className="write">{email}</div>
      <div className="write">{age}</div>
      <input type="number" onChange={HandleChange} className="fdsa" />
      <br />
      {country}
      <br />
      {hairColor}
    </>
  );
};

export default Person;
