import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileNavService {

  public isOpen = signal<boolean>(false);

  constructor() { }

  public open() {
    this.isOpen.update(() => true);
    this.toggleBodyScroll()
  }
  public close() {
    this.isOpen.update(() => false);
    this.toggleBodyScroll()
  }
  public toggle() {
    this.isOpen.update(isOpen => !isOpen);
    this.toggleBodyScroll()
  }

  toggleBodyScroll() {
    if (this.isOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
