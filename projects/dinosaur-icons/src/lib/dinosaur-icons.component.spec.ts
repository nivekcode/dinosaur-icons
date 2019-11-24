import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaurIconsComponent } from './dinosaur-icons.component';

describe('DinosaurIconsComponent', () => {
  let component: DinosaurIconsComponent;
  let fixture: ComponentFixture<DinosaurIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosaurIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosaurIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
