// Copyright 2020-2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import density from './density.js';

type StringsType = {
  'density': {
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'introStringProperty': LocalizedStringProperty;
    'compareStringProperty': LocalizedStringProperty;
    'mysteryStringProperty': LocalizedStringProperty;
  }
};

const DensityStrings = getStringModule( 'DENSITY' ) as StringsType;

density.register( 'DensityStrings', DensityStrings );

export default DensityStrings;
