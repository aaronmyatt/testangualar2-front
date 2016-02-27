describe('PointsComponent', function() {

  beforeEach(function() {
    browser.get('points');
  });

  it('should have correct feature heading', function() {
      expect(element(by.css('sd-app sd-about h2')).getText())
      .toEqual('Points');
  });
});
