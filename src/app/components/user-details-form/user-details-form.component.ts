import {Component, EventEmitter, Output} from '@angular/core';
import {UserBodyDetailsDTO} from "../../dto/user";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent {
    @Output() onAddUser: EventEmitter<UserBodyDetailsDTO> = new EventEmitter();

    weight!: number;

    bodyfat!: number;

    height!: number;

    chest!: number;

    upperArm!: number;

    shoulders!: number;

    waist!: number;


    constructor(private modalService: NgbModal) {}

    open(content: any) {
        this.modalService.open(content, { size: 'sm' }).result.then();
    }

    onSubmit(){
        const userDetails: UserBodyDetailsDTO = {
            weight: this.weight,
            bodyfat: this.bodyfat,
            height: this.height,
            chest: this.chest,
            upperArm: this.upperArm,
            shoulders: this.shoulders,
            waist: this.waist
        };

        this.onAddUser.emit(userDetails);
    }

}
