import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, CreateUser, LoginUser } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl:string = 'https://freeapi.miniprojectideas.com/api/EventBooking/'
  constructor(private http:HttpClient) { }

  getAllEvent(){
    return this.http.get<ApiResponse>(`${this.apiUrl}GetAllEvents`)
  }

  getEventById(eventId:number){
    return this.http.get(`${this.apiUrl}GetEventById?id=${eventId}`)
  }


  registerUser(obj:CreateUser){
    return this.http.post<ApiResponse>(`${this.apiUrl}CreateUser`,obj)
  }


  loginUser(obj:LoginUser){
    return this.http.post<ApiResponse>(`${this.apiUrl}Login`,obj)
  }
  
}
