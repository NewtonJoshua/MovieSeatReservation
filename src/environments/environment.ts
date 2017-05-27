// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDijimJ7szd-_7O_HsQr7SqiSallfVaXQA',
    authDomain: 'reserve-movie.firebaseapp.com',
    databaseURL: 'https://reserve-movie.firebaseio.com',
    projectId: 'reserve-movie',
    storageBucket: 'reserve-movie.appspot.com',
    messagingSenderId: '551199441516'
  }
};
