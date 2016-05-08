import { expect } from '../../test-helper';
import Footer from '../../../src/components/footer';
import React from 'react';
import sd from 'skin-deep';

describe('Footer', () => {

    let component;

    beforeEach(() => {
        component = sd.shallowRender(<Footer />);
    });

    it('Should be of type footer', () => {
        expect(component.type).to.eql('footer');
    });

    it('Should contain a child of type div', () => {
        expect(component.props.children.type).to.eql('div');
    });

    describe('Child', () => {
        
        let child;
        
        beforeEach(() => {
            child = component.props.children;
        });
        
        it('The child div should contain the text', () => {
            expect(child.props.children).to.eql('Built by Tim Knight');
        });

    });

});
