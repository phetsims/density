// Copyright 2019-2020, University of Colorado Boulder

/**
 * Compare screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DensityBuoyancyCommonQueryParameters from '../../../density-buoyancy-common/js/common/DensityBuoyancyCommonQueryParameters.js';
import DensityBuoyancyCommonColorProfile from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColorProfile.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import DensityCompareModel from '../../../density-buoyancy-common/js/density/model/DensityCompareModel.js';
import DensityCompareScreenView from '../../../density-buoyancy-common/js/density/view/DensityCompareScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import compareScreenIcon from '../../mipmaps/compare-screen-icon_png.js';
import density from '../density.js';
import densityStrings from '../densityStrings.js';

const screenCompareString = densityStrings.screen.compare;

class CompareScreen extends Screen {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    const icon = DensityBuoyancyCommonQueryParameters.generateIconImages ? DensityBuoyancyScreenView.getDensityCompareIcon() : new Image( compareScreenIcon );

    super(
      () => new DensityCompareModel( tandem.createTandem( 'model' ) ),
      model => new DensityCompareScreenView( model, tandem.createTandem( 'view' ) ),
      {
        name: screenCompareString,
        backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( icon, {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem
      }
    );
  }
}

density.register( 'CompareScreen', CompareScreen );
export default CompareScreen;