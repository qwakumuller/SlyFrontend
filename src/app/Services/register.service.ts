import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  //baseUrl: String = "http://localhost:8080/"
  baseUrl: String = "http://35.239.227.64:443/"
  constructor(private http: HttpClient) { }

  createPayment(){
    return this.http.post(this.baseUrl+"createPayment", {responseType: 'text'})
  }
}
