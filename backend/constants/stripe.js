const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_51KPk4hG3qtUfMBk1g045CSDKbRInzr7aAC8pKMPzXUZzq1LJgADNGlmg1t5Odty74vcCVXScVopX5t2WAJLZfzYk00j0207GVb';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;