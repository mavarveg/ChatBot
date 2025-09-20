import concurrently from 'concurrently';

concurrently([
    { command: 'npm run dev --prefix packages/client', name: 'client', prefixColor: 'blue' },
    { command: 'npm run dev --prefix packages/server', name: 'server', prefixColor: 'green' }
]);