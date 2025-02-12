import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list',
  imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule,MatSelectModule, MatButtonModule, MatIconModule, FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  @Input() tasks: any[] = []; 
  @Output() editTask = new EventEmitter<{}>();
  @Output() dropTask = new EventEmitter<{}>();

  tasks_items:any[] = [];
  action_selected = '';
  is_any_task_selected = false;
  
  searchTerm = '';
  filteredItems$: Observable<any[]> = of([]);

  constructor() {  }

  ngOnInit() {
    console.log("received from child");
    console.log(this.tasks); // This should now return the populated array
    this.filteredItems$ = of(this.tasks_items).pipe(
      switchMap(items => this.filterItems(items))
    );
    for(let t of this.tasks){
      this.tasks_items.push( {...t, checked:false})
    }
  }

  filterItems(items: any[]): Observable<any[]> {
    const searchTerm = this.searchTerm.toLowerCase();
    return of(items.filter(
      (item:any) => 
        item.title.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
    ));
  }

  onFilterChange(){
    this.filteredItems$ = of(this.tasks_items).pipe(
      switchMap(items => this.filterItems(items))
    );
  }

  emptyFilter(){
    this.searchTerm='';
    this.filteredItems$ = of(this.tasks_items).pipe(
      switchMap(items => this.filterItems(items))
    );
  }

  onCheckboxChange(event: any, task:any) {
    console.log('Checkbox checked:', event.checked);
    task.checked = event.checked;
    console.log(this.tasks_items.some(task => task.checked == true));
    this.is_any_task_selected = this.tasks_items.some(task => task.checked == true)
  }

  // ======= Task action method =======
  newTask(){
    let task:any = {};
    this.editTask.emit(task);
  }
  showTaskDetail(){

  }
  editTaskObj(){
    let stask = this.tasks_items.filter(t => t.checked ==true)[0];
    let task_to_edit = this.tasks.filter(t =>t.id == stask.id)[0];
    this.editTask.emit(task_to_edit);
  }
  deleteTaskObj(){
    let stask = this.tasks_items.filter(t => t.checked ==true)[0];
    let task_to_delete = this.tasks.filter(t =>t.id == stask.id)[0];
    this.dropTask.emit(task_to_delete);
  }
}
