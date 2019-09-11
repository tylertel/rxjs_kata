import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelThreeComponent } from './level-three.component';

xdescribe('LevelThreeComponent', () => {
  let component: LevelThreeComponent;
  let fixture: ComponentFixture<LevelThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
