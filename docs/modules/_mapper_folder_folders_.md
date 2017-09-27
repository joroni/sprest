[gd-sprest](../README.md) > ["mapper/folder/folders"](../modules/_mapper_folder_folders_.md)



# External module: "mapper/folder/folders"

## Index

### Object literals

* [folders](_mapper_folder_folders_.md#folders)



---
<a id="folders"></a>

## Object literal: folders


/


<a id="folders.properties"></a>

###  properties

**●  properties**:  *`string`[]*  =  [
        "Files|files|/getByUrl('[Name]')|file", "Folders|folders|/getByUrl('[Name]')|folder", "ListItemAllFields",
        "ParentFolder", "StorageMetrics"
    ]

*Defined in [mapper/folder/folders.ts:10](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L10)*



/




___
<a id="folders.add"></a>

###  add

** add**:  *`object`* 

*Defined in [mapper/folder/folders.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L20)*



/



<a id="folders.add.argnames"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["url"]

*Defined in [mapper/folder/folders.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L21)*





___
<a id="folders.add.requesttype"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/folder/folders.ts:22](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L22)*





___

___
<a id="folders.getbyurl"></a>

###  getbyurl

** getbyurl**:  *`object`* 

*Defined in [mapper/folder/folders.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L26)*




<a id="folders.getbyurl.argnames-1"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["serverRelativeUrl"]

*Defined in [mapper/folder/folders.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L27)*





___
<a id="folders.getbyurl.requesttype-1"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/folder/folders.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L28)*





___
<a id="folders.getbyurl.returntype"></a>

###  returnType

**●  returnType**:  *`string`*  = "folder"

*Defined in [mapper/folder/folders.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L29)*





___

___
<a id="folders.query"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/folder/folders.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L33)*




<a id="folders.query.argnames-2"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["oData"]

*Defined in [mapper/folder/folders.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L34)*





___
<a id="folders.query.requesttype-2"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.OData

*Defined in [mapper/folder/folders.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/folder/folders.ts#L35)*





___

___


