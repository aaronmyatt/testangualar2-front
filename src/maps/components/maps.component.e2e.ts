describe('PointsComponent', function() {

  beforeEach(function() {
    browser.get('maps');
  });

  it('should have correct feature heading', function() {
      expect(element(by.css('sd-app sd-about h2')).getText())
      .toEqual('Maps');
  });
});
