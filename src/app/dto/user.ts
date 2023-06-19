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

export interface SearchUsersDTO {
    users: UserResponseDTO[];
    totalPages: number;
    totalElements: number;
}
export interface UserRequestDTO {
    email: string;
    name: string;
    surname: string;
    privacy: boolean;
    active: boolean;
    subscriptionStart: Date;
    subscriptionEnd: Date;
    role: string;
    password: string;
    uuidPt:string;
}

export interface UserResponseDTO {
    uuid: string;
    email: string;
    name: string;
    surname: string;
    subscriptionStart: string;
    subscriptionEnd: string;
    privacy: boolean;
    uuidPt: string;
    role: string;
    active: boolean;
}
