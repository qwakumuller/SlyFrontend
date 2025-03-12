import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponentComponent } from "./Components/menu-component/menu-component.component";
import { VisitorFormComponent } from './Components/visitor-form/visitor-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ImageSliderComponent } from './Test/image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponentComponent, HttpClientModule,VisitorFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SlyConference';
}
