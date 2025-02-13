import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-tasks',
    imports: [TaskFormComponent, TaskListComponent, CommonModule],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
    //used to perform details, edition or deletion action
    selectedTask:any = {};
    isEditionMode=false;
    
    tasks: any[] = [
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

    editSelectedTask(task_to_edit:any){
        console.log(task_to_edit);
        this.selectedTask = task_to_edit;
        this.isEditionMode = true;
        console.log("entered task edition mode");
    }
    dropSelectedTask(task_to_delete:any){
        console.log(task_to_delete);
        //this.tasks.splice(this.tasks.indexOf(task_to_delete), 1);
        this.tasks = this.tasks.filter(t=>t.id !== task_to_delete.id);
        console.log(this.tasks);
    }
    closeTaskForm(){
        console.log("received signal to close task form component")
        this.selectedTask = {};
        this.isEditionMode = false;
    }
}
