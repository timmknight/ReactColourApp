import { expect } from '../../test-helper';
import About from '../../../src/components/about';
import React from 'react';
import sd from 'skin-deep';

describe('About section', () => {
    let component;

    beforeEach(() => {
        component = sd.shallowRender(<About />);
    });

    it('should be of type div', () => {
        expect(component.type).to.eql('div');
    });

    it('should have the id about', () => {
        expect(component.props.id).to.eql('about');
    });

    it('should have the class animated and fadeIn', () => {
        expect(component.props.className).to.eql('animated fadeIn');
    });
    
    it('should contain the text "as a project to learn React.js"', () => {
        expect(component.props.children).to.contain('as a project to learn React.js');
    });
});
