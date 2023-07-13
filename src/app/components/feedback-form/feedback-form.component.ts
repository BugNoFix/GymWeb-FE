import {Component, EventEmitter, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {UserResponseDTO} from "../../dto/user";
import {FeedbackService} from "../../services/feedback.service";
import {FeedbackDTO} from "../../dto/feedback";

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
    text!: string;

    me!: UserResponseDTO;

    @Output() addedFeedback: EventEmitter<FeedbackDTO> = new EventEmitter();

    constructor(private modalService: NgbModal, private  userService:UserService, private feedbackService:FeedbackService) {
        // Get logged user
        userService.user().subscribe(
            res=>{
                this.me = res;
            }
        )
    }
    open(content: any) {
        // Open form logic
        this.modalService.open(content, { size: 'md' }).result.then();
    }

    onSubmit() {
        const feedback: FeedbackDTO = {
            text: this.text,
            createdTime: null,
            userFeedbackDTOs: null
        };

        this.feedbackService.createFeedback(feedback).subscribe(
            res => {
                this.addedFeedback.emit(res);
            }
        );
    }
}
