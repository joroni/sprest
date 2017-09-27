[gd-sprest](../README.md) > ["mapper/index"](../modules/_mapper_index_.md)



# External module: "mapper/index"

## Index

### Object literals

* [Mapper](_mapper_index_.md#mapper)



---
<a id="mapper"></a>

## Object literal: Mapper


Mapper


<a id="mapper.attachment"></a>

###  attachment

**●  attachment**:  *object* 

*Defined in [mapper/index.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L52)*


#### Type declaration





___
<a id="mapper.attachmentfiles"></a>

###  attachmentfiles

**●  attachmentfiles**:  *object* 

*Defined in [mapper/index.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L53)*


#### Type declaration


add: `object`

Adds the attachment that is represented by the specified file name and byte array to the list item.
*__param__*: The name of the file to add.

*__param__*: The file contents as an array buffer.






argNames: `string`[]



requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.audit"></a>

###  audit

**●  audit**:  *object* 

*Defined in [mapper/index.ts:54](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L54)*


#### Type declaration


query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.contenttype"></a>

###  contenttype

**●  contenttype**:  *object* 

*Defined in [mapper/index.ts:55](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L55)*


#### Type declaration


properties: `string`[]

/




delete: `object`

/





requestType: `number`





update: `object`




metadataType: `string`



name: `string`



requestMethod: `string`



requestType: `number`








___
<a id="mapper.contenttypes"></a>

###  contenttypes

**●  contenttypes**:  *object* 

*Defined in [mapper/index.ts:55](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L55)*


#### Type declaration


add: `object`




metadataType: `string`



name: `string`



requestType: `number`





addAvailableContentType: `object`




argNames: `string`[]



requestType: `number`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.eventreceiver"></a>

###  eventreceiver

**●  eventreceiver**:  *object* 

*Defined in [mapper/index.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L56)*


#### Type declaration


delete: `object`




requestType: `number`





update: `object`




metadataType: `string`



name: `string`



requestMethod: `string`



requestType: `number`








___
<a id="mapper.eventreceivers"></a>

###  eventreceivers

**●  eventreceivers**:  *object* 

*Defined in [mapper/index.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L56)*


#### Type declaration


add: `object`




metadataType: `string`



name: `string`



requestType: `number`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.field"></a>

###  field

**●  field**:  *object* 

*Defined in [mapper/index.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L57)*


#### Type declaration


delete: `object`




requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`





setShowInDisplayForm: `object`




argNames: `string`[]



requestType: `number`





setShowInEditForm: `object`




argNames: `string`[]



requestType: `number`





setShowInNewForm: `object`




argNames: `string`[]



requestType: `number`





update: `object`




inheritMetadataType: `boolean`



name: `string`



requestMethod: `string`



requestType: `number`








___
<a id="mapper.fieldlinks"></a>

###  fieldlinks

**●  fieldlinks**:  *object* 

*Defined in [mapper/index.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L58)*


#### Type declaration


add: `object`




argNames: `string`[]



metadataType: `string`



name: `string`



requestType: `number`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.fields"></a>

###  fields

**●  fields**:  *object* 

*Defined in [mapper/index.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L57)*


#### Type declaration


add: `object`




metadataType: `string`



name: `string`



requestType: `number`





addDependentLookupField: `object`




argNames: `string`[]



requestType: `number`





addField: `object`




argNames: `string`[]



metadataType: `string`



name: `string`



requestType: `number`





createFieldAsXml: `object`




argNames: `string`[]



requestType: `number`



data: `object`




parameters: `object`




Options: `number`



SchemaXml: `string`



___metadata: `object`




type: `string`











getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getByInternalNameOrTitle: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getByTitle: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.file"></a>

###  file

**●  file**:  *object* 

*Defined in [mapper/index.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L59)*


#### Type declaration


properties: `string`[]

/




approve: `object`

/





argNames: `string`[]



requestType: `number`





cancelupload: `object`




argNames: `string`[]



name: `string`



requestType: `number`





checkin: `object`




argNames: `string`[]



requestType: `number`





checkout: `object`




requestType: `number`





content: `object`




name: `string`



requestType: `number`





continueUpload: `object`




argNames: `string`[]



name: `string`



requestType: `number`





copyTo: `object`




argNames: `string`[]



requestType: `number`





delete: `object`




requestType: `number`





deny: `object`




argNames: `string`[]



requestType: `number`





finishUpload: `object`




argNames: `string`[]



name: `string`



requestType: `number`





getlimitedwebpartmanager: `object`




argNames: `string`[]



name: `string`



requestType: `number`





moveTo: `object`




argNames: `string`[]



name: `string`



requestType: `number`





openBinaryStream: `object`




requestType: `number`





publish: `object`




argNames: `string`[]



requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`





recycle: `object`




requestType: `number`





saveBinaryStream: `object`




requestType: `number`





startUpload: `object`




argNames: `string`[]



name: `string`



requestType: `number`





undoCheckOut: `object`




requestType: `number`





unpublish: `object`




argNames: `string`[]



requestType: `number`





update: `object`




metadataType: `string`



name: `string`



requestMethod: `string`



requestType: `number`








___
<a id="mapper.files"></a>

###  files

**●  files**:  *object* 

*Defined in [mapper/index.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L59)*


#### Type declaration


add: `object`




argNames: `string`[]



requestType: `number`





addTemplateFile: `object`




argNames: `string`[]



requestType: `number`





getByUrl: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.fileversion"></a>

###  fileversion

**●  fileversion**:  *object* 

*Defined in [mapper/index.ts:60](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L60)*


#### Type declaration


properties: `undefined`[]

/




delete: `object`

/





requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.fileversions"></a>

###  fileversions

**●  fileversions**:  *object* 

*Defined in [mapper/index.ts:60](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L60)*


#### Type declaration


delete: `object`




requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.folder"></a>

###  folder

**●  folder**:  *object* 

*Defined in [mapper/index.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L61)*


#### Type declaration


properties: `string`[]

/




delete: `object`

/





requestType: `number`





getByUrl: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`





recycle: `object`




requestType: `number`





update: `object`




metadataType: `string`



name: `string`



requestMethod: `string`



requestType: `number`








___
<a id="mapper.folders"></a>

###  folders

**●  folders**:  *object* 

*Defined in [mapper/index.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L61)*


#### Type declaration


properties: `string`[]

/




add: `object`

/





argNames: `string`[]



requestType: `number`





getbyurl: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.group"></a>

###  group

**●  group**:  *object* 

*Defined in [mapper/index.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L62)*


#### Type declaration


properties: `string`[]

/




query: `object`

/





argNames: `string`[]



requestType: `number`








___
<a id="mapper.items"></a>

###  items

**●  items**:  *object* 

*Defined in [mapper/index.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L65)*


#### Type declaration


add: `object`




name: `string`



requestType: `number`



metadataType: function
► **metadataType**(obj: *`any`*): `any`




*Defined in [mapper/item/items.ts:9](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/items.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |





**Returns:** `any`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.limitedwebpartmanager"></a>

###  limitedwebpartmanager

**●  limitedwebpartmanager**:  *object* 

*Defined in [mapper/index.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L63)*


#### Type declaration


get_WebParts: `object`




argNames: `string`[]



name: `string`



requestType: `number`








___
<a id="mapper.list"></a>

###  list

**●  list**:  *object* 

*Defined in [mapper/index.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L64)*


#### Type declaration


properties: `string`[]

/




breakRoleInheritance: `object`

/





argNames: `string`[]



requestType: `number`





delete: `object`




requestType: `number`





getChanges: `object`




argNames: `string`[]



metadataType: `string`



requestType: `number`





getItemById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getItems: `object`




argNames: `string`[]



requestType: `number`



data: `object`




query: `object`




ViewXml: `string`



___metadata: `object`




type: `string`











getItemsByQuery: `object`




argNames: `string`[]



name: `string`



requestType: `number`



data: `object`




query: `object`




ViewXml: `string`



___metadata: `object`




type: `string`











getListItemChangesSinceToken: `object`




argNames: `string`[]



metadataType: `string`



requestType: `number`





getRelatedFields: `object`




requestType: `number`





getUserEffectivePermissions: `object`




argNames: `string`[]



name: `string`



requestType: `number`





getViewById: `object`




argNames: `string`[]



name: `string`



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`





recycle: `object`




requestType: `number`





renderListData: `object`




argNames: `string`[]



name: `string`



requestType: `number`





renderListFormData: `object`




argNames: `string`[]



requestType: `number`





reserveListItemId: `object`




requestType: `number`





resetRoleInheritance: `object`




requestType: `number`





update: `object`




metadataType: `string`



name: `string`



requestMethod: `string`



requestType: `number`








___
<a id="mapper.listitem"></a>

###  listitem

**●  listitem**:  *object* 

*Defined in [mapper/index.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L65)*


#### Type declaration


properties: `string`[]

/




breakRoleInheritance: `object`

/





argNames: `string`[]



requestType: `number`





delete: `object`




requestType: `number`





getUserEffectivePermissions: `object`




argNames: `string`[]



name: `string`



requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`





recycle: `object`




requestType: `number`





resetRoleInheritance: `object`




requestType: `number`





update: `object`




inheritMetadataType: `boolean`



name: `string`



requestMethod: `string`



requestType: `number`





validateUpdateListItem: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.lists"></a>

###  lists

**●  lists**:  *object* 

*Defined in [mapper/index.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L64)*


#### Type declaration


add: `object`




metadataType: `string`



name: `string`



requestType: `number`





ensureSiteAssetsLibrary: `object`




requestType: `number`





ensureSitePagesLibrary: `object`




requestType: `number`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getByTitle: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.peoplemanager"></a>

###  peoplemanager

**●  peoplemanager**:  *object* 

*Defined in [mapper/index.ts:66](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L66)*


#### Type declaration


amIFollowedBy: `object`




argNames: `string`[]



requestType: `number`





amIFollowing: `object`




argNames: `string`[]



requestType: `number`





follow: `object`




argNames: `string`[]



requestType: `number`





followTag: `object`




argNames: `string`[]



requestType: `number`





getFollowedTags: `object`




argNames: `string`[]



requestType: `number`





getFollowersFor: `object`




argNames: `string`[]



requestType: `number`





getMyFollowers: `object`




requestType: `number`





getMyProperties: `object`




requestType: `number`





getMySuggestions: `object`




requestType: `number`





getPeopleFollowedBy: `object`




argNames: `string`[]



requestType: `number`





getPeopleFollowedByMe: `object`




requestType: `number`





getPropertiesFor: `object`




argNames: `string`[]



requestType: `number`





getTrendingTags: `object`




name: `string`



replaceEndpointFl: `boolean`



requestType: `number`





getUserProfilePropertyFor: `object`




argNames: `string`[]



requestType: `number`





hideSuggestion: `object`




argNames: `string`[]



requestType: `number`





isFollowing: `object`




argNames: `string`[]



name: `string`



replaceEndpointFl: `boolean`



requestType: `number`





setMyProfilePicture: `object`




requestType: `number`





stopFollowing: `object`




argNames: `string`[]



requestType: `number`





stopFollowingTag: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.peoplepicker"></a>

###  peoplepicker

**●  peoplepicker**:  *object* 

*Defined in [mapper/index.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L67)*


#### Type declaration


clientPeoplePickerResolveUser: `object`




argNames: `string`[]



metadataType: `string`



name: `string`



replaceEndpointFl: `boolean`



requestType: `number`





clientPeoplePickerSearchUser: `object`




argNames: `string`[]



metadataType: `string`



name: `string`



replaceEndpointFl: `boolean`



requestType: `number`








___
<a id="mapper.profileloader"></a>

###  profileloader

**●  profileloader**:  *object* 

*Defined in [mapper/index.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L68)*


#### Type declaration


createPersonalSiteEnqueueBulk: `object`




argNames: `string`[]



requestType: `number`





getOwnerUserProfile: `object`




name: `string`



replaceEndpointFl: `boolean`



requestType: `number`



returnType: `string`





getUserProfile: `object`




requestType: `number`



returnType: `string`








___
<a id="mapper.propertyvalues"></a>

###  propertyvalues

**●  propertyvalues**:  *object* 

*Defined in [mapper/index.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L69)*


#### Type declaration


query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.roleassignment"></a>

###  roleassignment

**●  roleassignment**:  *object* 

*Defined in [mapper/index.ts:70](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L70)*


#### Type declaration


properties: `string`[]

/




delete: `object`

/





requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.roleassignments"></a>

###  roleassignments

**●  roleassignments**:  *object* 

*Defined in [mapper/index.ts:70](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L70)*


#### Type declaration


addRoleAssignment: `object`




argNames: `string`[]



requestType: `number`





getByPrincipalId: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`





removeRoleAssignment: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.roledefinition"></a>

###  roledefinition

**●  roledefinition**:  *object* 

*Defined in [mapper/index.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L71)*


#### Type declaration


delete: `object`




requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.roledefinitions"></a>

###  roledefinitions

**●  roledefinitions**:  *object* 

*Defined in [mapper/index.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L71)*


#### Type declaration


getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getByName: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getByType: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.search"></a>

###  search

**●  search**:  *object* 

*Defined in [mapper/index.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L72)*


#### Type declaration


postquery: `object`




argNames: `string`[]



metadataType: `string`



requestType: `number`








___
<a id="mapper.site"></a>

###  site

**●  site**:  *object* 

*Defined in [mapper/index.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L73)*


#### Type declaration


properties: `string`[]

/




createPreviewSPSite: `object`

/





argNames: `string`[]



requestType: `number`





extendUpgradeReminderDate: `object`




requestType: `number`





getCatalog: `object`




argNames: `string`[]



requestType: `number`





getChanges: `object`




argNames: `string`[]



metadataType: `string`



requestType: `number`





getCustomListTemplates: `object`




argNames: `string`[]



requestType: `number`





getWebTemplates: `object`




argNames: `string`[]



requestType: `number`





invalidate: `object`




requestType: `number`





needsUpgradeByType: `object`




argNames: `string`[]



requestType: `number`





openWeb: `object`




argNames: `string`[]



requestType: `number`





openWebById: `object`




argNames: `string`[]



requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`





runHealthCheck: `object`




argNames: `string`[]



requestType: `number`





runUpgradeSiteSession: `object`




argNames: `string`[]



requestType: `number`





update: `object`




metadataType: `string`



name: `string`



requestMethod: `string`



requestType: `number`





updateClientObjectModelUseRemoteAPIsPermissionSetting: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.sitegroups"></a>

###  sitegroups

**●  sitegroups**:  *object* 

*Defined in [mapper/index.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L62)*


#### Type declaration


add: `object`




metadataType: `string`



name: `string`



requestType: `number`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getByName: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`





removeById: `object`




argNames: `string`[]



requestType: `number`





removeByLoginName: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.socialfeed"></a>

###  socialfeed

**●  socialfeed**:  *object* 

*Defined in [mapper/index.ts:74](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L74)*


#### Type declaration


actor: `object`




argNames: `string`[]



name: `string`



requestType: `number`





actorFeed: `object`




argNames: `string`[]



name: `string`



requestType: `number`





clearMyUnreadMentionCount: `object`




name: `string`



requestType: `number`





my: `object`




name: `string`



requestType: `number`





myFeed: `object`




name: `string`



requestType: `number`





myLikes: `object`




name: `string`



requestType: `number`





myMentionFeed: `object`




name: `string`



requestType: `number`





myNews: `object`




name: `string`



requestType: `number`





myTimelineFeed: `object`




name: `string`



requestType: `number`





myUnreadMentionCount: `object`




name: `string`



requestType: `number`








___
<a id="mapper.user"></a>

###  user

**●  user**:  *object* 

*Defined in [mapper/index.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L75)*


#### Type declaration


properties: `string`[]

/




delete: `object`

/





requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.usercustomaction"></a>

###  usercustomaction

**●  usercustomaction**:  *object* 

*Defined in [mapper/index.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L76)*


#### Type declaration


delete: `object`




requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.usercustomactions"></a>

###  usercustomactions

**●  usercustomactions**:  *object* 

*Defined in [mapper/index.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L76)*


#### Type declaration


add: `object`




metadataType: `string`



name: `string`



requestType: `number`





clear: `object`




requestType: `number`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.userprofile"></a>

###  userprofile

**●  userprofile**:  *object* 

*Defined in [mapper/index.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L77)*


#### Type declaration


properties: `string`[]

/




createPersonalSiteEnque: `object`

/





requestType: `number`





shareAllSocialData: `object`




requestType: `number`








___
<a id="mapper.users"></a>

###  users

**●  users**:  *object* 

*Defined in [mapper/index.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L75)*


#### Type declaration


add: `object`




metadataType: `string`



name: `string`



requestType: `number`





getByEmail: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getByLoginName: `object`




argNames: `string`[]



name: `string`



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`





removeById: `object`




argNames: `string`[]



requestType: `number`





removeByLoginName: `object`




argNames: `string`[]



name: `string`



requestType: `number`








___
<a id="mapper.version"></a>

###  version

**●  version**:  *object* 

*Defined in [mapper/index.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L78)*


#### Type declaration


deleteAll: `object`




requestType: `number`





deleteById: `object`




argNames: `string`[]



requestType: `number`





deleteByLabel: `object`




argNames: `string`[]



requestType: `number`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`





restoreByLabel: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.view"></a>

###  view

**●  view**:  *object* 

*Defined in [mapper/index.ts:79](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L79)*


#### Type declaration


properties: `string`[]

/




delete: `object`

/





requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`





renderAsHtml: `object`




requestType: `number`





update: `object`




metadataType: `string`



name: `string`



requestMethod: `string`



requestType: `number`








___
<a id="mapper.viewfieldcollection"></a>

###  viewfieldcollection

**●  viewfieldcollection**:  *object* 

*Defined in [mapper/index.ts:80](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L80)*


#### Type declaration


addViewField: `object`




argNames: `string`[]



requestType: `number`





moveViewFieldTo: `object`




argNames: `string`[]



requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`





removeAllViewFields: `object`




requestType: `number`





removeViewField: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.views"></a>

###  views

**●  views**:  *object* 

*Defined in [mapper/index.ts:79](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L79)*


#### Type declaration


add: `object`




metadataType: `string`



name: `string`



requestType: `number`





getById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getByTitle: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.web"></a>

###  web

**●  web**:  *object* 

*Defined in [mapper/index.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L81)*


#### Type declaration


properties: `string`[]

/




applyTheme: `object`

/





argNames: `string`[]



requestType: `number`





applyWebTemplate: `object`




argName: `string`[]



requestType: `number`





breakRoleInheritance: `object`




argNames: `string`[]



requestType: `number`





delete: `object`




requestType: `number`





doesPushNotificationSubscriberExist: `object`




argNames: `string`[]



requestType: `number`





doesUserHavePermissions: `object`




argNames: `string`[]



requestType: `number`





ensureUser: `object`




argNames: `string`[]



requestType: `number`





executeRemoteLOB: `object`




requestType: `number`





getAppBdcCatalog: `object`




requestType: `number`





getAppBdcCatalogForAppInstance: `object`




argNames: `string`[]



requestType: `number`





getAppInstanceById: `object`




argNames: `string`[]



requestType: `number`





getAppInstancesByProductId: `object`




argNames: `string`[]



requestType: `number`





getAvailableWebTemplates: `object`




argNames: `string`[]



requestType: `number`





getCatalog: `object`




argNames: `string`[]



requestType: `number`





getChanges: `object`




argNames: `string`[]



metadataType: `string`



requestType: `number`





getContextWebInformation: `object`




name: `string`



replaceEndpointFl: `boolean`



requestType: `number`





getCustomListTemplates: `object`




requestType: `number`





getDocumentLibraries: `object`




argNames: `string`[]



name: `string`



requestType: `number`





getEntity: `object`




argNames: `string`[]



requestType: `number`





getFileByServerRelativeUrl: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getFolderByServerRelativeUrl: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getList: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getPushNotificationSubscriber: `object`




argNames: `string`[]



requestType: `number`





getPushNotificationSubscribersByArgs: `object`




argNames: `string`[]



requestType: `number`





getPushNotificationSubscribersByUser: `object`




argNames: `string`[]



requestType: `number`





getSubwebsFilteredForCurrentUser: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getUserById: `object`




argNames: `string`[]



requestType: `number`



returnType: `string`





getUserEffectivePermissions: `object`




argNames: `string`[]



name: `string`



requestType: `number`





getWebUrlFromPageUrl: `object`




name: `string`



requestType: `number`





loadAndInstallApp: `object`




requestType: `number`





loadAndInstallAppInSpecifiedLocale: `object`




argNames: `string`[]



requestType: `number`





loadApp: `object`




argNames: `string`[]



requestType: `number`





mapToIcon: `object`




argNames: `string`[]



requestType: `number`





processExternalNotification: `object`




requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`





registerPushNotificationSubscriber: `object`




argNames: `string`[]



requestType: `number`





resetRoleInheritance: `object`




requestType: `number`





unregisterPushNotificationSubscriber: `object`




requestType: `number`





update: `object`




metadataType: `string`



name: `string`



requestMethod: `string`



requestType: `number`








___
<a id="mapper.webinfos"></a>

###  webinfos

**●  webinfos**:  *object* 

*Defined in [mapper/index.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L81)*


#### Type declaration


query: `object`




argNames: `string`[]



requestType: `number`








___
<a id="mapper.webs"></a>

###  webs

**●  webs**:  *object* 

*Defined in [mapper/index.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/index.ts#L81)*


#### Type declaration


add: `object`




argNames: `string`[]



metadataType: `string`



requestType: `number`





query: `object`




argNames: `string`[]



requestType: `number`








___


