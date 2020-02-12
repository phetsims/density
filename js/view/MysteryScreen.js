// Copyright 2019-2020, University of Colorado Boulder

/**
 * Mystery screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const DensityMysteryModel = require( 'DENSITY_BUOYANCY_COMMON/density/model/DensityMysteryModel' );
  const DensityMysteryScreenView = require( 'DENSITY_BUOYANCY_COMMON/density/view/DensityMysteryScreenView' );
  const density = require( 'DENSITY/density' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenMysteryString = require( 'string!DENSITY/screen.mystery' );

  class MysteryScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new DensityMysteryModel( tandem.createTandem( 'model' ) ),
        model => new DensityMysteryScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: screenMysteryString,
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return density.register( 'MysteryScreen', MysteryScreen );
} );
