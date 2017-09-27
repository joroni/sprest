[gd-sprest](../README.md) > ["definitions/security/roleDefinition"](../modules/_definitions_security_roledefinition_.md) > [IRoleDefinitionResult](../interfaces/_definitions_security_roledefinition_.iroledefinitionresult.md)



# Interface: IRoleDefinitionResult


Role Definition Result

## Hierarchy


 [IRoleDefinitionMethods](_definitions_security_roledefinition_.iroledefinitionmethods.md)




 [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md)




 [IRoleDefinitionQueryProps](_definitions_security_roledefinition_.iroledefinitionqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)

**↳ IRoleDefinitionResult**








## Properties
<a id="basepermissions"></a>

###  BasePermissions

**●  BasePermissions**:  *[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)* 

*Inherited from [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md).[BasePermissions](_definitions_security_roledefinition_.iroledefinitionprops.md#basepermissions)*

*Defined in [definitions/security/roleDefinition.ts:22](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L22)*



Gets or sets a value that specifies the base permissions for the role definition.




___

<a id="description"></a>

###  Description

**●  Description**:  *`string`* 

*Inherited from [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md).[Description](_definitions_security_roledefinition_.iroledefinitionprops.md#description)*

*Defined in [definitions/security/roleDefinition.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L25)*



Gets or sets a value that specifies the description of the role definition.




___

<a id="hidden"></a>

###  Hidden

**●  Hidden**:  *`boolean`* 

*Inherited from [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md).[Hidden](_definitions_security_roledefinition_.iroledefinitionprops.md#hidden)*

*Defined in [definitions/security/roleDefinition.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L28)*



Gets a value that specifies whether the role definition is displayed.




___

<a id="id"></a>

###  Id

**●  Id**:  *`number`* 

*Inherited from [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md).[Id](_definitions_security_roledefinition_.iroledefinitionprops.md#id)*

*Defined in [definitions/security/roleDefinition.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L31)*



Gets a value that specifies the Id of the role definition.




___

<a id="name"></a>

###  Name

**●  Name**:  *`string`* 

*Inherited from [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md).[Name](_definitions_security_roledefinition_.iroledefinitionprops.md#name)*

*Defined in [definitions/security/roleDefinition.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L34)*



Gets or sets a value that specifies the role definition name.




___

<a id="order"></a>

###  Order

**●  Order**:  *`number`* 

*Inherited from [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md).[Order](_definitions_security_roledefinition_.iroledefinitionprops.md#order)*

*Defined in [definitions/security/roleDefinition.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L37)*



Gets or sets a value that specifies the order position of the object in the site collection Permission Levels page.




___

<a id="roletypekind"></a>

###  RoleTypeKind

**●  RoleTypeKind**:  *`SPTypes.RoleType`⎮`number`* 

*Inherited from [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md).[RoleTypeKind](_definitions_security_roledefinition_.iroledefinitionprops.md#roletypekind)*

*Defined in [definitions/security/roleDefinition.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L40)*



Gets a value that specifies the type of the role definition. Represents an SP.RoleType value. See RoleType in the .NET client object model reference for a list of role type values.




___

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


## Methods
<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IRoleDefinitionMethods](_definitions_security_roledefinition_.iroledefinitionmethods.md).[delete](_definitions_security_roledefinition_.iroledefinitionmethods.md#delete)*

*Defined in [definitions/security/roleDefinition.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L14)*



Deletes the role definition.




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

► **execute**(callback?: *function*): [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)

► **execute**(waitFl: *`boolean`*): [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)>





___


