import { Component } from '@angular/core';
import {NgbDate, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {RoomService} from "../../services/room.service";
import {RoomDTO} from "../../dto/room";
import {RequestDTO} from "../../dto/auth";
import {BookingDTO} from "../../dto/booking";
import {BookingService} from "../../services/booking.service";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {NgbTime} from "@ng-bootstrap/ng-bootstrap/timepicker/ngb-time";
import {UserResponseDTO} from "../../dto/user";
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent {
    subscriptionStart!: NgbDate;
    subscriptionEnd!: NgbDate;
    rooms!: RoomDTO[];
    room!: RoomDTO;
    showErrorMessage: boolean = false;
    errorMessage!: string;
    showCreated: boolean = false;
    subscriptionTime: any;
    timeEnd: any  = { hour: 0, minute: 0 };
    timeStart: any = { hour: 0, minute: 0 };
    customer!: boolean;
    bookeds!: BookingDTO[];

    constructor(private bookingService:BookingService, private roomService:RoomService, private userService:UserService) {
        // TODO: visualizza massimo le prime 20 room
        this.roomService.allRooms(0, 20).subscribe(
            res => {
                this.rooms = res.rooms;
            }
        );
        userService.user().subscribe(
            res =>{
                console.log(res.role)
                if(res.role == "CUSTOMER")
                    this.customer = true;
                else
                    this.customer = false;
                console.log(this.customer)
            }
        )

    }

    addBooking() {
        const subscriptionStart = new Date(this.subscriptionStart.year, this.subscriptionStart.month - 1, this.subscriptionStart.day, this.timeStart.hour+2, this.timeStart.minute);
        const subscriptionEnd = new Date(this.subscriptionEnd.year, this.subscriptionEnd.month - 1, this.subscriptionEnd.day, this.timeEnd.hour+2, this.timeEnd.minute);

        const booking: BookingDTO = {
            startTime: subscriptionStart,
            endTime: subscriptionEnd,
            roomId: this.room.id
        };

        this.showCreated = false;
        this.showErrorMessage = false;
        this.bookingService.createBooking(booking).subscribe(
            res =>{
                this.showCreated = true;
            },
            err => {
                this.showErrorMessage = true;
                this.errorMessage = err.error.message;
            }
        );

    }

    userBooked() {
        const subscriptionStart = new Date(this.subscriptionStart.year, this.subscriptionStart.month - 1, this.subscriptionStart.day, this.timeStart.hour+2, this.timeStart.minute);
        const subscriptionEnd = new Date(this.subscriptionEnd.year, this.subscriptionEnd.month - 1, this.subscriptionEnd.day, this.timeEnd.hour+2, this.timeEnd.minute);

        const booking: BookingDTO = {
            startTime: subscriptionStart,
            endTime: subscriptionEnd,
            roomId: this.room.id
        };

        this.bookingService.userBooked(booking, this.customer).subscribe(
            res =>{
                this.bookeds = res;
                console.log(this.bookeds);
            }
        )

    }
}
