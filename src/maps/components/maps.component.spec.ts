import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {MapsComponent} from './maps.component';
//import {PointsService} from '../../api/points.service';


export function main() {
  describe('Map component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let mapsDOMEl = rootTC.debugElement.children[0].nativeElement;
            expect(DOM.querySelectorAll(mapsDOMEl, 'h2')[0].textContent).toEqual('Maps');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [MapsComponent],
  template: '<sd-maps></sd-maps>'
})
class TestComponent {}
