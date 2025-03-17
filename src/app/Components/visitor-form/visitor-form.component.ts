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
    MatSelectModule,MatCardModule ],
  templateUrl: './visitor-form.component.html',
  styleUrl: './visitor-form.component.css'
})
export class VisitorFormComponent {

  constructor(private loginForm: FormBuilder, private userService: UserService){

  }

  loginFr = this.loginForm.group({
    firstName: [null, [Validators.required, Validators.max(8)]],
    lastName: [null, [Validators.required]],
    email: [null],
    phone: [null],
  })

  onSubmit(){
    this.userService.createUser(this.loginFr.value).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error);
      }
      
    })

    this.loginFr.reset();

  }

}
