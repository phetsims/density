// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const ComparingScreen = require( 'DENSITY/view/ComparingScreen' );
  const DevScreen = require( 'DENSITY/view/DevScreen' );
  const IntroScreen = require( 'DENSITY/view/IntroScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const densityTitleString = require( 'string!DENSITY/density.title' );

  const simOptions = {
    credits: {
      //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    },
    webgl: true
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( densityTitleString, [
      new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
      new ComparingScreen( Tandem.ROOT.createTandem( 'comparingScreen' ) ),
      new DevScreen( Tandem.ROOT.createTandem( 'devScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );
