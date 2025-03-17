import { Component } from '@angular/core';
import { VisitorFormComponent } from '../visitor-form/visitor-form.component';
import { ImageSliderComponent } from '../../Utils/image-slider/image-slider.component';
import { Router,RouterModule,RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [ImageSliderComponent, VisitorFormComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

  constructor(private router: Router ){

  }

  navigateSpeaker(){
    this.router.navigateByUrl("/slide");

  }

}