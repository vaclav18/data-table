## Project install
In the project directory, run:
### 'yarn'
(https://yarnpkg.com)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Approach

Take a look at App.js (located at root folder of the project), it code is self-explanatory.
I've used ReactJs to achieve the given objective as quickly as possible.
I've created a new component '<DataTable />' which allows to create and render the given data as an interactive spreadsheet. The componets code is located at the 'components' folder.
The '<DataTable /> component requires 3 props:
    - data
    - custClass      
    - custColumns

data - refers to a json object with data to render
custClass - is a class which enables to target and style the component easily
custColumns - a json object that describes the data structure and anables to customize filterMethod as well as custom class (for styling) with each column.

### User Interaction 

It allows sorting by clicking any header field (eg. 'Name').
The field 'Description' is editable.
Mind the blank cells below any header cell. These enable an interactive search.
