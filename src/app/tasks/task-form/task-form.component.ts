import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, EventEmitter, Output, NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-task-form',
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Input() taskObj: any = {}; 
  @Output() closeFormComp = new EventEmitter<void>();

  dopreferItem=false;
  actualItems:string[] = [""];


  // ======== UI Interaction ==========
  cancelForm(){
    this.closeFormComp.emit();
  }
  switchToItems() {
    this.dopreferItem = !this.dopreferItem;
  }
  addItem(){
    console.log(this.actualItems);
    this.actualItems.push('');
  }
    
}
