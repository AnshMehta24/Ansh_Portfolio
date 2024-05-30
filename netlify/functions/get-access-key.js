// netlify/functions/get-access-key.js

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ accessKey: process.env.ACCESS_KEY }),
    };
};
