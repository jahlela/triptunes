# triptunes
Use TripTunes to create a Spotify playlist of songs that mention towns you will drive through

## Dev

    npm install
    npm run dev

In a separate tab:

    ./node_modules/.bin/serve frontend

## Invoke backend for local development

    serverless invoke local -f hello -d '{"origin": "Los Angeles", "destination": "San Francisco"}'
