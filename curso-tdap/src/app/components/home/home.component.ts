import { Component } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  myswiper: Swiper | undefined;

}
