/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class Promise {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(callback?: (...args) => void);
    /******************************************************************************************************************************** */
    /******************************************************************************************************************************** */
    done(callback?: (...args) => void): void;
    resolve(...args: any[]): void;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private args;
    private callback;
    private resolvedFl;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private executeMethod();
}