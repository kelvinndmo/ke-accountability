module.exports = {
  keaccountability: {
    output: {
      mode: 'single',
      target: 'libs/apisdk/src/lib/keaccountability',
      client: 'react-query',
      override: {
        mutator: {
          path: './libs/apisdk/src/lib/custom.axios.ts',
          name: 'customSocketBackendClient',
        },
      },
    },
    input: {
      target: 'http://localhost:3000/docs-json',
    },
  },
};
