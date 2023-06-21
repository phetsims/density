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
    'title': string;
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'intro': string;
    'introStringProperty': LocalizedStringProperty;
    'compare': string;
    'compareStringProperty': LocalizedStringProperty;
    'mystery': string;
    'mysteryStringProperty': LocalizedStringProperty;
  }
};

const DensityStrings = getStringModule( 'DENSITY' ) as StringsType;

density.register( 'DensityStrings', DensityStrings );

export default DensityStrings;
