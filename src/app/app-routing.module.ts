import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Track',
    pathMatch: 'full',
  },
  {
    path: 'Track',
    loadChildren: () =>
      import('./folder/Pages/Track/track.module').then(
        (m) => m.TrackPageModule
      ),
  },
  {
    path: 'Basic',
    loadChildren: () =>
      import('./folder/Pages/Basic/basic.module').then(
        (m) => m.BasicPageModule
      ),
  },
  {
    path: 'daily-track',
    loadChildren: () =>
      import('./folder/Pages/daily-track/daily-track.module').then(
        (m) => m.DailyTrackPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
