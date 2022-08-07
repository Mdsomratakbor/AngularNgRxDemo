import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NgIfCustome]'
})
export class NgIfCustomeDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
@Input() set NgIfCustome(condition: boolean){
  if(!condition){
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
  else{
    this.viewContainer.clear();
  }
}
}
