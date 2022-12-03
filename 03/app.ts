// Day ?
import * as fs from "fs";
import { toASCII } from "punycode";

const getData = (fileName: string): string[] => {
  let fileContent = fs.readFileSync(fileName, "utf8");
  return fileContent.split("\n");
};

const getPriority = (type: string): number => {
  const asciiCode = type.charCodeAt(0);

  if (asciiCode >= "a".charCodeAt(0) && asciiCode <= "z".charCodeAt(0)) {
    return asciiCode - "a".charCodeAt(0) + 1;
  }

  if (asciiCode >= "A".charCodeAt(0) && asciiCode <= "Z".charCodeAt(0)) {
    return asciiCode - "A".charCodeAt(0) + 27;
  }

 return 0 ;
};

// read input file
const filename = "input";
const data = getData(filename);

console.log("** START **");

console.log(data);

let i = 0;
let totalPriority = 0;
data.forEach((rucksack) => {
  console.log(`Rocksack ${i}: ${rucksack}`);
  const itemCount = rucksack.length;
  const compartment1 = rucksack.substring(0, itemCount / 2);
  const compartment2 = rucksack.substring(itemCount / 2);

  console.log(compartment1);
  console.log(compartment2);
  i++;

  let commonType = "?";
  compartment1.split("").forEach((type) => {
    if (compartment2.indexOf(type) > -1) {
      commonType = type;
    }
  });

  const priority = getPriority(commonType);
  console.log(`Common typ ${commonType} has priority ${priority}`);
  totalPriority += priority;
});

console.log(`Total priority: ${totalPriority}`);

console.log("** END **");
