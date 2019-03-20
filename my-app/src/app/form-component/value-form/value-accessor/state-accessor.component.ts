import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const COUNTRY_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StateAccessorComponent),
  multi: true,
};
@Component({
  selector: 'state-accessor',
  templateUrl: './state-accessor.component.html',
  styleUrls: ['./state-accessor.component.css'],
  providers: [COUNTRY_VALUE_ACCESSOR]
})
export class StateAccessorComponent implements ControlValueAccessor {
  @ViewChild('selectState') selectState;
  public stateList:string[] = ["Mumbai", "Pune"];
  onChange;
  onTouched; 

  constructor( private renderer : Renderer2 ) {
  }

  changeEvent( $event ) {
    this.onChange($event.target.value);
    this.onTouched($event.target.value);
  }
  writeValue( value : any ) : void {
    const div = this.selectState.nativeElement;
    this.renderer.setProperty(div, 'value', value);
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.selectState.nativeElement;
  }
}
