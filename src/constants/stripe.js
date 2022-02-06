const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_51KPk4hG3qtUfMBk1c7KIO4k2StNjba0iIYEzpevqteHPzWbHJzm1icERUEacR0wHSSoltqiiFZWkkLHnJ6JE1ZnP00yHF9YdQu';

export default STRIPE_PUBLISHABLE;