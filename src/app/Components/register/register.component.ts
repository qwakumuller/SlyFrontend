import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../Services/user.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    HttpClientModule,
     ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,         
    MatButtonModule,         
    MatFormFieldModule,      
    MatSelectModule,MatCardModule,FormsModule,MatIcon
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private registerFormBuilder: FormBuilder, private userService: UserService){}
  
  selectedCountry = ""
  selectedFocus = ""
  selectedAge = ""
  selectedRace = ""
  selectedGender = ""

  countries: string[] = [
    'United States',
    'Canada',
    'Ghana',
    'United Kingdom',
  ]

  industryFocus: string[] = [
    'Mission/Non-Profit/Community Impact',
    'Technology/IT/AI',
    'Wealth Building/Real Estate/Enterpreneralism',
    'Marketing',
    'Health Sector',
    'Personal Growth/Mental Health',
    'Organizational Leadership',
    'Ministry'
  ]

  ageGroups: string[] = [
    '16-30',
    '31-45',
    '46-65',
    '66-75',
     '76+'
  ]

  races: string[] = [
   'African American or Black',
   'Asia or Pacific Islander',
   'Caucasian or White',
   'Hispanic or Latino',
   'Native American or Alaskan Native',
   'Mixed Race',
   'Other'
  ]

  genders: string[] = [
    'Male',
    'Female',
    'Prefer not to answer'
   ]

  registerForm = this.registerFormBuilder.group({
    firstName: [null, [Validators.required, Validators.max(8)]],
    lastName: [null, [Validators.required]],
    email: [null],
    country: [null],
    address: [null],
    city: [null],
    zipCode: [null],
    phone: [null],
    industryFocus: [null],
    ageGroup: [null],
    race: [null],
    gender: [null],
  })

  onSubmit(){
    // this.userService.createUser(this.registerForm.value).subscribe({
    //   next: (response) => {
    //     console.log(response)
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // })

  }


}
