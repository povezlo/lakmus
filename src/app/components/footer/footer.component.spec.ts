import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create full year date', () => {
    expect(component.currentDate).toEqual(new Date().getFullYear());
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const footer = compiled.querySelector('footer');
    const date = String(new Date().getFullYear());
    expect(footer.textContent).toContain(date);
  });
});
