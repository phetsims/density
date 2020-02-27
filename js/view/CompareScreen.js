// Copyright 2019-2020, University of Colorado Boulder

/**
 * Compare screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DensityBuoyancyCommonColorProfile
  from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColorProfile.js';
import DensityCompareModel from '../../../density-buoyancy-common/js/density/model/DensityCompareModel.js';
import DensityCompareScreenView from '../../../density-buoyancy-common/js/density/view/DensityCompareScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import densityStrings from '../density-strings.js';
import density from '../density.js';

const screenCompareString = densityStrings.screen.compare;

class CompareScreen extends Screen {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    super(
      () => new DensityCompareModel( tandem.createTandem( 'model' ) ),
      model => new DensityCompareScreenView( model, tandem.createTandem( 'view' ) ),
      {
        name: screenCompareString,
        backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
        tandem: tandem
      }
    );
  }
}

density.register( 'CompareScreen', CompareScreen );
export default CompareScreen;