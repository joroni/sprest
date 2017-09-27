[gd-sprest](../README.md) > ["definitions/user/groups"](../modules/_definitions_user_groups_.md) > [ISiteGroupResults](../interfaces/_definitions_user_groups_.isitegroupresults.md)



# Interface: ISiteGroupResults


Site Group Results

## Hierarchy


 [ISiteGroupsMethods](_definitions_user_groups_.isitegroupsmethods.md)




↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)[IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)

**↳ ISiteGroupResults**








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

**●  results**:  *`Array`.<[IGroupResult](_definitions_user_group_.igroupresult.md)>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
<a id="add"></a>

###  add

► **add**(groupInfo: *[IGroupCreationInformation](_definitions_lib_types_.igroupcreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md)




*Inherited from [ISiteGroupsMethods](_definitions_user_groups_.isitegroupsmethods.md).[add](_definitions_user_groups_.isitegroupsmethods.md#add)*

*Defined in [definitions/user/groups.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L14)*



Adds a site to the site collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| groupInfo | [IGroupCreationInformation](_definitions_lib_types_.igroupcreationinformation.md)   |  The group creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md)





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

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IGroup](_definitions_user_group_.igroup.md)[IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)




*Inherited from [ISiteGroupsMethods](_definitions_user_groups_.isitegroupsmethods.md).[getById](_definitions_user_groups_.isitegroupsmethods.md#getbyid)*

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




*Inherited from [ISiteGroupsMethods](_definitions_user_groups_.isitegroupsmethods.md).[getByName](_definitions_user_groups_.isitegroupsmethods.md#getbyname)*

*Defined in [definitions/user/groups.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L26)*



Returns a cross-site group from the collection based on the name of the group.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `any`   |  The name of the group. The group name is specified in its LoginName property. |





**Returns:** [IGroup](_definitions_user_group_.igroup.md)[IBase](_definitions_lib_base_.ibase.md)[IGroup](_definitions_user_group_.igroup.md), [IGroupResult](_definitions_user_group_.igroupresult.md), [IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)





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

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[ISiteGroups](_definitions_user_groups_.isitegroups.md), [ISiteGroupResults](_definitions_user_groups_.isitegroupresults.md)




*Inherited from [ISiteGroupsMethods](_definitions_user_groups_.isitegroupsmethods.md).[next](_definitions_user_groups_.isitegroupsmethods.md#next)*

*Defined in [definitions/user/groups.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L31)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISiteGroups](_definitions_user_groups_.isitegroups.md), [ISiteGroupResults](_definitions_user_groups_.isitegroupresults.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md), [IResults](_definitions_lib_types_.iresults.md)[IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md), [IResults](_definitions_lib_types_.iresults.md)[IGroupQueryResult](_definitions_user_group_.igroupqueryresult.md)





___

<a id="removebyid"></a>

###  removeById

► **removeById**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteGroupsMethods](_definitions_user_groups_.isitegroupsmethods.md).[removeById](_definitions_user_groups_.isitegroupsmethods.md#removebyid)*

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




*Inherited from [ISiteGroupsMethods](_definitions_user_groups_.isitegroupsmethods.md).[removeByLoginName](_definitions_user_groups_.isitegroupsmethods.md#removebyloginname)*

*Defined in [definitions/user/groups.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/groups.ts#L43)*



Removes the cross-site group with the specified name from the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `any`   |  The name of the group to remove. The group name is specified in its LoginName property. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IGroupResult](_definitions_user_group_.igroupresult.md)>





___


