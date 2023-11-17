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

        const button = context.get( 'density.introScreen.view.densityAccordionBox.expandCollapseButton' );
        context.nodeSet( button, 'labelContent', 'Expand Collapse BUtton' );

        const blockA = context.get( 'density.introScreen.model.blocks.blockA' );
        const blockB = context.get( 'density.introScreen.model.blocks.blockB' );

        [ blockA, blockB ].forEach( block => {
          const isBlockA = block === blockA;
          const letter = isBlockA ? 'A' : 'B';

          // const blockUtterance = new phet.utteranceQueue.Utterance( {
          //
          // } );

          const materialComboBox = context.get( `density.introScreen.view.block${letter}ControlPanel.comboBox` );
          context.nodeSet( materialComboBox, 'accessibleName', strings.materialSliderAccessibleName( isBlockA ) );

          const massSlider = context.get( `density.introScreen.view.block${letter}ControlPanel.massNumberControl.slider` );
          context.nodeSet( massSlider, 'labelContent', strings.massSliderLabelContent( isBlockA ) );
          context.nodeSet( massSlider, 'labelTagName', 'label' );

          const volumeSlider = context.get( `density.introScreen.view.block${letter}ControlPanel.volumeNumberControl.slider` );
          context.nodeSet( volumeSlider, 'labelContent', strings.volumeSliderLabelContent( isBlockA ) );
          context.nodeSet( volumeSlider, 'labelTagName', 'label' );

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

        context.multilink( [
          context.get( 'density.introScreen.model.modeProperty' ),
          blockA.visibleProperty,
          blockB.visibleProperty,
          blockA.materialProperty,
          blockB.materialProperty
        ], (
          mode,
          visibleA,
          visibleB,
          materialA,
          materialB
        ) => {
          simStateDescriptionNode.innerContent = strings.screenSummarySimStateDescription(
            mode.toString(),
            visibleA,
            visibleB,
            materialA.tandemName,
            materialB.tandemName
          );
        } );
      }
    },
    added( tandemID, obj ) {

    },
    removed( tandemID, obj ) {

    }
  } );
};
