import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { PropertyOptionsComponent } from "./property-options/property-options.component";
import { RecentSalesComponent } from "./recent-sales/recent-sales.component";
import { PopularRoomComponent } from "./popular-room/popular-room.component";
import { FaqComponent } from "./faq/faq.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroSectionComponent, PropertyOptionsComponent, RecentSalesComponent, PopularRoomComponent, FaqComponent, NewsletterComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment';
}
