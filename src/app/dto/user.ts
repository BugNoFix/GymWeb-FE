export interface UserBodyDetailsDTO {
    weight: number;
    bodyfat: number;
    height: number;
    chest: number;
    upperArm: number;
    shoulders: number;
    waist: number;
    uploadTime?: Date;
}

export interface SearchUserBodyDetailsDTO {
    userBodyDetails: UserBodyDetailsDTO[];
    totalPages: number;
    totalElements: number;
}

export interface UserRequestDTO {
    email: string;
    name: string;
    surname: string;
    privacy: boolean;
    uuidPt: string;
    isActive: boolean;
}

export interface UserResponseDTO {
    uuid: string;
    email: string;
    name: string;
    surname: string;
    subscriptionStart: Date;
    subscriptionEnd: Date;
    privacy: boolean;
    uuidPt?: string;
}
