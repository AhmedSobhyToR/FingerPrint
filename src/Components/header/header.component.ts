import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { DataService } from '../Services/data.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faCartShopping = faCartShopping;
  constructor(private dataSer:DataService){

  }
  ngOnInit(){
    this.dataSer.setUser();
  
  }
  getUserDetails(){
    return this.dataSer.getUser
  }
}
