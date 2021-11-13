import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../layout/modal/modal.component';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public complete:boolean;
  public currentInputFocus: string = '';
  public showErrors = true;
  public resetForm = this.fb.group({
    email: [
      '', 
      [ Validators.required, Validators.email]
    ]
  },{updateOn: 'blur'});

  private modal: ModalComponent;
  
  
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    modal: ModalComponent,
    private elementRef:ElementRef,
  ) { 
    this.complete = true;
    this.modal = modal;
  }

  ngOnInit(): void {

    const inputs = this.elementRef.nativeElement.querySelector('input');

    if ( inputs !== null ) {
      this.initializeForm(inputs);
    }
  
    // This needs to be unset until 
    // inputs are initialized above
    this.complete = false;
  }

  get email() {
    return this.resetForm.get('email');
  }

  public cancel() : void {
    this.showErrors = false;
    this.modal.closeModal();
	}

  public submitResetForm() {
    if ( this.resetForm.valid ) {

      const email = this.resetForm.value.email;
      const postData = {email:email};
      const res = this.api.put('password-reset', postData);
      this.complete = true;
    } else {
      this.resetForm.markAllAsTouched();
    }
  }

  focusOnInput(element:any) {
    this.currentInputFocus = element.target.id;
  }

  blurInput(element:any) {
    const newId = element.target.id;
    const oldId = this.currentInputFocus;

    // If currentInputFocus hasn't changed
    // the click was not on an input, so no
    // current focus.
    if ( newId == oldId ) {
      this.currentInputFocus = '';
    }
  }

  private initializeForm(inputs:any):void {
    // Add focus tracker to all inputs
    inputs
      .querySelector('input')
      .addEventListener(
        'focus', 
        this.focusOnInput.bind(this)
      );
      
    // Add blur tracker to all inputs
    inputs
      .querySelector('input')
      .addEventListener(
        'blur', 
        this.blurInput.bind(this)
      );
      
    // Initialize focus
    inputs
      .querySelector("input[id='email']")
      .focus();
  }

}
