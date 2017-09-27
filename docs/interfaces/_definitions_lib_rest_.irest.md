[gd-sprest](../README.md) > ["definitions/lib/rest"](../modules/_definitions_lib_rest_.md) > [IREST](../interfaces/_definitions_lib_rest_.irest.md)



# Interface: IREST


SharePoint REST Library


## Properties
<a id="contextinfo"></a>

###  ContextInfo

**●  ContextInfo**:  *[IContextInformation](_definitions_lib_contextinfo_.icontextinformation.md)* 

*Defined in [definitions/lib/rest.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L24)*



A reference to the _spPageContextInfo global variable.




___

<a id="defaultrequesttohostfl"></a>

###  DefaultRequestToHostFl

**●  DefaultRequestToHostFl**:  *`boolean`* 

*Defined in [definitions/lib/rest.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L29)*



False by default.




___

<a id="email"></a>

###  Email

**●  Email**:  *[IEmail](_definitions_lib_email_.iemail.md)* 

*Defined in [definitions/lib/rest.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L34)*



Use this api to send emails.




___

<a id="helper"></a>

###  Helper

**●  Helper**:  *[IHelper](_definitions_lib_helper_.ihelper.md)* 

*Defined in [definitions/lib/rest.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L39)*



Helper methods.




___

<a id="list"></a>

###  List

**●  List**:  *function* 

*Defined in [definitions/lib/rest.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L46)*



Use this api to interact with SharePoint lists and libraries.
*__param__*: The name of the list.

*__param__*: (Optional) The target information.


#### Type declaration
(listName: *`string`*, targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IList](_definitions_list_list_.ilist.md)


*Defined in [definitions/lib/rest.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L46)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listName | `string`   |  - |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IList](_definitions_list_list_.ilist.md)






___

<a id="peoplemanager"></a>

###  PeopleManager

**●  PeopleManager**:  *function* 

*Defined in [definitions/lib/rest.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L52)*



Use this api to interact with SharePoint user profiles.
*__param__*: (Optional) The target information.


#### Type declaration
(targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)


*Defined in [definitions/lib/rest.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L52)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)






___

<a id="peoplepicker"></a>

###  PeoplePicker

**●  PeoplePicker**:  *function* 

*Defined in [definitions/lib/rest.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L58)*



Use this api to search for users.
*__param__*: The search settings.


#### Type declaration
(settings?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IPeoplePicker](_definitions_user_peoplepicker_.ipeoplepicker.md)


*Defined in [definitions/lib/rest.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L58)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| settings | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IPeoplePicker](_definitions_user_peoplepicker_.ipeoplepicker.md)






___

<a id="profileloader"></a>

###  ProfileLoader

**●  ProfileLoader**:  *function* 

*Defined in [definitions/lib/rest.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L64)*



Use this api to interact with the user profile loader.
*__param__*: (Optional) The target information.


#### Type declaration
(targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)


*Defined in [definitions/lib/rest.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L64)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)






___

<a id="search"></a>

###  Search

**●  Search**:  *function* 

*Defined in [definitions/lib/rest.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L71)*



Use this api to interact with the SharePoint search service.
*__param__*: The optional url to execute the search against.

*__param__*: The search settings.


#### Type declaration
(url?: *`string`*, settings?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [ISearch](_definitions_lib_search_.isearch.md)


*Defined in [definitions/lib/rest.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L71)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| settings | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [ISearch](_definitions_lib_search_.isearch.md)






___

<a id="site"></a>

###  Site

**●  Site**:  *function* 

*Defined in [definitions/lib/rest.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L78)*



Use this api to interact with a SharePoint site collection.
*__param__*: (Optional) The site url.

*__param__*: (Optional) The target information.


#### Type declaration
(url?: *`string`*, targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [ISite](_definitions_site_site_.isite.md)


*Defined in [definitions/lib/rest.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L78)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [ISite](_definitions_site_site_.isite.md)






___

<a id="socialfeed"></a>

###  SocialFeed

**●  SocialFeed**:  *[ISocialFeed](_definitions_social_socialfeed_.isocialfeed.md)* 

*Defined in [definitions/lib/rest.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L83)*



Use this api to interact with the current user's social profile.




___

<a id="userprofile"></a>

###  UserProfile

**●  UserProfile**:  *function* 

*Defined in [definitions/lib/rest.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L89)*



Use this api to interact with the current user's profile.
*__param__*: (Optional) The target information.


#### Type declaration
(targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)


*Defined in [definitions/lib/rest.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L89)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)






___

<a id="web"></a>

###  Web

**●  Web**:  *function* 

*Defined in [definitions/lib/rest.ts:96](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L96)*



Use this api to interact with a SharePoint web.
*__param__*: (Optional) The web url.

*__param__*: (Optional) The target information.


#### Type declaration
(url?: *`string`*, targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IWeb](_definitions_site_web_.iweb.md)


*Defined in [definitions/lib/rest.ts:96](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/rest.ts#L96)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IWeb](_definitions_site_web_.iweb.md)






___


