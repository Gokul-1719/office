import { Component, OnInit } from '@angular/core';
import { Officedetails } from '../officedetails';
import { OfficeService } from '../office.service';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.css']
})
export class GetbyidComponent implements OnInit {
  office: Officedetails;

  constructor(private officeService: OfficeService) { }

  ngOnInit() {
    this.getById(1); 
  }

  getById(id: number): void {
    this.officeService.getById(id).subscribe(
      (response: Officedetails) => {
        this.office = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
