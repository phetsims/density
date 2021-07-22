// Copyright 2019-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import densityStrings from './densityStrings.js';
import CompareScreen from './view/CompareScreen.js';
import IntroScreen from './view/IntroScreen.js';
import MysteryScreen from './view/MysteryScreen.js';

const densityTitleString = densityStrings.density.title;

const simOptions = {
  credits: {
    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
    leadDesign: 'Diana L\u00f3pez Tavares, Kelly Lancaster',
    softwareDevelopment: 'Jonathan Olson, Chris Malley (PixelZoom, Inc.), Sam Reid',
    team: 'Wendy Adams, Trish Loeblein, Ariel Paul, Archie Paulson, Kathy Perkins, Noah Podolefsky, Amy Rouinfar, Carl Wieman',
    qualityAssurance: '',
    graphicArts: '',
    soundDesign: '',
    thanks: ''
  },
  webgl: true
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( densityTitleString, [
    new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
    new CompareScreen( Tandem.ROOT.createTandem( 'comparingScreen' ) ),
    new MysteryScreen( Tandem.ROOT.createTandem( 'mysteryScreen' ) )
  ], simOptions );
  sim.start();
} );
