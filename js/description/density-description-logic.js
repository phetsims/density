// Copyright 2023, University of Colorado Boulder

let context;
let strings;

export default () => phet.joist.DescriptionContext.registerLogic( {
  launch( descriptionContext, descriptionStrings ) {
    context = descriptionContext;
    strings = descriptionStrings;

    const introScreen = context.get( 'density.introScreen' );
    if ( introScreen ) {
      const introScreenView = context.get( 'density.introScreen.view' );

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

      const modeProperty = context.get( 'density.introScreen.model.modeProperty' );

      context.link( modeProperty, mode => {
        simStateDescriptionNode.innerContent = strings.screenSummarySimStateDescription( mode.toString() );
      } );
    }
  },
  added( tandemID, obj ) {

  },
  removed( tandemID, obj ) {

  }
} );
