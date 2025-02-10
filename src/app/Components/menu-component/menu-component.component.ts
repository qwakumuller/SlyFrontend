import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { Router,RouterModule,RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule,MatToolbarModule],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent {
  icon = 'menu';

  isButtonClicked: boolean = false;
  constructor(private router: Router ){

  }

  navigateAboutUs(){
    this.icon = 'menu'
    this.router.navigateByUrl("/about-us");
  }

  homepage(){
    this.icon = 'menu'
    this.router.navigateByUrl("/");
  }


  navigateRegister(){
    this.icon = 'menu'
    this.router.navigateByUrl("/register");
  }

  navigateVisitor(){
    this.icon = 'menu'
    this.router.navigateByUrl("/getAllVisitor");
  }

  onButtonClick(){
    this.isButtonClicked = true;
    if(this.icon === 'menu'){
      this.icon = 'close'
    }else{
      this.icon = 'menu';
    }
  }

  

}
