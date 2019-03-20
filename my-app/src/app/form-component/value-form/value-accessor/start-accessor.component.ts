import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const COUNTRY_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StartAccessorComponent),
  multi: true,
};
@Component({
  selector: 'start-accessor',
  templateUrl: './start-accessor.component.html',
  styleUrls: ['./start-accessor.component.css'],
  providers: [COUNTRY_VALUE_ACCESSOR]
})
export class StartAccessorComponent implements ControlValueAccessor {
  @ViewChild('startInput') startInput;

  onChange:any;
  onTouched:any;
  constructor( private renderer : Renderer2 ) {
  }
  writeValue( value : any ) : void {
    const div = this.startInput.nativeElement;
    this.renderer.setProperty(div, 'value', value);
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.startInput.nativeElement;
  }

  changeEvent( $event ) {
    this.onChange($event.target.value);
    this.onTouched($event.target.value);
  }

}
