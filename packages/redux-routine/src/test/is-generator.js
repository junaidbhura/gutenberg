/**
 * Internal dependencies
 */
import isGenerator from '../is-generator';

describe( 'isGenerator', () => {
	it( 'should return false if not a generator', () => {
		[
			undefined,
			null,
			10,
			'foo',
			function() {},
			function* () {},
		].forEach( ( value ) => {
			expect( isGenerator( value ) ).toBe( false );
		} );
	} );

	it( 'should return true if a generator', () => {
		const value = ( function* () {}() );

		expect( isGenerator( value ) ).toBe( true );
	} );
} );
