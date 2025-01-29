import { Component } from '@angular/core';
import { VisitorFormComponent } from '../visitor-form/visitor-form.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [VisitorFormComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
