import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { RemindersComponent } from './reminders/reminders.component';
import { CollabComponent } from './collab/collab.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'tasks', component: TasksComponent },
    {path: 'reminders', component: RemindersComponent },
    {path: 'collab', component: CollabComponent },
];
