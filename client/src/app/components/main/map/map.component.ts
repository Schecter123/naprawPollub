import { Component, OnInit, OnDestroy, Input, Output} from '@angular/core';
import { DefectService } from 'src/app/shared/services/defect.service';
import { MarkerService } from 'src/app/shared/services/marker.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  
  defectsCount;
  markers;
  subscriberMarkers;
  bounds = [51.235869, 22.548999]
  //Zmienne potrzebne do mapy (lat i lng - środek kampusu Politechniki Lubelskiej)
  lat = 51.235869;
  lng = 22.548999;
  zoom = 17;  //Mapa dobrze wygląda w takim przybliżeniu
  
  //Tryb dodawania markera przez użytkownika
  @Input() userIsAddingDefect;
  latOfMarkedDefect;
  lngOfMarkedDefect;
  circleColor;

  constructor(private defectService: DefectService, private markerService: MarkerService, private toastrService: ToastrService) { }

  ngOnInit() {  
    this.subscriberMarkers = this.markerService.getMarkers().subscribe(response => {
      this.markers = response
    });

    if(this.userIsAddingDefect)
      this.getUserLocation();

    this.circleColor = 'transparent';
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
      });
    }
  }

  // checkIfMarkerIsInTheRightPlace(){
  //   if((this.latOfMarkedDefect < 51.237663 && this.latOfMarkedDefect > 51.232802) && (this.lngOfMarkedDefect > 22.545072 && this.lngOfMarkedDefect < 22.553778))return true;
  //   else return false
  //   }
    
  markerDragEnd(lat,lng){
    if(this.userIsAddingDefect){   
    this.latOfMarkedDefect = lat;
    this.lngOfMarkedDefect = lng;
    this.markerService.markerLatitudeAndLongitude = [this.latOfMarkedDefect, this.lngOfMarkedDefect];
    }
  }

  



}
