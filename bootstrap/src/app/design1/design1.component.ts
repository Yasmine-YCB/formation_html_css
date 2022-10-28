import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { WindowScrollService } from '../services/window-scroll.service';

@Component({
  selector: 'app-design1',
  templateUrl: './design1.component.html',
  styleUrls: ['./design1.component.scss'],
})
export class Design1Component  {
  
  scrollY$: Observable<number>;
	
	@HostListener('window:scroll') onScroll(e: Event): void {
	    this.windowScrollService.scrollY.next(this.getYPosition(e));
	}
	
	constructor(private windowScrollService: WindowScrollService) {
    this.scrollY$ = this.windowScrollService.scrollY$;
  }
 
	getYPosition(e: Event): number {
	    return (e.target as Element).scrollTop;
	  }
    onContainerScroll(event: Event){
console.log(event);

    }

    getScrollHeight(): number {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    }

  }