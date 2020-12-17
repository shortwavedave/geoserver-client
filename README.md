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

## Packages
NPM packages exist for each api, shown below. Packages can be installed by running, for example:

`yarn add geoserver-client-workspaces`

then the package may be consumed as follows:

```
import {DefaultApi as WsApi} from 'geoserver-client-worksapces'

const wsApi = new WsApi({basePath: "http://<geoserver-path>/geoserver/rest"})
const ws = await wsApi.getWorkspaces()
ws.data.workspaces.workspace[0]
```

List of Packages (via `lerna list`):
```
geoserver-client-coverages
geoserver-client-coveragestores
geoserver-client-datastores
geoserver-client-featuretypes
geoserver-client-fonts
geoserver-client-gwcblobstores
geoserver-client-gwcbounds
geoserver-client-gwcdiskquota
geoserver-client-gwcfilterupdate
geoserver-client-gwcglobal
geoserver-client-gwcgridsets
geoserver-client-gwcindex
geoserver-client-gwclayers
geoserver-client-gwcmasstruncate
geoserver-client-gwcmemorycachestatistics
geoserver-client-gwcreload
geoserver-client-gwcseed
geoserver-client-importer
geoserver-client-importer-data
geoserver-client-importer-tasks
geoserver-client-importer-transforms
geoserver-client-layergroups
geoserver-client-layers
geoserver-client-manifests
geoserver-client-metadata
geoserver-client-monitoring
geoserver-client-namespaces
geoserver-client-opensearch-eo
geoserver-client-owsservices
geoserver-client-params-extractor
geoserver-client-reload
geoserver-client-resource
geoserver-client-roles
geoserver-client-security
geoserver-client-settings
geoserver-client-structuredcoverages
geoserver-client-styles
geoserver-client-system-status
geoserver-client-templates
geoserver-client-transforms
geoserver-client-usergroup
geoserver-client-wmslayers
geoserver-client-wmsstores
geoserver-client-wmtslayers
geoserver-client-wmtsstores
geoserver-client-workspaces
```
