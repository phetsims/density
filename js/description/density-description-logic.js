// Copyright 2023, University of Colorado Boulder

export default () => {
  let context;
  let strings;

  return phet.joist.DescriptionContext.registerLogic( {
    launch( descriptionContext, descriptionStrings ) {
      context = descriptionContext;
      strings = descriptionStrings;

      const introScreen = context.get( 'density.introScreen' );
      if ( introScreen ) {
        const introScreenView = context.get( 'density.introScreen.view' );

        const alerter = new phet.sceneryPhet.Alerter( {
          alertToVoicing: false,
          descriptionAlertNode: introScreenView
        } );

        const blockA = context.get( 'density.introScreen.model.blocks.blockA' );
        const blockB = context.get( 'density.introScreen.model.blocks.blockB' );

        [ blockA, blockB ].forEach( block => {
          const isBlockA = block === blockA;

          // const blockUtterance = new phet.utteranceQueue.Utterance( {
          //
          // } );

          context.lazyLink( block.visibleProperty, isVisible => {
            alerter.alert( strings.blockVisibilityAlert( isBlockA, isVisible ) );
          } );
          context.lazyLink( block.userControlledProperty, userControlled => {
            alerter.alert( strings.blockUserControlledAlert( isBlockA, userControlled ) );
          } );
        } );


        const simStateDescriptionNode = new phet.scenery.Node( {
          tagName: 'p'
        } );

        context.nodeSet( introScreenView, 'screenSummaryContent', new phet.scenery.Node( {
          children: [
            new phet.scenery.Node( {
              tagName: 'p',
              innerContent: strings.screenSummaryPlayArea()
            } ),
            new phet.scenery.Node( {
              tagName: 'p',
              innerContent: strings.screenSummaryControlArea()
            } ),
            simStateDescriptionNode
          ]
        } ) );

        context.link( context.get( 'density.introScreen.model.modeProperty' ), mode => {
          simStateDescriptionNode.innerContent = strings.screenSummarySimStateDescription( mode.toString() );
        } );
      }
    },
    added( tandemID, obj ) {

    },
    removed( tandemID, obj ) {

    }
  } );
};
