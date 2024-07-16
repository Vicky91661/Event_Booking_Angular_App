import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { ApiResponse, eventData } from '../../model/model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  eventList: eventData[]=[];
  constructor(private eventService:EventService){}

  ngOnInit():void{
    this.getEvents();
  }

  getEvents(){
     this.eventService.getAllEvent().subscribe((response: ApiResponse) => {
      console.log("Data received:", response.data);
      this.eventList = response.data;
    },
    error => {
      console.error('There was an error!', error);
      
    })
  }

}
