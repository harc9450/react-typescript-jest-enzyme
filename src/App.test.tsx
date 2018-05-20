import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import * as React from "react";
import App from './App';

describe("App", () => {
  let wrapper: ReactWrapper;
  let component: ShallowWrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
    component = shallow(<App />);
  });

  test('it renders', () => {
    expect(wrapper.html()).toContain('<div class="App">');
  });

  test('don\'t have any property', () => {
    expect(component.instance().props).toEqual({});
  });

  /** added method in the branch - origin/users/enzyme */
  test('headers should have the class name App-header', () => {
    expect(component).toMatchSnapshot('<header className="App-header">');
  });

  /** added method in the branch - origin/users/react */
  test('paragraph should have the class name App-intro', () => {
    expect(component).toMatchSnapshot('<p className="App-intro">');
  });
  
})
