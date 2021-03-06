// tslint:disable
/**
 * GeoWebCache Reloading
 * Reloading a GeoWebCache instance after changing configurations.
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
         * Reloads the GeoWebCache settings after making changes to the configuration.
         * @summary Reloads GWC settings/
         * @param {string} [configurationName] The string value of the configuration ie. \&quot;reload_configuration&#x3D;1\&quot;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reloadPost: async (configurationName?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/reload`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof configurationName !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(configurationName !== undefined ? configurationName : {}) : (configurationName || "");

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
         * Reloads the GeoWebCache settings after making changes to the configuration.
         * @summary Reloads GWC settings/
         * @param {string} [configurationName] The string value of the configuration ie. \&quot;reload_configuration&#x3D;1\&quot;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reloadPost(configurationName?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).reloadPost(configurationName, options);
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
         * Reloads the GeoWebCache settings after making changes to the configuration.
         * @summary Reloads GWC settings/
         * @param {string} [configurationName] The string value of the configuration ie. \&quot;reload_configuration&#x3D;1\&quot;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reloadPost(configurationName?: string, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).reloadPost(configurationName, options).then((request) => request(axios, basePath));
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
     * Reloads the GeoWebCache settings after making changes to the configuration.
     * @summary Reloads GWC settings/
     * @param {string} [configurationName] The string value of the configuration ie. \&quot;reload_configuration&#x3D;1\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    reloadPost(configurationName?: string, options?: any): AxiosPromise<void>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * Reloads the GeoWebCache settings after making changes to the configuration.
     * @summary Reloads GWC settings/
     * @param {string} [configurationName] The string value of the configuration ie. \&quot;reload_configuration&#x3D;1\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public reloadPost(configurationName?: string, options?: any) {
        return DefaultApiFp(this.configuration).reloadPost(configurationName, options).then((request) => request(this.axios, this.basePath));
    }

}


