import { Component } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../Services/data.service';
import { NgIf } from '@angular/common';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, ProgressBarComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  showConfirmation:boolean = false;
  showFailedPayment:boolean = false;
  constructor(private dataSer:DataService){

  }
  ngOnInit(){
    console.log(this.dataSer.permit);
    this.getUserDetails();
    this.getProjectDetails();
    this.getExcavationDetails();
  }

   getUserDetails(){
    return this.dataSer.getUser;
  }
   getProjectDetails(){
    return this.dataSer.getProject;
  }
   getExcavationDetails(){
    return this.dataSer.getExcavationDetails;
  }
  togglePaymentConfirmation(){
    this.showConfirmation = !this.showConfirmation;
  }
  onCancelPayment(){
    this.togglePaymentConfirmation();
  }
  onConfirmPayment(){
    
    if(this.dataSer.getUser.balance>= this.dataSer.getExcavationDetails.price!){
      this.dataSer.getUser.balance = this.dataSer.getUser.balance - this.dataSer.getExcavationDetails.price!;
      this.togglePaymentConfirmation();
      this.dataSer.setPermit(this.dataSer.permit);
      this.dataSer.setPermitRequestStatus(3);
    }
    else{
      this.showFailedPayment = true;
    }

    
  }
  onCancel(){
    this.dataSer.setPermitRequestStatus(0);
    this.dataSer.resetExcavationDetails();
  }
  onSubmit(){
    this.showConfirmation = true;
  }

}
