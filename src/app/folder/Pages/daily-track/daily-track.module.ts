import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyTrackPageRoutingModule } from './daily-track-routing.module';

import { DailyTrackPage } from './daily-track.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyTrackPageRoutingModule
  ],
  declarations: [DailyTrackPage]
})
export class DailyTrackPageModule {}
