import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyTrackPage } from './daily-track.page';

describe('DailyTrackPage', () => {
  let component: DailyTrackPage;
  let fixture: ComponentFixture<DailyTrackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DailyTrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
