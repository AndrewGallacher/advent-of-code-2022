// Day 07 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { Folder } from "./Folder";
import { File } from "./File";

export class Day07Part2 implements IPuzzle<number> {
  buildList(folder: Folder, sizes: number[]): void {
    folder.folders.forEach((subFolder) => {
      sizes.push(subFolder.getSize());
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

    const freeSpace = 70000000 - rootFolder.getSize();
    const spaceNeeded = 30000000 - freeSpace;

    const sizes: number[] = [];
    this.buildList(rootFolder, sizes);

    let smallestSize = 70000000;
    sizes.forEach((size) => {
      if (size >= spaceNeeded && size < smallestSize) {
        smallestSize = size;
      }
    });

    return smallestSize;
  }
}
