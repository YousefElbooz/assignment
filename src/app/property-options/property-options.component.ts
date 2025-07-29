import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-options',
  imports: [CommonModule],
  templateUrl: './property-options.component.html',
  styleUrl: './property-options.component.css'
})
export class PropertyOptionsComponent {
properties = [
  { name: 'Luxury Rentals', count: 45 },
  { name: 'City Townhouse', count: 25 },
  { name: 'Apartments', count: 90 },
  { name: 'Villa', count: 57 },
  { name: 'Penthouse', count: 86 }
];

}
