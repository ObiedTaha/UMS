import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  userName: string = localStorage.getItem('fName') + ' ' + localStorage.getItem('lName');
  userImage = localStorage.getItem('image');

  constructor(private  router: Router) {
    console.log(this.userName);
    console.log(this.userImage);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fName');
    localStorage.removeItem('lName');
    localStorage.removeItem('image');
    this.router.navigate(['login']);
  }


}
