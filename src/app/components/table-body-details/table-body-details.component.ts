import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserBodyDetailsDTO} from "../../dto/user";

@Component({
  selector: 'app-table-body-details',
  templateUrl: './table-body-details.component.html',
  styleUrls: ['./table-body-details.component.css']
})
export class TableBodyDetailsComponent implements OnInit{
    bodyDetails!: UserBodyDetailsDTO[];
    size!: number;
    page!: number;
    collectionSize!: number;
    @Input() uuid!: string | null;

    constructor(private userService: UserService) {
        this.size = 5;
        this.page = 0;
    }

    add(bodyDetails: UserBodyDetailsDTO){
        this.userService.setBodyDetails(bodyDetails).subscribe(
            res => {
                if(this.bodyDetails.length == this.size)
                    this.bodyDetails.pop();
                this.bodyDetails.unshift(res);
            }
        );
    }

    getData(page:number, size:number){
        // Homepage customer
        if(this.uuid == "" || this.uuid == null) {
            this.userService.getBodyDetails(page, size).subscribe(
                res => {
                    this.bodyDetails = res.userBodyDetails;
                    this.collectionSize = res.totalElements;
                    //this.changeDetection.detectChanges();
                },
                err => {
                    console.log(err);
                }
            );
        }
        // Data on page pt
        else{
            this.userService.getBodyDetailsOfUser(page, size, this.uuid).subscribe(
                res => {
                    this.bodyDetails = res.userBodyDetails;
                    this.collectionSize = res.totalElements;
                    //this.changeDetection.detectChanges();
                },
                err => {
                    console.log(err);
                }
            );
        }
    }

    refreshPage() {
        this.getData(this.page-1, this.size);
    }

    ngOnInit(): void {
        this.getData(this.page, this.size);
    }
}
