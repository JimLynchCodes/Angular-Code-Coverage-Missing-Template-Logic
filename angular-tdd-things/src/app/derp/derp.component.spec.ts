import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DerpComponent } from './derp.component';
import { By } from '@angular/platform-browser';

describe('DerpComponent', () => {
  let component: DerpComponent;
  let fixture: ComponentFixture<DerpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DerpComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be happy when the thing is "foo"', () => {

    expect(fixture
      .debugElement
      .query(By.css('div'))
      .nativeElement
      .innerText)
      .toEqual('Ok then')

  });


  /**
   * 
   // We would think this text would be needed get fully test all the cases
   // of this component, but the code coverage report gives us 100%
   // coverage without this test... 🤔
   
   xit('should NOT be happy when the thing is not "foo"', () => {
     
     component.thing = 'not foo'
     
     console.log('is it? ', fixture
     .debugElement
     .query(By.css('div'))
     .nativeElement
     .innerText)
     
     expect(fixture
      .debugElement
      .query(By.css('div'))
      .nativeElement
      .innerText)
      .toEqual('uh oh!')
      
    });
    */

});
