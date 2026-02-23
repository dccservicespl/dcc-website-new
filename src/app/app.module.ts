import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { AboutComponent } from './components/home/about/about.component';
import { ServicesComponent } from './components/home/services/services.component';
import { SuccessStoriesComponent } from './components/home/success-stories/success-stories.component';
import { TrustedByComponent } from './components/home/trusted-by/trusted-by.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    SuccessStoriesComponent,
    TrustedByComponent,
    DetailsComponent,
    HomeComponent,
    SolutionsComponent,
    IndustriesComponent,
    TechnologiesComponent,
    ServiceComponent,
    SapSalesforceComponent,
    MicrosoftComponent,
    SalesforceComponent,
    MissionComponent,
    VisionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
