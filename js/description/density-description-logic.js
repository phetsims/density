// Copyright 2023, University of Colorado Boulder

// eslint-disable

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

        const modeButtonGroup = context.get( 'density.introScreen.view.blocksRadioButtonGroup' );
        context.nodeSet( modeButtonGroup, 'labelContent', strings.modeButtonGroupLabelContent() );

        const oneBlockButton = context.get( 'density.introScreen.view.blocksRadioButtonGroup.oneBlockRadioButton' );
        context.nodeSet( oneBlockButton, 'labelContent', strings.oneBlock() );

        const twoBlocksButton = context.get( 'density.introScreen.view.blocksRadioButtonGroup.twoBlocksRadioButton' );
        context.nodeSet( twoBlocksButton, 'labelContent', strings.twoBlocks() );

        const blockAControlPanel = context.get( 'density.introScreen.view.blockAControlPanel' );
        const blockBControlPanel = context.get( 'density.introScreen.view.blockBControlPanel' );

        context.nodeSet( blockAControlPanel, 'tagName', 'div' );
        context.nodeSet( blockAControlPanel, 'labelTagName', 'h3' );
        context.nodeSet( blockAControlPanel, 'labelContent', strings.blockAControls() );

        // TODO: should it move to the sim? Should it be factored out? What is the "production" version of this code https://github.com/phetsims/joist/issues/941
        context.nodeSet( blockBControlPanel, 'tagName', 'div' );
        context.nodeSet( blockBControlPanel, 'labelTagName', 'h3' );
        context.nodeSet( blockBControlPanel, 'labelContent', strings.blockBControls() );

        //const blockAMassControl = context.get( 'density.introScreen.view.blockAControlPanel.massNumberControl' );
        //const blockBMassControl = context.get( 'density.introScreen.view.blockBControlPanel.massNumberControl' );

        const blockAMassSlider = context.get( 'density.introScreen.view.blockAControlPanel.massNumberControl.slider' );
        context.nodeSet( blockAMassSlider, 'accessibleName', strings.blockAMassSliderAccessibleName() );

        // TODO: slider values and things https://github.com/phetsims/joist/issues/941
        //context.nodeSet( blockAMassSlider, '_a11yCreateAriaValueText', value => 'Test ' + value );

        const blockBMassSlider = context.get( 'density.introScreen.view.blockBControlPanel.massNumberControl.slider' );
        context.nodeSet( blockBMassSlider, 'accessibleName', strings.blockBMassSliderAccessibleName() );

        const blockAVolumeSlider = context.get( 'density.introScreen.view.blockAControlPanel.volumeNumberControl.slider' );
        context.nodeSet( blockAVolumeSlider, 'accessibleName', strings.blockAVolumeSliderAccessibleName() );

        const blockBVolumeSlider = context.get( 'density.introScreen.view.blockBControlPanel.volumeNumberControl.slider' );
        context.nodeSet( blockBVolumeSlider, 'accessibleName', strings.blockBVolumeSliderAccessibleName() );

        const densityReadout = context.get( 'density.introScreen.view.densityAccordionBox.densityReadout' );
        context.nodeSet( densityReadout, 'tagName', 'div' );
        context.nodeSet( densityReadout, 'descriptionTagName', 'p' );
        //context.nodeSet( densityReadout, 'descriptionContent', 'This describes it' );

        const densityToEnum = density => {
          if ( density < 950 ) { // TODO: constant from sim https://github.com/phetsims/joist/issues/941
            return 'lessThanHuman';
          }
          else {
            return 'greaterThanHuman';
          }
        };

        context.multilink( [
          blockA.visibleProperty,
          blockB.visibleProperty,
          blockA.materialProperty,
          blockB.materialProperty
        ], (
          visibleA,
          visibleB,
          materialA,
          materialB
        ) => {
          context.nodeSet( densityReadout, 'descriptionContent', strings.densityReadout(
            visibleA,
            visibleB,
            densityToEnum( materialA.density ),
            densityToEnum( materialB.density )
          ) );
        } );

        // TODO: Get combo box working dynamically https://github.com/phetsims/joist/issues/941
        //const woodItem = context.get( 'density.introScreen.view.blockAControlPanel.comboBox.listBox.woodItem' );
        //context.nodeSet( woodItem, 'innerContent', 'Wood' );
        //context.nodeSet( woodItem, 'voicingObjectResponse', 'Wood' );

        //const blockAIncrementMassButton = context.get( 'density.introScreen.view.blockAControlPanel.massNumberControl.incrementButton' );
        //const blockADecrementMassButton = context.get( 'density.introScreen.view.blockAControlPanel.massNumberControl.decrementButton' );
        //context.nodeSet( blockAIncrementMassButton, 'tagName', null );
        //context.nodeSet( blockADecrementMassButton, 'tagName', null );

        //context.nodeSet( blockAMassControl, 'tagName', 'h4' );
        //context.nodeSet( blockAMassControl, 'accessibleName', 'Block A Mass Control' );

        [ blockA, blockB ].forEach( block => {
          const isBlockA = block === blockA;
          const letter = isBlockA ? 'A' : 'B';

          // const blockUtterance = new phet.utteranceQueue.Utterance( {
          //
          // } );

          const materialComboBox = context.get( `density.introScreen.view.block${letter}ControlPanel.comboBox` );
          context.nodeSet( materialComboBox, 'accessibleName', strings.materialSliderAccessibleName( isBlockA ) );

          //const volumeSlider = context.get( `density.introScreen.view.block${letter}ControlPanel.volumeNumberControl.slider` );
          //context.nodeSet( volumeSlider, 'labelContent', strings.volumeSliderLabelContent( isBlockA ) );
          //context.nodeSet( volumeSlider, 'labelTagName', 'label' );

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

        const resetAllButton = context.get( 'density.introScreen.view.resetAllButton' );

        context.nodeSet( introScreenView.pdomPlayAreaNode, 'pdomOrder', [
          blockAControlPanel,
          blockBControlPanel
        ] );
        context.nodeSet( introScreenView.pdomControlAreaNode, 'pdomOrder', [
          modeButtonGroup,
          resetAllButton
        ] );

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
