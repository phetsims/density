// Copyright 2019, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const density = require( 'DENSITY/density' );
  const DensityModel = require( 'DENSITY/density/model/DensityModel' );
  const DensityScreenView = require( 'DENSITY/density/view/DensityScreenView' );

  class DensityScreen extends Screen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {

      const options = {
        backgroundColorProperty: new Property( 'white' ),
        tandem: tandem
      };

      super(
        () => new DensityModel( tandem.createTandem( 'model' ) ),
        ( model ) => new DensityScreenView( model, tandem.createTandem( 'view' ) ),
        options
      );
    }
  }

  return density.register( 'DensityScreen', DensityScreen );
} );