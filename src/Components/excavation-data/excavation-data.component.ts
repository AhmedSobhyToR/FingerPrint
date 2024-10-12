import { Component, Input, NgModule } from '@angular/core';
import { Project } from '../Models/project.model';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DataService } from '../Services/data.service';
import { Excavation } from '../Models/excavation.model';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { ExcavationDataEnums } from '../Enums/excavation-data.enum';
@Component({
  selector: 'app-excavation-data',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, JsonPipe, ProgressBarComponent],
  templateUrl: './excavation-data.component.html',
  styleUrl: './excavation-data.component.css'
})
export class ExcavationDataComponent {
  excavationDataEnums = new ExcavationDataEnums();
  excavationMethods!: string[];
  excavationTypes!: string[];
  constructor(private dataSer:DataService){
    
  }

  excavationDataForm: FormGroup = new FormGroup({
    excavationMethod: new FormControl('', [Validators.required]),
    excavationType: new FormControl('', [Validators.required]),
    excavationDuration: new FormControl('', [Validators.required, 
      Validators.pattern('[0-9]{1,}'), Validators.min(1), Validators.max(100)]),
    excavationLocation: new FormGroup({
      street: new FormControl('', [Validators.required]),
      area: new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z]{1,}')]),
      city: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{1,}')]),
    }),
    excavationDescription: new FormControl('')
  })  

  ngOnInit(){
    this.loadExcavationData();
    console.log(this.dataSer.permit);
    this.isFormFilled();
  }

  // Load enums into inputs in form
  addEmptyOption(){
    this.excavationDataEnums.ExcavationMethods.unshift('')
    this.excavationDataEnums.ExcavationTypes.unshift('')
  }
  loadExcavationData(){
    this.addEmptyOption();
    this.excavationMethods =this.excavationDataEnums.ExcavationMethods
    this.excavationTypes = this.excavationDataEnums.ExcavationTypes
  }

  // Check if form is already filled
  isFormFilled(){
    if(this.dataSer.getExcavation){
      this.excavationDataForm.patchValue(
        this.dataSer.getExcavationDetails
      )
    }
  }

  onCancel(){

    this.excavationDataForm.reset();
    this.dataSer.setPermitRequestStatus(0);


  }
  onSubmit(){
    if(!this.excavationDataForm.valid){
      return
    }
    this.dataSer.setExcavationDetails(this.excavationDataForm);
    this.dataSer.setPermitRequestStatus(2);
    // console.log(this.dataSer.getExcavationDetails);

  }

  get excavationMethod(){
    return this.excavationDataForm.get('excavationMethod')
  }
  get excavationType(){
    return this.excavationDataForm.get('excavationType')
  }
  get excavationDuration(){
    return this.excavationDataForm.get('excavationDuration')
  }
  get excavationLocation(){
    return this.excavationDataForm.get('excavationLocation')
  }
  get street(){
    return this.excavationLocation?.get('street')
  }
  get area(){
    return this.excavationLocation?.get('area')
  }
  get city(){
    return this.excavationLocation?.get('city')
  }
}

