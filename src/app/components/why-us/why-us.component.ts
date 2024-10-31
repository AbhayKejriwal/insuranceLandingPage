import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {
  features: string[] = [
    'Protective Protection',
    'Money Back Guarantee',
    'Homeowner Insurance',
    'Partnership System',
    'Consultations',
    'Safety Ensure'
  ];
}
