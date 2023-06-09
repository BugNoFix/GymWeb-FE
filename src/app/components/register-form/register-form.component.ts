import {Component, EventEmitter, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
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
    subscriptionStart!: Date;
    subscriptionEnd!: Date;
    role!: string;
    isActive!: boolean;

    @Output() onAddUser: EventEmitter<RequestDTO> = new EventEmitter();

    constructor(private modalService: NgbModal) {}
    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
    }

    onSubmit(){

        const user: RequestDTO = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
            subscriptionStart: this.subscriptionStart,
            subscriptionEnd: this.subscriptionEnd,
            role: this.role,
            isActive: this.isActive
        };

        this.onAddUser.emit(user);
    }

}
