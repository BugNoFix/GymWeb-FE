import {ChangeDetectorRef, Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserBodyDetailsDTO} from "../../dto/user";

@Component({
  selector: 'app-table-body-details',
  templateUrl: './table-body-details.component.html',
  styleUrls: ['./table-body-details.component.css']
})
export class TableBodyDetailsComponent {
    bodyDetails!: UserBodyDetailsDTO[];
    size!: number;
    page!: number;
    collectionSize!: number;

    constructor(private userService: UserService, private changeDetection: ChangeDetectorRef) {
        this.size = 5;
        this.page = 0;
        this.getData(this.page, this.size);
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
        this.userService.getBodyDetails(page, size).subscribe(
            res => {
                this.bodyDetails = res.userBodyDetails;
                this.collectionSize = res.totalElements;
                console.log(this.collectionSize);
                this.changeDetection.detectChanges();
            },
            err => {
                console.log(err);
            }
        );
    }

    refreshPage() {
        this.getData(this.page-1, this.size);
    }
}
