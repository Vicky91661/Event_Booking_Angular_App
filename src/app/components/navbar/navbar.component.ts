import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CreateUser } from '../../model/model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userObj:CreateUser =new CreateUser()

  isLogin:boolean=false;
  isRegister:boolean=false;

  OpenLoginPopup(){
    this.isLogin=true;
  }
  OpenRegisterPopup(){
    this.isRegister=true;
  }
}
