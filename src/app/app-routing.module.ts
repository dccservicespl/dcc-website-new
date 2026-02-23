import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { IndustriesComponent } from './components/industries/industries/industries.component';
import { TechnologiesComponent } from './components/technologies/technologies/technologies.component';
import { ServiceComponent } from './components/service/service/service.component';
import { SapSalesforceComponent } from './components/sap-salesforce/sap-salesforce/sap-salesforce.component';
import { MicrosoftComponent } from './components/microsoft/microsoft/microsoft.component';
import { SalesforceComponent } from './components/salesforce/salesforce/salesforce.component';
import { MissionComponent } from './components/mission/mission/mission.component';
import { VisionComponent } from './components/vision/vision/vision.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'details/:slug', component: DetailsComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'sap-salesforce', component: SapSalesforceComponent },
  { path: 'salesforce', component: SalesforceComponent },
  { path: 'microsoft', component: MicrosoftComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'vision', component: VisionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
