[gd-sprest](../README.md) > ["definitions/user/group"](../modules/_definitions_user_group_.md) > [IGroup](../interfaces/_definitions_user_group_.igroup.md)



# Interface: IGroup


Group

## Hierarchy


 [IGroupMethods](_definitions_user_group_.igroupmethods.md)




 [IGroupQueryProps](_definitions_user_group_.igroupqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)

**↳ IGroup**








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
<a id="autoacceptrequesttojoinleave"></a>

###  AutoAcceptRequestToJoinLeave

► **AutoAcceptRequestToJoinLeave**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Inherited from [IGroupQueryProps](_definitions_user_group_.igroupqueryprops.md).[AutoAcceptRequestToJoinLeave](_definitions_user_group_.igroupqueryprops.md#autoacceptrequesttojoinleave)*

*Defined in [definitions/user/group.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L57)*



Gets or sets a value that indicates whether the request to join or leave the group can be accepted automatically.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="cancurrentusereditmembership"></a>

###  CanCurrentUserEditMembership

► **CanCurrentUserEditMembership**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Inherited from [IGroupQueryProps](_definitions_user_group_.igroupqueryprops.md).[CanCurrentUserEditMembership](_definitions_user_group_.igroupqueryprops.md#cancurrentusereditmembership)*

*Defined in [definitions/user/group.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L62)*



Gets a value that indicates whether the current user can edit the membership of the group.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="cancurrentusermanagegroup"></a>

###  CanCurrentUserManageGroup

► **CanCurrentUserManageGroup**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Inherited from [IGroupQueryProps](_definitions_user_group_.igroupqueryprops.md).[CanCurrentUserManageGroup](_definitions_user_group_.igroupqueryprops.md#cancurrentusermanagegroup)*

*Defined in [definitions/user/group.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L67)*



Gets a value that indicates whether the current user can manage the group.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="cancurrentuserviewmembership"></a>

###  CanCurrentUserViewMembership

► **CanCurrentUserViewMembership**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Inherited from [IGroupQueryProps](_definitions_user_group_.igroupqueryprops.md).[CanCurrentUserViewMembership](_definitions_user_group_.igroupqueryprops.md#cancurrentuserviewmembership)*

*Defined in [definitions/user/group.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L72)*



Gets a value that indicates whether the current user can view the membership of the group.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="owner"></a>

###  Owner

► **Owner**(): [IUser](_definitions_user_user_.iuser.md)




*Inherited from [IGroupQueryProps](_definitions_user_group_.igroupqueryprops.md).[Owner](_definitions_user_group_.igroupqueryprops.md#owner)*

*Defined in [definitions/user/group.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L77)*



Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="users"></a>

###  Users

► **Users**(): [IUsers](_definitions_user_users_.iusers.md)

► **Users**(id: *`any`*): [IUser](_definitions_user_user_.iuser.md)




*Inherited from [IGroupQueryProps](_definitions_user_group_.igroupqueryprops.md).[Users](_definitions_user_group_.igroupqueryprops.md#users)*

*Defined in [definitions/user/group.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L82)*



Gets a collection of user objects that represents all of the users in the group.




**Returns:** [IUsers](_definitions_user_users_.iusers.md)




*Inherited from [IGroupQueryProps](_definitions_user_group_.igroupqueryprops.md).[Users](_definitions_user_group_.igroupqueryprops.md#users)*

*Defined in [definitions/user/group.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L88)*



Gets a collection of user objects that represents all of the users in the group.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The user id. |





**Returns:** [IUser](_definitions_user_user_.iuser.md)





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

► **execute**(callback?: *function*): [IGroup](_definitions_user_group_.igroup.md)

► **execute**(waitFl: *`boolean`*): [IGroup](_definitions_user_group_.igroup.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IGroup](_definitions_user_group_.igroup.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IGroup](_definitions_user_group_.igroup.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IGroup](_definitions_user_group_.igroup.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IGroup](_definitions_user_group_.igroup.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IGroupResult](_definitions_user_group_.igroupresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IGroupResult](_definitions_user_group_.igroupresult.md)





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

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IGroupResult](_definitions_user_group_.igroupresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IGroupResult](_definitions_user_group_.igroupresult.md)>





___


