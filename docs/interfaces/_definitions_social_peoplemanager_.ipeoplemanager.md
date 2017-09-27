[gd-sprest](../README.md) > ["definitions/social/peopleManager"](../modules/_definitions_social_peoplemanager_.md) > [IPeopleManager](../interfaces/_definitions_social_peoplemanager_.ipeoplemanager.md)



# Interface: IPeopleManager


People Manager

## Type parameters
#### Result 
#### QueryResult 
## Hierarchy


 [IBase](_definitions_lib_base_.ibase.md)[IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)

**↳ IPeopleManager**








## Constructors
<a id="constructor"></a>


### ⊕ **new IPeopleManager**(targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)



*Defined in [definitions/social/peopleManager.ts:9](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L9)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  (Optional) The target information. |





**Returns:** [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)

---


## Properties
<a id="editprofilelink"></a>

###  EditProfileLink

**●  EditProfileLink**:  *`string`* 

*Defined in [definitions/social/peopleManager.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L23)*



The URL of the edit profile page for the current user.




___

<a id="ismypeoplelistpublic"></a>

###  IsMyPeopleListPublic

**●  IsMyPeopleListPublic**:  *`boolean`* 

*Defined in [definitions/social/peopleManager.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L28)*



A Boolean value that indicates whether the current user's People I'm Following list is public.




___

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
<a id="amifollowedby"></a>

###  amIFollowedBy

► **amIFollowedBy**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L37)*



Checks whether the specified user is following the current user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="amifollowing"></a>

###  amIFollowing

► **amIFollowing**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L43)*



Checks whether the current user is following the specified user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |





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

► **execute**(callback?: *function*): [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)

► **execute**(waitFl: *`boolean`*): [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): `Result`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** `Result`





___

<a id="follow"></a>

###  follow

► **follow**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L49)*



Adds the specified user to the current user's list of followed users.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="followtag"></a>

###  followTag

► **followTag**(id: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:55](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L55)*



Adds the specified tag to the current user's list of followed tags.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The ID of the tag to start following. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getfollowedtags"></a>

###  getFollowedTags

► **getFollowedTags**(maxCount: *`number`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L61)*



Gets tags that the user is following.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| maxCount | `number`   |  The maximum number of tags to get. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getfollowersfor"></a>

###  getFollowersFor

► **getFollowersFor**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




*Defined in [definitions/social/peopleManager.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L67)*



Gets the people who are following the specified user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="getmyfollowers"></a>

###  getMyFollowers

► **getMyFollowers**(): [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




*Defined in [definitions/social/peopleManager.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L72)*



Gets the people who are following the current user.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)





___

<a id="getmyproperties"></a>

###  getMyProperties

► **getMyProperties**(): [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




*Defined in [definitions/social/peopleManager.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L77)*



Gets user properties for the current user.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)





___

<a id="getmysuggestions"></a>

###  getMySuggestions

► **getMySuggestions**(): [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




*Defined in [definitions/social/peopleManager.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L82)*



Gets suggestions for who the current user might want to follow.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)





___

<a id="getpeoplefollowedby"></a>

###  getPeopleFollowedBy

► **getPeopleFollowedBy**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




*Defined in [definitions/social/peopleManager.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L88)*



Gets the people who the specified user is following.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)





___

<a id="getpeoplefollowedbyme"></a>

###  getPeopleFollowedByMe

► **getPeopleFollowedByMe**(): [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




*Defined in [definitions/social/peopleManager.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L93)*



Gets the people who the current user is following.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)





___

<a id="getpropertiesfor"></a>

###  getPropertiesFor

► **getPropertiesFor**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




*Defined in [definitions/social/peopleManager.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L99)*



Gets user properties for the specified user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)





___

<a id="gettrendingtags"></a>

###  getTrendingTags

► **getTrendingTags**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:104](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L104)*



Gets the most popular tags.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getuserprofilepropertyfor"></a>

###  getUserProfilePropertyFor

► **getUserProfilePropertyFor**(accountName: *`string`*, propertyName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




*Defined in [definitions/social/peopleManager.ts:111](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L111)*



Gets the specified user profile property for the specified user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |
| propertyName | `string`   |  The case-sensitive name of the property to get. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)





___

<a id="hidesuggestion"></a>

###  hideSuggestion

► **hideSuggestion**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:117](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L117)*



Removes the specified user from the user's list of suggested people to follow.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="isfollowing"></a>

###  isFollowing

► **isFollowing**(possibleFollowerAccountName: *`string`*, possibleFolloweeAccountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L124)*



Checks whether the first user is following the second user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| possibleFollowerAccountName | `string`   |  The account name of the user who might be following possiblefolloweeaccountname, encoded and passed as an alias in the query string. |
| possibleFolloweeAccountName | `string`   |  The account name of the user who might be followed, encoded and passed as an alias in the query string. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





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

<a id="setmyprofilepicture"></a>

###  setMyProfilePicture

► **setMyProfilePicture**(stream: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:130](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L130)*



Uploads and sets the user profile picture. Users can upload a picture to their own profile only.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| stream | `any`   |  The picture in BMP, JPEG, or PNG format of up to 4.76MB. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="stopfollowing"></a>

###  stopFollowing

► **stopFollowing**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:136](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L136)*



Remove the specified user from the current user's list of followed users.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The account name of the user, encoded and passed as an alias in the query string. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="stopfollowingtag"></a>

###  stopFollowingTag

► **stopFollowingTag**(id: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/peopleManager.ts:142](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/peopleManager.ts#L142)*



Remove the specified tag from the current user's list of followed tags.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The ID of the tag to stop following. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





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


