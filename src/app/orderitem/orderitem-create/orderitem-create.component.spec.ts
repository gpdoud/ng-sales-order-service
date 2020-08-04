import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderitemCreateComponent } from './orderitem-create.component';

describe('OrderitemCreateComponent', () => {
  let component: OrderitemCreateComponent;
  let fixture: ComponentFixture<OrderitemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderitemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderitemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
