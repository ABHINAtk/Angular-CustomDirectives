import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private el:ElementRef) { 
    console.log(this.el)
    this.el.nativeElement.style.color="blue"
    this.el.nativeElement.style.fontSize="70px"
    this.el.nativeElement.style.fontFamily=" Arial, Helvetica, sans-serif"
    this.el.nativeElement.style.margin= "50px"
  }

  ngOnInit(){
     
  }

}
