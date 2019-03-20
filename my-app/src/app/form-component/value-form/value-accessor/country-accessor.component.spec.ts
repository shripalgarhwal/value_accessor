import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAccessorComponent } from './country-accessor.component';

describe('ValueAccessorComponent', () => {
  let component: CountryAccessorComponent;
  let fixture: ComponentFixture<CountryAccessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAccessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
