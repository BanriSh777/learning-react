import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import HelloWorldApp from './AppHelloWorld';

const rootElement = document.getElementById('maheshapp');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HelloWorldApp />
  </StrictMode>
);
