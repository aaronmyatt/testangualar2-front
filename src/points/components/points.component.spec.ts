import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {PointsComponent} from './points.component';

export function main() {
  describe('About component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let pointsDOMEl = rootTC.debugElement.children[0].nativeElement;
            expect(DOM.querySelectorAll(pointsDOMEl, 'h2')[0].textContent).toEqual('Points');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [PointsComponent],
  template: '<sd-points></sd-points>'
})
class TestComponent {}
