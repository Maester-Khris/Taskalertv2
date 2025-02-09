import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-collab',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './collab.component.html',
  styleUrl: './collab.component.css'
})
export class CollabComponent {

}
