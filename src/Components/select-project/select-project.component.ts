import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../Models/project.model';
import { mockProjects } from './mockProject';
import { RouterLink } from '@angular/router';
import { DataService } from '../Services/data.service';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

@Component({
  selector: 'app-select-project',
  standalone: true,
  imports: [RouterLink, ProgressBarComponent],
  templateUrl: './select-project.component.html',
  styleUrl: './select-project.component.css'
})
export class SelectProjectComponent {
  projects:Project[] = mockProjects;
  selectedProject!: Project;
  constructor(private dataSer:DataService){

  }

  ngOnInit(){
    if(this.dataSer.permit){
       this.selectedProject = this.dataSer.permit.project;
    }

  }
  onSelectProject(project: Project){
    this.selectedProject= project
  }

  onCancel(){
    this.dataSer.setPermitRequestStatus(2);
  }
  onSubmit(){
    this.dataSer.setProject(this.selectedProject);
    this.dataSer.setPermitRequestStatus(1)
 
  }
}
