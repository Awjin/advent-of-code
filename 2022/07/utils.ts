import { read } from "../../utils/input";

export type Dir = {
  name: string;
  parent?: Dir;
  children: Dir[];
  size: number;
};

class FileSystem {
  root: Dir = {
    name: "/",
    children: [],
    size: 0,
  };

  cwd: Dir = this.root;

  cd(name: string): void {
    if (name === "/") {
      this.cwd = this.root;
    } else if (name === "..") {
      this.cwd = this.cwd.parent ?? this.root;
    } else {
      const dest = this.findChildDir(name);
      if (dest) this.cwd = dest;
    }
  }

  mkdir(name: string): void {
    if (this.findChildDir(name)) return;
    this.cwd.children.push({
      name,
      parent: this.cwd,
      children: [],
      size: 0,
    });
  }

  touch(name: string, size: number): void {
    let dir: Dir | undefined = this.cwd;
    while (dir) {
      dir.size = dir.size + size;
      dir = dir.parent;
    }
  }

  private findChildDir(name: string): Dir | undefined {
    return this.cwd.children.find((x) => x.name === name);
  }
}

export function readDisk(): Dir {
  const fs = new FileSystem();

  for (const line of read(2022, 7)) {
    switch (line[0]) {
      case "$":
        if (line[1] === "ls") break;
        if (line[1] === "cd") fs.cd(line[2]);
        break;

      case "dir":
        fs.mkdir(line[1]);
        break;

      default:
        fs.touch(line[1], Number(line[0]));
    }
  }

  return fs.root;
}
