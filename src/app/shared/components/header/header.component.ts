import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Router } from 'express';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor (
    public authService: AuthenticationService,
    public router: Router
  ) { }
}
