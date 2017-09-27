[gd-sprest](../README.md) > ["gd-sprest"](../modules/_gd_sprest_.md)



# External module: "gd-sprest"

## Index

### Variables

* [$REST](_gd_sprest_.md#_rest)


### Object literals

* [gd_sprest](_gd_sprest_.md#gd_sprest)



---
## Variables
<a id="_rest"></a>

###  $REST

**●  $REST**:  *[IREST](../interfaces/_definitions_lib_rest_.irest.md)*  =  <any>gd_sprest

*Defined in [gd-sprest.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L87)*





___


<a id="gd_sprest"></a>

## Object literal: gd_sprest


SharePoint REST Library


<a id="gd_sprest.contextinfo"></a>

###  ContextInfo

**●  ContextInfo**:  *[IContextInformation](../interfaces/_definitions_lib_contextinfo_.icontextinformation.md)* 

*Defined in [gd-sprest.ts:70](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L70)*





___
<a id="gd_sprest.defaultrequesttohostfl"></a>

###  DefaultRequestToHostFl

**●  DefaultRequestToHostFl**:  *`boolean`*  = false

*Defined in [gd-sprest.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L71)*





___
<a id="gd_sprest.email"></a>

###  Email

**●  Email**:  *[IEmail](../interfaces/_definitions_lib_email_.iemail.md)* 

*Defined in [gd-sprest.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L72)*





___
<a id="gd_sprest.helper"></a>

###  Helper

**●  Helper**:  *[IHelper](../interfaces/_definitions_lib_helper_.ihelper.md)* 

*Defined in [gd-sprest.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L73)*





___
<a id="gd_sprest.jslink"></a>

###  JSLink

**●  JSLink**:  *[JSLink](../classes/_lib_jslink_.jslink.md)* 

*Defined in [gd-sprest.ts:74](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L74)*





___
<a id="gd_sprest.socialfeed"></a>

###  SocialFeed

**●  SocialFeed**:  *[ISocialFeed](../interfaces/_definitions_social_socialfeed_.isocialfeed.md)* 

*Defined in [gd-sprest.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L81)*





___
<a id="gd_sprest.___ver"></a>

###  ___ver

**●  ___ver**:  *`number`*  = 2.01

*Defined in [gd-sprest.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L69)*





___
<a id="gd_sprest.list"></a>

###  List

► **List**(listName: *`string`*, targetInfo?: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [IList](../interfaces/_definitions_list_list_.ilist.md)




*Defined in [gd-sprest.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L75)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listName | `string`   |  - |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IList](../interfaces/_definitions_list_list_.ilist.md)





___
<a id="gd_sprest.peoplemanager"></a>

###  PeopleManager

► **PeopleManager**(targetInfo?: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [IPeopleManager](../interfaces/_definitions_social_peoplemanager_.ipeoplemanager.md)




*Defined in [gd-sprest.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L76)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IPeopleManager](../interfaces/_definitions_social_peoplemanager_.ipeoplemanager.md)





___
<a id="gd_sprest.peoplepicker"></a>

###  PeoplePicker

► **PeoplePicker**(targetInfo?: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [IPeoplePicker](../interfaces/_definitions_user_peoplepicker_.ipeoplepicker.md)




*Defined in [gd-sprest.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L77)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IPeoplePicker](../interfaces/_definitions_user_peoplepicker_.ipeoplepicker.md)





___
<a id="gd_sprest.profileloader"></a>

###  ProfileLoader

► **ProfileLoader**(targetInfo?: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [IProfileLoader](../interfaces/_definitions_social_profileloader_.iprofileloader.md)




*Defined in [gd-sprest.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L78)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IProfileLoader](../interfaces/_definitions_social_profileloader_.iprofileloader.md)





___
<a id="gd_sprest.search"></a>

###  Search

► **Search**(url?: *`string`*, targetInfo?: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [ISearch](../interfaces/_definitions_lib_search_.isearch.md)




*Defined in [gd-sprest.ts:79](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L79)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [ISearch](../interfaces/_definitions_lib_search_.isearch.md)





___
<a id="gd_sprest.site"></a>

###  Site

► **Site**(url?: *`string`*, targetInfo?: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [ISite](../interfaces/_definitions_site_site_.isite.md)




*Defined in [gd-sprest.ts:80](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L80)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [ISite](../interfaces/_definitions_site_site_.isite.md)





___
<a id="gd_sprest.userprofile"></a>

###  UserProfile

► **UserProfile**(targetInfo?: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [IUserProfile](../interfaces/_definitions_social_userprofile_.iuserprofile.md)




*Defined in [gd-sprest.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L82)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IUserProfile](../interfaces/_definitions_social_userprofile_.iuserprofile.md)





___
<a id="gd_sprest.web"></a>

###  Web

► **Web**(url?: *`string`*, targetInfo?: *[ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)*): [IWeb](../interfaces/_definitions_site_web_.iweb.md)




*Defined in [gd-sprest.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/gd-sprest.ts#L83)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| targetInfo | [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)   |  - |





**Returns:** [IWeb](../interfaces/_definitions_site_web_.iweb.md)





___


