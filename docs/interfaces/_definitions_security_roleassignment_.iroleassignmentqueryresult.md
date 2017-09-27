[gd-sprest](../README.md) > ["definitions/security/roleAssignment"](../modules/_definitions_security_roleassignment_.md) > [IRoleAssignmentQueryResult](../interfaces/_definitions_security_roleassignment_.iroleassignmentqueryresult.md)



# Interface: IRoleAssignmentQueryResult


Role Assignment Query Result

## Hierarchy


 [IRoleAssignmentMethods](_definitions_security_roleassignment_.iroleassignmentmethods.md)




 [IRoleAssignmentProps](_definitions_security_roleassignment_.iroleassignmentprops.md)

**↳ IRoleAssignmentQueryResult**








## Properties
<a id="member"></a>

###  Member

**●  Member**:  *[IUser](_definitions_user_user_.iuser.md)* 

*Defined in [definitions/security/roleAssignment.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignment.ts#L49)*



Gets the user or group that corresponds to the Role Assignment.




___

<a id="principalid"></a>

###  PrincipalId

**●  PrincipalId**:  *`string`* 

*Inherited from [IRoleAssignmentProps](_definitions_security_roleassignment_.iroleassignmentprops.md).[PrincipalId](_definitions_security_roleassignment_.iroleassignmentprops.md#principalid)*

*Defined in [definitions/security/roleAssignment.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignment.ts#L24)*



The unique identifier of the role assignment.




___

<a id="roledefinitionbindings"></a>

###  RoleDefinitionBindings

**●  RoleDefinitionBindings**:  *[IResults](_definitions_lib_types_.iresults.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)* 

*Defined in [definitions/security/roleAssignment.ts:54](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignment.ts#L54)*



Gets the collection of role definition bindings for the role assignment.




___


## Methods
<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IRoleAssignmentMethods](_definitions_security_roleassignment_.iroleassignmentmethods.md).[delete](_definitions_security_roleassignment_.iroleassignmentmethods.md#delete)*

*Defined in [definitions/security/roleAssignment.ts:16](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleAssignment.ts#L16)*



Deletes the role assignment.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


