[gd-sprest](../README.md) > ["definitions/user/group"](../modules/_definitions_user_group_.md) > [IGroupQueryProps](../interfaces/_definitions_user_group_.igroupqueryprops.md)



# Interface: IGroupQueryProps


Group Query Properties

## Hierarchy

**IGroupQueryProps**

↳  [IGroupResult](_definitions_user_group_.igroupresult.md)




↳  [IGroup](_definitions_user_group_.igroup.md)









## Methods
<a id="autoacceptrequesttojoinleave"></a>

###  AutoAcceptRequestToJoinLeave

► **AutoAcceptRequestToJoinLeave**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/user/group.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L57)*



Gets or sets a value that indicates whether the request to join or leave the group can be accepted automatically.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="cancurrentusereditmembership"></a>

###  CanCurrentUserEditMembership

► **CanCurrentUserEditMembership**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/user/group.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L62)*



Gets a value that indicates whether the current user can edit the membership of the group.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="cancurrentusermanagegroup"></a>

###  CanCurrentUserManageGroup

► **CanCurrentUserManageGroup**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/user/group.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L67)*



Gets a value that indicates whether the current user can manage the group.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="cancurrentuserviewmembership"></a>

###  CanCurrentUserViewMembership

► **CanCurrentUserViewMembership**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/user/group.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L72)*



Gets a value that indicates whether the current user can view the membership of the group.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="owner"></a>

###  Owner

► **Owner**(): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/user/group.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L77)*



Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="users"></a>

###  Users

► **Users**(): [IUsers](_definitions_user_users_.iusers.md)

► **Users**(id: *`any`*): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/user/group.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L82)*



Gets a collection of user objects that represents all of the users in the group.




**Returns:** [IUsers](_definitions_user_users_.iusers.md)




*Defined in [definitions/user/group.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L88)*



Gets a collection of user objects that represents all of the users in the group.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The user id. |





**Returns:** [IUser](_definitions_user_user_.iuser.md)





___


