// Day 02 (Part 2)
import { IPuzzle } from "../src/IPuzzle";

export class Day02Part2 implements IPuzzle<number> {
  getScore = (opponent: string, result: string): number => {
    let win = 6;
    let draw = 3;
    let loss = 0;
    let rock = 1;
    let paper = 2;
    let scissors = 3;

    // I want to lose
    if (result === "X") {
      if (opponent == "A") {
        // I play scissors (3)
        return scissors + loss;
      }
      if (opponent == "B") {
        // I play rock
        return rock + loss;
      }
      if (opponent == "C") {
        // I play paper
        return paper + loss;
      }

      throw new Error(`Opponent play ${opponent} is not valid`);
    }

    // I want to draw
    if (result === "Y") {
      if (opponent == "A") {
        return rock + draw;
      }
      if (opponent == "B") {
        return paper + draw;
      }
      if (opponent == "C") {
        return scissors + draw;
      }

      throw new Error(`Opponent play ${opponent} is not valid`);
    }

    // I want to win
    if (result === "Z") {
      if (opponent == "A") {
        return paper + win;
      }
      if (opponent == "B") {
        return scissors + win;
      }
      if (opponent == "C") {
        return rock + win;
      }

      throw new Error(`Opponent play ${opponent} is not valid`);
    }

    throw new Error(`Result ${result} is not valid`);
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
