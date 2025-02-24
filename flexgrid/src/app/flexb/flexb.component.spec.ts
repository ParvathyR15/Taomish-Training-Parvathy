import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexbComponent } from './flexb.component';

describe('FlexbComponent', () => {
  let component: FlexbComponent;
  let fixture: ComponentFixture<FlexbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
