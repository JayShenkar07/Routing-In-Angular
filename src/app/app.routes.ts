import { Routes } from '@angular/router';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

export const routes: Routes = [

    {path : 'technologies', component : BatchDetailsComponent},  //specific route

    {path : 'books', component : BatchListComponent},

    {path : '', component : HomepageComponent},  //Default route

    //wildcard route / Invalid route

    {path : '**', component : InvalidpageComponent} 


];
