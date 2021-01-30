import React from 'react';

export const SmallContext = React.createContext({
    chosenPattern: '',
    patternPicked:false,
    decideScarf: () => {},
    decideBee: () => {},
    decidePlushie: () => {}    
});