// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import Property from '../../axon/js/Property.js';
import density from './density.js';

type StringsType = {
  'density': {
    'title': string;
    'titleProperty': Property<string>;
  };
  'screen': {
    'intro': string;
    'introProperty': Property<string>;
    'compare': string;
    'compareProperty': Property<string>;
    'mystery': string;
    'mysteryProperty': Property<string>;
  }
};

const densityStrings = getStringModule( 'DENSITY' ) as StringsType;

density.register( 'densityStrings', densityStrings );

export default densityStrings;
