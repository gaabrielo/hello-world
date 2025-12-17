import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import './index.css';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
});

// declare module '@tanstack/react-router' {
//   interface RegisterRouter {
//     router: typeof router;
//   }
// }

const rootElement = document.getElementById('root');
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
