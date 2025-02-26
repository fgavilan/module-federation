import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOneComponent } from './users-one.component';

describe('PageOneComponent', () => {
  let component: UsersOneComponent;
  let fixture: ComponentFixture<UsersOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
