import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCenterComponent } from './support-center.component';

describe('SupportCenterComponent', () => {
  let component: SupportCenterComponent;
  let fixture: ComponentFixture<SupportCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
