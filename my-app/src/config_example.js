
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes

export const clientId = "<YOUR CLIENT ID>";

export const redirectUri = "http://localhost:3000/";

export const scopes = [

    "user-top-read",

    "user-read-currently-playing",

    "user-library-read",

    "user-modify-playback-state",

    "user-read-playback-state"

];
