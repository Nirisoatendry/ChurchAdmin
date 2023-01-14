import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HampiditraComponent } from './hampiditra.component';

describe('HampiditraComponent', () => {
  let component: HampiditraComponent;
  let fixture: ComponentFixture<HampiditraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HampiditraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HampiditraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
