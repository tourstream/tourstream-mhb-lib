# Tourstream MHB Lib

This package contains components which are used by the **MHP Landing Pages**.

## Installation

Install the component library within each brand of the MPH Landing Pages, e.g.

```shell
cd design_plus
npm i -S @tourstream/tourstream-mhb-lib
```

You can also link a local version of this package directly directly into your frontend app.
Assuming that the local versions is on the same level like your MPH Landing Pages:

```shell
cd design_plus
npm link ../../tourstream-mhb-lib
```

***Note:*** This feature is currently not working when the including package also uses styled-components.

## Local Development
### Prerequisites
- Git
- Google Cloud SDK: [Install the Google Cloud SDK.](https://cloud.google.com/sdk/)
- Node 10 LTS: [Install Node.js on your local machine.](https://nodejs.org/en/download/)

### Installation
Get the repository and install the dependencies:
```shell
git clone git@github.com:tourstream/tourstream-mhb-lib.git
cd tourstream-mhb-lib
npm i
```

### Configuration
There is no extra configuration required

### Testing
Run Linting tests:
```shell
npm run lint
```

***Note:*** The Linting tests will throw lots of errors and warnings. Maybe you should ignore them ;-) 


### Local Testing
Since the `npm link` is currently not working, you can use the following work around:
- Build the package
- Pack the package
- Install the package temporary within a brand directory of the MPH Landing Pages you want to test with

```shell
npm run build
npm pack
cd ../meeting-point-hotel-brands/design_plus/
npm i ../../tourstream-mhb-lib/tourstream-tourstream-mhb-lib-1.2.28.tgz
```

***Note:*** Don't forget to revert this local installation of the package within MPH Landing Pages.
Instead of this you should update the package after deploying it to npmjs.com

## Manual Deployment
Before merging your changes to master you should update the version number of the package in the [package.json](./package.json) and [package-lock.json](./package-lock.json) (use: `npm i`).
After merging your changes you can build and deploy the package to npmjs.com

```shell
npm run build
npm publish
```

Finally, you have to update the package within the related brand directories of the MPH Landing Pages.
