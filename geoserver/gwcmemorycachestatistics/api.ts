// tslint:disable
/**
 * GeoWebCache Memory Cache Statistics
 * A response contains memory cache statistics
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
         * When appended with .json or .xml will respond with memory caches statistics in the requested format if the blobstore used is an instance of MemoryBlobStore.
         * @summary Returns XML or JSON response with memory cache statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        statisticsGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/statistics`;
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
         * When appended with .json or .xml will respond with memory caches statistics in the requested format if the blobstore used is an instance of MemoryBlobStore.
         * @summary Returns XML or JSON response with memory cache statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async statisticsGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).statisticsGet(options);
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
         * When appended with .json or .xml will respond with memory caches statistics in the requested format if the blobstore used is an instance of MemoryBlobStore.
         * @summary Returns XML or JSON response with memory cache statistics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        statisticsGet(options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).statisticsGet(options).then((request) => request(axios, basePath));
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
     * When appended with .json or .xml will respond with memory caches statistics in the requested format if the blobstore used is an instance of MemoryBlobStore.
     * @summary Returns XML or JSON response with memory cache statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    statisticsGet(options?: any): AxiosPromise<void>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * When appended with .json or .xml will respond with memory caches statistics in the requested format if the blobstore used is an instance of MemoryBlobStore.
     * @summary Returns XML or JSON response with memory cache statistics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public statisticsGet(options?: any) {
        return DefaultApiFp(this.configuration).statisticsGet(options).then((request) => request(this.axios, this.basePath));
    }

}


