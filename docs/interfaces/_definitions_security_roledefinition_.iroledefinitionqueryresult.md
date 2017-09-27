[gd-sprest](../README.md) > ["definitions/security/roleDefinition"](../modules/_definitions_security_roledefinition_.md) > [IRoleDefinitionQueryResult](../interfaces/_definitions_security_roledefinition_.iroledefinitionqueryresult.md)



# Interface: IRoleDefinitionQueryResult


Role Definition Query Result

## Hierarchy


 [IRoleDefinitionMethods](_definitions_security_roledefinition_.iroledefinitionmethods.md)




 [IRoleDefinitionProps](_definitions_security_roledefinition_.iroledefinitionprops.md)

**↳ IRoleDefinitionQueryResult**








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


## Methods
<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IRoleDefinitionMethods](_definitions_security_roledefinition_.iroledefinitionmethods.md).[delete](_definitions_security_roledefinition_.iroledefinitionmethods.md#delete)*

*Defined in [definitions/security/roleDefinition.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinition.ts#L14)*



Deletes the role definition.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


