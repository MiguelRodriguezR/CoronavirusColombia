import { Component, OnInit } from '@angular/core';
import {COLOR_LIMITS} from "../../shared/gradient";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getGradient() {
    return `linear-gradient(90deg, rgba(${COLOR_LIMITS.mins.r},${COLOR_LIMITS.mins.g},${COLOR_LIMITS.mins.b},1) 0%, rgba(${COLOR_LIMITS.maxs.r},${COLOR_LIMITS.maxs.g},${COLOR_LIMITS.maxs.b},1) 100%)`;
  }
}
