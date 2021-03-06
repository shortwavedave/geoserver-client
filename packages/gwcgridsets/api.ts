// tslint:disable
/**
 * GeoWebCache GridSets
 * A Grid Set is a set of tile grids associated with a coordinate reference system.
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
 * 
 * @export
 * @interface GridSet
 */
export interface GridSet {
    /**
     * Name of the gridset. Should be unique.
     * @type {string}
     * @memberof GridSet
     */
    name?: string;
    /**
     * Description of the gridset
     * @type {string}
     * @memberof GridSet
     */
    description?: string;
    /**
     * 
     * @type {GridSetSrs}
     * @memberof GridSet
     */
    srs?: GridSetSrs;
    /**
     * 
     * @type {GridSetExtent}
     * @memberof GridSet
     */
    extent?: GridSetExtent;
    /**
     * Whether the y-coordinate of the tile origin is at the top (true) or bottom (false).
     * @type {boolean}
     * @memberof GridSet
     */
    alignTopLeft?: boolean;
    /**
     * 
     * @type {GridSetResolutions}
     * @memberof GridSet
     */
    resolutions?: GridSetResolutions;
    /**
     * The number of meters per coordinate unit.
     * @type {number}
     * @memberof GridSet
     */
    metersPerUnit?: number;
    /**
     * The assumed pixel size of the display device, in meters.
     * @type {number}
     * @memberof GridSet
     */
    pixelSize?: number;
    /**
     * 
     * @type {GridSetScaleNames}
     * @memberof GridSet
     */
    scaleNames?: GridSetScaleNames;
    /**
     * The height of a tile in pixels.
     * @type {number}
     * @memberof GridSet
     */
    tileHeight?: number;
    /**
     * The width of a tile in pixels.
     * @type {number}
     * @memberof GridSet
     */
    tileWidth?: number;
    /**
     * By default the coordinates are {x,y}, this flag reverses the output for WMTS getcapabilities.
     * @type {boolean}
     * @memberof GridSet
     */
    yCoordinateFirst?: boolean;
}
/**
 * The gridset extent
 * @export
 * @interface GridSetExtent
 */
export interface GridSetExtent {
    /**
     * The coordinates of the extent.
     * @type {Array<GridSetExtentCoords>}
     * @memberof GridSetExtent
     */
    coords?: Array<GridSetExtentCoords>;
}
/**
 * A coordinate of the extent.
 * @export
 * @interface GridSetExtentCoords
 */
export interface GridSetExtentCoords {
    /**
     * The coordinate value.
     * @type {number}
     * @memberof GridSetExtentCoords
     */
    _double?: number;
}
/**
 * 
 * @export
 * @interface GridSetReference
 */
export interface GridSetReference {
    /**
     * Name of the gridset
     * @type {string}
     * @memberof GridSetReference
     */
    name?: string;
    /**
     * URL to gridset definition
     * @type {string}
     * @memberof GridSetReference
     */
    link?: string;
}
/**
 * The resolutions of each gridset level
 * @export
 * @interface GridSetResolutions
 */
export interface GridSetResolutions {
    /**
     * 
     * @type {GridSetResolutionsItems}
     * @memberof GridSetResolutions
     */
    items?: GridSetResolutionsItems;
}
/**
 * The resolution of a gridset level.
 * @export
 * @interface GridSetResolutionsItems
 */
export interface GridSetResolutionsItems {
    /**
     * The resolution value.
     * @type {number}
     * @memberof GridSetResolutionsItems
     */
    _double?: number;
}
/**
 * The scale names of each gridset level
 * @export
 * @interface GridSetScaleNames
 */
export interface GridSetScaleNames {
    /**
     * 
     * @type {GridSetScaleNamesItems}
     * @memberof GridSetScaleNames
     */
    items?: GridSetScaleNamesItems;
}
/**
 * The scale name of a gridset level.
 * @export
 * @interface GridSetScaleNamesItems
 */
export interface GridSetScaleNamesItems {
    /**
     * The scale name.
     * @type {string}
     * @memberof GridSetScaleNamesItems
     */
    _double?: string;
}
/**
 * The reference system of the gridSet
 * @export
 * @interface GridSetSrs
 */
export interface GridSetSrs {
    /**
     * The SRS number
     * @type {number}
     * @memberof GridSetSrs
     */
    number?: number;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a configured gridset from the server.
         * @summary Delete configured gridset
         * @param {string} gridsetName The name of the gridset to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gridsetDelete: async (gridsetName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'gridsetName' is not null or undefined
            if (gridsetName === null || gridsetName === undefined) {
                throw new RequiredError('gridsetName','Required parameter gridsetName was null or undefined when calling gridsetDelete.');
            }
            const localVarPath = `/gridsets/{gridsetName}`
                .replace(`{${"gridsetName"}}`, encodeURIComponent(String(gridsetName)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * Retrieves a single configured gridset definition.
         * @summary Retrieve a configured gridset
         * @param {string} gridsetName The name of the gridset to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gridsetGet: async (gridsetName: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'gridsetName' is not null or undefined
            if (gridsetName === null || gridsetName === undefined) {
                throw new RequiredError('gridsetName','Required parameter gridsetName was null or undefined when calling gridsetGet.');
            }
            const localVarPath = `/gridsets/{gridsetName}`
                .replace(`{${"gridsetName"}}`, encodeURIComponent(String(gridsetName)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * Creates a new configured gridset on the server, or modifies an existing gridset.
         * @summary Create or update a configured gridset.
         * @param {string} gridsetName The name of the gridset to add or update.
         * @param {GridSet} gridsetBody The new gridset definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gridsetPut: async (gridsetName: string, gridsetBody: GridSet, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'gridsetName' is not null or undefined
            if (gridsetName === null || gridsetName === undefined) {
                throw new RequiredError('gridsetName','Required parameter gridsetName was null or undefined when calling gridsetPut.');
            }
            // verify required parameter 'gridsetBody' is not null or undefined
            if (gridsetBody === null || gridsetBody === undefined) {
                throw new RequiredError('gridsetBody','Required parameter gridsetBody was null or undefined when calling gridsetPut.');
            }
            const localVarPath = `/gridsets/{gridsetName}`
                .replace(`{${"gridsetName"}}`, encodeURIComponent(String(gridsetName)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/xml';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof gridsetBody !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(gridsetBody !== undefined ? gridsetBody : {}) : (gridsetBody || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Displays a list of all configured gridsets on the server.
         * @summary Get a list of configured gridsets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gridsetsGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/gridsets`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * Deletes a configured gridset from the server.
         * @summary Delete configured gridset
         * @param {string} gridsetName The name of the gridset to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gridsetDelete(gridsetName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).gridsetDelete(gridsetName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a single configured gridset definition.
         * @summary Retrieve a configured gridset
         * @param {string} gridsetName The name of the gridset to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gridsetGet(gridsetName: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GridSet>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).gridsetGet(gridsetName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Creates a new configured gridset on the server, or modifies an existing gridset.
         * @summary Create or update a configured gridset.
         * @param {string} gridsetName The name of the gridset to add or update.
         * @param {GridSet} gridsetBody The new gridset definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gridsetPut(gridsetName: string, gridsetBody: GridSet, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).gridsetPut(gridsetName, gridsetBody, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Displays a list of all configured gridsets on the server.
         * @summary Get a list of configured gridsets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async gridsetsGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GridSetReference>>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).gridsetsGet(options);
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
         * Deletes a configured gridset from the server.
         * @summary Delete configured gridset
         * @param {string} gridsetName The name of the gridset to delete.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gridsetDelete(gridsetName: string, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).gridsetDelete(gridsetName, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a single configured gridset definition.
         * @summary Retrieve a configured gridset
         * @param {string} gridsetName The name of the gridset to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gridsetGet(gridsetName: string, options?: any): AxiosPromise<GridSet> {
            return DefaultApiFp(configuration).gridsetGet(gridsetName, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new configured gridset on the server, or modifies an existing gridset.
         * @summary Create or update a configured gridset.
         * @param {string} gridsetName The name of the gridset to add or update.
         * @param {GridSet} gridsetBody The new gridset definition.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gridsetPut(gridsetName: string, gridsetBody: GridSet, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).gridsetPut(gridsetName, gridsetBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Displays a list of all configured gridsets on the server.
         * @summary Get a list of configured gridsets
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        gridsetsGet(options?: any): AxiosPromise<Array<GridSetReference>> {
            return DefaultApiFp(configuration).gridsetsGet(options).then((request) => request(axios, basePath));
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
     * Deletes a configured gridset from the server.
     * @summary Delete configured gridset
     * @param {string} gridsetName The name of the gridset to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    gridsetDelete(gridsetName: string, options?: any): AxiosPromise<void>;

    /**
     * Retrieves a single configured gridset definition.
     * @summary Retrieve a configured gridset
     * @param {string} gridsetName The name of the gridset to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    gridsetGet(gridsetName: string, options?: any): AxiosPromise<GridSet>;

    /**
     * Creates a new configured gridset on the server, or modifies an existing gridset.
     * @summary Create or update a configured gridset.
     * @param {string} gridsetName The name of the gridset to add or update.
     * @param {GridSet} gridsetBody The new gridset definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    gridsetPut(gridsetName: string, gridsetBody: GridSet, options?: any): AxiosPromise<void>;

    /**
     * Displays a list of all configured gridsets on the server.
     * @summary Get a list of configured gridsets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    gridsetsGet(options?: any): AxiosPromise<Array<GridSetReference>>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * Deletes a configured gridset from the server.
     * @summary Delete configured gridset
     * @param {string} gridsetName The name of the gridset to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public gridsetDelete(gridsetName: string, options?: any) {
        return DefaultApiFp(this.configuration).gridsetDelete(gridsetName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a single configured gridset definition.
     * @summary Retrieve a configured gridset
     * @param {string} gridsetName The name of the gridset to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public gridsetGet(gridsetName: string, options?: any) {
        return DefaultApiFp(this.configuration).gridsetGet(gridsetName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new configured gridset on the server, or modifies an existing gridset.
     * @summary Create or update a configured gridset.
     * @param {string} gridsetName The name of the gridset to add or update.
     * @param {GridSet} gridsetBody The new gridset definition.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public gridsetPut(gridsetName: string, gridsetBody: GridSet, options?: any) {
        return DefaultApiFp(this.configuration).gridsetPut(gridsetName, gridsetBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Displays a list of all configured gridsets on the server.
     * @summary Get a list of configured gridsets
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public gridsetsGet(options?: any) {
        return DefaultApiFp(this.configuration).gridsetsGet(options).then((request) => request(this.axios, this.basePath));
    }

}


