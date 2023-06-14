import { Component } from '@angular/core';
import {UserResponseDTO} from "../../dto/user";
import {WorkoutPlanService} from "../../services/workout-plan.service";
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
            res => {
                this.me = res;
                feedbackService.getFeedbacksPt(this.me.uuidPt, 0, 20).subscribe(
                    res => {
                        this.feedbacks = res.feedbacks;
                    }
                )
            }
        )


    }

    updateFeedbacks(feedback: FeedbackDTO) {
        this.feedbacks.unshift(feedback);
    }
}

