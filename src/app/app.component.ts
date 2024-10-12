import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../Components/header/header.component";
import { MainComponent } from "../Components/main/main.component";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  faCoffee = faCoffee;
  title = 'ECommerce';
}
