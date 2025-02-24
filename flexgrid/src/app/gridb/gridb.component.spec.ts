import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridbComponent } from './gridb.component';

describe('GridbComponent', () => {
  let component: GridbComponent;
  let fixture: ComponentFixture<GridbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
