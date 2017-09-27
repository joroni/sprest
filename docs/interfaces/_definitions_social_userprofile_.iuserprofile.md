[gd-sprest](../README.md) > ["definitions/social/userProfile"](../modules/_definitions_social_userprofile_.md) > [IUserProfile](../interfaces/_definitions_social_userprofile_.iuserprofile.md)



# Interface: IUserProfile


User Profile

## Type parameters
#### Result 
#### QueryResult 
## Hierarchy


 [IBase](_definitions_lib_base_.ibase.md)[IUserProfile](_definitions_social_userprofile_.iuserprofile.md)

**↳ IUserProfile**








## Constructors
<a id="constructor"></a>


### ⊕ **new IUserProfile**(targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)



*Defined in [definitions/social/userProfile.ts:10](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L10)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  (Optional) The target information. |





**Returns:** [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)

---


## Properties
<a id="accountname"></a>

###  AccountName

**●  AccountName**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L29)*



The account name of the user. (SharePoint Online only)




___

<a id="displayname"></a>

###  DisplayName

**●  DisplayName**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L34)*



The display name of the user. (SharePoint Online only)




___

<a id="followpersonalsiteurl"></a>

###  FollowPersonalSiteUrl

**●  FollowPersonalSiteUrl**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L36)*





___

<a id="ispeoplelistpublic"></a>

###  IsPeopleListPublic

**●  IsPeopleListPublic**:  *`boolean`* 

*Defined in [definitions/social/userProfile.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L38)*





___

<a id="isprivacysettingon"></a>

###  IsPrivacySettingOn

**●  IsPrivacySettingOn**:  *`boolean`* 

*Defined in [definitions/social/userProfile.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L40)*





___

<a id="isself"></a>

###  IsSelf

**●  IsSelf**:  *`boolean`* 

*Defined in [definitions/social/userProfile.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L42)*





___

<a id="jobtitle"></a>

###  JobTitle

**●  JobTitle**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L44)*





___

<a id="mysitefirstrunexperience"></a>

###  MySiteFirstRunExperience

**●  MySiteFirstRunExperience**:  *`number`* 

*Defined in [definitions/social/userProfile.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L46)*





___

<a id="mysitehosturl"></a>

###  MySiteHostUrl

**●  MySiteHostUrl**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:48](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L48)*





___

<a id="o15firstrunexperience"></a>

###  O15FirstRunExperience

**●  O15FirstRunExperience**:  *`number`* 

*Defined in [definitions/social/userProfile.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L53)*



The FirstRun flag of the user. (SharePoint Online only)




___

<a id="personalsitecapabilities"></a>

###  PersonalSiteCapabilities

**●  PersonalSiteCapabilities**:  *`SPTypes.PersonalSiteCapabilities`⎮`number`* 

*Defined in [definitions/social/userProfile.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L63)*



The capabilities of the user's personal site.




___

<a id="personalsitefirstcreationerror"></a>

###  PersonalSiteFirstCreationError

**●  PersonalSiteFirstCreationError**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L68)*



The error thrown when the user's personal site was first created, if any. (SharePoint Online only)




___

<a id="personalsitefirstcreationtime"></a>

###  PersonalSiteFirstCreationTime

**●  PersonalSiteFirstCreationTime**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L73)*



The date and time when the user's personal site was first created. (SharePoint Online only)




___

<a id="personalsiteinstantiationstate"></a>

###  PersonalSiteInstantiationState

**●  PersonalSiteInstantiationState**:  *`number`* 

*Defined in [definitions/social/userProfile.ts:79](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L79)*



The status for the state of the personal site instantiation. See PersonalSiteInstantiationState in the .NET client object model reference for a list of instantiation state values.




___

<a id="personalsitelastcreationtime"></a>

###  PersonalSiteLastCreationTime

**●  PersonalSiteLastCreationTime**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:84](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L84)*



The date and time when the user's personal site was last created. (SharePoint Online only)




___

<a id="personalsitenumberofretries"></a>

###  PersonalSiteNumberOfRetries

**●  PersonalSiteNumberOfRetries**:  *`number`* 

*Defined in [definitions/social/userProfile.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L89)*



The number of attempts made to create the user's personal site. (SharePoint Online only)




___

<a id="pictureimportenabled"></a>

###  PictureImportEnabled

**●  PictureImportEnabled**:  *`boolean`* 

*Defined in [definitions/social/userProfile.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L94)*



A Boolean value that indicates whether the user's picture is imported from Exchange.




___

<a id="pictureurl"></a>

###  PictureUrl

**●  PictureUrl**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:96](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L96)*





___

<a id="publicurl"></a>

###  PublicUrl

**●  PublicUrl**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:101](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L101)*



The public URL of the personal site of the current user. (SharePoint Online only)




___

<a id="urltocreatepersonalsite"></a>

###  UrlToCreatePersonalSite

**●  UrlToCreatePersonalSite**:  *`string`* 

*Defined in [definitions/social/userProfile.ts:106](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L106)*



The URL used to create the user's personal site.




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
<a id="followedcontent"></a>

###  FollowedContent

► **FollowedContent**(): [IBase](_definitions_lib_base_.ibase.md)`any`




*Defined in [definitions/social/userProfile.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L24)*



An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`any`





___

<a id="personalsite"></a>

###  PersonalSite

► **PersonalSite**(): [IBase](_definitions_lib_base_.ibase.md)[IWeb](_definitions_site_web_.iweb.md)




*Defined in [definitions/social/userProfile.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L58)*



The personal site of the user.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IWeb](_definitions_site_web_.iweb.md)





___

<a id="createpersonalsiteenque"></a>

###  createPersonalSiteEnque

► **createPersonalSiteEnque**(interactiveFl: *`boolean`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/userProfile.ts:117](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L117)*



Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files. For SharePoint Online development, My Site Host administrators can also use the CreatePersonalSiteEnqueueBulk method to create personal sites for one or more users.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| interactiveFl | `boolean`   |  True if this is an interactively (web) initiated request, or false if this is a non-interactively (client) initiated request. |





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

► **execute**(callback?: *function*): [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)

► **execute**(waitFl: *`boolean`*): [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)





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

<a id="shareallsocialdata"></a>

###  shareAllSocialData

► **shareAllSocialData**(publicFl: *`boolean`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/userProfile.ts:123](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/userProfile.ts#L123)*



Sets the privacy settings for this profile.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| publicFl | `boolean`   |  true to make all social data public; false to make all social data private. |





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


