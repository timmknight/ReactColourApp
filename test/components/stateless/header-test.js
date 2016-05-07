import { expect } from '../../test-helper';
import Header from '../../../src/components/header';
import React from 'react';
import sd from 'skin-deep';

describe('Header', () => {

    let component;

    beforeEach(() => {
        component = sd.shallowRender(<Header />);
    });

    it('Should be of type header', () => {
        expect(component.type).eql('header');
    });

	it('Should contain an array', () => {
        expect(component.props.children).to.be.instanceof(Array);
    });

	it('Should have 5 children', () => {
		expect(component.props.children.length).to.eql(5);
    });

	describe('Headers children', () => {

		describe('Headers first child - The logo', () => {

			let child;

			beforeEach(() => {
				child = component.props.children[0];
			});

			it('Should have the class icon', () => {
				expect(child.props.className).to.eql('icon');
			});

			it('Should be of type div', () => {
				expect(child.type).to.eql('div');
				expect(child.type).to.not.eql('h4');
				expect(child.type).to.not.be.instanceof(Function);
			});
		});

		describe('Headers second child - The site title', () => {

			let child;

			beforeEach(() => {
				child = component.props.children[1];
			});

			it('Should contain a h4 as the second child', () => {
				expect(child.type).to.eql('h4');
				expect(child.type).to.not.eql('div');
				expect(child.type).to.not.be.instanceof(Function);
			});

			it('Should have the id site-title', () => {
				expect(child.props.id).to.eql('site-title');
			});

			it('Should not have a class', () => {
				expect(child.props).to.not.contain.property('className');
			});
			
			it('Should contain the text Palette inspiration', () => {
				let text = child.props.children;
				expect(text).to.eql('Palette inspiration');
			});

		});

		describe('Headers last three children - The links', () => {

			let children;

			beforeEach(() => {
				children = component.props.children.slice(2, 5);
			});

			it('Each child should be of type function', () => {
				children.map((child) => {
					expect(child.type).to.be.instanceof(Function);
					expect(child.type).to.not.eql('h4');
					expect(child.type).to.not.eql('div');
				});
			});

			it('Each child should have the className link', () => {
				children.map((child) => {
					let className = child.props.className;
					expect(className).to.eql('link');
					expect(className).to.not.eql('icon');
				});
			});

			it('Each child should have the displayName Link', () => {
				children.map((child) => {
					let displayName = child.type.displayName;
					expect(displayName).to.eql('Link');
					expect(displayName).to.not.eql('icon');
				});
			});

			it('Each child should contain a "to" property and for it not the be blank', () => {
				children.map((child) => {
					let props = child.props;
					expect(props).to.contain.property('to');
					expect(props.to).to.not.eql('');
				});
			});

			it('Each child should contain text', () => {
				children.map((child) => {
					let text = child.props.children;
					expect(text).to.not.eql('');
				});
			});

			describe('The first link - The Home link', () => {

				let child;

				beforeEach(() => {
					child = children[0];
				});

				it('Should contain the text Home', () => {
					let text = child.props.children;
					expect(text).to.eql('Home');
					expect(text).to.not.eql('New');
					expect(text).to.not.eql('About');
				});

				it('Should link to /', () => {
					let link = child.props.to;
					expect(link).to.eql('/');
					expect(link).to.not.eql('/new');
					expect(link).to.not.eql('/about');
				});

			});

			describe('The second link - The New link', () => {

				let child;

				beforeEach(() => {
					child = children[1];
				});

				it('Should contain the text Home', () => {
					let text = child.props.children;
					expect(text).to.eql('New');
					expect(text).to.not.eql('Home');
					expect(text).to.not.eql('About');
				});

				it('Should link to /', () => {
					let link = child.props.to;
					expect(link).to.eql('/new');
					expect(link).to.not.eql('/');
					expect(link).to.not.eql('/about');
				});

			});

			describe('The third link - The About link', () => {

				let child;

				beforeEach(() => {
					child = children[2];
				});

				it('Should contain the text Home', () => {
					let text = child.props.children;
					expect(text).to.eql('About');
					expect(text).to.not.eql('New');
					expect(text).to.not.eql('Home');
				});

				it('Should link to /', () => {
					let link = child.props.to;
					expect(link).to.eql('/about');
					expect(link).to.not.eql('/new');
					expect(link).to.not.eql('/');
				});

			});

		});

	});

});
