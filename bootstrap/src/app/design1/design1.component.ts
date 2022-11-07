import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { WindowScrollService } from '../services/window-scroll.service';

@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.scss'],
})
export class Design1Component {
  scrollPosition: number = 0;
  @HostListener('window:scroll') onScroll(e: Event): void {
    this.scrollPosition = window.scrollY.valueOf();
  }

  constructor() {}
}
