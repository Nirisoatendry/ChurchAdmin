import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaranakaComponent } from './taranaka.component';

describe('TaranakaComponent', () => {
  let component: TaranakaComponent;
  let fixture: ComponentFixture<TaranakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaranakaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaranakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
