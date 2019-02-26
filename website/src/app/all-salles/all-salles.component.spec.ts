import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSallesComponent } from './all-salles.component';

describe('AllSallesComponent', () => {
  let component: AllSallesComponent;
  let fixture: ComponentFixture<AllSallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
