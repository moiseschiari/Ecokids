// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCJ7-IkQRtpFusjhW6OlotL-qMLUE9_JHI",
    authDomain: "ecokids-2aacb.firebaseapp.com",
    databaseURL: "https://ecokids-2aacb.firebaseio.com",
    projectId: "ecokids-2aacb",
    storageBucket: "ecokids-2aacb.appspot.com",
    messagingSenderId: "259501250349",
    appId: "1:259501250349:web:c0eb367df3c36a34"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
