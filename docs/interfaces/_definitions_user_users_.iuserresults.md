[gd-sprest](../README.md) > ["definitions/user/users"](../modules/_definitions_user_users_.md) > [IUserResults](../interfaces/_definitions_user_users_.iuserresults.md)



# Interface: IUserResults


User Results

## Hierarchy


 [IUsersMethods](_definitions_user_users_.iusersmethods.md)




↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)[IUserResult](_definitions_user_user_.iuserresult.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)

**↳ IUserResults**








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

<a id="results"></a>

###  results

**●  results**:  *`Array`.<[IUserResult](_definitions_user_user_.iuserresult.md)>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
<a id="add"></a>

###  add

► **add**(userInfo: *[IUserCreationInformation](_definitions_lib_types_.iusercreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md)




*Inherited from [IUsersMethods](_definitions_user_users_.iusersmethods.md).[add](_definitions_user_users_.iusersmethods.md#add)*

*Defined in [definitions/user/users.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L14)*



Adds a site to the site collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| userInfo | [IUserCreationInformation](_definitions_lib_types_.iusercreationinformation.md)   |  The user creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md)





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

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)





___

<a id="getbyemail"></a>

###  getByEmail

► **getByEmail**(email: *`any`*): [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)




*Inherited from [IUsersMethods](_definitions_user_users_.iusersmethods.md).[getByEmail](_definitions_user_users_.iusersmethods.md#getbyemail)*

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




*Inherited from [IUsersMethods](_definitions_user_users_.iusersmethods.md).[getById](_definitions_user_users_.iusersmethods.md#getbyid)*

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




*Inherited from [IUsersMethods](_definitions_user_users_.iusersmethods.md).[getByLoginName](_definitions_user_users_.iusersmethods.md#getbyloginname)*

*Defined in [definitions/user/users.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L32)*



Gets the user with the specified login name.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The login name of the user to get, passed as an alias in the query string. |





**Returns:** [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IUsers](_definitions_user_users_.iusers.md), [IUserResults](_definitions_user_users_.iuserresults.md)




*Inherited from [IUsersMethods](_definitions_user_users_.iusersmethods.md).[next](_definitions_user_users_.iusersmethods.md#next)*

*Defined in [definitions/user/users.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L37)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUsers](_definitions_user_users_.iusers.md), [IUserResults](_definitions_user_users_.iuserresults.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md), [IResults](_definitions_lib_types_.iresults.md)[IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md), [IResults](_definitions_lib_types_.iresults.md)[IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)





___

<a id="removebyid"></a>

###  removeById

► **removeById**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IUsersMethods](_definitions_user_users_.iusersmethods.md).[removeById](_definitions_user_users_.iusersmethods.md#removebyid)*

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




*Inherited from [IUsersMethods](_definitions_user_users_.iusersmethods.md).[removeByLoginName](_definitions_user_users_.iusersmethods.md#removebyloginname)*

*Defined in [definitions/user/users.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/users.ts#L49)*



Removes the user with the specified login name.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The login name of the user to remove. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IUserResult](_definitions_user_user_.iuserresult.md)>





___


