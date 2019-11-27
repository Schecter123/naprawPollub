import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/shared/models/place.model';
import { Room } from 'src/app/shared/models/room.model';
import { Defect, DefectType, DefectState } from 'src/app/shared/models/defect.model';
import { Subscription } from 'rxjs';
import { RoomService } from 'src/app/shared/services/room.service';
import { PlaceService } from 'src/app/shared/services/place.service';
import { DefectService } from 'src/app/shared/services/defect.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { ChangeDefectStateComponent } from '../../manage-page-admin/manage-page-admin-defects/change-defect-state/change-defect-state.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-page-place-admin-defects',
  templateUrl: './manage-page-place-admin-defects.component.html',
  styleUrls: ['./manage-page-place-admin-defects.component.css']
})
export class ManagePagePlaceAdminDefectsComponent implements OnInit {

  room;
  place;
  state;
  type;


  places: Place[];
  rooms: Room[];
  defects: Defect[];
  users: User[];
  userId: number;
  showButton: boolean;
  check: number;
  wait: boolean;

  listOfDefectsToDelete: Defect[] = [];

  placesSubscription: Subscription;
  roomsSubscription: Subscription;
  defectsSubscription: Subscription;
  usersSubscription: Subscription;

  DefectType = DefectType;
  DefectState = DefectState;

  constructor(private roomService: RoomService, private placeService: PlaceService, private defectService: DefectService,  private userService: UserService, private router: Router, private dialog: MatDialog, private toastrService: ToastrService) { }

  ngOnInit() {
    this.check = 0;
    this.showButton = false;
    this.room = -1;
    this.place = -1;
    this.state = -1;
    this.type = -1;
    this.wait = false;
    this.userId = parseInt(localStorage.getItem('loggedUserId'));
    this.placesSubscription = this.placeService.getPlaces().subscribe( (data: Place[]) => this.places = data)
    this.roomsSubscription = this.roomService.getRooms().subscribe( (data:Room[]) => this.rooms = data)
    this.defectsSubscription = this.defectService.getDefectsForPlaceAdmin(this.userId).subscribe( (data:Defect[]) => this.defects = data)
    this.usersSubscription = this.userService.getUsers().subscribe( (data:User[]) => this.users = data)
    setTimeout(()=> {this.wait = true}, 2000);
  }

  ngOnDestroy(){
    this.defectsSubscription.unsubscribe();
    this.placesSubscription.unsubscribe();
    this.roomsSubscription.unsubscribe();
  }

  loadDefectItemPage(defect){
    this.router.navigate(['/usterki/'+ defect.id]);
  }

  change(event, defect){
    event.target.checked? this.check++ : this.check--;
    if(this.check>0) this.showButton = true;
    else this.showButton = false;
    console.log(event.target.checked)
    if(event.target.checked){
      this.listOfDefectsToDelete.push(defect);
    }
    if(!event.target.checked){
      this.listOfDefectsToDelete.splice(this.listOfDefectsToDelete.indexOf(defect), 1);
    }
  }


  delete(){
    for(let item of this.listOfDefectsToDelete){
      this.defectService.deleteDefect(item).subscribe(() => {
        this.router.navigateByUrl('/pytania', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/zarzadzanie-uzytkownik']); 
        })
      })
    }
  }

  openDialog(defect){
    const dialogRef = this.dialog.open(ChangeDefectStateComponent, {
      width: '30vw',
      data: {defect: defect}
    });

    dialogRef.afterClosed().subscribe(result => {
     
      if(result !== undefined){
        defect.defectState = result;
        this.defectService.updateDefect(defect).subscribe(
          ()=> this.toastrService.success('Pomyślnie zmieniono stan usterki'),
          () => this.toastrService.error('Coś poszło nie tak :(')
          )
      }
      
    });
  }
}
