export interface BookingDTO {
    subscriptionTime?: Date;
    startTime: Date;
    endTime: Date;
    roomId: number;
    name?: string;
    surname?: string;

}
export interface SearchBookingDTO {
    bookings: BookingDTO[];
    totalPages: number;
    totalElements: number;
}

