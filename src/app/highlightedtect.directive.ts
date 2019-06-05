import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[hilighted],[appShadow]'
})
export class HighlightedtectDirective {
  @Input('hilighted') highlightColor: string;

    @Input() appShadow: string;
    @Input() appShadowX: string;
    @Input() appShadowY: string;
    @Input() appShadowBlur: string;
  constructor(private el:ElementRef) { 
   
  //  el.nativeElement.style.background = "red";
  }
@HostBinding('class.bc') private class:Boolean = false;
@HostListener('mouseenter') onMouseEnter(){

  this.class = true;
  let shadowStr = `${ this.appShadowX } ${ this.appShadowY } ${ this.appShadowBlur } ${ this.appShadow }`;
  this.shadow(shadowStr)
  this.myniji(this.highlightColor || 'Tomato')
}
@HostListener('mouseout') onMouseOut(){

  this.class = false;
}
@HostListener('click') onclick(){
  alert("hello")
}

private myniji(color){
  this.el.nativeElement.style.background = color;

}

private shadow(a){
  this.el.nativeElement.style.boxShadow = a;
}

}
