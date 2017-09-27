[gd-sprest](../README.md) > ["definitions/list/versions"](../modules/_definitions_list_versions_.md) > [IVersions](../interfaces/_definitions_list_versions_.iversions.md)



# Interface: IVersions


Versions

## Hierarchy


↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)[IVersion](_definitions_lib_types_.iversion.md), [IVersion](_definitions_lib_types_.iversion.md), [IVersion](_definitions_lib_types_.iversion.md)

**↳ IVersions**








## Properties
<a id="existsfl"></a>

###  existsFl

**●  existsFl**:  *`boolean`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[existsFl](_definitions_lib_base_.ibase.md#existsfl)*

*Defined in [definitions/lib/base.ts:12](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L12)*



True, if the object exists, false otherwise.




___

<a id="parent"></a>

###  parent

**●  parent**:  *`any`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[parent](_definitions_lib_base_.ibase.md#parent)*

*Defined in [definitions/lib/base.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L15)*



The parent object, which created this object.




___

<a id="requesttype"></a>

###  requestType

**●  requestType**:  *[IRequestType](../modules/_definitions_lib_requesttype_.md#irequesttype)* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[requestType](_definitions_lib_base_.ibase.md#requesttype)*

*Defined in [definitions/lib/base.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L21)*



The request type




___

<a id="response"></a>

###  response

**●  response**:  *`string`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[response](_definitions_lib_base_.ibase.md#response)*

*Defined in [definitions/lib/base.ts:18](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L18)*



The response




___

<a id="results"></a>

###  results

**●  results**:  *`Array`.<[IVersion](_definitions_lib_types_.iversion.md)>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
<a id="deleteall"></a>

###  deleteAll

► **deleteAll**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/versions.ts:13](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/versions.ts#L13)*



Deletes all versions in the collection.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="deletebyid"></a>

###  deleteById

► **deleteById**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/versions.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/versions.ts#L19)*



Deletes a version, by the specified id.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The version id to delete. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="deletebylabel"></a>

###  deleteByLabel

► **deleteByLabel**(label: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/versions.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/versions.ts#L25)*



Deletes a version, by the specified label.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| label | `any`   |  The version label to delete. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="done"></a>

###  done

► **done**(callback?: *function*): `any`

► **done**(callback?: *function*): `any`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[done](_definitions_lib_base_.ibase.md#done)*

*Defined in [definitions/lib/base.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L27)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[done](_definitions_lib_base_.ibase.md#done)*

*Defined in [definitions/lib/base.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L33)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`





___

<a id="execute"></a>

###  execute

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IVersion](_definitions_lib_types_.iversion.md)




*Defined in [definitions/list/versions.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/versions.ts#L31)*



Gets the version with the specified ID.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The version id to get. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IVersion](_definitions_lib_types_.iversion.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IVersions](_definitions_list_versions_.iversions.md)




*Defined in [definitions/list/versions.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/versions.ts#L36)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IVersions](_definitions_list_versions_.iversions.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md), [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md), [IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)





___

<a id="restorebylabel"></a>

###  restoreByLabel

► **restoreByLabel**(label: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IVersion](_definitions_lib_types_.iversion.md)




*Defined in [definitions/list/versions.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/versions.ts#L42)*



Restores a version, by the specified label.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| label | `any`   |  The version label to restore. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IVersion](_definitions_lib_types_.iversion.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IVersion](_definitions_lib_types_.iversion.md)>





___


