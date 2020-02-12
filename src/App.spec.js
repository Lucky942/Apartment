import Buttons from "./components/styles/Buttons";
import React from "react";
import {Button} from "./components/styles/Buttons"
const foo = 'bar';


describe('Buttons Component', () => {
    it('renders the Buttons Component ', function () {
        const wrapper = shallow(<Buttons/>);
        expect(wrapper.find(Button)).to.have.length(2);
    });
});

/*
describe('Local State', () => {
    it('should increment the counter in state', () => {
        expect(foo).to.be.a('string');
    });
    it('should has a length of 3 symbols', () =>  {
        expect(foo).to.have.lengthOf(2);
    });
});*/
