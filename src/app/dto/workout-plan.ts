export interface WorkoutPlanDTO {
    path: string;
    uploadTime: Date;
}
export interface SearchWorkoutPlansDTO {
    workoutPlans: WorkoutPlanDTO[];
    totalPages: number;
    totalElements: number;
}
