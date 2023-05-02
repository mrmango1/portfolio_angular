import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ghostEyes]'
})
export class GhostEyesDirective {

  @HostBinding('style.transform') transform = '';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const pageX = window.innerWidth;
    const pageY = window.innerHeight;
    const mouseY = event.clientY;
    const yAxis = (pageY/2-mouseY)/pageY*300;
    const mouseX = event.clientX / -pageX;
    const xAxis = -mouseX * 100 - 100;
    this.transform = `translate(${xAxis}%, -${yAxis}%)`;
  }

}