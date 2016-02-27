import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {ProfileComponent} from './profile.component';

export function main() {
  describe('About component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then((rootTC) => {
            let profileDOMEl = rootTC.debugElement.children[0].nativeElement;
            expect(DOM.querySelectorAll(profileDOMEl, 'h2')[0].textContent).toEqual('Profile');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  directives: [ProfileComponent],
  template: '<sd-profile></sd-profile>'
})
class TestComponent {}
