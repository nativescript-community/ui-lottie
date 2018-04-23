if ((global as any).TNS_WEBPACK) {
  // registers tns-core-modules UI framework modules
  // tslint:disable-next-line:no-var-requires
  require('bundle-entry-points');

  // register application modules
  global.registerModule('main-page', () => require('./main-page'));
}
