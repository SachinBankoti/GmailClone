import { lazy } from 'react';
const Main = lazy(() => import('../pages/Main'));
const Emails = lazy(() => import('../components/Emails'));
const ViewEmail = lazy(()=> import('../components/ViewEmail'));

const routes = {
    main: {
        path: '/',
        element: Main
    },
    invalid: {
        path: '/*',
        element: Emails
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    }
}

export { routes };