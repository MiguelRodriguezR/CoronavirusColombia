import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OPEN_DATA_SERVER, QUERIES} from '../shared/constants';
import {INSTANCES} from '../shared/Instances';
import {from} from 'rxjs/index';
import {mergeMap} from 'rxjs/internal/operators';
import {Departamento} from "../entities/Departamento";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  maxCases = 0;
  minCases = 100000000;

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    from(QUERIES).pipe(
      mergeMap((query) => this.getQuery(query))
    ).subscribe( queryResponse => {
      this.combineInstance(queryResponse);
    });
  }

  combineInstance(departments) {
    from(departments).subscribe((d: any) => {
      const instance = INSTANCES.find(inst => inst.dbName.toUpperCase() === d.departamento_nom.toUpperCase());
      instance ? Object.assign(instance, d) : void(0);
      this.checkMaxMinCases(d);
    });
  }

  checkMaxMinCases(d) {
    this.minCases = d.infected < this.minCases ? Number(d.infected) : this.minCases;
    this.maxCases = d.infected > this.maxCases ? Number(d.infected) : this.maxCases;
  }

  getQuery(query) {
    return this.http.get(`${OPEN_DATA_SERVER}?$query=${query}`);
  }

}
