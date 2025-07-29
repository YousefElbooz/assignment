import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-sales',
  imports: [CommonModule],
  templateUrl: './recent-sales.component.html',
  styleUrl: './recent-sales.component.css'
})
export class RecentSalesComponent {
recentSales = [
  {
    title: 'Mid Century Gem in Sunrise Park. Sold Rs 29.5 lac',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9b63932?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mid Century Gem in Sunrise Park. Sold Rs 29.5 lac',
    image: 'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mid Century Gem in Sunrise Park. Sold Rs 29.5 lac',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  }
];

}
