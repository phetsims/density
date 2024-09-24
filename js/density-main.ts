// Copyright 2019-2024, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import DensityBuoyancyCommonCredits from '../../density-buoyancy-common/js/common/DensityBuoyancyCommonCredits.js';
import DensityBuoyancyCommonQueryParameters from '../../density-buoyancy-common/js/common/DensityBuoyancyCommonQueryParameters.js';
import DensityBuoyancyCommonPreferencesNode from '../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonPreferencesNode.js';
import DescriptionContext from '../../joist/js/DescriptionContext.js';
import '../../scenery-phet/js/accessibility/describers/Alerter.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import CompareScreen from './compare/CompareScreen.js';
import DensityStrings from './DensityStrings.js';
import DensityDescriptionLogic from './description/density-description-logic.js'; // eslint-disable-line phet/default-import-match-filename
import DensityDescriptionStrings_en from './description/density-description-strings_en.js'; // eslint-disable-line phet/default-import-match-filename
import DensityDescriptionStrings_es from './description/density-description-strings_es.js'; // eslint-disable-line phet/default-import-match-filename
import IntroScreen from './intro/IntroScreen.js';
import MysteryScreen from './mystery/MysteryScreen.js';

const simOptions: SimOptions = {
  credits: DensityBuoyancyCommonCredits,
  webgl: true,

  preferencesModel: new PreferencesModel( {
    simulationOptions: {
      customPreferences: [ {
        createContent: tandem => new DensityBuoyancyCommonPreferencesNode( { tandem: tandem } )
      } ]
    }
  } ),

  // phet-io options
  phetioDesigned: true
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {

  if ( DensityBuoyancyCommonQueryParameters.descriptionPrototype ) {
    DensityDescriptionStrings_en();
    DensityDescriptionStrings_es();
    DensityDescriptionLogic();

    phet.log && phet.log( DensityDescriptionStrings_en.toString() );
    phet.log && phet.log( DensityDescriptionLogic.toString() );
  }

  const sim = new Sim( DensityStrings.density.titleStringProperty, [
    new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
    new CompareScreen( Tandem.ROOT.createTandem( 'compareScreen' ) ),
    new MysteryScreen( Tandem.ROOT.createTandem( 'mysteryScreen' ) )
  ], simOptions );

  DensityBuoyancyCommonQueryParameters.descriptionPrototype && sim.isConstructionCompleteProperty.lazyLink( isConstructionComplete => {
    DescriptionContext.startupComplete();
  } );
  sim.start();
} );