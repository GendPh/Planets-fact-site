import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Planet } from '../model/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private url: string = 'https://json-server-deploy-kk18.onrender.com/planets';

  constructor(private http: HttpClient) { }

  public getPlanet(planetName: string): Observable<Planet> {
    return this.http.get<Planet[]>(`${this.url}?name_like=${planetName}`).pipe(
      map(planets => planets[0])
    );
  }

}
