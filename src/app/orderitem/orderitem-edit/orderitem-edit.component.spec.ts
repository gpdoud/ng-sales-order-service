import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemEditComponent } from './orderitem-edit.component';

describe('OrderitemEditComponent', () => {
  let component: OrderitemEditComponent;
  let fixture: ComponentFixture<OrderitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
