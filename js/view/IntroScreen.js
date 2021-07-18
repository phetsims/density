// Copyright 2019-2021, University of Colorado Boulder

/**
 * Intro screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DensityBuoyancyCommonQueryParameters from '../../../density-buoyancy-common/js/common/DensityBuoyancyCommonQueryParameters.js';
import densityBuoyancyCommonColorProfile from '../../../density-buoyancy-common/js/common/view/densityBuoyancyCommonColorProfile.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import DensityIntroModel from '../../../density-buoyancy-common/js/density/model/DensityIntroModel.js';
import DensityIntroScreenView from '../../../density-buoyancy-common/js/density/view/DensityIntroScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import introScreenIcon from '../../mipmaps/intro-screen-icon_png.js';
import density from '../density.js';
import densityStrings from '../densityStrings.js';

const screenIntroString = densityStrings.screen.intro;

class IntroScreen extends Screen {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    const icon = DensityBuoyancyCommonQueryParameters.generateIconImages ? DensityBuoyancyScreenView.getDensityIntroIcon() : new Image( introScreenIcon );

    super(
      () => new DensityIntroModel( tandem.createTandem( 'model' ) ),
      model => new DensityIntroScreenView( model, tandem.createTandem( 'view' ) ),
      {
        name: screenIntroString,
        backgroundColorProperty: densityBuoyancyCommonColorProfile.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( icon, {
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