// tslint:disable
/**
 * GeoServer System Status
 * Request provides details about OWS and REST requests that GeoServer has handled
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
 * Metrics for system status properties
 * @export
 * @interface Metric
 */
export interface Metric {
    /**
     * Metrics for system status properties
     * @type {Array<MetricValue>}
     * @memberof Metric
     */
    metrics?: Array<MetricValue>;
}
/**
 * 
 * @export
 * @interface MetricValue
 */
export interface MetricValue {
    /**
     * System information value
     * @type {string}
     * @memberof MetricValue
     */
    value?: string;
    /**
     * Category of this system information
     * @type {string}
     * @memberof MetricValue
     */
    category?: string;
    /**
     * Name of the metric
     * @type {string}
     * @memberof MetricValue
     */
    name?: string;
    /**
     * TRUE if the system information value is available
     * @type {boolean}
     * @memberof MetricValue
     */
    available?: boolean;
    /**
     * Description of this system information
     * @type {string}
     * @memberof MetricValue
     */
    description?: string;
    /**
     * Unit of the system information, can be empty
     * @type {string}
     * @memberof MetricValue
     */
    unit?: string;
    /**
     * This value can be used to render the metrics in a predefined order
     * @type {number}
     * @memberof MetricValue
     */
    priority?: number;
    /**
     * Identifies the resource associated with the metric, e.g. file partition name
     * @type {string}
     * @memberof MetricValue
     */
    identifier?: string;
}
/**
 * Metrics for system status properties
 * @export
 * @interface Metrics
 */
export interface Metrics {
    /**
     * 
     * @type {Metric}
     * @memberof Metrics
     */
    metric?: Metric;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of system-level information. Major operating systems (Linux, Windows and MacOX) are supported out of the box. 
         * @summary Get a list of requests
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMonitorRequests: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/about/system-status`;
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
         * Returns a list of system-level information. Major operating systems (Linux, Windows and MacOX) are supported out of the box. 
         * @summary Get a list of requests
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMonitorRequests(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Metrics>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getMonitorRequests(options);
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
         * Returns a list of system-level information. Major operating systems (Linux, Windows and MacOX) are supported out of the box. 
         * @summary Get a list of requests
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMonitorRequests(options?: any): AxiosPromise<Metrics> {
            return DefaultApiFp(configuration).getMonitorRequests(options).then((request) => request(axios, basePath));
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
     * Returns a list of system-level information. Major operating systems (Linux, Windows and MacOX) are supported out of the box. 
     * @summary Get a list of requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getMonitorRequests(options?: any): AxiosPromise<Metrics>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * Returns a list of system-level information. Major operating systems (Linux, Windows and MacOX) are supported out of the box. 
     * @summary Get a list of requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getMonitorRequests(options?: any) {
        return DefaultApiFp(this.configuration).getMonitorRequests(options).then((request) => request(this.axios, this.basePath));
    }

}


