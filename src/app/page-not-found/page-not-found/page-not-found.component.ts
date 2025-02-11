import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  counter: number = 5;
  counterInterval: any

  constructor(private changeDetectorRef : ChangeDetectorRef){

  }

  handleRedirect = () => {
    if (this.counter === 0) {
      clearInterval(this.counterInterval);
      window.location.href = "/";
    } else {
      this.counter = this.counter - 1;
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.counter = 5;
    this.counterInterval = setInterval(this.handleRedirect, 1000);
  }

}
