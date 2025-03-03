import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormService } from '../../services/form.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formType: string = ''; // receives formtype from appcomponent{approvalrequest or employeereview}

  form: FormGroup;  
  formData: any;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.form = this.fb.group({});  //  Initializes an empty FormGroup object.The form fields are added dynamically later in createForm().
  }

  ngOnInit() {
    if (this.formType) {
      this.loadFormData(); //load form when initialised
    }
  }

  ngOnChanges() {
    this.loadFormData();//load form when formtype changes
  }

  loadFormData() {                                                     //fetching form data dynamically from formservice
    this.formService.getFormData(this.formType).subscribe(data => {
      this.formData = data;
      this.createForm();
    });
  }

  createForm() {
    if (!this.formData || !this.formData.fields) return;  // Prevent undefined errors

    this.formData.fields.forEach((field: any) => {   //iterates through each field in formData
      this.form.addControl(field.name, this.fb.control(''));   //adds formcontrol using fbbuilder. eg:requestorName: new FormControl(''),
    });
  }
  records :string[] = [];


submitForm() {
  console.log(this.form.value);  // Logs form data in console
  
  // Extract form fields
  const formValues = this.form.value;
  
  // Create submission object with formType and dynamic fields
  const formSubmission = {
      formType: this.formType,
      title: { ...formValues }  // All form fields as a map
  };
  
  // Send to backend
  this.formService.submitForm(formSubmission).subscribe(
      response => {
          console.log('Form submitted successfully', response);
         
          this.form.reset();
      },
      error => {
          console.error('Error submitting form', error);
         
      }
  );
}

// getAllUsers(){
//   this.formService.get("http://localhost:8080/api/forms/").subscribe((data : any)=>{
//     (response:any)=> {
//       this.records = data;
//       console.log(response)
//     }
//     (error:any)=>{
//       console.log(error)
//     }
//   })

// }
  
}
