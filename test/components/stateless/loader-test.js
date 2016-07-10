import { expect } from '../../test-helper';
import Loader from '../../../src/components/loader';
import React from 'react';
import sd from 'skin-deep';

describe('Loader', () => {
    let component;

    beforeEach(() => {
        component = sd.shallowRender(<Loader />);
    });

    it('Should be of type div', () => {
        expect(component.type).eql('div');
    });

    it('Should have the class loading-container', () => {
        expect(component.props.className).eql('loading-container');
    });

    describe('Loading-containers child', () => {
        it('Should be of type div', () => {
            expect(component.props.children.type).eql('div');
        });

        it('Should have the class loader', () => {
            expect(component.props.children.props.className).eql('loader');
        });

        it('Should have 7 children', () => {
            expect(component.props.children.props.children.length).eql(7);
        });


        it('Should have contain an array', () => {
            expect(component.props.children.props.children).to.be.instanceof(Array);
        });

        describe('The loader\'s children', () => {
            it('Each child should be a div', () => {
                let arr = component.props.children.props.children;
                arr.map((child) => {
                    expect(child.type).eql('div');
                });
            });

            it('The first 6 children should have the class loader--dot ', () => {
                let arr = component.props.children.props.children;
                for (let i = 0; i < arr.length - 1; i++) {
                    let child = arr[i];
                    expect(child.props.className).to.eql('loader--dot');
                }
            });

            it('The last 6 child should have the class loader--text ', () => {
                let lastChild = component.props.children.props.children.pop();
                expect(lastChild.props.className).to.eql('loader--text');
            });
            
        });

    });

});
