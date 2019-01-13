import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BusinessComponent } from './components/categories/business/business.component';
import { HealthComponent } from './components/categories/health/health.component';
import { SportsComponent } from './components/categories/sports/sports.component';
import { TechnologyComponent } from './components/categories/technology/technology.component';
import { ScienceComponent } from './components/categories/science/science.component';
import { EntertainmentComponent } from './components/categories/entertainment/entertainment.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'buscar/:text', component: SearchComponent },
  {
    path: 'categoria',
    component: CategoriesComponent,
    children: [
      { path: 'ciencia', component: ScienceComponent },
      { path: 'deportes', component: SportsComponent },
      { path: 'economia', component: BusinessComponent },
      { path: 'entretenimiento', component: EntertainmentComponent },
      { path: 'salud', component: HealthComponent },
      { path: 'tecnologia', component: TechnologyComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
