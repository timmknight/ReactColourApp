import { expect } from '../../test-helper';
import ColorSample from '../../../src/components/color_sample';
import React from 'react';
import sd from 'skin-deep';

describe('Color Sample', () => {

    let component;
    let children;

    beforeEach(() => {
        component = sd.shallowRender(<ColorSample color={'#234543'} />);
        children = component.props.children;
    });

    it('Should be of type div', () => {
        expect(component.type).to.eql('div');
    });

    it('Should have the className color-svg', () => {
        expect(component.props.className).to.eql('color-svg');
    });

    it('Should have two children', () => {
        expect(children.length).to.eql(2);
    });

    describe('First child - SVG', () => {

        let child;

        beforeEach(() => {
            child = children[0];
        });

        it('Should be of type svg', () => {
            expect(child.type).to.eql('svg');
        });

        it('Should have the className droplet', () => {
            expect(child.props.className).to.eql('droplet');
        });

        describe('SVG path', () => {

            let path;

            beforeEach(() => {
                path = child.props.children;
            });

            it('Should be of type path', () => {
                expect(path.type).to.eql('path');
            });

            it('Should have the a style property', () => {
                expect(path.props).to.have.property('style');
            });
            
            it('Style property should not be blank', () => {
                expect(path.props.style.fill).to.not.eql('');
            });
            
            it('Style property should contain the color props', () => {
                expect(path.props.style.fill).to.eql('#234543');
            });

        });
    });

    describe('Second child child - color-text', () => {

        let child;

        beforeEach(() => {
            child = children[1];
        });

        it('Should be of type p', () => {
            expect(child.type).to.eql('p');
        });

        it('Should have the className hide color-text', () => {
            expect(child.props.className).to.eql('hide color-text');
        });

        it('Should have the color as text', () => {
            expect(child.props.children).to.eql('#234543');
        });

    });

});
