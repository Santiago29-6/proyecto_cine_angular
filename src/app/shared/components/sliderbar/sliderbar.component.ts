import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Router } from 'express';

@Component({
  selector: 'app-sliderbar',
  standalone: true,
  imports: [],
  templateUrl: './sliderbar.component.html',
  styleUrl: './sliderbar.component.css'
})
export class SliderbarComponent {
  constructor (
    public authService: AuthenticationService,
    public router: Router
  ) { }
}
