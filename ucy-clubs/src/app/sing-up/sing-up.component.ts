import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      FirstName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      LastName: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      Email: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      Telephone: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      Password: ['', Validators.required]
    });
    this.sixFormGroup = this._formBuilder.group({
      RPassword: ['', Validators.required]
    });

  }

}
