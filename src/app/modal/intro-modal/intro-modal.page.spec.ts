import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroModalPage } from './intro-modal.page';

describe('IntroModalPage', () => {
  let component: IntroModalPage;
  let fixture: ComponentFixture<IntroModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
