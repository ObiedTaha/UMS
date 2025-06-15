import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Iuser} from "../../interfaces/iuser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Iuser = {
    id: 0,
    firstName: 'string',
    lastName: '',
    maidenName: '',
    age: 0,
    email: '',
    phone: '',
    image: '',
    birthDate: '',
  };

  constructor(private _users: UsersService) {
  }


  ngOnInit() {
    this._users.getCurrentUser().subscribe({
      next: (res) => {
        this.user = res;
        console.log(this.user);
      },
      error(err) {
        console.log(err)
      },
      complete: () => {
      }
    })
  }
}
