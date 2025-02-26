import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTwoComponent } from './users-two.component';

describe('PageTwoComponent', () => {
  let component: UsersTwoComponent;
  let fixture: ComponentFixture<UsersTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
