import {Component, EventEmitter, Output} from '@angular/core';
import {NgbDate, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RequestDTO} from "../../dto/auth";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
    name!: string;
    surname!: string;
    email!: string;
    password!: string;
    subscriptionStart!: NgbDate;
    subscriptionEnd!: NgbDate;
    role!: string;
    isActive!: boolean;

    @Output() onAddUser: EventEmitter<RequestDTO> = new EventEmitter();

    constructor(private modalService: NgbModal) {}
    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
    }

    onSubmit(){
        // Convert ngbdate in date
        const subscriptionStart = new Date(this.subscriptionStart.year, this.subscriptionStart.month - 1, this.subscriptionStart.day);
        const subscriptionEnd = new Date(this.subscriptionEnd.year, this.subscriptionEnd.month - 1, this.subscriptionEnd.day);

        const user: RequestDTO = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
            subscriptionStart: subscriptionStart,
            subscriptionEnd: subscriptionEnd,
            role: this.role,
            isActive: this.isActive
        };

        this.onAddUser.emit(user);

    }

}
