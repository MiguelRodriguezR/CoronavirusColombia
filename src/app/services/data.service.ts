import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OPEN_DATA_SERVER, QUERIES} from '../shared/constants';
import {INSTANCES} from '../shared/Instances';
import {from} from 'rxjs/index';
import {mergeMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
      const instance = INSTANCES.find(inst => inst.name === d.departamento);
      instance ? Object.assign(instance, d) : void(0);
    });
  }

  getQuery(query) {
    return this.http.get(`${OPEN_DATA_SERVER}?$query=${query}`);
  }

}
