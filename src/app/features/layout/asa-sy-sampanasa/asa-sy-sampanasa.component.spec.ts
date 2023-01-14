import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsaSySampanasaComponent } from './asa-sy-sampanasa.component';

describe('AsaSySampanasaComponent', () => {
  let component: AsaSySampanasaComponent;
  let fixture: ComponentFixture<AsaSySampanasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsaSySampanasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsaSySampanasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
