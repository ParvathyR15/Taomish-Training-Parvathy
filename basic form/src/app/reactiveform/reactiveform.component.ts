import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class FormComponent {

  userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      dateofbirth: new FormControl('',[Validators.required]),
      role: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        pincode: new FormControl('')
      })
  });

  onclick(){
    console.log(this.userForm.value);
    this.userForm.reset();

    // this.userForm.reset({
    //   name: '',
    //   age: '',
    //   dob: '',
    //   role: '',
    //   address: {
    //     street: '',
    //     city: '',
    //     pincode: ''
    //   }
    // });
  }
}