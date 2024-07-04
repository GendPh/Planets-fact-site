import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlanetService } from '../service/planet.service';
import { CommonModule } from '@angular/common';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { MobileNavService } from '../service/mobile-nav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, MobileNavComponent],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  constructor(public mobileNavService: MobileNavService) { }
}
