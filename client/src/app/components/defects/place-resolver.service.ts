import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Place } from 'src/app/shared/models/place.model';
import { PlaceService } from 'src/app/shared/services/place.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceResolverService implements Resolve<Place>{
  
  constructor(private placeService: PlaceService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Place | import("rxjs").Observable<Place> | Promise<Place> {
    const id = parseInt(route.params['id']);
    return this.placeService.getParticularDefectPlace(id);
  }
}
