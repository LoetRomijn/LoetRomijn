import React from 'react';
import { WrapWithProvider } from './src/components/context';
const wrapRootElement = ({element}) => <WrapWithProvider>{element}</WrapWithProvider>;

export { wrapRootElement };

