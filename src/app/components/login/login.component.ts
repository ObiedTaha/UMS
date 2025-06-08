import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isHide: boolean = true;
  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) { }

  loginForm = new FormGroup({
    username: new FormControl('emilys', [Validators.required]),
    password: new FormControl('emilyspass', [Validators.required]),
  })

  sendData(data: FormGroup) {
    this.auth.onLogin(data.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.accessToken);
        localStorage.setItem('fName', res.firstName);
        localStorage.setItem('lName', res.lastName);
        localStorage.setItem('image', res.image);
      },
      error: (err) => {
        this.toastr.error(err.error.message);
      },
      complete: () => {
        this.toastr.success('Login Successfully');
        this.router.navigate(['/home']);

      }
    })
  }

}
