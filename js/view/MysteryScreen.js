// Copyright 2019-2020, University of Colorado Boulder

/**
 * Mystery screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DensityBuoyancyCommonColorProfile
  from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColorProfile.js';
import DensityMysteryModel from '../../../density-buoyancy-common/js/density/model/DensityMysteryModel.js';
import DensityMysteryScreenView from '../../../density-buoyancy-common/js/density/view/DensityMysteryScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import densityStrings from '../density-strings.js';
import density from '../density.js';

const screenMysteryString = densityStrings.screen.mystery;

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

density.register( 'MysteryScreen', MysteryScreen );
export default MysteryScreen;