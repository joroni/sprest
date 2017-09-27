[gd-sprest](../README.md) > ["definitions/security/roleAssignments"](../modules/_definitions_security_roleassignments_.md) > [IRoleAssignmentsMethods](../interfaces/_definitions_security_roleassignments_.iroleassignmentsmethods.md)



# Interface: IRoleAssignmentsMethods


Methods

## Hierarchy

**IRoleAssignmentsMethods**

↳  [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)




↳  [IRoleAssignmentResults](_definitions_security_roleassignments_.iroleassignmentresults.md)









## Methods
<a id="addroleassignment"></a>

###  addRoleAssignment

► **addRoleAssignment**(principalId: *`any`*, roleDefId: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md), [IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md)




*Defined in [definitions/security/roleAssignments.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignments.ts#L15)*



Adds a new role assignment with the specified principal and role definitions to the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| principalId | `any`   |  The ID of the user or group to assign permissions to. |
| roleDefId | `any`   |  The ID of the role definition that defines the permissions to assign. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md), [IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md)





___

<a id="getbyprincipalid"></a>

###  getByPrincipalId

► **getByPrincipalId**(principalId: *`any`*): [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md), [IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md), [IRoleAssignmentQueryResult](_definitions_security_roleassignment_.iroleassignmentqueryresult.md)




*Defined in [definitions/security/roleAssignments.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignments.ts#L21)*



Gets the role assignment associated with the specified principal ID from the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| principalId | `any`   |  The ID of the user or group to assign permissions to. |





**Returns:** [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md), [IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md), [IRoleAssignmentQueryResult](_definitions_security_roleassignment_.iroleassignmentqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md), [IRoleAssignmentResults](_definitions_security_roleassignments_.iroleassignmentresults.md)




*Defined in [definitions/security/roleAssignments.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignments.ts#L33)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md), [IRoleAssignmentResults](_definitions_security_roleassignments_.iroleassignmentresults.md)





___

<a id="removeroleassignment"></a>

###  removeRoleAssignment

► **removeRoleAssignment**(principalId: *`any`*, roleDefId: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/security/roleAssignments.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignments.ts#L28)*



Gets the role definition with the specified role type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| principalId | `any`   |  The ID of the user or group to assign permissions to. |
| roleDefId | `any`   |  The ID of the role definition that defines the permissions to assign. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


