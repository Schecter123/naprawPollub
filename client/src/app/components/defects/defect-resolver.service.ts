import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Defect } from 'src/app/shared/models/defect.model';
import { DefectService } from 'src/app/shared/services/defect.service';

@Injectable({
  providedIn: 'root'
})
export class DefectResolverService implements Resolve<Defect>{
  
  constructor(private defectService: DefectService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Defect | import("rxjs").Observable<Defect> | Promise<Defect> {
    const id = parseInt(route.params['id']);
    return this.defectService.getParticularDefect(id);
  }

}
