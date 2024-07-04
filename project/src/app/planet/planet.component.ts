import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from '../service/planet.service';
import { Planet } from '../model/planet.model';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet.component.html',
  styles: ``
})
export class PlanetComponent implements OnInit {

  public planetName: string = "Mercury";
  public view: string = "internal";
  public img: string = `../../assets/planet-${this.planetName.toLowerCase()}.svg`;
  public loadingPlanet: boolean = true;
  public planet: Planet | undefined;

  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.planetName = params['planetName'];
      this.changeImgView();
      this.planetService.getPlanet(this.planetName).subscribe({
        next: (planet) => {
          this.planet = planet;
        },
        error: (error) => {

        },
        complete: () => {
          this.loadingPlanet = false;
        }
      })
    });
  }


  changeImgView(view: string = "internal") {
    const int: string = `../../assets/planet-${this.planetName.toLowerCase()}.svg`;
    const ext: string = `../../assets/planet-${this.planetName.toLowerCase()}-internal.svg`;
    if (view === "internal") {
      this.img = int;
    } else if (view === "external") {
      this.img = ext;
    } else {
      this.img = int;
    }

    this.view = view;
  }
}
