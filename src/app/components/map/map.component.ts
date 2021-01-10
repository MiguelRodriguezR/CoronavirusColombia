import {
  AfterViewInit,
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Departamento} from '../../entities/Departamento';
import {INSTANCES} from '../../shared/Instances';
import {DataService} from '../../services/data.service';
import {InfoPannelComponent} from "../info-pannel/info-pannel.component";
import {timer} from "rxjs/index";
import {calculateColor} from "../../shared/gradient";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {


  @ViewChild('infoContainer', {read: ViewContainerRef}) infoContainer;
  departments: Array<Departamento>;
  actualDepartment: Departamento;
  actualInfoRef: ComponentRef<InfoPannelComponent>;
  minX: number;
  minY: number;
  width: number;
  height: number;

  constructor(private dataService: DataService,
              private resolver: ComponentFactoryResolver) {
    this.actualDepartment = new Departamento('', '', '');
  }

  ngOnInit(): void {
    this.departments = INSTANCES;
    this.minX = -5;
    this.minY = -5;
    this.width = 500;
    this.height = 500;
  }

  ngAfterViewInit(): void {
    timer(20).subscribe(() => this.createInfoComponent(20, 100, null, 'Seleccione un departamento para comenzar'));
  }


  getViewBox() {
    return `${this.minX} ${this.minY} ${this.width} ${this.height}`;
  }

  getNameOnMouse(event: MouseEvent, department: Departamento) {
    const element = document.querySelector('#nameDep') as HTMLElement;
    element.style.visibility = 'visible';
    element.innerHTML = department.name;
    element.style.top = (event.clientY) + 'px';
    element.style.left = (event.clientX + 12) + 'px';
  }

  hideNameOnMouse() {
    const element = document.querySelector('#nameDep') as HTMLElement;
    element.style.visibility = 'hidden';
  }

  getDepartment(event: MouseEvent, department: Departamento) {
    this.actualDepartment = department;
    this.createInfoComponent(event.clientX, event.clientY, department);
  }

  createInfoComponent(mousex, mousey, department, info = null) {
    this.actualInfoRef ? this.actualInfoRef.instance.dismiss() : void(0);
    const factory: ComponentFactory<InfoPannelComponent> = this.resolver.resolveComponentFactory(InfoPannelComponent);
    const componentRef: ComponentRef<InfoPannelComponent> = this.infoContainer.createComponent(factory);
    componentRef.instance.posX = mousex;
    componentRef.instance.posY = mousey;
    componentRef.instance.department = department;
    componentRef.instance.info = info;
    componentRef.instance.selfRef = componentRef;
    this.actualInfoRef = componentRef;
  }

  getColor(department: Departamento) {
    return calculateColor(department.infected, this.dataService.maxCases, this.dataService.minCases);
  }
}
