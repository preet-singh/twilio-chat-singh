//this file generates a token --> for use in token.js

const twilio = require('twilio'); 

//need to create an access token that holds info about twilio acc and API keys
const AccessToken = twilio.jwt.AccessToken; //create new token
const ChatGrant = AccessToken.ChatGrant; //provide access token with a chat grant

//define the token generator function
function TokenGenerator(identity){
    const appName = 'TwilioChat';

    //create a grant which enables a client to use chat as a user
    const chatGrant = new ChatGrant({
        serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
    });

    //create an access token which twilio will sign and return to the client
    //contains the grant that was created
    const token = new AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILI_API_KEY,
        process.env.TWILIO_API_SECRET
    );
    
    token.addGrant(chatGrant);
    token.identity = identity;

    return token;

}

module.exports = { generate: TokenGenerator }; 

