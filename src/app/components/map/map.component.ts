import {Component, OnInit} from '@angular/core';
import {Departamento} from "../../entities/Departamento";
import {INSTANCES} from "../../shared/Instances";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  departments: Array<Departamento>;
  actualDepartment: Departamento;

  constructor() {
    this.actualDepartment = new Departamento('', '');
  }

  ngOnInit(): void {
    this.departments = INSTANCES;
  }

  over(event: Event, department: Departamento) {
    this.actualDepartment = department;
    console.log(event, department);
  }
}
