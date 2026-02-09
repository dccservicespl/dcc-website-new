import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { IndustriesComponent } from './components/industries/industries/industries.component';
import { TechnologiesComponent } from './components/technologies/technologies/technologies.component';
import { ServiceComponent } from './components/service/service/service.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'details/:slug', component: DetailsComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'service', component: ServiceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
