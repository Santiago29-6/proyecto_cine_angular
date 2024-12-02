import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Router } from 'express';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor (
    public authService: AuthenticationService,
    public router: Router
  ) { }
}
