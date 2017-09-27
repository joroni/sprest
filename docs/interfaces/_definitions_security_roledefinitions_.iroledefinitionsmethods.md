[gd-sprest](../README.md) > ["definitions/security/roleDefinitions"](../modules/_definitions_security_roledefinitions_.md) > [IRoleDefinitionsMethods](../interfaces/_definitions_security_roledefinitions_.iroledefinitionsmethods.md)



# Interface: IRoleDefinitionsMethods


Methods

## Hierarchy

**IRoleDefinitionsMethods**

↳  [IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md)




↳  [IRoleDefinitionResults](_definitions_security_roledefinitions_.iroledefinitionresults.md)









## Methods
<a id="getbyid"></a>

###  getById

► **getById**(roleDefId: *`any`*): [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)




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




*Defined in [definitions/security/roleDefinitions.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinitions.ts#L27)*



Gets the role definition with the specified role type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| roleType | `SPTypes.RoleType`   |  The RoleTypeKind of the role definition. |





**Returns:** [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)[IBase](_definitions_lib_base_.ibase.md)[IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md), [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md), [IRoleDefinitionQueryResult](_definitions_security_roledefinition_.iroledefinitionqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md), [IRoleDefinitionResults](_definitions_security_roledefinitions_.iroledefinitionresults.md)




*Defined in [definitions/security/roleDefinitions.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/security/roleDefinitions.ts#L32)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md), [IRoleDefinitionResults](_definitions_security_roledefinitions_.iroledefinitionresults.md)





___


