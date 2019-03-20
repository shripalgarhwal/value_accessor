import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const END_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EndAccessorComponent),
  multi: true,
};
@Component({
  selector: 'end-accessor',
  templateUrl: './end-accessor.component.html',
  styleUrls: ['./end-accessor.component.css'],
  providers: [END_VALUE_ACCESSOR]
})
export class EndAccessorComponent implements ControlValueAccessor {
  @ViewChild('endInput') endInput;

  onChange:any;
  onTouched:any;
  constructor( private renderer : Renderer2 ) {
  }
  writeValue( value : any ) : void {
    const div = this.endInput.nativeElement;
    this.renderer.setProperty(div, 'value', value);
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.endInput.nativeElement;
  }

  changeEvent( $event ) {
    this.onChange($event.target.value);
    this.onTouched($event.target.value);
  }

}
