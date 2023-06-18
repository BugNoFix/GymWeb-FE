import {Component, EventEmitter, Output} from '@angular/core';
import {UserResponseDTO} from "../../dto/user";
import {FeedbackDTO} from "../../dto/feedback";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {FeedbackService} from "../../services/feedback.service";
import {RoomService} from "../../services/room.service";
import {RoomDTO} from "../../dto/room";

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent {
    me!: UserResponseDTO;

    @Output() addedRoom: EventEmitter<RoomDTO> = new EventEmitter();
    name!: string;
    size!: number;
    active!: boolean;

    constructor(private modalService: NgbModal, private  userService:UserService, private roomService:RoomService) {
        userService.user().subscribe(
            res=>{
                this.me = res;
            }
        )
    }
    open(content: any) {
        this.modalService.open(content, { size: 'sm' }).result.then();
    }

    onSubmit() {
        let room:RoomDTO = {
            size: this.size,
            active: this.active,
            name: this.name,
            id: 0
        };
        console.log(this.active);
        console.log(room);

        this.roomService.createRoom(room).subscribe(
            res => {
                this.addedRoom.emit(res);
            }
        );
    }
}
