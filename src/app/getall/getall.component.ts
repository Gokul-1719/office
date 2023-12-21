import { Component } from '@angular/core';
import { Officedetails } from '../officedetails';
import { OfficeService } from '../office.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent {
  office: Officedetails[]; 
  constructor(private officeService: OfficeService) { }

  getAll(): Observable<Officedetails[]> { 
    return this.officeService.getAll(); 
  }

  ngOnInit() {
    this.getAll().subscribe(
      (response) => {
        this.office = response; 
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}