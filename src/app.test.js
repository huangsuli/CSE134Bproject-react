import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import About from './components/About';
import Rate from './components/Rate';
import Contact from './components/Contact';
import Index from './components/Index';
import Header from './components/subComponents/Header';
import Footer from './components/subComponents/Footer';

require.extensions['.svg'] = () => {};
require.extensions['.png'] = () => {};
require.extensions['.jpeg'] = () => {};
require.extensions['.jpg'] = () => {};

describe('<About />', () => {
    it('creates an about us page', () => {
      const renderedComponent = shallow(
        <About />
      );
  
      expect(
        renderedComponent
      ).toExist();
    });
  })

  describe('<Contact />', () => {
    it('creates a contact page', () => {
      const renderedComponent = shallow(
        <Contact />
      );
      expect(
        renderedComponent
      ).toExist();
    });

    it('contains a submit button', () => {
      const renderedComponent = shallow(
        <Contact />
      );
      const wrapper = mount(<Contact />);
      const submitButton = wrapper.find("input").last;
      expect(
        submitButton
      ).toExist();
    });
  })

  describe('<Index />', () => {
    it('creates an index page', () => {
      const renderedComponent = shallow(
        <Index />
      );
      expect(
        renderedComponent
      ).toExist();
    });

    it('has a heading', () => {
      const renderedComponent = shallow(
        <Index />
      );
      const wrapper = mount(<Index />);
      const heading = wrapper.find('h1').text();
      const text = " Welcome to WebMD ";
      expect(
        heading).toEqual(text);
    });
  })

  describe('<Rate />', () => {
    it('creates an rating page', () => {
      const renderedComponent = shallow(
        <Index />
      );
      expect(
        renderedComponent
      ).toExist();
    });

    it('contains a submit button', () => {
      const renderedComponent = shallow(
        <Rate />
      );
      const wrapper = mount(<Rate />);
      const submitButton = wrapper.find("input").last;
      expect(
        submitButton).toExist();
    });
  })

  describe('<Header />', () => {
    it('creates a header for the website', () => {
      const renderedComponent = shallow(
        <Index />
      );
      expect(
        renderedComponent
      ).toExist();
    });
  })

  describe('<Footer />', () => {
    it('creates a footer for the website', () => {
      const renderedComponent = shallow(
        <Footer />
      );
      expect(
        renderedComponent
      ).toExist();
    });
  })



