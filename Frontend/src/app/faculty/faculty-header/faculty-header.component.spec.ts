import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyHeaderComponent } from './faculty-header.component';

describe('FacultyHeaderComponent', () => {
  let component: FacultyHeaderComponent;
  let fixture: ComponentFixture<FacultyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
