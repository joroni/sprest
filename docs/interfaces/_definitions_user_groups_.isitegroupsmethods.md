[gd-sprest](../README.md) > ["definitions/user/groups"](../modules/_definitions_user_groups_.md) > [ISiteGroupsMethods](../interfaces/_definitions_user_groups_.isitegroupsmethods.md)



# Interface: ISiteGroupsMethods


Methods

## Hierarchy

**ISiteGroupsMethods**

↳  [ISiteGroups](_definitions_user_groups_.isitegroups.md)




↳  [ISiteGroupResults](_definitions_user_groups_.isitegroupresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(groupInfo: *[IGroupCreationInformation](_definitions_lib_types_.igroupcreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md)




*Defined in [definitions/user/groups.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L14)*



Adds a site to the site collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| groupInfo | [IGroupCreationInformation](_definitions_lib_types_.igroupcreationinformation.md)   |  The group creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IGroup](_definitions_user_group_.igroup.md)[IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)




*Defined in [definitions/user/groups.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L20)*



Returns a group from the collection based on the member ID of the group.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The site group id. |





**Returns:** [IGroup](_definitions_user_group_.igroup.md)[IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)





___

<a id="getbyname"></a>

###  getByName

► **getByName**(name: *`any`*): [IGroup](_definitions_user_group_.igroup.md)[IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)




*Defined in [definitions/user/groups.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L26)*



Returns a cross-site group from the collection based on the name of the group.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `any`   |  The name of the group. The group name is specified in its LoginName property. |





**Returns:** [IGroup](_definitions_user_group_.igroup.md)[IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[ISiteGroups](_definitions_user_groups_.isitegroups.md), [ISiteGroupResults](_definitions_user_groups_.isitegroupresults.md)




*Defined in [definitions/user/groups.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L31)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISiteGroups](_definitions_user_groups_.isitegroups.md), [ISiteGroupResults](_definitions_user_groups_.isitegroupresults.md)





___

<a id="removebyid"></a>

###  removeById

► **removeById**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/user/groups.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L37)*



Removes the group with the specified member ID from the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the group to remove. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="removebyloginname"></a>

###  removeByLoginName

► **removeByLoginName**(name: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/user/groups.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L43)*



Removes the cross-site group with the specified name from the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `any`   |  The name of the group to remove. The group name is specified in its LoginName property. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


