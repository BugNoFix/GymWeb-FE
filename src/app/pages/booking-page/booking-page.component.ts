import { Component } from '@angular/core';
import {NgbDate, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {RoomService} from "../../services/room.service";
import {RoomDTO} from "../../dto/room";
import {RequestDTO} from "../../dto/auth";
import {BookingDTO} from "../../dto/booking";
import {BookingService} from "../../services/booking.service";
import {FormsModule} from "@angular/forms";
import {NgbTime} from "@ng-bootstrap/ng-bootstrap/timepicker/ngb-time";

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent {
    date!: NgbDate;
    rooms!: RoomDTO[];
    room!: RoomDTO;
    showErrorMessage: boolean = false;
    errorMessage!: string;
    showCreated: boolean = false;
    searchDate!: NgbDate;
    timeEnd: any  = { hour: 0, minute: 0 };
    timeStart: any = { hour: 0, minute: 0 };
    customer!: boolean;
    bookeds!: BookingDTO[];
    timeStartSearch: any= { hour: 0, minute: 0 };
    timeEndSearch: any= { hour: 0, minute: 0 };

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
        const subscriptionStart = new Date(this.date.year, this.date.month - 1, this.date.day, this.timeStart.hour+2, this.timeStart.minute);
        const subscriptionEnd = new Date(this.date.year, this.date.month - 1, this.date.day, this.timeEnd.hour+2, this.timeEnd.minute);

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
        const searchDateStart = new Date(this.searchDate.year, this.searchDate.month - 1, this.searchDate.day, this.timeStartSearch.hour +2, this.timeStartSearch.minute);
        const searchDateEnd = new Date(this.searchDate.year, this.searchDate.month - 1, this.searchDate.day, this.timeEndSearch.hour +2 , this.timeEndSearch.minute);

        const booking: BookingDTO = {
            startTime: searchDateStart,
            endTime: searchDateEnd,
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
