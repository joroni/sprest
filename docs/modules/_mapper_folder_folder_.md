[gd-sprest](../README.md) > ["mapper/folder/folder"](../modules/_mapper_folder_folder_.md)



# External module: "mapper/folder/folder"

## Index

### Object literals

* [folder](_mapper_folder_folder_.md#folder)



---
<a id="folder"></a>

## Object literal: folder


<a id="folder.properties"></a>

###  properties

**●  properties**:  *`string`[]*  =  [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder|folder", "Properties|propertyvalues", "StorageMetrics"
    ]

*Defined in [mapper/folder/folder.ts:8](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L8)*



/




___
<a id="folder.delete"></a>

###  delete

** delete**:  *`object`* 

*Defined in [mapper/folder/folder.ts:18](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L18)*



/



<a id="folder.delete.requesttype"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Delete

*Defined in [mapper/folder/folder.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L19)*





___

___
<a id="folder.getbyurl"></a>

###  getByUrl

** getByUrl**:  *`object`* 

*Defined in [mapper/folder/folder.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L23)*




<a id="folder.getbyurl.argnames"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["serverRelativeUrl"]

*Defined in [mapper/folder/folder.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L24)*





___
<a id="folder.getbyurl.requesttype-1"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/folder/folder.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L25)*





___
<a id="folder.getbyurl.returntype"></a>

###  returnType

**●  returnType**:  *`string`*  = "folder"

*Defined in [mapper/folder/folder.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L26)*





___

___
<a id="folder.query"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/folder/folder.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L30)*




<a id="folder.query.argnames-1"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["oData"]

*Defined in [mapper/folder/folder.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L31)*





___
<a id="folder.query.requesttype-2"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.OData

*Defined in [mapper/folder/folder.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L32)*





___

___
<a id="folder.recycle"></a>

###  recycle

** recycle**:  *`object`* 

*Defined in [mapper/folder/folder.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L36)*




<a id="folder.recycle.requesttype-3"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/folder/folder.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L37)*





___

___
<a id="folder.update"></a>

###  update

** update**:  *`object`* 

*Defined in [mapper/folder/folder.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L41)*




<a id="folder.update.metadatatype"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.Folder"

*Defined in [mapper/folder/folder.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L42)*





___
<a id="folder.update.name"></a>

###  name

**●  name**:  *`string`*  = ""

*Defined in [mapper/folder/folder.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L43)*





___
<a id="folder.update.requestmethod"></a>

###  requestMethod

**●  requestMethod**:  *`string`*  = "MERGE"

*Defined in [mapper/folder/folder.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L44)*





___
<a id="folder.update.requesttype-4"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/folder/folder.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folder.ts#L45)*





___

___


