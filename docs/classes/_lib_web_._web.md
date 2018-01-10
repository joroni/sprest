[gd-sprest](../README.md) > ["lib/web"](../modules/_lib_web_.md) > [_Web](../classes/_lib_web_._web.md)



# Class: _Web


/

## Type parameters
#### Result 
#### QueryResult 
## Hierarchy


 [Base](_utils_base_.base.md)[IWeb](../interfaces/_definitions_site_web_.iweb.md)

**↳ _Web**







## Index

### Constructors

* [constructor](_lib_web_._web.md#constructor)


### Properties

* [defaultToWebFl](_lib_web_._web.md#defaulttowebfl)
* [existsFl](_lib_web_._web.md#existsfl)
* [getAllItemsFl](_lib_web_._web.md#getallitemsfl)
* [parent](_lib_web_._web.md#parent)
* [request](_lib_web_._web.md#request)
* [requestType](_lib_web_._web.md#requesttype)
* [responses](_lib_web_._web.md#responses)
* [targetInfo](_lib_web_._web.md#targetinfo)


### Accessors

* [response](_lib_web_._web.md#response)


### Methods

* [addMethods](_lib_web_._web.md#addmethods)
* [done](_lib_web_._web.md#done)
* [execute](_lib_web_._web.md#execute)
* [executeAndWait](_lib_web_._web.md#executeandwait)
* [executeMethod](_lib_web_._web.md#executemethod)
* [executeRequest](_lib_web_._web.md#executerequest)
* [getInfo](_lib_web_._web.md#getinfo)
* [getNextSetOfResults](_lib_web_._web.md#getnextsetofresults)
* [getProperty](_lib_web_._web.md#getproperty)
* [hasAccess](_lib_web_._web.md#hasaccess)
* [then](_lib_web_._web.md#then)
* [updateDataObject](_lib_web_._web.md#updatedataobject)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new _Web**(url?: *`any`*, targetInfo?: *`any`*): [_Web](_lib_web_._web.md)



*Overrides [Base](_utils_base_.base.md).[constructor](_utils_base_.base.md#constructor)*

*Defined in [lib/web.ts:7](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/web.ts#L7)*



/


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `any`   |  - |
| targetInfo | `any`   |  - |





**Returns:** [_Web](_lib_web_._web.md)

---


## Properties
<a id="defaulttowebfl"></a>

### «Protected» defaultToWebFl

**●  defaultToWebFl**:  *`boolean`* 

*Inherited from [Base](_utils_base_.base.md).[defaultToWebFl](_utils_base_.base.md#defaulttowebfl)*

*Defined in [utils/base.ts:189](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L189)*





___

<a id="existsfl"></a>

###  existsFl

**●  existsFl**:  *`any`* 

*Inherited from [Base](_utils_base_.base.md).[existsFl](_utils_base_.base.md#existsfl)*

*Defined in [utils/base.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L34)*



/




___

<a id="getallitemsfl"></a>

### «Protected» getAllItemsFl

**●  getAllItemsFl**:  *`boolean`* 

*Inherited from [Base](_utils_base_.base.md).[getAllItemsFl](_utils_base_.base.md#getallitemsfl)*

*Defined in [utils/base.ts:192](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L192)*





___

<a id="parent"></a>

###  parent

**●  parent**:  *[Base](_utils_base_.base.md)* 

*Inherited from [Base](_utils_base_.base.md).[parent](_utils_base_.base.md#parent)*

*Defined in [utils/base.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L37)*





___

<a id="request"></a>

### «Protected» request

**●  request**:  *[XHRRequest](_utils_xhrrequest_.xhrrequest.md)* 

*Inherited from [Base](_utils_base_.base.md).[request](_utils_base_.base.md#request)*

*Defined in [utils/base.ts:198](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L198)*





___

<a id="requesttype"></a>

###  requestType

**●  requestType**:  *`any`* 

*Inherited from [Base](_utils_base_.base.md).[requestType](_utils_base_.base.md#requesttype)*

*Defined in [utils/base.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L40)*





___

<a id="responses"></a>

### «Protected» responses

**●  responses**:  *`Array`.<[Base](_utils_base_.base.md)>* 

*Inherited from [Base](_utils_base_.base.md).[responses](_utils_base_.base.md#responses)*

*Defined in [utils/base.ts:201](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L201)*





___

<a id="targetinfo"></a>

### «Protected» targetInfo

**●  targetInfo**:  *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)* 

*Inherited from [Base](_utils_base_.base.md).[targetInfo](_utils_base_.base.md#targetinfo)*

*Defined in [utils/base.ts:207](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L207)*





___


## Accessors
<a id="response"></a>

###  response


getresponse(): `any`


*Inherited from [Base](_utils_base_.base.md).[response](_utils_base_.base.md#response)*

*Defined in [utils/base.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L43)*





**Returns:** `any`



___


## Methods
<a id="addmethods"></a>

### «Protected» addMethods

► **addMethods**(obj: *`any`*, data: *`any`*): `void`




*Inherited from [Base](_utils_base_.base.md).[addMethods](_utils_base_.base.md#addmethods)*

*Defined in [utils/base.ts:217](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L217)*



/


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |
| data | `any`   |  - |





**Returns:** `void`





___

<a id="done"></a>

###  done

► **done**(callback: *function*): `void`




*Inherited from [Base](_utils_base_.base.md).[done](_utils_base_.base.md#done)*

*Defined in [utils/base.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L50)*



/


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  - |





**Returns:** `void`





___

<a id="execute"></a>

###  execute

► **execute**(...args: *`any`[]*): `this`




*Inherited from [Base](_utils_base_.base.md).[execute](_utils_base_.base.md#execute)*

*Defined in [utils/base.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L73)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| args | `any`[]   |  - |





**Returns:** `this`





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): `this`




*Inherited from [Base](_utils_base_.base.md).[executeAndWait](_utils_base_.base.md#executeandwait)*

*Defined in [utils/base.ts:158](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L158)*





**Returns:** `this`





___

<a id="executemethod"></a>

### «Protected» executeMethod

► **executeMethod**(methodName: *`string`*, methodConfig: *[IMethodInfo](../interfaces/_definitions_lib_methodinfo_.imethodinfo.md)*, args?: *`any`*): [Base](_utils_base_.base.md)`any`, `any`, `any`




*Inherited from [Base](_utils_base_.base.md).[executeMethod](_utils_base_.base.md#executemethod)*

*Defined in [utils/base.ts:363](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L363)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| methodName | `string`   |  - |
| methodConfig | [IMethodInfo](../interfaces/_definitions_lib_methodinfo_.imethodinfo.md)   |  - |
| args | `any`   |  - |





**Returns:** [Base](_utils_base_.base.md)`any`, `any`, `any`





___

<a id="executerequest"></a>

### «Protected» executeRequest

► **executeRequest**(asyncFl: *`boolean`*, callback?: *function*): `this`




*Inherited from [Base](_utils_base_.base.md).[executeRequest](_utils_base_.base.md#executerequest)*

*Defined in [utils/base.ts:424](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L424)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| asyncFl | `boolean`   |  - |
| callback | function   |  - |





**Returns:** `this`





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](../interfaces/_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [Base](_utils_base_.base.md).[getInfo](_utils_base_.base.md#getinfo)*

*Defined in [utils/base.ts:161](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L161)*





**Returns:** [IRequestInfo](../interfaces/_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="getnextsetofresults"></a>

### «Protected» getNextSetOfResults

► **getNextSetOfResults**(): [Base](_utils_base_.base.md)`any`, `any`, `any`




*Inherited from [Base](_utils_base_.base.md).[getNextSetOfResults](_utils_base_.base.md#getnextsetofresults)*

*Defined in [utils/base.ts:547](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L547)*





**Returns:** [Base](_utils_base_.base.md)`any`, `any`, `any`





___

<a id="getproperty"></a>

### «Protected» getProperty

► **getProperty**(propertyName: *`string`*, requestType?: *`string`*): [Base](_utils_base_.base.md)`any`, `any`, `any`




*Inherited from [Base](_utils_base_.base.md).[getProperty](_utils_base_.base.md#getproperty)*

*Defined in [utils/base.ts:507](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L507)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| propertyName | `string`   |  - |
| requestType | `string`   |  - |





**Returns:** [Base](_utils_base_.base.md)`any`, `any`, `any`





___

<a id="hasaccess"></a>

###  hasAccess

► **hasAccess**(permissions: *`any`*): `boolean`




*Defined in [lib/web.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/web.ts#L30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| permissions | `any`   |  - |





**Returns:** `boolean`





___

<a id="then"></a>

###  then

► **then**(resolve: *`any`*, reject: *`any`*): `PromiseLike`.<[Base](_utils_base_.base.md)>




*Inherited from [Base](_utils_base_.base.md).[then](_utils_base_.base.md#then)*

*Defined in [utils/base.ts:164](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L164)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | `any`   |  - |
| reject | `any`   |  - |





**Returns:** `PromiseLike`.<[Base](_utils_base_.base.md)>





___

<a id="updatedataobject"></a>

### «Protected» updateDataObject

► **updateDataObject**(): `void`




*Inherited from [Base](_utils_base_.base.md).[updateDataObject](_utils_base_.base.md#updatedataobject)*

*Defined in [utils/base.ts:602](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L602)*





**Returns:** `void`





___

