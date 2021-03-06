// tslint:disable
/**
 * GeoServer Manifests API
 * GeoServer provides a REST service to expose a listing of all loaded JARs and resources on the running instance. This is useful for bug reports and to keep track of extensions deployed into the application.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: geoserver-users@sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Details on loaded JARs.
 * @export
 * @interface Manifest
 */
export interface Manifest {
    /**
     * 
     * @type {ManifestAbout}
     * @memberof Manifest
     */
    about?: ManifestAbout;
}
/**
 * 
 * @export
 * @interface ManifestAbout
 */
export interface ManifestAbout {
    /**
     * Contains key/value pairs for the resource (the resource name is found in the name XML attribute and @name JSON property).
     * @type {Array<ManifestAboutResource>}
     * @memberof ManifestAbout
     */
    resource?: Array<ManifestAboutResource>;
}
/**
 * 
 * @export
 * @interface ManifestAboutResource
 */
export interface ManifestAboutResource {
    /**
     * The name of the resource.
     * @type {string}
     * @memberof ManifestAboutResource
     */
    name?: string;
}
/**
 * Details of installed and configured modules. Status details always include human readable name, and module name. Optional details include version, availability, status message, and links to documentation.
 * @export
 * @interface Status
 */
export interface Status {
    /**
     * 
     * @type {StatusAbout}
     * @memberof Status
     */
    about?: StatusAbout;
}
/**
 * 
 * @export
 * @interface StatusAbout
 */
export interface StatusAbout {
    /**
     * 
     * @type {Array<StatusAboutStatus>}
     * @memberof StatusAbout
     */
    status?: Array<StatusAboutStatus>;
}
/**
 * 
 * @export
 * @interface StatusAboutStatus
 */
export interface StatusAboutStatus {
    /**
     * Module identifier based on artifact bundle. For example, gs-main, gs-oracle. 
     * @type {string}
     * @memberof StatusAboutStatus
     */
    module?: string;
    /**
     * Human readable name (from GeoServer documentation), or as defined in the extension pom.xml, ie. <name>ArcSDE DataStore Extensions</name> 
     * @type {string}
     * @memberof StatusAboutStatus
     */
    name?: string;
    /**
     * Optional component identifier within module. For example, rendering-engine. 
     * @type {string}
     * @memberof StatusAboutStatus
     */
    component?: string;
    /**
     * Human readable version, ie. for geotools it would be 15-SNAPSHOT 
     * @type {string}
     * @memberof StatusAboutStatus
     */
    version?: string;
    /**
     * Optional status message such as what Java rendering engine is in use, or the library path if the module/driver is unavailable 
     * @type {string}
     * @memberof StatusAboutStatus
     */
    message?: string;
    /**
     * Returns whether the module is enabled in the current GeoServer configuration. 
     * @type {boolean}
     * @memberof StatusAboutStatus
     */
    isEnabled?: boolean;
    /**
     * Returns whether the module is available to GeoServer 
     * @type {boolean}
     * @memberof StatusAboutStatus
     */
    isAvailable?: boolean;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint shows the status details of all installed and configured modules. Status details always include human readable name, and module name. Optional details include version, availability, status message, and links to documentation.  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML). 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aboutStatusGet: async (manifest?: string, key?: string, value?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/about/status`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            if (manifest !== undefined) {
                localVarQueryParameter['manifest'] = manifest;
            }

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            if (value !== undefined) {
                localVarQueryParameter['value'] = value;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * \'This endpoint shows only the details for the high-level components: GeoServer, GeoTools, and GeoWebCache.\'  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).\' 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aboutVersionGet: async (manifest?: string, key?: string, value?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/about/version`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            if (manifest !== undefined) {
                localVarQueryParameter['manifest'] = manifest;
            }

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            if (value !== undefined) {
                localVarQueryParameter['value'] = value;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint retrieves details on all loaded JARs. All the GeoServer manifest JARs are marked with the property GeoServerModule and classified by type, so you can use filtering capabilities to search for a set of manifests using regular expressions (see the manifest parameter) or a type category (see the key and value parameter).  The available types are core, extension, or community. To filter modules by a particular type, append a request with key=GeoServerModule&value={type}  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).  The model is very simple and is shared between the version and the resource requests to parse both requests. You can customize the results adding a properties file called manifest.properties into the root of the data directory. 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManifest: async (manifest?: string, key?: string, value?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/about/manifest`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }

            if (manifest !== undefined) {
                localVarQueryParameter['manifest'] = manifest;
            }

            if (key !== undefined) {
                localVarQueryParameter['key'] = key;
            }

            if (value !== undefined) {
                localVarQueryParameter['value'] = value;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This endpoint shows the status details of all installed and configured modules. Status details always include human readable name, and module name. Optional details include version, availability, status message, and links to documentation.  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML). 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aboutStatusGet(manifest?: string, key?: string, value?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Status>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).aboutStatusGet(manifest, key, value, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * \'This endpoint shows only the details for the high-level components: GeoServer, GeoTools, and GeoWebCache.\'  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).\' 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aboutVersionGet(manifest?: string, key?: string, value?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).aboutVersionGet(manifest, key, value, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This endpoint retrieves details on all loaded JARs. All the GeoServer manifest JARs are marked with the property GeoServerModule and classified by type, so you can use filtering capabilities to search for a set of manifests using regular expressions (see the manifest parameter) or a type category (see the key and value parameter).  The available types are core, extension, or community. To filter modules by a particular type, append a request with key=GeoServerModule&value={type}  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).  The model is very simple and is shared between the version and the resource requests to parse both requests. You can customize the results adding a properties file called manifest.properties into the root of the data directory. 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getManifest(manifest?: string, key?: string, value?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Manifest>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getManifest(manifest, key, value, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This endpoint shows the status details of all installed and configured modules. Status details always include human readable name, and module name. Optional details include version, availability, status message, and links to documentation.  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML). 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aboutStatusGet(manifest?: string, key?: string, value?: string, options?: any): AxiosPromise<Status> {
            return DefaultApiFp(configuration).aboutStatusGet(manifest, key, value, options).then((request) => request(axios, basePath));
        },
        /**
         * \'This endpoint shows only the details for the high-level components: GeoServer, GeoTools, and GeoWebCache.\'  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).\' 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aboutVersionGet(manifest?: string, key?: string, value?: string, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).aboutVersionGet(manifest, key, value, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint retrieves details on all loaded JARs. All the GeoServer manifest JARs are marked with the property GeoServerModule and classified by type, so you can use filtering capabilities to search for a set of manifests using regular expressions (see the manifest parameter) or a type category (see the key and value parameter).  The available types are core, extension, or community. To filter modules by a particular type, append a request with key=GeoServerModule&value={type}  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).  The model is very simple and is shared between the version and the resource requests to parse both requests. You can customize the results adding a properties file called manifest.properties into the root of the data directory. 
         * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
         * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
         * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManifest(manifest?: string, key?: string, value?: string, options?: any): AxiosPromise<Manifest> {
            return DefaultApiFp(configuration).getManifest(manifest, key, value, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     * This endpoint shows the status details of all installed and configured modules. Status details always include human readable name, and module name. Optional details include version, availability, status message, and links to documentation.  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML). 
     * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
     * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
     * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    aboutStatusGet(manifest?: string, key?: string, value?: string, options?: any): AxiosPromise<Status>;

    /**
     * \'This endpoint shows only the details for the high-level components: GeoServer, GeoTools, and GeoWebCache.\'  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).\' 
     * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
     * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
     * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    aboutVersionGet(manifest?: string, key?: string, value?: string, options?: any): AxiosPromise<void>;

    /**
     * This endpoint retrieves details on all loaded JARs. All the GeoServer manifest JARs are marked with the property GeoServerModule and classified by type, so you can use filtering capabilities to search for a set of manifests using regular expressions (see the manifest parameter) or a type category (see the key and value parameter).  The available types are core, extension, or community. To filter modules by a particular type, append a request with key=GeoServerModule&value={type}  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).  The model is very simple and is shared between the version and the resource requests to parse both requests. You can customize the results adding a properties file called manifest.properties into the root of the data directory. 
     * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
     * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
     * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getManifest(manifest?: string, key?: string, value?: string, options?: any): AxiosPromise<Manifest>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * This endpoint shows the status details of all installed and configured modules. Status details always include human readable name, and module name. Optional details include version, availability, status message, and links to documentation.  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML). 
     * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
     * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
     * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public aboutStatusGet(manifest?: string, key?: string, value?: string, options?: any) {
        return DefaultApiFp(this.configuration).aboutStatusGet(manifest, key, value, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * \'This endpoint shows only the details for the high-level components: GeoServer, GeoTools, and GeoWebCache.\'  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).\' 
     * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
     * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
     * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public aboutVersionGet(manifest?: string, key?: string, value?: string, options?: any) {
        return DefaultApiFp(this.configuration).aboutVersionGet(manifest, key, value, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint retrieves details on all loaded JARs. All the GeoServer manifest JARs are marked with the property GeoServerModule and classified by type, so you can use filtering capabilities to search for a set of manifests using regular expressions (see the manifest parameter) or a type category (see the key and value parameter).  The available types are core, extension, or community. To filter modules by a particular type, append a request with key=GeoServerModule&value={type}  Use the \"Accept:\" header to specify format or append an extension to the endpoint (example \"/about/manifest.xml\" for XML).  The model is very simple and is shared between the version and the resource requests to parse both requests. You can customize the results adding a properties file called manifest.properties into the root of the data directory. 
     * @param {string} [manifest] The manifest parameter is used to filter over resulting resource (manifest) names attribute using Java regular expressions. 
     * @param {string} [key] Only return manifest entries with this key in their properties. It can be optionally combined with the value parameter.  
     * @param {string} [value] Only return manifest entries that have this value for the provided key parameter.           
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getManifest(manifest?: string, key?: string, value?: string, options?: any) {
        return DefaultApiFp(this.configuration).getManifest(manifest, key, value, options).then((request) => request(this.axios, this.basePath));
    }

}


