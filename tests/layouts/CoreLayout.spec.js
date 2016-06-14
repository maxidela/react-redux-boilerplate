import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CoreLayout from 'layouts/CoreLayout/CoreLayout';

const shallowRender =  (component) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
};

const shallowRenderWithProps = (props = {}) => {
  return shallowRender(<CoreLayout {...props} />);
};

describe('(Layout) Core', () => {
  let _component;
  let _props;
  let _child;

  beforeEach(() => {
    _child = <h1 className='children'>Children</h1>;
    _props = {
      children: _child
    };

    _component = shallowRenderWithProps(_props);
  });

  it('Should render as a <div>.', () => {
    expect(_component.type).to.equal('div');
  });
});
