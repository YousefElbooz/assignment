import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-room',
  imports: [CommonModule],
  templateUrl: './popular-room.component.html',
  styleUrl: './popular-room.component.css'
})
export class PopularRoomComponent {
rooms = [
  {
    title: 'Our house is always clean',
    type: 'Guest Room',
    tag: 'Luxury room',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Our room is always clean',
    type: 'Guest Room',
    tag: 'Luxury room',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Our room is always clean',
    type: 'Guest Room',
    tag: 'Luxury room',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
  }
];


}
