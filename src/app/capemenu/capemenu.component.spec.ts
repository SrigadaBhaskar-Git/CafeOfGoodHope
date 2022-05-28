import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapemenuComponent } from './capemenu.component';

describe('CapemenuComponent', () => {
  let component: CapemenuComponent;
  let fixture: ComponentFixture<CapemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
