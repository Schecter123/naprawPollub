import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MarkerService } from 'src/app/shared/services/marker.service';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})
export class MapMarkerComponent implements OnInit, OnDestroy {

  @Input() marker;
  subscriber;
  defectsCount;
  iconUrl;
  color = "green";
  constructor(private markerService: MarkerService) { }

  ngOnInit() {
    this.subscriber = this.markerService.getDefectCount(this.marker.id).subscribe((response) => {
      this.defectsCount = response;
      this.iconUrl = `https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_${this.color}${this.defectsCount[0].numberOfMarkers}.png`;
    });
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

}
