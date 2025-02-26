import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsOneComponent } from './items-one.component';

describe('PageOneComponent', () => {
  let component: ItemsOneComponent;
  let fixture: ComponentFixture<ItemsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
