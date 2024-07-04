import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileNavService } from '../service/mobile-nav.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-nav.component.html',
  styles: ``
})
export class MobileNavComponent {

  constructor(public mobileNavService: MobileNavService) { }
}
