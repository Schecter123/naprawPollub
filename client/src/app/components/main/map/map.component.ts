import { Component, OnInit } from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { filter } from 'rxjs/operators'; 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  defectsCount;

  //Zmienne potrzebne do mapy
  lat = 51.235869;
  lng = 22.548999;
  color = "green";
  number = 3;
  iconUrl;
  zoom = 17;
  markers = [
    { lat: 51.236813, lng: 22.548974, idPlace: 8, info:'Usterki wydziału Elektrotechniki i Informatyki', count: 2 }, //weii
    { lat: 51.236743, lng: 22.550083, idPlace: 2, info:'Usterki wydziału Mechanicznego', count: 3 }, //mechaniczny
    { lat: 51.236263, lng: 22.551090, idPlace: 12, info:'Usterki wydziału Rdzewiaka', count: 10 }, //rdzewiak
    { lat: 51.235351, lng: 22.553116, idPlace: 4, info:'Usterki Pentagonu', count: 3 }, //pentagon
    { lat: 51.235036, lng: 22.552692, idPlace: 5, info:'Usterki Hali Sportowej', count: 3 }, //hala sportowa
    { lat: 51.235593, lng: 22.550267, idPlace: 1, info:'Usterki Rektoratu', count: 3 }, //rektorat
    { lat: 51.235085, lng: 22.548953, idPlace: 7, info:'Usterki wydziału Zarządzania', count: 3 }, //zarządzania
    { lat: 51.235491, lng: 22.548111, idPlace: 9, info:'Usterki wydziału Architektury i Budownictwa', count: 3 }, //budownictwo
    { lat: 51.234607, lng: 22.547941, idPlace: 11, info:'Usterki wydziału Inżynierii Środowiska', count: 3 }, //inż środowiska
    { lat: 51.235285, lng: 22.546301, idPlace: 13, info:'Usterki Domu Studenta 1', count: 3 }, //dom studenta 1
    { lat: 51.234925, lng: 22.546006, idPlace: 14, info:'Usterki Domu Studenta 2', count: 3 }, //dom studenta 2
    { lat: 51.234596, lng: 22.546399, idPlace: 15, info:'Usterki Domu Studenta 3', count: 3 }, //dom studenta 3
    { lat: 51.234656, lng: 22.546941, idPlace: 16, info:'Usterki Domu Studenta 4', count: 3 }, //dom studenta 4
  ];

  constructor(private defectService: DefectService) { }

  ngOnInit() {  
  }

  markersCount(count){
    return `https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_${this.color}${count}.png`;
  }

    
  


}
