// Copyright 2019, University of Colorado Boulder

/**
 * Intro screen for Density
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DensityBuoyancyCommonColorProfile
  from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColorProfile.js';
import DensityIntroModel from '../../../density-buoyancy-common/js/density/model/DensityIntroModel.js';
import DensityIntroScreenView from '../../../density-buoyancy-common/js/density/view/DensityIntroScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import densityStrings from '../density-strings.js';
import density from '../density.js';

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
        tandem: tandem
      }
    );
  }
}

density.register( 'IntroScreen', IntroScreen );
export default IntroScreen;