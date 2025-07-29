import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
faqs = [
  { id: 'faq1', question: 'What is real estate?', answer: 'Real estate is property made up of land and buildings.' },
  { id: 'faq2', question: 'Why is saving important?', answer: 'Saving allows you to plan for future goals and emergencies.' },
  { id: 'faq3', question: 'Whats price of villa?', answer: 'It depends on the area, facilities, and size.' },
  { id: 'faq4', question: 'What is a credit score?', answer: 'A credit score reflects your creditworthiness.' },
  { id: 'faq5', question: 'What is an emergency fund?', answer: 'Money set aside for unexpected expenses.' },
  { id: 'faq6', question: 'Why should I care about inflation?', answer: 'Inflation affects your purchasing power.' },
  { id: 'faq7', question: 'What is financial planning?', answer: 'A strategic approach to managing finances.' },
  { id: 'faq8', question: 'What can I find on your website?', answer: 'Property listings, tools, and insights.' }
];

}
