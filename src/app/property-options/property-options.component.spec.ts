import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyOptionsComponent } from './property-options.component';

describe('PropertyOptionsComponent', () => {
  let component: PropertyOptionsComponent;
  let fixture: ComponentFixture<PropertyOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
