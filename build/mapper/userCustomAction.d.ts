/**
 * User Custom Action
 */
export declare const usercustomaction: {
    delete: {
        requestType: number;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
/**
 * User Custom Actions
 */
export declare const usercustomactions: {
    add: {
        metadataType: string;
        name: string;
        requestType: number;
    };
    clear: {
        requestType: number;
    };
    getById: {
        argNames: string[];
        requestType: number;
        returnType: string;
    };
    query: {
        argNames: string[];
        requestType: number;
    };
};
