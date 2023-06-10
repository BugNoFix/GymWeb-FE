export interface FeedbackDTO {
    text: string;
    createdTime: Date;
    userFeedbackDTOs: UserFeedbackDTO[];
}

export interface UserFeedbackDTO {
    userUuid: string;
    name: string;
    surname: string;
    role: string;
}
export interface SearchFeedbackDTO {
    feedbacks: FeedbackDTO[];
    totalPages: number;
    totalElements: number;
}

