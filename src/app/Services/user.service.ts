import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl: String = "http://35.239.227.64:443/"
  //baseUrl: String = "http://localhost:8080/"

  createUser(loginRequest: any){
    return this.http.post<any>(this.baseUrl+"createVisitor",loginRequest)
  }

  getAllVisitors(): Observable<any>{
    return this.http.get<any>(this.baseUrl+"getAllVisitor").pipe(
      catchError(error => {
        console.error(" Error Occured" + error)

        return of({error: "Failed to Fetch"})
      })
    )
  }
}
