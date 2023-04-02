import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClipsComponent } from './clips.component';

describe('ClipsComponent', () => {
  let component: ClipsComponent;
  let fixture: ComponentFixture<ClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClipsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
