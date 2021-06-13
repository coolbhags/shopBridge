import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  base_url = "http://localhost:3000"
  constructor(private http : HttpClient) { 

  }

  getDetails() {
    this.http.get(`${this.base_url}/getItems`).subscribe( res => {
      console.log("DATA", res)
    })
  }
}
