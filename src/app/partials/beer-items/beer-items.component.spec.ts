import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerItemsComponent } from './beer-items.component';

describe('BeerItemComponent', () => {
  let component: BeerItemsComponent;
  let fixture: ComponentFixture<BeerItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
