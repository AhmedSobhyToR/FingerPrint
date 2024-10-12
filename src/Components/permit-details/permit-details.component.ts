import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Permit } from '../Models/permit.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-permit-details',
  standalone: true,
  imports: [],
  templateUrl: './permit-details.component.html',
  styleUrl: './permit-details.component.css'
})
export class PermitDetailsComponent {
  permitId!:string;
  permit!:Permit;
  constructor(private dataSer: DataService,
     private activeRouter:ActivatedRoute, private location: Location){

  }
  ngOnInit(){
    this.permitId = this.activeRouter.snapshot.paramMap.get('id')!;
     console.log(this.permitId);
    this.permit = this.dataSer.getPermits.find(per=> per.id === this.permitId)!;
  }

  getDetailedLocation(){
    return this.dataSer.permits[+this.permit.id].excavation.excavationLocation.street +
     ', ' + this.dataSer.permits[+this.permit.id].excavation.excavationLocation.area  +
     ', ' + this.dataSer.permits[+this.permit.id].excavation.excavationLocation.city
  }

  goBack(){
    this.location.back();
  }

}
