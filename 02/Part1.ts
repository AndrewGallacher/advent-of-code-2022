// Day 02 (Part 1)
import { IPuzzle } from "../src/IPuzzle";

export class Day02Part1 implements IPuzzle<number> {
  getScore = (opponent: string, me: string): number => {
    let myScore = 0;
    let win = 6;
    let draw = 3;
    let loss = 0;

    // I play Rock
    if (me === "X") {
      myScore = 1;

      if (opponent == "A") {
        return myScore + draw;
      }
      if (opponent == "B") {
        return myScore + loss;
      }
      if (opponent == "C") {
        return myScore + win;
      }

      throw new Error(`Opponent play ${opponent} is not valid`);
    }

    // I play Paper
    if (me === "Y") {
      myScore = 2;

      if (opponent == "A") {
        return myScore + win;
      }
      if (opponent == "B") {
        return myScore + draw;
      }
      if (opponent == "C") {
        return myScore + loss;
      }

      throw new Error(`Opponent play ${opponent} is not valid`);
    }

    // I play Scissors
    if (me === "Z") {
      myScore = 3;

      if (opponent == "A") {
        return myScore + loss;
      }
      if (opponent == "B") {
        return myScore + win;
      }
      if (opponent == "C") {
        return myScore + draw;
      }

      throw new Error(`Opponent play ${opponent} is not valid`);
    }

    throw new Error(`My play ${me} is not valid`);
  };

  solve(data: string[]): number {
    let totalScore = 0;
    data.forEach((item) => {
      if (item !== "") {
        const play = item.split(" ");
        const score = this.getScore(play[0], play[1]);
        totalScore += score;
      }
    });

    return totalScore;
  }
}
