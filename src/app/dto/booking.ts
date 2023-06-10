export interface BookingDTO {
    subscriptionTime: Date;
    startTime: Date;
    endTime: Date;
    roomId: number;
}
export interface SearchBookingDTO {
    bookings: BookingDTO[];
    totalPages: number;
    totalElements: number;
}

