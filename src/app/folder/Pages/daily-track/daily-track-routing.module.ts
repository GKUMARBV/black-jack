import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyTrackPage } from './daily-track.page';

const routes: Routes = [
  {
    path: '',
    component: DailyTrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyTrackPageRoutingModule {}
