import {ChangeDetectorRef, Component} from '@angular/core';
import {RoomDTO} from "../../dto/room";
import {RoomService} from "../../services/room.service";

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent {
    rooms!: RoomDTO[];

    constructor(private roomService:RoomService) {
        // Get all rooms
        roomService.allRooms(0, 20).subscribe(
            res => {
                this.rooms = res.rooms;
            }
        )
    }

    // Update view after submit
    addRoomView(room: RoomDTO) {
        this.rooms.unshift(room);
    }

    // Update room
    update(room: RoomDTO) {
        room.active = !room.active;
        this.roomService.roomUpdate(room).subscribe();
    }
}
