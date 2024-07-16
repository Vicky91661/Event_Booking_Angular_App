export interface ApiResponse{
    message: string,
    result: boolean,
    data : any
}

export interface eventData{
        eventId:number,
        eventName: string,
        startDate: string,
        startTime: string,
        endDate: string,
        organizerName: string,
        userId: number,
        price: number,
        location: string,
        imageUrl:string
}
export interface OneEvent {
    capacity: string;
    description: string;
    endDate: string;
    endTime: string;
    eventId: number;
    eventName: string;
    imageUrl: string;
    isCoupleEntryMandatory: boolean;
    isIdentityMandatory: boolean;
    location: string;
    organizerId: number;
    price: number;
    startDate: string;
    startTime: string;
  }

export class CreateUser {
    UserId:number;
    Name: string;
    Email: string;
    Password: string;
    ContactNo: string;
    Role:string;
    
    constructor(){
        this.UserId=0;
        this.Name='';
        this.Email='';
        this.Password='';
        this.ContactNo='';
        this.Role='customer'
    }
}