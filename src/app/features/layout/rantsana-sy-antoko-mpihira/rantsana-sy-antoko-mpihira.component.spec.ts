import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RantsanaSyAntokoMpihiraComponent } from './rantsana-sy-antoko-mpihira.component';

describe('RantsanaSyAntokoMpihiraComponent', () => {
  let component: RantsanaSyAntokoMpihiraComponent;
  let fixture: ComponentFixture<RantsanaSyAntokoMpihiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RantsanaSyAntokoMpihiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RantsanaSyAntokoMpihiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
