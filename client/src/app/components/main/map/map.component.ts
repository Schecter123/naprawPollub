import { Component, OnInit, OnDestroy, Input, Output} from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { MarkerService } from 'src/app/shared/services/marker.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  
  defectsCount;
  markers;
  subscriberMarkers;

  //Zmienne potrzebne do mapy (lat i lng - środek kampusu Politechniki Lubelskiej)
  lat = 51.235869;
  lng = 22.548999;
  zoom = 17;  //Mapa dobrze wygląda w takim przybliżeniu
  
  //Tryb dodawania markera przez użytkownika
  @Input() userIsAddingDefect;
  latOfMarkedDefect;
  lngOfMarkedDefect;

  constructor(private defectService: DefectService, private markerService: MarkerService) { }

  ngOnInit() {  
    this.subscriberMarkers = this.markerService.getMarkers().subscribe(response => {
      this.markers = response
    });

    if(this.userIsAddingDefect)
      this.getUserLocation();
  }
 
  ngOnDestroy(){
    this.subscriberMarkers.unsubscribe();
  }

  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        //lokalizacja użytkownika
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        //umiejscowienie markera
        this.latOfMarkedDefect = position.coords.latitude;
        this.lngOfMarkedDefect = position.coords.longitude;
        console.log(this.latOfMarkedDefect, this.lngOfMarkedDefect);
      });
    }
  }
    
  markerDragEnd(lat,lng){
    if(this.userIsAddingDefect){   
    this.latOfMarkedDefect = lat;
    this.lngOfMarkedDefect = lng;
    console.log(this.latOfMarkedDefect,  this.lngOfMarkedDefect);
    this.markerService.markerLatitudeAndLongitude = [this.latOfMarkedDefect, this.lngOfMarkedDefect];
    }
  }

  



}
