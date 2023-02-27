//Authentication: user login authenticate using spotify api 
export const authEndpoint = "https://accounts.spotify.com/authorize"
//After authentication done, bring user back to our homepage
const redirectUri = "http://localhost:3000/"

const clientId = "a78cf36a0d934669a77612585193218a"
// Allow user to do:
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;