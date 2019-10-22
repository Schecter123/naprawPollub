import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { MarkerService } from 'src/app/shared/services/marker.service';
import { Marker } from 'src/app/shared/models/marker.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  
  defectsCount;
  markers;
  subscriberMarkers;
  
  //Tryb dodawania markera przez użytkownika
  @Input() userIsAddingDefect;

  //Zmienne potrzebne do mapy
  lat = 51.235869;
  lng = 22.548999;
  zoom = 17;

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
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

}
