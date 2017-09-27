[gd-sprest](../README.md) > ["definitions/social/profileLoader"](../modules/_definitions_social_profileloader_.md) > [IProfileLoader](../interfaces/_definitions_social_profileloader_.iprofileloader.md)



# Interface: IProfileLoader


Profile Loader

## Type parameters
#### Result 
#### QueryResult 
## Hierarchy


 [IBase](_definitions_lib_base_.ibase.md)[IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)

**↳ IProfileLoader**








## Constructors
<a id="constructor"></a>


### ⊕ **new IProfileLoader**(targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)



*Defined in [definitions/social/profileLoader.ts:9](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/profileLoader.ts#L9)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  (Optional) The target information. |





**Returns:** [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)

---


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
<a id="createpersonalsiteenqueuebulk"></a>

###  createPersonalSiteEnqueueBulk

► **createPersonalSiteEnqueueBulk**(emailIDs: *`Array`.<`string`>*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/profileLoader.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/profileLoader.ts#L24)*



Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| emailIDs | `Array`.<`string`>   |  The email addresses of the users to provision sites for. Maximum 200 characters. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





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

► **execute**(callback?: *function*): [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)

► **execute**(waitFl: *`boolean`*): [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): `Result`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** `Result`





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="getowneruserprofile"></a>

###  getOwnerUserProfile

► **getOwnerUserProfile**(): [IBase](_definitions_lib_base_.ibase.md)[IUserProfile](_definitions_social_userprofile_.iuserprofile.md)




*Defined in [definitions/social/profileLoader.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/profileLoader.ts#L29)*



Gets the user profile of the site owner.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUserProfile](_definitions_social_userprofile_.iuserprofile.md)





___

<a id="getuserprofile"></a>

###  getUserProfile

► **getUserProfile**(): [IBase](_definitions_lib_base_.ibase.md)[IUserProfile](_definitions_social_userprofile_.iuserprofile.md)




*Defined in [definitions/social/profileLoader.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/profileLoader.ts#L34)*



Gets the user profile that corresponds to the current user.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUserProfile](_definitions_social_userprofile_.iuserprofile.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)`Result`, `QueryResult`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)`Result`, `QueryResult`





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<`Result`>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<`Result`>





___


