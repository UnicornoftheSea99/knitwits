import React from 'react';

export const SmallContext = React.createContext({
    chosenPattern: '',
    patternPicked:false,
    custom: false,
    curious: false,
    decideScarf: () => {},
    decideBee: () => {},
    decidePlushie: () => {},
    customPattern: () => {},
    aboutUs: () => {},
    query: ''    
});