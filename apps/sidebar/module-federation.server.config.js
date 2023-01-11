// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'sidebar',
  exposes: {
    './Module': 'apps/sidebar/src/remote-entry.ts'
  }
}

module.exports = moduleFederationConfig
