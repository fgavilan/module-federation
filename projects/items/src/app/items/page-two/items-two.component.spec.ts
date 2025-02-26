import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTwoComponent } from './items-two.component';

describe('PageTwoComponent', () => {
  let component: ItemsTwoComponent;
  let fixture: ComponentFixture<ItemsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
