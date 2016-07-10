import { expect } from '../../test-helper';
import ColorPalette from '../../../src/components/color_palette';
import React from 'react';
import sd from 'skin-deep';

describe('Color Palette', () => {

	let component;
	let children;

	beforeEach(() => {
		component = sd.shallowRender(<ColorPalette palette={ { "title": "Dropbox", "colors": ["#007ee5", "#7b8994", "#FFFFFF", "#47525d"] } } />);
		children = component.props.children;
	});

	it('Should be if type div', () => {
		expect(component.type).to.eql('div');
	});

	it('Should have the class animated fadeIn', () => {
		expect(component.props.className).to.eql('animated fadeIn');
	});

	it('Should contain a child h4 as the first child', () => {
		expect(children[0].type).to.eql('h4');
		expect(children[0].type).to.not.eql('div');
	});

	it('Should contain a child div as the second child', () => {
		expect(children[1].type).to.eql('div');
		expect(children[1].type).to.not.eql('h4');
	});

	describe('First child - h4 - Palette title', () => {

		let child;

		beforeEach(() => {
			child = component.props.children[0];
		});

    it('Should have the className palette-title', () => {
			expect(child.props.className).to.eql('palette-title');
    });

		it('Should have the text Dropbox', () => {
			let text = child.props.children;
			expect(text).to.eql('Dropbox');
    });

	});

	describe('Second child - div - the colors', () => {

		let child;

		beforeEach(() => {
			child = component.props.children[1];
		});

    it('Should have the className palette-container', () => {
			expect(child.props.className).to.eql('palette-container');
    });

		it('Should contain an array of 4 items as a child', () => {
			expect(child.props.children).to.be.instanceOf(Array);
			expect(child.props.children.length).to.eql(4);
    });

		describe('Colors array', () => {

			let colors;

			beforeEach(() => {
				colors = component.props.children[1].props.children;
			});

			it('Each color should be of type function', () => {
				colors.map((color) => {
					expect(color.type).to.be.instanceOf(Function);
				});
			});

			it('Each color should have a unique incremental key', () => {
				let expectedKey = 0;
				colors.map((color) => {
					// Need to coerc the color's key as it's a string in the shallowRender
					let key = parseInt(color.key);
					expect(key).to.eql(expectedKey);
					expectedKey++;
				});
			});

			it('Each color should have a color property', () => {
				colors.map((color) => {
					expect(color.props).to.have.property('color');
				});
			});

			describe('Each color', () => {

				it('Should not be blank', () => {
					colors.map((color) => {
						expect(color.props.color).to.not.eql('');
					});
				});

				it('Should contain a hex color', () => {
					const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i
					colors.map((color) => {
						let match = color.props.color.match(regex)
						expect(match).to.not.eql(null);
					});
				});

			});

		});

	});

});

