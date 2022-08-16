// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import density from './density.js';

type StringsType = {
  'density': {
    'title': string;
    'titleProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'intro': string;
    'introProperty': TReadOnlyProperty<string>;
    'compare': string;
    'compareProperty': TReadOnlyProperty<string>;
    'mystery': string;
    'mysteryProperty': TReadOnlyProperty<string>;
  }
};

const densityStrings = getStringModule( 'DENSITY' ) as StringsType;

density.register( 'densityStrings', densityStrings );

export default densityStrings;
