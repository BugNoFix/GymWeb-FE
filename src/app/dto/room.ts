export interface RoomDTO {
    name: string;
    isActive: boolean;
    size: number;

    id: number;
}
export interface SearchRoomDTO {
    rooms: RoomDTO[];
    totalPages: number;
    totalElements: number;
}
