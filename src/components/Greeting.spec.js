import React from 'react';
import { shallow } from 'enzyme';
import { Greeting } from './Greeting';

describe('Greeting', () => {
    it('should render h1', () => {
        const component = shallow(<Greeting />);
        expect(component.find('h1').length).toBe(1);
    });

    it('should greet by name', () => {
        const NAME = 'my name';
        const component = shallow(<Greeting name={NAME} />);
        expect(component.text()).toBe(`Hello, ${NAME}`);
    });
});
