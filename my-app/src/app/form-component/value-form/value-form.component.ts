import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'value-form',
  templateUrl: './value-form.component.html',
  styleUrls: ['./value-form.component.css']
})
export class ValueFormComponent implements OnInit {
  public valueForm:FormGroup;
  public temCt:FormControl = new FormControl("abc");
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initValueForm()
  }
  public initValueForm():void {
    this.valueForm = this.fb.group({
      inValueArr: this.fb.array([])
    });
    this.insertFormField();
  }
  private insertFormField():void {
    let items = this.valueForm.get('inValueArr') as FormArray;
    items.push(this.fb.group({
      country: [''],
      state: [''],
      start: ['s'],
      end: ['e'],
    }));
  }
  get particularsArray(): FormArray{
	  return this.valueForm.get('inValueArr') as FormArray;
  }
  public addNewRow(): void {
    this.insertFormField()
  }
  public deleteRow(ind:number): void {
    this.particularsArray.removeAt(ind);
  }
}
