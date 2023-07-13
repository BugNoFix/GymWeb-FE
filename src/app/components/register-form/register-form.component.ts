import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbDate, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {UserRequestDTO, UserResponseDTO} from "../../dto/user";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit{
    name!: string;

    surname!: string;

    email!: string;

    password!: string;

    subscriptionStart: NgbDate|null = null;

    subscriptionEnd!: NgbDate;

    role!: string;

    isActive: boolean = true;

    uuidPt: string = "";

    @Input() user!:UserResponseDTO

    pts!: UserResponseDTO[];

    @Output() addUser: EventEmitter<UserResponseDTO> = new EventEmitter();

    @Output() updateUser: EventEmitter<UserResponseDTO> = new EventEmitter();

    constructor(private modalService: NgbModal, private userService:UserService) {}

    // Open form logic
    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then();
    }

    onSubmit(){
        // Convert ngbdate in date
        let subscriptionStart = null;
        let subscriptionEnd = null;
        if(this.subscriptionStart != null) {
            subscriptionStart = new Date(this.subscriptionStart.year, this.subscriptionStart.month - 1, this.subscriptionStart.day, 2); // +2h timezone
        }
        if(this.subscriptionEnd != null) {
            subscriptionEnd = new Date(this.subscriptionEnd.year, this.subscriptionEnd.month - 1, this.subscriptionEnd.day, 2);
        }

        const user: UserRequestDTO = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
            // Send data in GMT 0
            subscriptionStart: subscriptionStart,
            subscriptionEnd: subscriptionEnd,
            role: this.role,
            active: this.isActive,
            privacy: false,
            uuidPt: this.uuidPt
        };

        // Update
        if (this.user != null){
            this.userService.updateUser(user, this.user.uuid).subscribe(
                res => {
                    this.updateUser.emit(res);
                }
            )
        }
        // Create user
        else {
            this.userService.createUser(user).subscribe(
                res => {
                    this.addUser.emit(res)
                }
            )
        }

    }

    // Set data form of the user of db
    ngOnInit(): void {
        this.userService.getAllPt(0, 20).subscribe(
            res =>{
                console.log(res)
                this.pts = res.users;
            }
        )
        if(this.user == null)
            return;
        this.name = this.user.name;
        this.surname= this.user.surname;
        this.email= this.user.email;
        let subStart:Date = new Date(this.user.subscriptionStart)
        let subEnd:Date = new Date(this.user.subscriptionEnd)
        if(this.user.subscriptionStart!= null)
            this.subscriptionStart = new NgbDate(subStart.getUTCFullYear(),subStart.getUTCMonth()+ 1, subStart.getUTCDate());
        if(this.user.subscriptionEnd!= null)
            this.subscriptionEnd = new NgbDate(subEnd.getUTCFullYear(),subEnd.getUTCMonth()+ 1, subEnd.getUTCDate());
        this.role= this.user.role;
        console.log(this.user.email +" : " +this.user.active)
        this.isActive= this.user.active;
        this.uuidPt = this.user.uuidPt;
    }

}
