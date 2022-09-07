// Copyright 2019-2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import DensityStrings from './DensityStrings.js';
import CompareScreen from './compare/CompareScreen.js';
import IntroScreen from './intro/IntroScreen.js';
import MysteryScreen from './mystery/MysteryScreen.js';

const simOptions: SimOptions = {
  credits: {
    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
    leadDesign: 'Diana L\u00f3pez Tavares, Kelly Lancaster',
    softwareDevelopment: 'Jonathan Olson, Chris Malley (PixelZoom, Inc.), Sam Reid',
    team: 'Wendy Adams, Trish Loeblein, Ariel Paul, Archie Paulson, Kathy Perkins, Noah Podolefsky, Amy Rouinfar, Carl Wieman',
    qualityAssurance: 'Logan Bray, Steele Dalton, Brooklyn Lash, Emily Miller, Liam Mulhall, Devon Quispe, Jacob Romero, Nancy Salpepi, Katie Woessner',
    graphicArts: '',
    soundDesign: '',
    thanks: ''
  },
  webgl: true,

  // phet-io options
  phetioDesigned: true
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( DensityStrings.density.titleStringProperty, [
    new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
    new CompareScreen( Tandem.ROOT.createTandem( 'compareScreen' ) ),
    new MysteryScreen( Tandem.ROOT.createTandem( 'mysteryScreen' ) )
  ], simOptions );
  sim.start();
} );
