import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // corregido plural
})
export class App {
  protected title = 'ProyectoCRMs';
}
