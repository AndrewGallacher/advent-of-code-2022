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

  return 0;
};

const part1 = (data: string[]): number => {
  let i = 0;
  let totalPriority = 0;
  data.forEach((rucksack) => {
    console.log(`Rucksack ${i}: ${rucksack}`);
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
    console.log(`Common type ${commonType} has priority ${priority}`);
    totalPriority += priority;
  });

  return totalPriority;
};

const part2 = (data: string[]): number => {
  const groups: string[][] = [];
  let currentGroup: string[] = [];
  let groupSize = 3;
  data.forEach((rucksack) => {
    if (rucksack !== "") {
      if (groupSize === 3) {
        groupSize = 0;
        currentGroup = [];
        groups.push(currentGroup);
      }

      currentGroup.push(rucksack);
      groupSize++;
    }
  });

  console.log(groups);

  let totalPriority = 0;
  groups.forEach((group) => {
    let commonType = "?";
    group[0].split("").forEach((type) => {
      if (group[1].indexOf(type) > -1) {
        if (group[2].indexOf(type) > -1) {
          commonType = type;
        }
      }
    });

    const priority = getPriority(commonType);
    console.log(`Common type ${commonType} has priority ${priority}`);
    totalPriority += priority;
  });

  return totalPriority;
};

// read input file
const filename = "input";
const data = getData(filename);

console.log("** START **");

console.log(data);

const part1Result = part1(data);
console.log(`Part 1 - Total priority: ${part1Result}`);

const part2Result = part2(data);
console.log(`Part 2 - Total priority: ${part2Result}`);

console.log("** END **");
