import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private notificationService: NotificationService
  ) {

  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(10)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.valid) {
      const newUser = {
        Name: this.userForm.value.name,
        Age: this.userForm.value.age,
        Email: this.userForm.value.email
      };
      // console.log('New User:', newUser);
      this.userService.storeUserData(newUser);
      this.notificationService.showSuccess('Form submitted successfully!', 'Success');
      this.userForm.reset();
    } else {
      // If form is invalid, show error toast
      this.notificationService.showError('Please fill in all required fields.', 'Error');
    }
  }
}
