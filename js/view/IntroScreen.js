// Copyright 2019, University of Colorado Boulder

/**
 * Intro screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const Demo2DScreenView = require( 'DENSITY_BUOYANCY_COMMON/common/view/Demo2DScreenView' );
  const density = require( 'DENSITY/density' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const DensityBuoyancyModel = require( 'DENSITY_BUOYANCY_COMMON/common/model/DensityBuoyancyModel' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenIntroString = require( 'string!DENSITY/screen.intro' );

  class IntroScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new DensityBuoyancyModel( tandem.createTandem( 'model' ) ),
        model => new Demo2DScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: screenIntroString,
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return density.register( 'IntroScreen', IntroScreen );
} );
