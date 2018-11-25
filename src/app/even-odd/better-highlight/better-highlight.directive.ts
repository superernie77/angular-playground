import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor : string = 'transparent';

  @Input() highlightColor : string = 'blue';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // Property of the Host-Element in the param string
  @HostBinding('style.backgroundColor') backgroundColor : string = this.defaultColor;

  // name of the event as param
  @HostListener('mouseenter') mouseOver(evenData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(evenData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }



  ngOnInit(){
    this.backgroundColor = this.defaultColor
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
