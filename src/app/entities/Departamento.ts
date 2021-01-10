export class Departamento {
  //DATA
  name: string;
  dbName: string;
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

  constructor(name, dbName, path) {
    this.name = name;
    this.dbName = dbName;
    this.path = path;
  }
}
