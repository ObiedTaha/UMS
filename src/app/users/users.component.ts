import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { Iuser } from './interfaces/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  listUsers: Iuser[] = [];
  allData:any;
  pageNumber: number=1;
  constructor(private usersServices: UsersService) {
    this.getUsers();
  }

  getUsers() {
    this.usersServices.getUsers().subscribe({
      next: (response) => {
        this.allData= response;

        this.listUsers = response.users;
        console.log(this.listUsers);
      }
    })
  }

}
