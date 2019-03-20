import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const COUNTRY_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CountryAccessorComponent),
  multi: true,
};
@Component({
  selector: 'country-accessor',
  templateUrl: './country-accessor.component.html',
  styleUrls: ['./country-accessor.component.css'],
  providers: [COUNTRY_VALUE_ACCESSOR]
})
export class CountryAccessorComponent implements ControlValueAccessor {
  @ViewChild('selectCountry') selectCountry;
  public countryList:string[] = ["India", "America"];
  onChange;
  onTouched; 

  constructor( private renderer : Renderer2 ) {
  }

  changeEvent( $event ) {
    this.onChange($event.target.value);
    this.onTouched($event.target.value);
  }
  writeValue( value : any ) : void {
    const div = this.selectCountry.nativeElement;
    this.renderer.setProperty(div, 'value', value);
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.selectCountry.nativeElement;
  }
}
