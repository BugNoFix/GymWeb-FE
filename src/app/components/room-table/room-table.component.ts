import {ChangeDetectorRef, Component} from '@angular/core';
import {WorkoutPlanService} from "../../services/workout-plan.service";
import {UserService} from "../../services/user.service";
import {WorkoutPlanDTO} from "../../dto/workout-plan";
import {RoomDTO} from "../../dto/room";
import {RoomService} from "../../services/room.service";

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent {
    rooms!: RoomDTO[];

    constructor(private roomService:RoomService, private changeDetection: ChangeDetectorRef) {
        roomService.allRooms(0, 20).subscribe(
            res => {
                this.rooms = res.rooms;
            }
        )
    }
    addRoomView(room: RoomDTO) {
        this.rooms.unshift(room);
    }

    update(room: RoomDTO) {
        room.active = !room.active;
        this.roomService.roomUpdate(room).subscribe();
    }
}
