# Typescript/Javascript Geoserver Client
Compiled from openapi specs: https://github.com/geoserver/geoserver/tree/master/doc/en/api

`yarn`
`yarn build`

## Publish
`lerna publish`

## Generate API from Open Api YAML
### Install openapi-generator-cli
`npm i -g openapi-generator-cli`
### Generate the api
`openapi-generator-cli generate`
### Fix types
Some of the types that are produced are not correct. Try to build the project to find the errors
