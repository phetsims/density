// Copyright 2019, University of Colorado Boulder

/**
 * Intro screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const density = require( 'DENSITY/density' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const DensityIntroModel = require( 'DENSITY_BUOYANCY_COMMON/density/model/DensityIntroModel' );
  const DensityIntroScreenView = require( 'DENSITY_BUOYANCY_COMMON/density/view/DensityIntroScreenView' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenIntroString = require( 'string!DENSITY/screen.intro' );

  class IntroScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new DensityIntroModel( tandem.createTandem( 'model' ) ),
        model => new DensityIntroScreenView( model, tandem.createTandem( 'view' ) ),
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
