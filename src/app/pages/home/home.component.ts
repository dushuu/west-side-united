import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Adjust the path as per your project structure
})
export class HomeComponent {
  internshipPrograms = [
    'Ann & Robert H. Lurie Children\'s Hospital of Chicago',
    'Cook County Health',
    'Rush University Medical Center',
    'Sinai Health System',
    'University of Illinois Hospital and Clinics'
  ];
}
