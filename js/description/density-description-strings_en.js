// Copyright 2023, University of Colorado Boulder

export default () => {
  const materialTandemMap = {
    wood: 'wood',
    styrofoam: 'styrofoam',
    aluminum: 'aluminum',
    ice: 'ice',
    brick: 'brick',
    custom: 'a custom material'
  };

  return phet.joist.DescriptionContext.registerStrings( {
    locale: 'en',
    screenSummaryPlayArea() {
      return 'The Play Area contains a large rectangular pool, partially filled with water. Blocks can be placed in the pool, or on top of the ground on either side.';
    },
    screenSummaryControlArea() {
      return 'The Control Area has an option to control whether there is one or two blocks. The material, mass, and volume of each block can be changed.';
    },
    screenSummarySimStateDescription(
      blockMode,
      visibleA,
      visibleB,
      materialA,
      materialB
    ) {
      let str = '';
      str += `There ${blockMode === 'ONE_BLOCK' ? 'is one block' : 'are two blocks'}. `;
      if ( visibleA ) {
        str += `Block A is made of ${materialTandemMap[ materialA ]}. `;
      }
      if ( visibleB ) {
        str += `Block B is made of ${materialTandemMap[ materialB ]}. `;
      }
      return str;
    },
    blockVisibilityAlert( isBlockA, isVisible ) {
      return `Block ${isBlockA ? 'A' : 'B'} ${isVisible ? 'added' : 'removed'}`;
    },
    blockUserControlledAlert( isBlockA, isUserControlled ) {
      return `${isUserControlled ? 'Grabbed' : 'Dropped'} block ${isBlockA ? 'A' : 'B'}`;
    },
    materialSliderAccessibleName( isBlockA ) {
      return `Block ${isBlockA ? 'A' : 'B'} Material`;
    },
    massSliderLabelContent( isBlockA ) {
      return `Block ${isBlockA ? 'A' : 'B'} Mass Slider`;
    },
    volumeSliderLabelContent( isBlockA ) {
      return `Block ${isBlockA ? 'A' : 'B'} Volume Slider`;
    }
  } );
};
