const dukeAuth = "https://oauth.oit.duke.edu/oidc/authorize?";
const dukeAuthToken = "https://oauth.oit.duke.edu/oidc/token?"
const clientId = "client_id=daml-chronicle";
const clientSecret = "&client_secret=AJ9-2CfXTDGM5VQah1Y8aVgzY9oWCn9nPHN7cnb9cM2iyzJe7jh21V9zPbJDroQ16whyyf_wxtQ2_LHZHbH1Kps";
const redirectUriDeployed = "&redirect_uri=https%3A%2F%2Floving-fermi-04148b.netlify.app/login/";
const redirectUriLocal = "&redirect_uri=http%3A%2F%2Flocalhost%3A3000/login/";
const responseType = "&response_type=code";
const grantType = "&grant_type=authorization_code";

module.exports = {
    OAuth_URL: dukeAuth + clientId + clientSecret + redirectUriLocal + responseType,
    Token_URL: dukeAuthToken + clientId + clientSecret + redirectUriLocal + grantType
}