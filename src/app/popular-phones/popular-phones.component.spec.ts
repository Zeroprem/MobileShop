import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPhonesComponent } from './popular-phones.component';

describe('PopularPhonesComponent', () => {
  let component: PopularPhonesComponent;
  let fixture: ComponentFixture<PopularPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPhonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
