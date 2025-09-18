import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjects } from './current-projects';

describe('CurrentProjects', () => {
  let component: CurrentProjects;
  let fixture: ComponentFixture<CurrentProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
