import React from "react";
import { shallow, mount, render } from 'enzyme';
import App from "./App";
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import Main from "./Main"
import EditForm from "./Components/Form/EditForm"
import UserView from "./Components/Responding/UserView"

configure({adapter: new Adapter()});

it('rendering', ()=> {
    // const wrapper = mount(<App />);
    // expect(wrapper.find(App).state("error")).toEqual(null);
    mount(<App />)
})


it('rendering', ()=> {
    // const wrapper = mount(<Main />);
    // expect(wrapper.state("error")).toEqual(null);
    shallow(<Main />)
})


// it('rendering', ()=> {
//     const wrapper = mount(<EditForm />);
//     expect(wrapper.state("error")).toEqual(null);
//     shallow(<EditForm />)
// })

// it('rendering', ()=> {
//     // const wrapper = mount(<UserView />);
//     // expect(wrapper.state("error")).toEqual(null);
//     shallow(<UserView />)
// })