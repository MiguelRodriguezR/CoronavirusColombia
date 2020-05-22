export class Departamento {
  name: string;
  infected: string;
  recovered: string;
  deaths: string;
  path: string;

  constructor(name, path) {
    this.name = name;
    this.path = path;
  }
}
