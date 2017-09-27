[gd-sprest](../README.md) > ["mapper/item/listItem"](../modules/_mapper_item_listitem_.md)



# External module: "mapper/item/listItem"

## Index

### Object literals

* [listitem](_mapper_item_listitem_.md#listitem)



---
<a id="listitem"></a>

## Object literal: listitem


<a id="listitem.properties"></a>

###  properties

**●  properties**:  *`string`[]*  =  [
        "AttachmentFiles|attachmentfiles|('[Name]')|attachment", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
        "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
        "Properties|propertyvalues", "RoleAssignments|roleassignments|roleassignments|([Name])|roleassignment"
    ]

*Defined in [mapper/item/listItem.ts:8](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L8)*



/




___
<a id="listitem.breakroleinheritance"></a>

###  breakRoleInheritance

** breakRoleInheritance**:  *`object`* 

*Defined in [mapper/item/listItem.ts:22](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L22)*



/



<a id="listitem.breakroleinheritance.argnames"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["copyroleassignments", "clearsubscopes"]

*Defined in [mapper/item/listItem.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L23)*





___
<a id="listitem.breakroleinheritance.requesttype"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/item/listItem.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L24)*





___

___
<a id="listitem.delete"></a>

###  delete

** delete**:  *`object`* 

*Defined in [mapper/item/listItem.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L28)*




<a id="listitem.delete.requesttype-1"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Delete

*Defined in [mapper/item/listItem.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L29)*





___

___
<a id="listitem.getusereffectivepermissions"></a>

###  getUserEffectivePermissions

** getUserEffectivePermissions**:  *`object`* 

*Defined in [mapper/item/listItem.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L33)*




<a id="listitem.getusereffectivepermissions.argnames-1"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["loginName"]

*Defined in [mapper/item/listItem.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L34)*





___
<a id="listitem.getusereffectivepermissions.name"></a>

###  name

**●  name**:  *`string`*  = "getUserEffectivePermissions(@user)?@user='[[loginName]]'"

*Defined in [mapper/item/listItem.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L35)*





___
<a id="listitem.getusereffectivepermissions.requesttype-2"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetReplace

*Defined in [mapper/item/listItem.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L36)*





___

___
<a id="listitem.query"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/item/listItem.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L40)*




<a id="listitem.query.argnames-2"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["oData"]

*Defined in [mapper/item/listItem.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L41)*





___
<a id="listitem.query.requesttype-3"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.OData

*Defined in [mapper/item/listItem.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L42)*





___

___
<a id="listitem.recycle"></a>

###  recycle

** recycle**:  *`object`* 

*Defined in [mapper/item/listItem.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L46)*




<a id="listitem.recycle.requesttype-4"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/item/listItem.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L47)*





___

___
<a id="listitem.resetroleinheritance"></a>

###  resetRoleInheritance

** resetRoleInheritance**:  *`object`* 

*Defined in [mapper/item/listItem.ts:51](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L51)*




<a id="listitem.resetroleinheritance.requesttype-5"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/item/listItem.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L52)*





___

___
<a id="listitem.update"></a>

###  update

** update**:  *`object`* 

*Defined in [mapper/item/listItem.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L56)*




<a id="listitem.update.inheritmetadatatype"></a>

###  inheritMetadataType

**●  inheritMetadataType**:  *`boolean`*  = true

*Defined in [mapper/item/listItem.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L57)*





___
<a id="listitem.update.name-1"></a>

###  name

**●  name**:  *`string`*  = ""

*Defined in [mapper/item/listItem.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L58)*





___
<a id="listitem.update.requestmethod"></a>

###  requestMethod

**●  requestMethod**:  *`string`*  = "MERGE"

*Defined in [mapper/item/listItem.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L59)*





___
<a id="listitem.update.requesttype-6"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/item/listItem.ts:60](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L60)*





___

___
<a id="listitem.validateupdatelistitem"></a>

###  validateUpdateListItem

** validateUpdateListItem**:  *`object`* 

*Defined in [mapper/item/listItem.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L64)*




<a id="listitem.validateupdatelistitem.argnames-3"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["formValues", "bNewDocumentUpdate"]

*Defined in [mapper/item/listItem.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L65)*





___
<a id="listitem.validateupdatelistitem.requesttype-7"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/item/listItem.ts:66](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/item/listItem.ts#L66)*





___

___


