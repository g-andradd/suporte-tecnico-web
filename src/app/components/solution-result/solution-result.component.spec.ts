import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionResultComponent } from './solution-result.component';

describe('SolutionResultComponent', () => {
  let component: SolutionResultComponent;
  let fixture: ComponentFixture<SolutionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
