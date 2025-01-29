import { Component } from '@angular/core';
import { VisitorFormComponent } from '../visitor-form/visitor-form.component';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [VisitorFormComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
