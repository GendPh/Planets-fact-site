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
    return this.http.get<Planet[]>(`${this.url}?name=${planetName}`).pipe(
      map((planets: Planet[]) => {
        console.log(planets);
        if (planets.length > 0) {
          return planets[0];
        } else {
          throw new Error('Planet not found');
        }
      })
    );
  }

}
