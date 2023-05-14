import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProfessionalSkillsComponent } from './components/professional-skills/professional-skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { ReferencesComponent } from './components/references/references.component';
import { MapComponent } from './components/map/map.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { SocialMediaGroupComponent } from './components/social-media-group/social-media-group.component';
import { TextArticleComponent } from './components/text-article/text-article.component';
import { UnorderedListComponent } from './components/unordered-list/unordered-list.component';
import { ProgressListComponent } from './components/progress-list/progress-list.component';
import { CircleIconGroupComponent } from './components/circle-icon-group/circle-icon-group.component';


const routes: Routes = [
  { path: 'collage', component: PortfolioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    AboutSectionComponent,
    ProfessionalSkillsComponent,
    PortfolioComponent,
    WorkExperienceComponent,
    EducationComponent,
    ReferencesComponent,
    MapComponent,
    ContactMeComponent,
    SocialMediaGroupComponent,
    TextArticleComponent,
    UnorderedListComponent,
    ProgressListComponent,
    CircleIconGroupComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}



