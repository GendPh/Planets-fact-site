import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetService } from '../service/planet.service';
import { Planet } from '../model/planet.model';
import { quantum } from 'ldrs'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlanetComponent implements OnInit {

  public planetName: string = "Mercury";
  public view: string = "internal";
  public img: string = `../../assets/planet-${this.planetName.toLowerCase()}.svg`;
  public loadingPlanet: boolean = true;
  public planet: Planet | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planetService: PlanetService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    quantum.register();

    this.route.params.subscribe(params => {
      this.planetName = params['planetName'];
      this.titleService.setTitle(`Planet: ${this.planetName}`);
      this.changeImgView();
      this.planetService.getPlanet(this.planetName).subscribe({
        next: (planet) => {
          this.planet = planet;
        },
        error: (error: Error) => {
          this.router.navigate(['/Mercury']);
        },
        complete: () => {
          this.loadingPlanet = false;
        }
      })
    });
  }


  changeImgView(view: string = "external") {
    const ext: string = `../../assets/planet-${this.planetName.toLowerCase()}.svg`;
    const int: string = `../../assets/planet-${this.planetName.toLowerCase()}-internal.svg`;

    if (view === "external") {
      this.img = ext;
    } else if (view === "internal") {
      this.img = int;
    } else {
      this.img = ext;
    }

    this.view = view;
  }
}
