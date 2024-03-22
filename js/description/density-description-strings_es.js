// Copyright 2023-2024, University of Colorado Boulder

// @author Jonathan Olson <jonathan.olson@colorado.edu>

// eslint-disable

// eslint-disable-next-line no-unused-vars
let context;

export default () => phet.joist.DescriptionContext.registerStrings( {
  locale: 'es',
  launch( descriptionContext ) {
    context = descriptionContext;
  },
  screenSummaryPlayArea() {
    return 'La zona de juegos contiene una gran piscina rectangular, parcialmente llena de agua. Los bloques se pueden colocar en la piscina o encima del suelo a ambos lados.';
  },
  screenSummaryControlArea() {
    return 'El Área de Control tiene una opción para controlar si hay uno o dos bloques. Se puede cambiar el material, la masa y el volumen de cada bloque.';
  },
  screenSummarySimStateDescription(
    blockMode
  ) {
    if ( blockMode.toString() === 'ONE_BLOCK' ) {
      return 'Nosotras tenemos una cuadra';
    }
    else if ( blockMode.toString() === 'TWO_BLOCKS' ) {
      return 'Nosotras tenemos dos cuadras';
    }
    else {
      throw new Error();
    }
  }
} );