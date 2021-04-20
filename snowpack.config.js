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
    '@snowpack/plugin-webpack',
  ],
  proxy: {
    '/omsdata': {
      target: 'http://yapi.sftcwl.com/mock/925',
      changeOrigin: true,
    }
  },
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    // minify: true,
    // target: 'es2018',
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
