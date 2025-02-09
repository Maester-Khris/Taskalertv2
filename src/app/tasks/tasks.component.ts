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


import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';


@Component({
  selector: 'app-tasks',
  imports: [TaskFormComponent, TaskListComponent, MatFormFieldModule, MatInputModule, MatCheckboxModule,MatSelectModule, MatButtonModule, MatIconModule, FormsModule, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  action_selected = '';
  is_any_task_selected = false;

  tasks:any[]= [
    {
        "id": 1,
        "title": "Implement User Authentication",
        "group": ["Development"],
        "description": "Develop a secure user authentication system using JWT.",
        "items": ["User model", "Login API", "Register API", "Password reset functionality"],
        "editors": ["Alice", "Bob"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 2,
        "title": "Design Database Schema",
        "group": ["Database Design"],
        "description": "Create a comprehensive database schema for the application.",
        "items": ["ER Diagram", "Normalization", "Schema documentation"],
        "editors": ["Bob", "Charlie"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 3,
        "title": "Develop API Endpoints",
        "group": ["Development"],
        "description": "Implement RESTful API endpoints for the application.",
        "items": ["GET /tasks", "POST /tasks", "PUT /tasks/{id}", "DELETE /tasks/{id}"],
        "editors": ["Charlie", "Diana"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 4,
        "title": "Create Frontend Components",
        "group": ["Development"],
        "description": "Build reusable React components for the user interface.",
        "items": ["Header component", "Footer component", "Task list component"],
        "editors": ["Diana", "Eve"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 5,
        "title": "Write Unit Tests",
        "group": ["Quality Assurance"],
        "description": "Develop unit tests for critical functions and components.",
        "items": ["User authentication tests", "API response tests", "Component rendering tests"],
        "editors": ["Alice", "Eve"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 6,
        "title": "Conduct Code Review",
        "group": ["Quality Assurance"],
        "description": "Review pull requests for code quality and adherence to standards.",
        "items": ["Review PR #101", "Review PR #102", "Provide feedback"],
        "editors": ["Alice", "Bob"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 7,
        "title": "Set Up CI/CD Pipeline",
        "group": ["DevOps"],
        "description": "Implement a continuous integration and deployment pipeline.",
        "items": ["Configure GitHub Actions", "Set up testing environment", "Deploy to staging"],
        "editors": ["Bob", "Diana"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 8,
        "title": "Prepare User Documentation",
        "group": ["Documentation"],
        "description": "Create user documentation for the application features.",
        "items": ["User guide", "API documentation", "FAQ section"],
        "editors": ["Charlie", "Eve"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 9,
        "title": "Fix Bugs in Production",
        "group": ["Maintenance"],
        "description": "Identify and resolve bugs reported by users in the production environment.",
        "items": ["Bug #201", "Bug #202", "Bug #203"],
        "editors": ["Alice", "Charlie"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    },
    {
        "id": 10,
        "title": "Plan Next Sprint",
        "group": ["Project Management"],
        "description": "Organize and plan tasks for the upcoming sprint.",
        "items": ["Define sprint goals", "Prioritize backlog", "Assign tasks"],
        "editors": ["Diana", "Eve"],
        "created_at": "2025-02-08T12:00:00Z",
        "last_modification_time": null
    }
];



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
