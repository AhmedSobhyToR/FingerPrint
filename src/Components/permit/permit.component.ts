import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Router, RouterLink } from '@angular/router';
import { Permit } from '../Models/permit.model';

@Component({
  selector: 'app-permit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './permit.component.html',
  styleUrl: './permit.component.css'
})
export class PermitComponent {
  constructor(private dataSer: DataService, private router:Router){

  }
  createPermitRequest(){
    this.dataSer.createPermitRequest();
  }

  getPermits(){
    return this.dataSer.getPermits;
  }
  getDetailedLocation(permit: Permit){
    return this.dataSer.permits[+permit.id].excavation.excavationLocation.street +
     ', ' + this.dataSer.permits[+permit.id].excavation.excavationLocation.area  +
     ', ' + this.dataSer.permits[+permit.id].excavation.excavationLocation.city
  }

  viewPermit(permitId: string){
    this.router.navigate(['/permit',permitId])
  }

}
