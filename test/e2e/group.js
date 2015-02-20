'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('group', function() {
  var datasetList;

  beforeEach(function() {
    browser.get('/#/groups/foo');
    datasetList = element.all(by.repeater('dataset in group.packages'));
  });

  it('should render a group when user navigates to /#/groups/foo', function() {
    expect(element.all(by.css('.ng-binding')).first().getText()).
      toMatch(/desastres naturales/);
  });

  it('should list its datasets', function() {
    expect(datasetList.count()).toEqual(1);
    expect(datasetList.first().getText()).toMatch('FONDEN');
  });

  it('should link to dataset\'s detailed information', function() {
    // Click on a dataset link
    element(by.binding('dataset.title')).click();
    // Find a download link
    var content = element(by.css('[ng-view]')).getText();
    expect(content).toMatch(/Datos y recursos/);
  });

});
