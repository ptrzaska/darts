import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ResultComponent } from './results/result/result.component';
import { SeasonResultsComponent } from './season-results/season-results.component';
import { ArchiveComponent } from './archive/archive.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { RoundResultComponent } from './results/round-result/round-result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'results',
    pathMatch: 'full'
  },
  { 
    path: 'results', 
    component: RoundResultComponent 
  },
  { 
    path: 'season', 
    component: SeasonResultsComponent
  },
  { 
    path: 'archive',
    component: ArchiveComponent
  },
  { 
    path: 'statistics',
    component: StatisticsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
