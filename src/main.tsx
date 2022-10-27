import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    DatabaseProvider,
    FirebaseAppProvider,
    FirestoreProvider,
    useFirebaseApp,
} from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import App from './App';
import './index.css';
import { FirebaseOptions } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const firebaseConfig: FirebaseOptions = {
    databaseURL: 'https://hacker-news.firebaseio.com/',
    projectId: 'hacker-news',
};

const AppWrapper = () => {
    const firestore = getFirestore(useFirebaseApp());
    const database = getDatabase(useFirebaseApp());

    return (
        <FirestoreProvider sdk={firestore}>
            <DatabaseProvider sdk={database}>
                <App />
            </DatabaseProvider>
        </FirestoreProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <QueryClientProvider client={new QueryClient()}>
                <AppWrapper />
            </QueryClientProvider>
        </FirebaseAppProvider>
    </React.StrictMode>
);
