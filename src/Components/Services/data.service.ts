import { Injectable } from '@angular/core';
import { Project } from '../Models/project.model';
import { FormGroup } from '@angular/forms';
import { Excavation } from '../Models/excavation.model';
import { User } from '../Models/user.model';
import { Permit } from '../Models/permit.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user!:User;
  excavationDetails!:Excavation;
  project!:Project;
  permit!:Permit;
  permits:Permit[]= [];

  excavationDataForm!: FormGroup;
  // User
  setUser(){
    this.user={
      name:"Ahmed Sobhy",
      phone:"0100000000",
      paymentMethod:"Credit Card",
      balance: 5000
    }
  }

  get getUser(){
    return this.user;
  }

  // Project
  setProject(prj:Project){
      this.permit.project = prj;
      this.project = prj;

  }
  get getProject(){
    return this.permit.project;
  }

  // Excavation
  get getExcavation(){
    return this.excavationDataForm;
  }

  setExcavationDetails(excavationDataForm: FormGroup){
    this.excavationDataForm = excavationDataForm;
    this.excavationDetails={
      excavationMethod:this.getExcavation.value['excavationMethod'],
      excavationType: this.getExcavation.value['excavationType'],
      excavationDuration: this.getExcavation.value['excavationDuration'],
      excavationLocation:{
        street: this.getExcavation.get('excavationLocation')?.value['street'],
        area: this.getExcavation.get('excavationLocation')?.value['area'],
        city: this.getExcavation.get('excavationLocation')?.value['city']
      },
      excavationDescription:this.getExcavation.value['excavationDescription'],
      price: Math.ceil(Math.random()* 1700)
    }
    this.permit.excavation = this.excavationDetails;
  }

  get getExcavationDetails(){
    return this.excavationDetails;
  }

  resetExcavationDetails(){
    this.excavationDataForm.reset();
  }
  // Permit
  
  createPermitRequest(){
    this.intializePermit();
    this.permit={
      id:((this.permits.length)).toString(),
      user : this.user,
      project : this.project,
      excavation : this.excavationDetails,
      status: 'Pending',
      RequestStatus: 0
    }
    console.log(this.permit);
  }

  setPermit(permit: Permit){
    this.permits.push(permit);
  }
   getPermit(permitId: string){
    return this.permits[+permitId]
  }

  get getPermits(){
    return this.permits;
  }

  setPermitRequestStatus(requestStatus: number){
    this.permit.RequestStatus = requestStatus;
  }
  get getPermitRequestStatus(){
    return this.permit.RequestStatus;
  }

  intializePermit(){
    this.project = {
      projectId: '',
      projectName: '',
      projectType: '',
      projectStatus: ''
    } as Project
    this.excavationDetails={
      excavationMethod:'',
      excavationType: '',
      excavationDuration: '',
      excavationLocation:{
        street: '',
        area:'',
        city:'',
      },
      excavationDescription: '',
      price: 0
    } as Excavation
   
  }
} 
