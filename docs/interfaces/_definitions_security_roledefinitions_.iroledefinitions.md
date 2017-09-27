[gd-sprest](../README.md) > ["definitions/security/roleDefinitions"](../modules/_definitions_security_roledefinitions_.md) > [IRoleDefinitions](../interfaces/_definitions_security_roledefinitions_.iroledefinitions.md)



# Interface: IRoleDefinitions


Role Definitions

## Hierarchy


 [IRoleDefinitionsMethods](_definitions_security_roledefinitions_.iroledefinitionsmethods.md)




↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)

**↳ IRoleDefinitions**








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

**●  results**:  *`Array`.<[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
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

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(roleDefId: *`any`*): [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)




*Inherited from [IRoleDefinitionsMethods](_definitions_security_roledefinitions_.iroledefinitionsmethods.md).[getById](_definitions_security_roledefinitions_.iroledefinitionsmethods.md#getbyid)*

*Defined in [definitions/security/roleDefinitions.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinitions.ts#L15)*



Gets the role definition with the specified ID from the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| roleDefId | `any`   |  The ID of the role definition that defines the permissions to assign. |





**Returns:** [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)





___

<a id="getbyname"></a>

###  getByName

► **getByName**(name: *`any`*): [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)




*Inherited from [IRoleDefinitionsMethods](_definitions_security_roledefinitions_.iroledefinitionsmethods.md).[getByName](_definitions_security_roledefinitions_.iroledefinitionsmethods.md#getbyname)*

*Defined in [definitions/security/roleDefinitions.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinitions.ts#L21)*



Gets the role definition with the specified name.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `any`   |  - |





**Returns:** [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)





___

<a id="getbytype"></a>

###  getByType

► **getByType**(roleType: *`SPTypes.RoleType`*): [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)




*Inherited from [IRoleDefinitionsMethods](_definitions_security_roledefinitions_.iroledefinitionsmethods.md).[getByType](_definitions_security_roledefinitions_.iroledefinitionsmethods.md#getbytype)*

*Defined in [definitions/security/roleDefinitions.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinitions.ts#L27)*



Gets the role definition with the specified role type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| roleType | `SPTypes.RoleType`   |  The RoleTypeKind of the role definition. |





**Returns:** [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)





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

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md), [IRoleDefinitionResults](_definitions_security_roledefinitions_.iroledefinitionresults.md)




*Inherited from [IRoleDefinitionsMethods](_definitions_security_roledefinitions_.iroledefinitionsmethods.md).[next](_definitions_security_roledefinitions_.iroledefinitionsmethods.md#next)*

*Defined in [definitions/security/roleDefinitions.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinitions.ts#L32)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md), [IRoleDefinitionResults](_definitions_security_roledefinitions_.iroledefinitionresults.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)>





___


