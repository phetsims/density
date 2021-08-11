// Copyright 2019-2021, University of Colorado Boulder

/**
 * Explore screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DensityBuoyancyCommonQueryParameters from '../../../density-buoyancy-common/js/common/DensityBuoyancyCommonQueryParameters.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import DensityExploreModel from '../../../density-buoyancy-common/js/density/model/DensityExploreModel.js';
import DensityExploreScreenView from '../../../density-buoyancy-common/js/density/view/DensityExploreScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import exploreScreenIcon from '../../mipmaps/explore-screen-icon_png.js';
import density from '../density.js';
import densityStrings from '../densityStrings.js';

const screenExploreString = densityStrings.screen.explore;

class ExploreScreen extends Screen {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    const icon = DensityBuoyancyCommonQueryParameters.generateIconImages ? DensityBuoyancyScreenView.getDensityExploreIcon() : new Image( exploreScreenIcon );

    super(
      () => new DensityExploreModel( tandem.createTandem( 'model' ) ),
      model => new DensityExploreScreenView( model, tandem.createTandem( 'view' ) ),
      {
        name: screenExploreString,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( icon, {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem
      }
    );
  }
}

density.register( 'ExploreScreen', ExploreScreen );
export default ExploreScreen;