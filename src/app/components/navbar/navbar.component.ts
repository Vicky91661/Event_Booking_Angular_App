import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiResponse, CreateUser, LoginUser } from '../../model/model';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  eventService = inject(EventService)

  userObj:CreateUser =new CreateUser()
  loginUser:LoginUser=new LoginUser()

  isLogin:boolean=false;
  isRegister:boolean=false;

  OpenLoginPopup(){
    this.isLogin=true;
  }
  OpenRegisterPopup(){
    this.isRegister=true;
  }

  onRegister(event: Event){
    event.preventDefault()
   this.eventService.registerUser(this.userObj).subscribe((response:ApiResponse)=>{
    if(response.result){
      alert('Register suscess')
    }else{
      alert(response.message)
    }
    this.isRegister=false;
   })
  }


  onLogin(){
    console.log("data while login is",this.loginUser)
    this.eventService.loginUser(this.loginUser).subscribe((response:ApiResponse)=>{
      if(response.result){
        alert('Loged in successfully')
      }else{
        alert(response.message)
      }
      this.isRegister=false;
     })
  }
}
