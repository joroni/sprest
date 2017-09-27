[gd-sprest](../README.md) > ["definitions/lib/promise"](../modules/_definitions_lib_promise_.md) > [IPromise](../interfaces/_definitions_lib_promise_.ipromise.md)



# Interface: IPromise


The promise class


## Constructors
<a id="constructor"></a>


### ⊕ **new IPromise**(callback?: *function*): [IPromise](_definitions_lib_promise_.ipromise.md)



*Defined in [definitions/lib/promise.ts:4](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/promise.ts#L4)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the promise completes. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)

---


## Methods
<a id="done"></a>

###  done

► **done**(callback?: *function*): `any`




*Defined in [definitions/lib/promise.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/promise.ts#L15)*



Method to set the callback method of the promise.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the promise completes. |





**Returns:** `any`





___

<a id="resolve"></a>

###  resolve

► **resolve**(...args: *`any`[]*): `any`




*Defined in [definitions/lib/promise.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/promise.ts#L21)*



Method to set this promise as completed.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| args | `any`[]   |  The arguments to pass to the callback. |





**Returns:** `any`





___


