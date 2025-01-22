import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGButtonComponent } from './header-g-button.component';

describe('HeaderGButtonComponent', () => {
  let component: HeaderGButtonComponent;
  let fixture: ComponentFixture<HeaderGButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
