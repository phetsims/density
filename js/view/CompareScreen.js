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
  const DensityCompareScreenView = require( 'DENSITY_BUOYANCY_COMMON/density/view/DensityCompareScreenView' );
  const density = require( 'DENSITY/density' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenCompareString = require( 'string!DENSITY/screen.compare' );

  class CompareScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new DensityComparingModel( tandem.createTandem( 'model' ) ),
        model => new DensityCompareScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: screenCompareString,
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return density.register( 'CompareScreen', CompareScreen );
} );
