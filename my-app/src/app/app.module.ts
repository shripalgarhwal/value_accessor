import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-component/form-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValueFormComponent } from './form-component/value-form/value-form.component';
import { CountryAccessorComponent } from './form-component/value-form/value-accessor/country-accessor.component';
import { StartAccessorComponent } from './form-component/value-form/value-accessor/start-accessor.component';
import { EndAccessorComponent } from './form-component/value-form/value-accessor/end-accessor.component';
import { StateAccessorComponent } from './form-component/value-form/value-accessor/state-accessor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    ValueFormComponent,
    CountryAccessorComponent,
    StartAccessorComponent,
    EndAccessorComponent,
    StateAccessorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
