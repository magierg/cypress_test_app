import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantTasksPageComponent } from './important-tasks-page.component';

describe('ImportantTasksPageComponent', () => {
  let component: ImportantTasksPageComponent;
  let fixture: ComponentFixture<ImportantTasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantTasksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
