export class Departamento {
  name: string;
  infected: string;
  deaths: string;

  // PROCEDENCIA
  imported: string;
  related: string;
  onStudy: string;

  // EDADES
  olderInfected: string;
  youngerInfected: string;
  olderDeath: string;
  youngerDeath: string;

  path: string;

  constructor(name, path) {
    this.name = name;
    this.path = path;
  }
}
