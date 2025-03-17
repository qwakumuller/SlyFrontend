import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../Services/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-visitor-form',
  standalone: true,
  imports: [HttpClientModule,
     ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,         
    MatButtonModule,         
    MatFormFieldModule,      
    MatSelectModule,MatCardModule,MatSnackBarModule ],
  templateUrl: './visitor-form.component.html',
  styleUrl: './visitor-form.component.css'
})
export class VisitorFormComponent {

  constructor(private loginForm: FormBuilder, private userService: UserService, private snackBar: MatSnackBar){

  }

  /* Message field is used for Phone number for the time being*/

  loginFr = this.loginForm.group({
    firstName: ['', [Validators.required, Validators.maxLength(8)]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
  })

  isFieldInvalid(field: any){
    return this.loginFr.get(field)?.touched && this.loginFr.get(field)?.invalid
  }

  onSubmit(){
    this.userService.createUser(this.loginFr.value).subscribe({
      next: (response) => {
        console.log(response)
        this.snackBar.open('Registration Successful! 🎉', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['success-snackbar'], // Custom class for styling
        });
        
      },
      error: (error) => {
        console.log(error);
        
        this.snackBar.open('Registration Unsuccessful! Please try again','Close',  {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
        });
      }
      
    })

    this.loginFr.reset();

  }

  // Getters for easy access in template Not needed as of now
  get firstName() {
    return this.loginFr.get('firstName');
  }

  get lastName() {
    return this.loginFr.get('lastName');
  }

  get email() {
    return this.loginFr.get('email');
  }

  get message() {
    return this.loginFr.get('message');
  }


}
