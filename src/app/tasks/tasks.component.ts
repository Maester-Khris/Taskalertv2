import { Component } from '@angular/core';
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
  selector: 'app-tasks',
  imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule,MatSelectModule, MatButtonModule, MatIconModule, FormsModule, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  action_selected = '';
  is_any_task_selected = false;

  tasks:any[] = [{
    "id": 1,
    "title": "Mat Lam Tam",
    "editor": "dliff0",
    "description": "nisl duis ac nibh fusce lacus purus aliquet at",
    "creation_time": "2024-02-28",
    "last_modification_time": "2024-03-14"
  }, {
    "id": 2,
    "title": "Lotlux",
    "editor": "nheaysman1",
    "description": "erat fermentum justo nec condimentum neque sapien",
    "creation_time": "2024-09-19",
    "last_modification_time": "2024-11-10"
  }, {
    "id": 3,
    "title": "Kanlam",
    "editor": "tphilippart2",
    "description": "urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
    "creation_time": "2024-04-30",
    "last_modification_time": "2024-02-23"
  }, {
    "id": 4,
    "title": "It",
    "editor": "yodell3",
    "description": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque",
    "creation_time": "2024-12-15",
    "last_modification_time": "2024-08-09"
  }, {
    "id": 5,
    "title": "Cardguard",
    "editor": "bdacosta4",
    "description": "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
    "creation_time": "2024-08-23",
    "last_modification_time": "2024-08-01"
  }, {
    "id": 6,
    "title": "Hatity",
    "editor": "bakroyd5",
    "description": "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea",
    "creation_time": "2024-08-31",
    "last_modification_time": "2025-01-23"
  }, {
    "id": 7,
    "title": "Y-find",
    "editor": "ptytterton6",
    "description": "vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a",
    "creation_time": "2024-10-11",
    "last_modification_time": "2024-02-29"
  }, {
    "id": 8,
    "title": "Biodex",
    "editor": "jchelnam7",
    "description": "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at",
    "creation_time": "2025-01-10",
    "last_modification_time": "2024-07-10"
  }, {
    "id": 9,
    "title": "Veribet",
    "editor": "wcervantes8",
    "description": "in hac habitasse platea dictumst maecenas",
    "creation_time": "2024-10-07",
    "last_modification_time": "2024-03-24"
  }, {
    "id": 10,
    "title": "Otcom",
    "editor": "rfasler9",
    "description": "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
    "creation_time": "2024-05-19",
    "last_modification_time": "2024-03-31"
  }];
  tasks_items:any[] = [];
  
  searchTerm = '';
  filteredItems$: Observable<any[]>;

  constructor() {
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
  
}
