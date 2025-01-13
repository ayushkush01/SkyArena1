import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroComponent } from './restro.component';

describe('RestroComponent', () => {
  let component: RestroComponent;
  let fixture: ComponentFixture<RestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
