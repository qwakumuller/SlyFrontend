import { Component, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { Router,RouterModule,RouterOutlet  } from '@angular/router';
import { MatSidenav,MatSidenavModule } from '@angular/material/sidenav';



@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule,MatToolbarModule,MatSidenavModule],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
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

  navigateSlide(){
    this.icon = 'menu'
    this.router.navigateByUrl("/slide");

  }

  onButtonClick(){
    this.isButtonClicked = true;
    if(this.icon === 'menu'){
      this.icon = 'close'
    }else{
      this.icon = 'menu';
    }
  }

  toggleDrawer() {
    this.drawer.toggle();
  }

  

}
