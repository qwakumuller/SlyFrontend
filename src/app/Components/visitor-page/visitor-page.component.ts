import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/user.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-visitor-page',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './visitor-page.component.html',
  styleUrl: './visitor-page.component.css'
})
export class VisitorPageComponent implements OnInit {

  showColumn: boolean=  false;
  turnReplyOn : boolean = false;
  turnReadOnlyOn : boolean = true;

  editingRowIndex: number | null = null;

  constructor(private userService: UserService){}

  displayedColumns: string[] = ['visitorID','firstName', 'lastName', 'email', 'message', 'reply', 'Send Reply', 'Edit'];
  dataSource :  any


  ngOnInit(): void {
    this.getAllVisitors();
  }

  getAllVisitors() {
    this.userService.getAllVisitors()
    .subscribe({
      next : (response) => {
        console.log(response)
        this.dataSource = response;
      }, 
      error: (error) => {
        console.debug("Error Occured")
      }
    })
    
  }

  

  replyVisitor(){
    this.userService.createUser(this.dataSource[5]).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  edit(){
    this.turnReadOnlyOn = false;
    this.turnReplyOn = true
  }

  edit1(i: number){
    this.turnReplyOnM(i)
    this.turnReadOnlyOn = false;
    this.turnReplyOn = true
  }

  turnReplyOnM(i: number){
    console.log(i + "I is here")
    return false;

  }



}
