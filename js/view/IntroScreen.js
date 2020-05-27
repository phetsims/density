// Copyright 2019-2020, University of Colorado Boulder

/**
 * Intro screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DensityBuoyancyCommonColorProfile from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColorProfile.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import DensityIntroModel from '../../../density-buoyancy-common/js/density/model/DensityIntroModel.js';
import DensityIntroScreenView from '../../../density-buoyancy-common/js/density/view/DensityIntroScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import density from '../density.js';
import densityStrings from '../densityStrings.js';

const screenIntroString = densityStrings.screen.intro;

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
        homeScreenIcon: new ScreenIcon( DensityBuoyancyScreenView.getDensityIntroIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem
      }
    );
  }
}

density.register( 'IntroScreen', IntroScreen );
export default IntroScreen;