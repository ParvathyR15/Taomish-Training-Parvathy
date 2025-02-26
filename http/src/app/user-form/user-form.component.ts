// import { Component } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-user-form',
//   templateUrl: './user-form.component.html',
//   styleUrls: ['./user-form.component.css'],
//   standalone:false
// })
// export class UserFormComponent {
//   name: string = '';
//   email: string = '';

//   constructor(private userService: UserService) {}

//   addUser(): void {
//     const newUser = { name: this.name, email: this.email };
//     this.userService.addUser(newUser).subscribe(() => {
//       alert('User added successfully!');
//       this.name = '';
//       this.email = '';
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'user-form',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], 
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class  UserFormComponent implements OnInit {
  users: any[] = [];
  userForm: FormGroup; 

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  // Fetch users from backend
  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        console.log('Users fetched:', data);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  // Add user
  addUser() {
    if (this.userForm.invalid) {
      alert('Please enter valid name and email.');
      return;
    }

    const userToSend = this.userForm.value;

    this.userService.addUser(userToSend).subscribe(
      (response) => {
        console.log('User added:', response);
        this.getUsers(); 
        this.userForm.reset(); 
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
}
