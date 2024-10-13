import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-gis',
  standalone: true,
  imports: [],
  templateUrl: './gis.component.html',
  styleUrl: './gis.component.css'
})
export class GISComponent implements AfterViewInit{
  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([30.0444, 31.2357], 15); 

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
}

}
