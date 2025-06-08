import {Component} from '@angular/core';
import {UsersService} from "../../users/services/users.service";
import {Iuser} from "../../users/interfaces/iuser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchTerm!: string;
  users:Iuser[]=[];
  constructor(private usersService: UsersService) { }


  searchByName(searchTerm: string){
    this.usersService.searchByUser(searchTerm).subscribe({
      next:(response)=>{
        this.users = response;
        console.log(this.users);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }



}
