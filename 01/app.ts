// Day 1
import * as fs from "fs";

const getData = (fileName: string): string[] => {
  let fileContent = fs.readFileSync(fileName, "utf8");
  return fileContent.split("\n");
};

// read input file
const filename = "input";
const data = getData(filename);

console.log("** START **");

let elf = 1;
let totalCalories = 0;
let calorieTotals: number[] = [];

data.forEach((item) => {
  if (item === "") {
    elf++;
    calorieTotals.push(totalCalories);
    totalCalories = 0;
  } else {
    totalCalories += parseInt(item);
  }
});

calorieTotals.sort((a, b) => (a < b ? 1 : -1));
const maximumTotalCalories =
  calorieTotals[0] + calorieTotals[1] + calorieTotals[2];

console.log(
  `Top three elves have a total of ${maximumTotalCalories} calories.`
);
console.log("** END **");
