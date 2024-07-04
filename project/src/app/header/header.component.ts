import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { PlanetService } from '../service/planet.service';
import { CommonModule } from '@angular/common';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { MobileNavService } from '../service/mobile-nav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, MobileNavComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  constructor(public mobileNavService: MobileNavService) { }
}
