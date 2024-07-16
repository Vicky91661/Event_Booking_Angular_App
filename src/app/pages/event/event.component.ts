import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../service/event.service';

import { OneEvent } from '../../model/model';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
    activeEventData!:OneEvent;
    activatedRoute = inject(ActivatedRoute)
    eventService = inject(EventService)
    
    constructor(){
      this.activatedRoute.params.subscribe((res:any)=>{
       
        this.getEventDetails(Number(res.id))
      })
    }
    
    getEventDetails(id:number){
      this.eventService.getEventById(id).subscribe((res:any)=>{
        this.activeEventData=res.data;
    
      })
    }

}
