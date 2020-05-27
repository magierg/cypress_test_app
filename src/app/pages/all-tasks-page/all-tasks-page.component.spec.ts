import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTasksPageComponent } from './all-tasks-page.component';

describe('AllTasksPageComponent', () => {
  let component: AllTasksPageComponent;
  let fixture: ComponentFixture<AllTasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTasksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
