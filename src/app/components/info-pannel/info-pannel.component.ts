import {AfterViewInit, Component, ComponentRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Departamento} from '../../entities/Departamento';
import {fadeAnimation} from '../../shared/animations';
import {timer} from 'rxjs/index';

@Component({
  selector: 'app-info-pannel',
  templateUrl: './info-pannel.component.html',
  styleUrls: ['./info-pannel.component.scss'],
  animations: [fadeAnimation]
})
export class InfoPannelComponent implements OnInit, AfterViewInit {


  @ViewChild('boxContainer') container;
  posX: number;
  posY: number;
  department: Departamento;
  isOpen = false;
  isDestroy = false;
  selfRef: ComponentRef<InfoPannelComponent>;
  info: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const element = this.container.nativeElement;

    const heightOffset = this.posY + element.offsetHeight > window.innerHeight ?
      window.innerHeight - (this.posY + element.offsetHeight) - 10 : 0;

    const widthOffset = this.posX + element.offsetWidth > window.innerWidth ?
      window.innerWidth - (this.posX + element.offsetWidth) - 10 : 0;

    element.style.top = (this.posY + heightOffset) + 'px';
    element.style.left = (this.posX + widthOffset) + 'px';
    timer(20).subscribe(() => this.isOpen = true);
  }

  dismiss() {
    this.isOpen = false;
    this.isDestroy = true;
  }

  doneDestroy() {
    this.isDestroy ? this.selfRef.destroy() : void(0);
  }

}
