// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'me',
  exposes: {
    './Module': 'apps/me/src/remote-entry.ts',
  },
};

module.exports = moduleFederationConfig;
