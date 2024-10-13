import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-gis',
  standalone: true,
  imports: [],
  templateUrl: './gis.component.html',
  styleUrl: './gis.component.css'
})
export class GISComponent implements AfterViewInit{
  private map: any;
  private points: L.LatLng[] = [];
  private lastLine: L.Polyline | null = null;

  constructor(private dataSer: DataService){

  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([30.0444, 31.2357], 15); 

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => this.onMapClick(e));
}


private onMapClick(e: L.LeafletMouseEvent): void {
    this.points.push(e.latlng);

    if (this.points.length === 2) {
        if (this.lastLine) {
            this.map.removeLayer(this.lastLine);
        }
        this.lastLine = L.polyline(this.points, { color: 'blue' }).addTo(this.map);

        this.getStreetNames();
        this.points = [];
    }
}

private getStreetNames(): void {
    if (this.points.length < 2) return;

    const start = this.points[0];
    const end = this.points[1];

    const overpassQuery = `
      [out:json];
      (
        way["highway"](around:50, ${start.lat}, ${start.lng});
        way["highway"](around:50, ${end.lat}, ${end.lng});
      );
      out body;
    `;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
          const streetNames = data.elements.map((element: any) => element.tags.name).filter(Boolean);
          this.dataSer.setStreetName(streetNames[0]);
      })
      .catch(err => console.error('Error fetching street names:', err));
}

}
