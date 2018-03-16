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
//other components
import Chat from './components/Chat';
import Signup from './components/Signup';
import Login from './components/Login';
import RequestDetail from './components/RequestDetail';
import EditProfile from './components/profileComponents/EditProfile';
import ProfileView from './components/profileComponents/ProfileView'

require.extensions['.svg'] = () => {};
require.extensions['.png'] = () => {};
require.extensions['.jpeg'] = () => {};
require.extensions['.jpg'] = () => {};


//ajax testing
//redux testing

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
    
    it('contains a form', () => {
      const renderedComponent = shallow(
        <Contact />
      );
      const wrapper = mount(<Contact />);
      const form = wrapper.find("form");

      expect(
        form
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

    it('contains the proper heading', () => {
      const renderedComponent = shallow(
        <Contact />
      );
      const wrapper = mount(<Contact />);
      const title = wrapper.find('h1').text();
      const text = "Need to reach us?";
      expect(
        title
      ).toEqual(text);
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

  //other tests
  describe('<Chat />', () => {
    it('creates a chat component', () => {
      const renderedComponent = shallow(
        <Chat />
      );
  
      expect(
        renderedComponent
      ).toExist();
    });
  })

  describe('<Login />', () => {
    it('creates a login component', () => {
      const renderedComponent = shallow(
        <Login />
      );
  
      expect(
        renderedComponent
      ).toExist();
    });
  })

  describe('<Signup />', () => {
    it('creates a sign up page', () => {
      const renderedComponent = shallow(
        <Signup />
      );
  
      expect(
        renderedComponent
      ).toExist();
    });

    it('contains a form', () => {
      const renderedComponent = shallow(
        <Contact />
      );
      const wrapper = mount(<Contact />);
      const form = wrapper.find("form");

      expect(
        form
      ).toExist();
    });
  })