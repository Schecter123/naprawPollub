import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 51.235869;
  lng = 22.548999;
  color = "green";
  number = 3;
  iconUrl;
  zoom = 17;

  constructor() { }

  ngOnInit() {
    this.iconUrl = `https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_${this.color}${this.number}.png`;
  }

}
