import { File } from "./File";

export class Folder {
  name: string;
  parent: Folder | null;
  files: File[];
  folders: Folder[];

  constructor(name: string, parent: Folder | null) {
    this.name = name;
    this.parent = parent;
    this.files = [];
    this.folders = [];
  }

  getPath(): string {
    if (this.parent === null) {
      return this.name;
    }

    return `${this.parent.getPath()}/${this.name}`;
  }

  getSize(): number {
    let totalSize: number = 0;

    // Get the size of all folders
    this.folders.forEach((folder) => {
      totalSize += folder.getSize();
    });

    // Get the size of all files
    this.files.forEach((file) => {
      totalSize += file.size;
    });

    return totalSize;
  }
}
