// Copyright 2023, University of Colorado Boulder

export default () => phet.joist.DescriptionContext.registerStrings( {
  locale: 'en',
  screenSummaryPlayArea() {
    return 'The Play Area contains a large rectangular pool, partially filled with water. Blocks can be placed in the pool, or on top of the ground on either side.';
  },
  screenSummaryControlArea() {
    return 'The Control Area has an option to control whether there is one or two blocks. The material, mass, and volume of each block can be changed.';
  },
  screenSummarySimStateDescription(
    blockMode
  ) {
    return `There ${blockMode === 'ONE_BLOCK' ? 'is one block' : 'are two blocks'}.`;
  },
  blockVisibilityAlert( isBlockA, isVisible ) {
    return `Block ${isBlockA ? 'A' : 'B'} ${isVisible ? 'added' : 'removed'}`;
  },
  blockUserControlledAlert( isBlockA, isUserControlled ) {
    return `${isUserControlled ? 'Grabbed' : 'Dropped'} block ${isBlockA ? 'A' : 'B'}`;
  }
} );
