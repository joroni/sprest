import { Base } from "..";
/**
 * Request Helper Methods
 */
export interface IBaseHelper {
    /** The base object. */
    base: Base;
    /** The request type */
    requestType: number;
    /** The request's raw response. */
    response: string;
    /** The request's status. */
    status: number;
    /** Adds methods based on the object type. */
    addMethods(base: Base, data: any): any;
    /** Adds properties based on the object type. */
    addProperties(base: Base, data: any): any;
    /** Updates the data collection objects. */
    updateDataCollection(obj: Base, results: Array<Base>): any;
    /** Updates the data object. */
    updateDataObject(isBatchRequest: boolean): any;
    /** Updates the metadata. */
    updateMetadata(base: any, data: any): any;
}
