import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from './core/mainModule/core.module';
import {
  MainStandAloneComponent,
} from './pages/main-stand-alone/main-stand-alone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoreModule, MainStandAloneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'remote';
}
