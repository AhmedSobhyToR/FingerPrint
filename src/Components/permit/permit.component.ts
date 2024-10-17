import { Component } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Router, RouterLink } from '@angular/router';
import { Permit } from '../Models/permit.model';
import { UserAuthService } from '../Services/user-auth.service';

@Component({
  selector: 'app-permit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './permit.component.html',
  styleUrl: './permit.component.css'
})
export class PermitComponent {

  constructor(private dataSer: DataService,
    private authSer: UserAuthService,
     private router:Router){
  }
  ngOnInit(){

  }
  createPermitRequest(){
    this.dataSer.createPermitRequest();
  }

  getPermits(){
    return this.dataSer.getPermits;
  }
  getDetailedLocation(permit: Permit){
    
    return permit.excavation.excavationLocation.street +
     ', ' + permit.excavation.excavationLocation.area  +
     ', ' + permit.excavation.excavationLocation.city
  }

  viewPermit(permitId: string){
    this.router.navigate(['/permit',permitId])
  }

  get getUserRole(){
    return this.dataSer.getUser.role
  }

}
