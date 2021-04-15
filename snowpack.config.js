/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    /* ... */
    // directory name: 'build directory'
    public: '/',
    src: '/dist',
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-react-refresh',
  ],
  proxy: {
    '/omsdata': {
      target: 'http://yapi.sftcwl.com/mock/925',
      changeOrigin: true,
    }
  },
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    hostname: ''
  },
  buildOptions: {
    /* ... */
  },
};
