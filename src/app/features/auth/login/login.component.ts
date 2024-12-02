import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthRequest } from '../../../shared/models/authRequest.model';
import { AuthResponse } from '../../../shared/models/authResponse.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm !: FormGroup;
  authReq !: AuthRequest;
  authRes !: AuthResponse;

  constructor(
    public fb: FormBuilder,
    public authService: AuthenticationService,
    public router: Router
  ){ }

  ngOnInit():void{
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required , Validators.minLength(6)]]
    });
  }

  login():void{
    if(this.loginForm.valid){
      this.authService.signIn(this.loginForm.value)
      .subscribe({
        next: (resp) => {
          this.authRes = resp;
          this.authService.login(this.authRes);
          console.log(this.authRes);
          this.router.navigate(['/personas']);
        },
        error: (error) => {
          console.error("No se puedo hacer el logueo por: ", error);
        }
      });
    } else {
      console.error('Formulario no válido:', this.loginForm.errors);
    }
  }
}
