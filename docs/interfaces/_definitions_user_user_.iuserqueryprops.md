[gd-sprest](../README.md) > ["definitions/user/user"](../modules/_definitions_user_user_.md) > [IUserQueryProps](../interfaces/_definitions_user_user_.iuserqueryprops.md)



# Interface: IUserQueryProps


User Query Properties

## Hierarchy

**IUserQueryProps**

↳  [IUserResult](_definitions_user_user_.iuserresult.md)




↳  [IUser](_definitions_user_user_.iuser.md)









## Methods
<a id="groups"></a>

###  Groups

► **Groups**(): [ISiteGroups](_definitions_user_groups_.isitegroups.md)

► **Groups**(id: *`number`*): [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md)




*Defined in [definitions/user/user.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L57)*



Gets the groups of which the user is a member.




**Returns:** [ISiteGroups](_definitions_user_groups_.isitegroups.md)




*Defined in [definitions/user/user.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L63)*



Gets the group of which the user is a member.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  The group id. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md)





___


