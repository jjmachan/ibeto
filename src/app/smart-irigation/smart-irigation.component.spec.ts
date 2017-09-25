import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartIrigationComponent } from './smart-irigation.component';

describe('SmartIrigationComponent', () => {
  let component: SmartIrigationComponent;
  let fixture: ComponentFixture<SmartIrigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartIrigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartIrigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
