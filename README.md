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
Some of the types that are produced are not correct, run `yarn build` to find the errors

## Packages
NPM packages exist for each api, shown below. Packages can be installed by running, for example:

`yarn add geoserver-client-workspaces`

then the package may be consumed as follows:

```typescript
import {DefaultApi as WsApi} from 'geoserver-client-workspaces/dist'

const wsApi = new WsApi({basePath: "http://<geoserver-path>/geoserver/rest"})
const ws = await wsApi.getWorkspaces()
ws.data.workspaces.workspace[0]
```

List of Packages (via `lerna list`):
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/coverages.yaml): 
  geoserver-client-coverages
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/coveragestores.yaml): 
  geoserver-client-coveragestores
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/datastores.yaml):
  geoserver-client-datastores
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/featuretypes.yaml):
  geoserver-client-featuretypes
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/fonts.yaml):
  geoserver-client-fonts
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcblobstores.yaml):
  geoserver-client-gwcblobstores
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcbounds.yaml):
  geoserver-client-gwcbounds
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcdiskquota.yaml):
  geoserver-client-gwcdiskquota
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcfilterupdate.yaml):
  geoserver-client-gwcfilterupdate
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcglobal.yaml):
  geoserver-client-gwcglobal
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcgridsets.yaml):
  geoserver-client-gwcgridsets
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcindex.yaml):
  geoserver-client-gwcindex
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwclayers.yaml):
  geoserver-client-gwclayers
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcmasstruncate.yaml):
  geoserver-client-gwcmasstruncate
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcmemorycachestatistics.yaml):
  geoserver-client-gwcmemorycachestatistics
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcreload.yaml):
  geoserver-client-gwcreload
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/gwcseed.yaml):
  geoserver-client-gwcseed
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/importer.yaml):
  geoserver-client-importer
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/importer-data.yaml):
  geoserver-client-importer-data
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/importer-tasks.yaml):
  geoserver-client-importer-tasks
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/importer-transforms.yaml):
  geoserver-client-importer-transforms
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/layergroups.yaml):
  geoserver-client-layergroups
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/layers.yaml):
  geoserver-client-layers
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/manifests.yaml):
  geoserver-client-manifests
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/metadata.yaml):
  geoserver-client-metadata
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/monitoring.yaml):
  geoserver-client-monitoring
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/namespaces.yaml):
  geoserver-client-namespaces
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/opensearch-eo.yaml):
  geoserver-client-opensearch-eo
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/owsservices.yaml):
  geoserver-client-owsservices
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/params-extractor.yaml):
  geoserver-client-params-extractor
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/reload.yaml):
  geoserver-client-reload
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/resource.yaml):
  geoserver-client-resource
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/roles.yaml):
  geoserver-client-roles
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/security.yaml):
  geoserver-client-security
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/settings.yaml):
  geoserver-client-settings
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/structuredcoverages.yaml):
  geoserver-client-structuredcoverages
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/styles.yaml):
  geoserver-client-styles
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/system-status.yaml):
  geoserver-client-system-status
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/templates.yaml):
  geoserver-client-templates
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/transforms.yaml):
  geoserver-client-transforms
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/usergroup.yaml):
  geoserver-client-usergroup
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/wmslayers.yaml):
  geoserver-client-wmslayers
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/wmsstores.yaml):
  geoserver-client-wmsstores
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/wmtslayers.yaml):
  geoserver-client-wmtslayers
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/wmtsstores.yaml):
  geoserver-client-wmtsstores
- [ReDoc](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/shortwavedave/geoserver-client/main/doc/1.0.0/workspaces.yaml):
  geoserver-client-workspaces

