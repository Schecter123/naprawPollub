import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';

@Injectable({
  providedIn: 'root'
})
export class RoomResolverService implements Resolve<Room>{

  constructor(private roomService: RoomService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Room | import("rxjs").Observable<Room> | Promise<Room> {
    const id = parseInt(route.params['id']);
    return this.roomService.getParticularDefectRoom(id);
  }
}
