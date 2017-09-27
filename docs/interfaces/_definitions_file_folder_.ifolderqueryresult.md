[gd-sprest](../README.md) > ["definitions/file/folder"](../modules/_definitions_file_folder_.md) > [IFolderQueryResult](../interfaces/_definitions_file_folder_.ifolderqueryresult.md)



# Interface: IFolderQueryResult


Folder Query Result

## Hierarchy


 [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)




 [IFolderProps](_definitions_file_folder_.ifolderprops.md)

**↳ IFolderQueryResult**








## Properties
<a id="contenttypeorder"></a>

###  ContentTypeOrder

**●  ContentTypeOrder**:  *[IStringValue](_definitions_lib_types_.istringvalue.md)* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[ContentTypeOrder](_definitions_file_folder_.ifolderprops.md#contenttypeorder)*

*Defined in [definitions/file/folder.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L44)*



Specifies the sequence in which content types are displayed.




___

<a id="exists"></a>

###  Exists

**●  Exists**:  *`boolean`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[Exists](_definitions_file_folder_.ifolderprops.md#exists)*

*Defined in [definitions/file/folder.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L47)*



Gets a value that specifies whether the file exists.




___

<a id="files"></a>

###  Files

**●  Files**:  *[IFileResults](_definitions_file_files_.ifileresults.md)* 

*Defined in [definitions/file/folder.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L127)*



Gets the files contained in the folder.




___

<a id="folders"></a>

###  Folders

**●  Folders**:  *[IFolderResults](_definitions_file_folders_.ifolderresults.md)* 

*Defined in [definitions/file/folder.ts:132](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L132)*



Gets the folders contained in the list folder.




___

<a id="iswopienabled"></a>

###  IsWOPIEnabled

**●  IsWOPIEnabled**:  *`boolean`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[IsWOPIEnabled](_definitions_file_folder_.ifolderprops.md#iswopienabled)*

*Defined in [definitions/file/folder.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L53)*



Indicates whether the folder is enabled for WOPI default action.




___

<a id="itemcount"></a>

###  ItemCount

**●  ItemCount**:  *`number`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[ItemCount](_definitions_file_folder_.ifolderprops.md#itemcount)*

*Defined in [definitions/file/folder.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L50)*



Gets a value that specifies the count of items in the list folder.




___

<a id="listitemallfields"></a>

###  ListItemAllFields

**●  ListItemAllFields**:  *[IListItemResults](_definitions_list_items_.ilistitemresults.md)* 

*Defined in [definitions/file/folder.ts:137](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L137)*



Specifies the list item field (2) values for the list item corresponding to the file.




___

<a id="name"></a>

###  Name

**●  Name**:  *`string`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[Name](_definitions_file_folder_.ifolderprops.md#name)*

*Defined in [definitions/file/folder.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L56)*



Gets the name of the folder.




___

<a id="parentfolder"></a>

###  ParentFolder

**●  ParentFolder**:  *[IFolderResult](_definitions_file_folder_.ifolderresult.md)* 

*Defined in [definitions/file/folder.ts:142](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L142)*



Gets the parent list folder of the folder.




___

<a id="properties"></a>

###  Properties

**●  Properties**:  *[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)* 

*Defined in [definitions/file/folder.ts:147](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L147)*



Property Bag




___

<a id="serverrelativepath"></a>

###  ServerRelativePath

**●  ServerRelativePath**:  *[IResourcePath](_definitions_lib_types_.iresourcepath.md)* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[ServerRelativePath](_definitions_file_folder_.ifolderprops.md#serverrelativepath)*

*Defined in [definitions/file/folder.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L58)*





___

<a id="serverrelativeurl"></a>

###  ServerRelativeUrl

**●  ServerRelativeUrl**:  *`string`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[ServerRelativeUrl](_definitions_file_folder_.ifolderprops.md#serverrelativeurl)*

*Defined in [definitions/file/folder.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L61)*



Gets the server-relative URL of the list folder.




___

<a id="storagemetrics"></a>

###  StorageMetrics

**●  StorageMetrics**:  *`any`* 

*Defined in [definitions/file/folder.ts:149](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L149)*





___

<a id="timecreated"></a>

###  TimeCreated

**●  TimeCreated**:  *`string`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[TimeCreated](_definitions_file_folder_.ifolderprops.md#timecreated)*

*Defined in [definitions/file/folder.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L63)*





___

<a id="timelastmodified"></a>

###  TimeLastModified

**●  TimeLastModified**:  *`string`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[TimeLastModified](_definitions_file_folder_.ifolderprops.md#timelastmodified)*

*Defined in [definitions/file/folder.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L65)*





___

<a id="uniquecontenttypeorder"></a>

###  UniqueContentTypeOrder

**●  UniqueContentTypeOrder**:  *[IStringValue](_definitions_lib_types_.istringvalue.md)* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[UniqueContentTypeOrder](_definitions_file_folder_.ifolderprops.md#uniquecontenttypeorder)*

*Defined in [definitions/file/folder.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L68)*



Gets or sets a value that specifies the content type order.




___

<a id="uniqueid"></a>

###  UniqueId

**●  UniqueId**:  *`string`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[UniqueId](_definitions_file_folder_.ifolderprops.md#uniqueid)*

*Defined in [definitions/file/folder.ts:70](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L70)*





___

<a id="welcomepage"></a>

###  WelcomePage

**●  WelcomePage**:  *`string`* 

*Inherited from [IFolderProps](_definitions_file_folder_.ifolderprops.md).[WelcomePage](_definitions_file_folder_.ifolderprops.md#welcomepage)*

*Defined in [definitions/file/folder.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L73)*



Gets or sets a value that specifies folder-relative URL for the list folder welcome page.




___


## Methods
<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFolderMethods](_definitions_file_folder_.ifoldermethods.md).[delete](_definitions_file_folder_.ifoldermethods.md#delete)*

*Defined in [definitions/file/folder.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L19)*



Deletes the folder.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getbyurl"></a>

###  getByUrl

► **getByUrl**(serverRelativeUrl: *`any`*): [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




*Inherited from [IFolderMethods](_definitions_file_folder_.ifoldermethods.md).[getByUrl](_definitions_file_folder_.ifoldermethods.md#getbyurl)*

*Defined in [definitions/file/folder.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L25)*



Get the folder at the specified URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| serverRelativeUrl | `any`   |  The server-relative URL of the folder. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)





___

<a id="recycle"></a>

###  recycle

► **recycle**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFolderMethods](_definitions_file_folder_.ifoldermethods.md).[recycle](_definitions_file_folder_.ifoldermethods.md#recycle)*

*Defined in [definitions/file/folder.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L30)*



Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFolderMethods](_definitions_file_folder_.ifoldermethods.md).[update](_definitions_file_folder_.ifoldermethods.md#update)*

*Defined in [definitions/file/folder.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L36)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The file properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


