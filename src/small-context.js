import React from 'react';

export const SmallContext = React.createContext({
    chosenPattern: '',
    patternPicked:false,
    custom: false,
    decideScarf: () => {},
    decideBee: () => {},
    decidePlushie: () => {},
    customPattern: () => {},
    query: ''    
});