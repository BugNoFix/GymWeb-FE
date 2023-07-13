import {Component} from '@angular/core';
import {UserResponseDTO} from "../../dto/user";
import {UserService} from "../../services/user.service";
import {FeedbackService} from "../../services/feedback.service";
import {FeedbackDTO} from "../../dto/feedback";

@Component({
  selector: 'app-feedback-table',
  templateUrl: './feedback-table.component.html',
  styleUrls: ['./feedback-table.component.css']
})
export class FeedbackTableComponent {
    me!: UserResponseDTO;

    feedbacks!: FeedbackDTO[];

    constructor(private feedbackService: FeedbackService, private userService: UserService) {
        userService.user().subscribe(
            // Get uuid
            res => {
                this.me = res;
                let uuid;
                if(this.me.role == "PT")
                    uuid = this.me.uuid // Get uuid of pt logged
                else
                    uuid = this.me.uuidPt // Get uuid of my pt
                feedbackService.getFeedbacksPt(uuid, 0, 20).subscribe(
                    res => {
                        this.feedbacks = res.feedbacks;
                    }
                )
            }
        )
    }

    // Update view
    updateFeedbacks(feedback: FeedbackDTO) {
        this.feedbacks.unshift(feedback);
    }
}

