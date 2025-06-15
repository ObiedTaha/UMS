import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../../users/services/users.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userName: string = '';
  userImage = '';
  role: string = '';

  constructor(private router: Router, private user: UsersService) {

  }

  ngOnInit() {
    this.user.getCurrentUser().subscribe({
      next: (res) => {
        this.userName = res.firstName + ' ' + res.lastName;
        this.userImage = res.image
        this.role = res.role;
      }
    })
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fName');
    localStorage.removeItem('lName');
    localStorage.removeItem('image');
    this.router.navigate(['login']);
  }


}
