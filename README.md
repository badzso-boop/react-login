# Krózsernek leírás

Na figyu úgy van hogy elméletben importáltam a bootstrapet viszont nem próbáltam ki hogy működik-e?
Először is szedd le a [www.github.com](www.github.com)-ról majd a mappában nyomj egy "npm install"-t
Utána hogy elkezdd a szervert ugyan abban a mappában nyomj egy "npm start"-t várj egy kicsit és elindul a szeró.
[http://localhost:3000](http://localhost:3000)-on

### `fájlok`

Az src mappában vannak a fájlok. Az App.js-ben van megimportálva a login illetve a signup a return függvényben. A 'className="classnév"'-ben tudod megadni a classokat. De ezt egy div-ként kezeld. Aztán van az src/components mappa ahol van a 'login.js' (értelemszerűen a login form) és a 'signUp.js' (a signup form).
Itt ugyan úgy a return fügvényben van a html és a 'className="classnév"'-el tudsz classokat adni.

# JSON API kódok
### Login
0 - "Kérem töltse ki a üres mezőket"
1 - "Hibás email cím vagy jelszó"
### Signin
0 - "Kérem töltse ki a üres mezőket"
1 - "Ezzel az email címmel már regiszráltak fiókot"
2 - "A két jelszó nem egyezik"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
