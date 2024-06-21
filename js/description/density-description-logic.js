// Copyright 2023-2024, University of Colorado Boulder

// @author Jonathan Olson <jonathan.olson@colorado.edu>

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

        const modeButtonGroup = context.get( 'density.introScreen.view.blocksModeRadioButtonGroup' );
        context.nodeSet( modeButtonGroup, 'labelContent', strings.modeButtonGroupLabelContent() );

        const oneBlockButton = context.get( 'density.introScreen.view.blocksModeRadioButtonGroup.oneBlockRadioButton' );
        context.nodeSet( oneBlockButton, 'labelContent', strings.oneBlock() );

        const twoBlocksButton = context.get( 'density.introScreen.view.blocksModeRadioButtonGroup.twoBlocksRadioButton' );
        context.nodeSet( twoBlocksButton, 'labelContent', strings.twoBlocks() );

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

        [ blockA, blockB ].forEach( block => {
          const isBlockA = block === blockA;
          const letter = isBlockA ? 'A' : 'B';

          // const blockUtterance = new phet.utteranceQueue.Utterance( {
          //
          // } );

          const blockControlPanel = context.get( `density.introScreen.view.block${letter}ControlPanel` );
          context.nodeSet( blockControlPanel, 'tagName', 'div' );
          context.nodeSet( blockControlPanel, 'labelTagName', 'h3' );
          context.nodeSet( blockControlPanel, 'labelContent', isBlockA ? strings.blockAControls() : strings.blockBControls() );

          const materialComboBox = context.get( `density.introScreen.view.block${letter}ControlPanel.comboBox` );
          context.nodeSet( materialComboBox, 'accessibleName', strings.materialComboBoxAccessibleName( isBlockA ) );
          context.propertySet( materialComboBox.a11yNamePropertyMap.get( 'STYROFOAM' ), 'Styrofoam' );
          context.propertySet( materialComboBox.a11yNamePropertyMap.get( 'WOOD' ), 'Wood' );
          context.propertySet( materialComboBox.a11yNamePropertyMap.get( 'ICE' ), 'Ice' );
          context.propertySet( materialComboBox.a11yNamePropertyMap.get( 'BRICK' ), 'Brick' );
          context.propertySet( materialComboBox.a11yNamePropertyMap.get( 'ALUMINUM' ), 'Aluminum' );
          context.propertySet( materialComboBox.a11yNamePropertyMap.get( 'CUSTOM' ), 'Custom' );

          const roundTo2 = value => phet.dot.Utils.toFixed( value, 2 );

          const blockMassSlider = context.get( `density.introScreen.view.block${letter}ControlPanel.massNumberControl.slider` );
          context.nodeSet( blockMassSlider, 'accessibleName', isBlockA ? strings.blockAMassSliderAccessibleName() : strings.blockBMassSliderAccessibleName() );
          context.nodeSet( blockMassSlider, 'pdomCreateAriaValueText', value => strings.massSliderValue( roundTo2( value ) ) );

          const blockVolumeSlider = context.get( `density.introScreen.view.block${letter}ControlPanel.volumeNumberControl.slider` );
          context.nodeSet( blockVolumeSlider, 'accessibleName', isBlockA ? strings.blockAVolumeSliderAccessibleName() : strings.blockBVolumeSliderAccessibleName() );
          context.nodeSet( blockVolumeSlider, 'pdomCreateAriaValueText', value => strings.volumeSliderValue( roundTo2( value ) ) );

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

        // const resetAllButton = context.get( 'density.introScreen.view.resetAllButton' );
        //
        // const blockAControlPanel = context.get( 'density.introScreen.view.blockAControlPanel' );
        // const blockBControlPanel = context.get( 'density.introScreen.view.blockBControlPanel' );
        //
        // context.nodeSet( introScreenView.pdomPlayAreaNode, 'pdomOrder', [
        //   blockAControlPanel,
        //   blockBControlPanel
        // ] );
        // context.nodeSet( introScreenView.pdomControlAreaNode, 'pdomOrder', [
        //   modeButtonGroup,
        //   resetAllButton
        // ] );

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