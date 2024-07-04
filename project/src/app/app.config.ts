import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PlanetService } from './service/planet.service';
import { provideHttpClient } from '@angular/common/http';
import { MobileNavService } from './service/mobile-nav.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    PlanetService,
    MobileNavService,
  ]
};
