import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {Iuser} from "../../interfaces/iuser";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
  userId: number = 0;
  userData: Iuser | any;


  constructor(private userService: UsersService, private toastr: ToastrService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    if (this.userId > 0) {
      this.getUserData(this.userId);
    }
  }

  userForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    age: new FormControl(null),
    phone: new FormControl(null),
    email: new FormControl(null),
    birthDate: new FormControl(null),
  });

  getUserData(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.userData = res;
      },
      error: (err) => {

      },
      complete: () => {
        this.userForm.patchValue({
          firstName: this.userData.firstName,
          lastName: this.userData.lastName,
          age: this.userData.age,
          phone: this.userData.phone,
          email: this.userData.email,
          birthDate: this.userData.birthDate,
        })
      }
    })
  }

  sendData(data: FormGroup) {
    if (this.userId) {
      this.userService.udateUser(data.value,this.userId).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: () => {
          console.log(data)
        },
        complete: () => {
          this.toastr.success('User updated successfully.');
        }
      })
    } else {
      this.userService.addUser(data.value).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: () => {
          console.log(data)
        },
        complete: () => {
          this.toastr.success('User added successfully.');
        }
      })
    }


  }
}
