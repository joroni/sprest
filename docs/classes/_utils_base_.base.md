[gd-sprest](../README.md) > ["utils/base"](../modules/_utils_base_.md) > [Base](../classes/_utils_base_.base.md)



# Class: Base


/

## Type parameters
#### Type 
#### Result 
#### QueryResult 
## Hierarchy

**Base**

↳  [_Email](_lib_email_._email.md)




↳  [_Web](_lib_web_._web.md)




↳  [_List](_lib_list_._list.md)




↳  [_PeopleManager](_lib_peoplemanager_._peoplemanager.md)




↳  [_PeoplePicker](_lib_peoplepicker_._peoplepicker.md)




↳  [_ProfileLoader](_lib_profileloader_._profileloader.md)




↳  [_Search](_lib_search_._search.md)




↳  [_Site](_lib_site_._site.md)




↳  [_SocialFeed](_lib_socialfeed_._socialfeed.md)




↳  [_UserProfile](_lib_userprofile_._userprofile.md)








## Index

### Constructors

* [constructor](_utils_base_.base.md#constructor)


### Properties

* [base](_utils_base_.base.md#base)
* [defaultToWebFl](_utils_base_.base.md#defaulttowebfl)
* [existsFl](_utils_base_.base.md#existsfl)
* [getAllItemsFl](_utils_base_.base.md#getallitemsfl)
* [parent](_utils_base_.base.md#parent)
* [promise](_utils_base_.base.md#promise)
* [request](_utils_base_.base.md#request)
* [requestType](_utils_base_.base.md#requesttype)
* [responseIndex](_utils_base_.base.md#responseindex)
* [responses](_utils_base_.base.md#responses)
* [targetInfo](_utils_base_.base.md#targetinfo)
* [waitFlags](_utils_base_.base.md#waitflags)


### Accessors

* [response](_utils_base_.base.md#response)


### Methods

* [addMethods](_utils_base_.base.md#addmethods)
* [addProperties](_utils_base_.base.md#addproperties)
* [done](_utils_base_.base.md#done)
* [execute](_utils_base_.base.md#execute)
* [executeAndWait](_utils_base_.base.md#executeandwait)
* [executeMethod](_utils_base_.base.md#executemethod)
* [executeRequest](_utils_base_.base.md#executerequest)
* [getCollection](_utils_base_.base.md#getcollection)
* [getInfo](_utils_base_.base.md#getinfo)
* [getNextSetOfResults](_utils_base_.base.md#getnextsetofresults)
* [getProperty](_utils_base_.base.md#getproperty)
* [then](_utils_base_.base.md#then)
* [updateDataCollection](_utils_base_.base.md#updatedatacollection)
* [updateDataObject](_utils_base_.base.md#updatedataobject)
* [updateMetadata](_utils_base_.base.md#updatemetadata)
* [updateMetadataUri](_utils_base_.base.md#updatemetadatauri)
* [validateDataCollectionResults](_utils_base_.base.md#validatedatacollectionresults)
* [waitForRequestsToComplete](_utils_base_.base.md#waitforrequeststocomplete)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Base**(targetInfo: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [Base](_utils_base_.base.md)



*Defined in [utils/base.ts:17](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L17)*



/


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [Base](_utils_base_.base.md)

---


## Properties
<a id="base"></a>

### «Private» base

**●  base**:  *[Base](_utils_base_.base.md)* 

*Defined in [utils/base.ts:186](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L186)*



/




___

<a id="defaulttowebfl"></a>

### «Protected» defaultToWebFl

**●  defaultToWebFl**:  *`boolean`* 

*Defined in [utils/base.ts:189](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L189)*





___

<a id="existsfl"></a>

###  existsFl

**●  existsFl**:  *`any`* 

*Defined in [utils/base.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L34)*



/




___

<a id="getallitemsfl"></a>

### «Protected» getAllItemsFl

**●  getAllItemsFl**:  *`boolean`* 

*Defined in [utils/base.ts:192](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L192)*





___

<a id="parent"></a>

###  parent

**●  parent**:  *[Base](_utils_base_.base.md)* 

*Defined in [utils/base.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L37)*





___

<a id="promise"></a>

### «Private» promise

**●  promise**:  *[Promise](_utils_promise_.promise.md)* 

*Defined in [utils/base.ts:195](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L195)*





___

<a id="request"></a>

### «Protected» request

**●  request**:  *[XHRRequest](_utils_xhrrequest_.xhrrequest.md)* 

*Defined in [utils/base.ts:198](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L198)*





___

<a id="requesttype"></a>

###  requestType

**●  requestType**:  *`any`* 

*Defined in [utils/base.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L40)*





___

<a id="responseindex"></a>

### «Private» responseIndex

**●  responseIndex**:  *`number`* 

*Defined in [utils/base.ts:204](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L204)*





___

<a id="responses"></a>

### «Protected» responses

**●  responses**:  *`Array`.<[Base](_utils_base_.base.md)>* 

*Defined in [utils/base.ts:201](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L201)*





___

<a id="targetinfo"></a>

### «Protected» targetInfo

**●  targetInfo**:  *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)* 

*Defined in [utils/base.ts:207](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L207)*





___

<a id="waitflags"></a>

### «Private» waitFlags

**●  waitFlags**:  *`Array`.<`boolean`>* 

*Defined in [utils/base.ts:210](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L210)*





___


## Accessors
<a id="response"></a>

###  response


getresponse(): `any`


*Defined in [utils/base.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L43)*





**Returns:** `any`



___


## Methods
<a id="addmethods"></a>

### «Protected» addMethods

► **addMethods**(obj: *`any`*, data: *`any`*): `void`




*Defined in [utils/base.ts:217](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L217)*



/


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |
| data | `any`   |  - |





**Returns:** `void`





___

<a id="addproperties"></a>

### «Private» addProperties

► **addProperties**(obj: *`any`*, data: *`any`*): `void`




*Defined in [utils/base.ts:305](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L305)*



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




*Defined in [utils/base.ts:158](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L158)*





**Returns:** `this`





___

<a id="executemethod"></a>

### «Protected» executeMethod

► **executeMethod**(methodName: *`string`*, methodConfig: *[IMethodInfo](../interfaces/_definitions_lib_methodinfo_.imethodinfo.md)*, args?: *`any`*): [Base](_utils_base_.base.md)`any`, `any`, `any`




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




*Defined in [utils/base.ts:424](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L424)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| asyncFl | `boolean`   |  - |
| callback | function   |  - |





**Returns:** `this`





___

<a id="getcollection"></a>

### «Private» getCollection

► **getCollection**(method: *`string`*, args?: *`any`*): [Base](_utils_base_.base.md)`any`, `any`, `any`




*Defined in [utils/base.ts:467](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L467)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| method | `string`   |  - |
| args | `any`   |  - |





**Returns:** [Base](_utils_base_.base.md)`any`, `any`, `any`





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](../interfaces/_definitions_lib_targetinfo_.irequestinfo.md)




*Defined in [utils/base.ts:161](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L161)*





**Returns:** [IRequestInfo](../interfaces/_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="getnextsetofresults"></a>

### «Protected» getNextSetOfResults

► **getNextSetOfResults**(): [Base](_utils_base_.base.md)`any`, `any`, `any`




*Defined in [utils/base.ts:547](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L547)*





**Returns:** [Base](_utils_base_.base.md)`any`, `any`, `any`





___

<a id="getproperty"></a>

### «Protected» getProperty

► **getProperty**(propertyName: *`string`*, requestType?: *`string`*): [Base](_utils_base_.base.md)`any`, `any`, `any`




*Defined in [utils/base.ts:507](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L507)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| propertyName | `string`   |  - |
| requestType | `string`   |  - |





**Returns:** [Base](_utils_base_.base.md)`any`, `any`, `any`





___

<a id="then"></a>

###  then

► **then**(resolve: *`any`*, reject: *`any`*): `PromiseLike`.<[Base](_utils_base_.base.md)>




*Defined in [utils/base.ts:164](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L164)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | `any`   |  - |
| reject | `any`   |  - |





**Returns:** `PromiseLike`.<[Base](_utils_base_.base.md)>





___

<a id="updatedatacollection"></a>

### «Private» updateDataCollection

► **updateDataCollection**(results: *`any`*): `void`




*Defined in [utils/base.ts:565](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L565)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| results | `any`   |  - |





**Returns:** `void`





___

<a id="updatedataobject"></a>

### «Protected» updateDataObject

► **updateDataObject**(): `void`




*Defined in [utils/base.ts:602](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L602)*





**Returns:** `void`





___

<a id="updatemetadata"></a>

### «Private» updateMetadata

► **updateMetadata**(data: *`any`*): `void`




*Defined in [utils/base.ts:641](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L641)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  - |





**Returns:** `void`





___

<a id="updatemetadatauri"></a>

### «Private» updateMetadataUri

► **updateMetadataUri**(metadata: *`any`*, targetInfo: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): `void`




*Defined in [utils/base.ts:661](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L661)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| metadata | `any`   |  - |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** `void`





___

<a id="validatedatacollectionresults"></a>

### «Private» validateDataCollectionResults

► **validateDataCollectionResults**(request: *[XHRRequest](_utils_xhrrequest_.xhrrequest.md)*, promise?: *[Promise](_utils_promise_.promise.md)*): [Promise](_utils_promise_.promise.md)




*Defined in [utils/base.ts:675](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L675)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| request | [XHRRequest](_utils_xhrrequest_.xhrrequest.md)   |  - |
| promise | [Promise](_utils_promise_.promise.md)   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="waitforrequeststocomplete"></a>

### «Private» waitForRequestsToComplete

► **waitForRequestsToComplete**(callback: *function*, requestIdx?: *`number`*): `void`




*Defined in [utils/base.ts:731](https://github.com/gunjandatta/sprest/blob/3de79f1/src/utils/base.ts#L731)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  - |
| requestIdx | `number`   |  - |





**Returns:** `void`





___


