import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Input() taskObj: any = {}; 
  @Output() closeFormComp = new EventEmitter<void>();

  // ======== UI Interaction ==========
  cancelForm(){
    this.closeFormComp.emit();
  }
}
