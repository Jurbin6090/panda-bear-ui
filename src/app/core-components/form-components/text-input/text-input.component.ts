import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: 'text-input.component.html'
})
export class TextInputComponent {

  modelHolder
  nameHolder

  constructor(){
  }

  @Output() modelChange = new EventEmitter();

  @Input()
  get model(){
      return this.modelHolder;
  }

  set model(model){
    this.modelHolder = model;
    this.modelChange.emit(this.modelHolder);
  }

  @Input()
  get name(){
      return this.nameHolder;
  }

  set name(name: String){
      this.nameHolder = name;
  }

}
