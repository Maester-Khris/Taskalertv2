import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { VotesComponent } from './votes/votes.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', component: HomeComponent },
    {path: 'votes', component: VotesComponent },
    {path: 'myskills', component: MyskillsComponent },
];
