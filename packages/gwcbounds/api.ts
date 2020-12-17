// tslint:disable
/**
 * GeoWebCache Bounds
 * A RESTful interface through which get the bounds of a given layer based on srs.
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
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the bounds for a layer based on srs.
         * @summary Returns the bounds for a layer based on srs.
         * @param {string} layer The name of the layer to update.
         * @param {string} srs The srs projection used against the layer to find the bounds such as EPSG:4326
         * @param {'java'} type Accepts java as an extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boundsGet: async (layer: string, srs: string, type: 'java', options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'layer' is not null or undefined
            if (layer === null || layer === undefined) {
                throw new RequiredError('layer','Required parameter layer was null or undefined when calling boundsGet.');
            }
            // verify required parameter 'srs' is not null or undefined
            if (srs === null || srs === undefined) {
                throw new RequiredError('srs','Required parameter srs was null or undefined when calling boundsGet.');
            }
            // verify required parameter 'type' is not null or undefined
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling boundsGet.');
            }
            const localVarPath = `/bounds/{layer}/{srs}/{type}`
                .replace(`{${"layer"}}`, encodeURIComponent(String(layer)))
                .replace(`{${"srs"}}`, encodeURIComponent(String(srs)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type)));
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
         * Returns the bounds for a layer based on srs.
         * @summary Returns the bounds for a layer based on srs.
         * @param {string} layer The name of the layer to update.
         * @param {string} srs The srs projection used against the layer to find the bounds such as EPSG:4326
         * @param {'java'} type Accepts java as an extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async boundsGet(layer: string, srs: string, type: 'java', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).boundsGet(layer, srs, type, options);
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
         * Returns the bounds for a layer based on srs.
         * @summary Returns the bounds for a layer based on srs.
         * @param {string} layer The name of the layer to update.
         * @param {string} srs The srs projection used against the layer to find the bounds such as EPSG:4326
         * @param {'java'} type Accepts java as an extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        boundsGet(layer: string, srs: string, type: 'java', options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).boundsGet(layer, srs, type, options).then((request) => request(axios, basePath));
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
     * Returns the bounds for a layer based on srs.
     * @summary Returns the bounds for a layer based on srs.
     * @param {string} layer The name of the layer to update.
     * @param {string} srs The srs projection used against the layer to find the bounds such as EPSG:4326
     * @param {'java'} type Accepts java as an extension.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    boundsGet(layer: string, srs: string, type: 'java', options?: any): AxiosPromise<void>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * Returns the bounds for a layer based on srs.
     * @summary Returns the bounds for a layer based on srs.
     * @param {string} layer The name of the layer to update.
     * @param {string} srs The srs projection used against the layer to find the bounds such as EPSG:4326
     * @param {'java'} type Accepts java as an extension.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public boundsGet(layer: string, srs: string, type: 'java', options?: any) {
        return DefaultApiFp(this.configuration).boundsGet(layer, srs, type, options).then((request) => request(this.axios, this.basePath));
    }

}

