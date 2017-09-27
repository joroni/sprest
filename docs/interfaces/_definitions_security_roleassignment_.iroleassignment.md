[gd-sprest](../README.md) > ["definitions/security/roleAssignment"](../modules/_definitions_security_roleassignment_.md) > [IRoleAssignment](../interfaces/_definitions_security_roleassignment_.iroleassignment.md)



# Interface: IRoleAssignment


Role Assignment

## Hierarchy


 [IRoleAssignmentMethods](_definitions_security_roleassignment_.iroleassignmentmethods.md)




 [IRoleAssignmentQueryProps](_definitions_security_roleassignment_.iroleassignmentqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md), [IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md), [IRoleAssignmentQueryResult](_definitions_security_roleassignment_.iroleassignmentqueryresult.md)

**↳ IRoleAssignment**








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


## Methods
<a id="member"></a>

###  Member

► **Member**(): [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md)⎮[IUser](_definitions_user_user_.iuser.md)




*Inherited from [IRoleAssignmentQueryProps](_definitions_security_roleassignment_.iroleassignmentqueryprops.md).[Member](_definitions_security_roleassignment_.iroleassignmentqueryprops.md#member)*

*Defined in [definitions/security/roleAssignment.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignment.ts#L34)*



Gets the user or group that corresponds to the Role Assignment.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md)⎮[IUser](_definitions_user_user_.iuser.md)





___

<a id="roledefinitionbindings"></a>

###  RoleDefinitionBindings

► **RoleDefinitionBindings**(): [IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md)




*Inherited from [IRoleAssignmentQueryProps](_definitions_security_roleassignment_.iroleassignmentqueryprops.md).[RoleDefinitionBindings](_definitions_security_roleassignment_.iroleassignmentqueryprops.md#roledefinitionbindings)*

*Defined in [definitions/security/roleAssignment.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignment.ts#L39)*



Gets the collection of role definition bindings for the role assignment.




**Returns:** [IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md)





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IRoleAssignmentMethods](_definitions_security_roleassignment_.iroleassignmentmethods.md).[delete](_definitions_security_roleassignment_.iroleassignmentmethods.md#delete)*

*Defined in [definitions/security/roleAssignment.ts:16](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignment.ts#L16)*



Deletes the role assignment.




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

► **execute**(callback?: *function*): [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)

► **execute**(waitFl: *`boolean`*): [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md)





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

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md), [IRoleAssignmentQueryResult](_definitions_security_roleassignment_.iroleassignmentqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md), [IRoleAssignmentQueryResult](_definitions_security_roleassignment_.iroleassignmentqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md)>





___


