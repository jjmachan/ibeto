import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseDetectionComponent } from './disease-detection.component';

describe('DiseaseDetectionComponent', () => {
  let component: DiseaseDetectionComponent;
  let fixture: ComponentFixture<DiseaseDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseaseDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
