// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone:false,
//   template: `
//     <div class="container">
//       <h1>User Management</h1>
//       <app-user-form (userAdded)="onUserAdded($event)"></app-user-form>
//       <app-user-list></app-user-list>
//     </div>
//   `,
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   onUserAdded(user: any) {
//     console.log('New user added:', user);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { UserFormComponent } from "./user-form/user-form.component";
import { UserListComponent } from "./user-list/user-list.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserFormComponent, UserListComponent],
})
export class AppComponent implements OnInit {
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

