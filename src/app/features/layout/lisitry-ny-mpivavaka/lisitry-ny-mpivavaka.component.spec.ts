import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisitryNyMpivavakaComponent } from './lisitry-ny-mpivavaka.component';

describe('LisitryNyMpivavakaComponent', () => {
  let component: LisitryNyMpivavakaComponent;
  let fixture: ComponentFixture<LisitryNyMpivavakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisitryNyMpivavakaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisitryNyMpivavakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
