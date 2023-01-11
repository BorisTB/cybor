// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'web',
  remotes: ['me'],
};

module.exports = moduleFederationConfig;
