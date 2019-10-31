// Copyright 2019, University of Colorado Boulder

/**
 * Intro screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const DensityComparingModel = require( 'DENSITY_BUOYANCY_COMMON/density/model/DensityComparingModel' );
  const DensityComparingScreenView = require( 'DENSITY_BUOYANCY_COMMON/density/view/DensityComparingScreenView' );
  const density = require( 'DENSITY/density' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenComparingString = require( 'string!DENSITY/screen.comparing' );

  class ComparingScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new DensityComparingModel( tandem.createTandem( 'model' ) ),
        model => new DensityComparingScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: screenComparingString,
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return density.register( 'ComparingScreen', ComparingScreen );
} );
