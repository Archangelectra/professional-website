import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastProjects } from './past-projects';

describe('PastProjects', () => {
  let component: PastProjects;
  let fixture: ComponentFixture<PastProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
