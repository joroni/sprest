[gd-sprest](../README.md) > ["definitions/user/users"](../modules/_definitions_user_users_.md) > [IUsersMethods](../interfaces/_definitions_user_users_.iusersmethods.md)



# Interface: IUsersMethods


Methods

## Hierarchy

**IUsersMethods**

↳  [IUsers](_definitions_user_users_.iusers.md)




↳  [IUserResults](_definitions_user_users_.iuserresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(userInfo: *[IUserCreationInformation](_definitions_lib_types_.iusercreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md)




*Defined in [definitions/user/users.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L14)*



Adds a site to the site collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| userInfo | [IUserCreationInformation](_definitions_lib_types_.iusercreationinformation.md)   |  The user creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md)





___

<a id="getbyemail"></a>

###  getByEmail

► **getByEmail**(email: *`any`*): [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)




*Defined in [definitions/user/users.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L20)*



Gets the user with the specified email address.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| email | `any`   |  The email of the user to get. |





**Returns:** [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)




*Defined in [definitions/user/users.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L26)*



Gets the user with the specified member identifier (ID).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the user to get. |





**Returns:** [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)





___

<a id="getbyloginname"></a>

###  getByLoginName

► **getByLoginName**(loginName: *`any`*): [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)




*Defined in [definitions/user/users.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L32)*



Gets the user with the specified login name.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The login name of the user to get, passed as an alias in the query string. |





**Returns:** [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IUsers](_definitions_user_users_.iusers.md), [IUserResults](_definitions_user_users_.iuserresults.md)




*Defined in [definitions/user/users.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L37)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUsers](_definitions_user_users_.iusers.md), [IUserResults](_definitions_user_users_.iuserresults.md)





___

<a id="removebyid"></a>

###  removeById

► **removeById**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/user/users.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L43)*



Removes the user with the specified ID.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the user to remove. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="removebyloginname"></a>

###  removeByLoginName

► **removeByLoginName**(loginName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/user/users.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L49)*



Removes the user with the specified login name.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The login name of the user to remove. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


