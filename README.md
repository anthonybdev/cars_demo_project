# Even More LMS System

## Requirements
- Node: 16.13.0

## Installation
- Make sure to have node version 16.13.0 installed preferably thorought [NVM](https://github.com/nvm-sh/nvm)
- After installing `nvm` run `nvm install 16.13.0` once to install the version and then be sure to run `nvm run 16.13.0` each time you open a new shell
- Run the command `npm run freshinstall`. This will romove `node_modules` and `package-lock.json` if there and a fresh `npm i` wich will install all packages
- After the dependencies have been installed, you are ready to build

## Building
- Run `npm run build` command to build the project. This will create a build folder with the minigfied chunks of js and css along with index.html
- The build will automatically run `stylelint` on your code. Feel free to install ESLint VSCode plugin.

## Local Development
** If you want to run application without backend, you have to enable at least one mock `isMockLoginPage`
- Run `npm run start` to spin up local of `evenmore_lms`
- For using mocks you can change the flag `isMock` for your service to `true` at `isMockSwitch.ts`

## Using Mocks
All mocks are in the folder `__mocks__`. You can control their using in `isMockSwitch.ts` file.

`LoginService` folder consists mock for all `LoginPage` requests.

## isMockSwitch.ts
**File structure**

```bash
export const isMockLoginPage = false;
export const isMockProfilePage = false;
export const isMockDashboardPage = false;

...
```

- `isMockLoginPage` - defines the type of requests answers for `LoginPage` (mock or no)
- `isMockProfilePage` - defines the type of requests answers for `ProfilePage` (mock or no)
- `isMockDashboardPage` - defines the type of requests answers for `DashboardPage` (mock or no)

etc.

## Source file basics
### Folder structure
### The ***src*** folder contains the following:
```bash
src
├── __mocks__
├── __tests__
├── components
├── containers
├── global
    ├── fonts
    ├── media
    └── styles
├── hocs
├── App.tsx
├── index.ts
└── other files
```

- `__mocks__` - files to mock BE responses
- `__tests__` - tests for files from folder
- `components` - this folder contains components that are reusable and independed from other components
- `containers` - folder for completed pages and "smart" components
- `global` - folder for fonts, media, styles and etc.
- `hocs` - is self-explanatory

#### The *Component* folder contains the following
```bash
components
└── ComponentExample
	├── __tests__
		└── ComponentExample.test.ts
	├── components
	├── ComponentExample.tsx
	├── ComponentExample.scss
	└── index.ts
```
- `ComponentExample` - folder contains component files. Folder name should be equal to component name.
- `ComponentExample.tsx` - file where component is located.
- `ComponentExample.scss` - file where component styles are located.
- `index.ts` - file where we export our component.
- `__tests__` - folder which contains tests for *Component*.
- `ComponentExample.test.ts` - file where component tests are located.
- `components` - folder with components required only for the current component.

#### The *Container* in containers folder contains the following
```bash
containers
└── ContainerExample
	├── __tests__
		├── actions.test.ts
		├── saga.test.ts
		├── reducer.test.ts
		├── service.test.ts
		└── ContainerExample.test.ts
	├── components
	├── actions.ts
	├── constants.ts
	├── reducer.ts
	├── saga.ts
	├── service.ts§
	├── ContainerExample.tsx
	├── ContainerExample.scss
	└── index.ts§
```
- `ContainerExample` - folder contains container files, sagas, actions, reducer, and service. Folder name should be equal to container name.
- `__tests__` - folder which contains tests for *ContainerExample*, *sagas*, *actions*, *reducer*, *helpers*, and *service*.
- `actions.test.ts` - file which contains tests for *actions* which refer to *ContainerExample*.
- `saga.test.ts` - file which contains tests for *saga* which refer to *ContainerExample*.
- `reducer.test.ts` - file which contains tests for *reducer* which refer to *ContainerExample*.
- `service.test.ts` - file which contains tests for *service* which refer to *ContainerExample*.
- `ContainerExample.test.ts` - file where container tests are located.
- `components` - folder with components required only for the current container.
- `action.ts` - file which contains actions for the current container.
- `constants.ts` - file which contains constants for the current container.
- `reducer.ts` - file which contains reducer for the current container.
- `saga.ts` - file which contains sagas for the current container.
- `service.ts` - file which contains services for the current container.
- `ContainerExample.tsx` - file where container is located.
- `ContainerExample.scss` - file where container styles are located.
- `index.ts` - file where we export our component.

### File naming
- Each component file should be named by camel case.
  Example: **ComponentName.tsx**

- Each test file should repeat component name with .test.
  Example: **ComponentName.test.ts**

- Each style file should be named as a component.
  Example: **ComponentName.scss**

### Prettier

#### Prettier should be run in a separate commit.

#### Each file should follow for next prettier settings
- arrowParens: 'always',
- bracketSpacing: true,
- trailingComma: 'all',
- tabWidth: 2,
- semi: true,
- singleQuote: true,
- printWidth: 100,

#### Stylelint configuration is standard.

#### ESLint extends the following style guides:
```bash
"react-app",
"plugin:react/recommended",
"airbnb",
"plugin:jsx-a11y/recomended",
"prettier"
```

You can run checks manually with
+ `npm run prettier`
+ `npm run stylelint`
+ `npm run eslint`
+ `npm run pretest` - will run all at once

**Also, please make sure that project builds correctly with “npm run build” command before commit.**
