import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.demo',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  name: 'tns-template-hello-world',
  version: '3.2.0',
  appPath: 'app'
} as NativeScriptConfig;
