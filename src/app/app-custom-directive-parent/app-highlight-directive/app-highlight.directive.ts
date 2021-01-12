import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive( {
    selector : '[highlight]'
}

)
export class HighlightDirective implements OnInit {

    constructor(private element : ElementRef) {

    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = 'green';
    }
}