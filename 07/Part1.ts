// Day 07 (Part 1)
import { IPuzzle } from "../src/IPuzzle";
import { Folder } from "./Folder";
import { File } from "./File";

export class Day07Part1 implements IPuzzle<number> {
  buildList(folder: Folder, sizes: number[]): void {
    sizes.push(folder.getSize());

    folder.folders.forEach((subFolder) => {
      this.buildList(subFolder, sizes);
    });
  }

  solve(data: string[]): number {
    const rootFolder = new Folder("/", null);
    let currentFolder: Folder = rootFolder;

    // Build folder structure
    for (let i = 0; i < data.length; i++) {
      const line = data[i];

      // Parse command
      if (line.startsWith("$")) {
        if (line === "$ cd /") {
          currentFolder = rootFolder;
        } else if (line === "$ cd ..") {
          if (currentFolder.parent === null) {
            throw new Error("Root folder has no parent");
          } else {
            currentFolder = currentFolder.parent;
          }
        } else if (line.startsWith("$ cd ")) {
          const folderName = line.substring(5);

          currentFolder = currentFolder.folders.filter(
            (folder) => folder.name === folderName
          )[0];
        } else if (line === "$ ls") {
          // Nothing to do here
        }
      } else {
        // Parse directory
        if (line.startsWith("dir")) {
          const folderName = line.substring(4);
          currentFolder.folders.push(new Folder(folderName, currentFolder));
        } else if (line !== "") {
          // If we are here, it must be a file
          const fileDetails = line.split(" ");
          currentFolder.files.push(
            new File(fileDetails[1], parseInt(fileDetails[0]))
          );
        }
      }
    }

    const sizes: number[] = [];
    this.buildList(rootFolder, sizes);

    let result = 0;
    sizes.forEach((size) => {
      if (size <= 100000) {
        result += size;
      }
    });

    return result;
  }
}
