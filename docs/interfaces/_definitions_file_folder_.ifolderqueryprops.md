[gd-sprest](../README.md) > ["definitions/file/folder"](../modules/_definitions_file_folder_.md) > [IFolderQueryProps](../interfaces/_definitions_file_folder_.ifolderqueryprops.md)



# Interface: IFolderQueryProps


Folder Query Properties

## Hierarchy

**IFolderQueryProps**

↳  [IFolderResult](_definitions_file_folder_.ifolderresult.md)




↳  [IFolderResult](_definitions_file_folder_.ifolderresult.md)




↳  [IFolder](_definitions_file_folder_.ifolder.md)









## Methods
<a id="files"></a>

###  Files

► **Files**(): [IFiles](_definitions_file_files_.ifiles.md)

► **Files**(url: *`string`*): [IFile](_definitions_file_file_.ifile.md)




*Defined in [definitions/file/folder.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L83)*



Gets the files contained in the folder.




**Returns:** [IFiles](_definitions_file_files_.ifiles.md)




*Defined in [definitions/file/folder.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L89)*



Gets the file contained in the folder.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  The url of the file within the current folder. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)





___

<a id="folders"></a>

###  Folders

► **Folders**(): [IFolders](_definitions_file_folders_.ifolders.md)

► **Folders**(url: *`string`*): [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)




*Defined in [definitions/file/folder.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L94)*



Gets the folders contained in the list folder.




**Returns:** [IFolders](_definitions_file_folders_.ifolders.md)




*Defined in [definitions/file/folder.ts:100](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L100)*



Gets the folder contained in the list folder.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  The url of the sub-folder within the current folder. |





**Returns:** [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)





___

<a id="listitemallfields"></a>

###  ListItemAllFields

► **ListItemAllFields**(): [IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md)




*Defined in [definitions/file/folder.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L105)*



Specifies the list item field (2) values for the list item corresponding to the file.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md)





___

<a id="parentfolder"></a>

###  ParentFolder

► **ParentFolder**(): [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)




*Defined in [definitions/file/folder.ts:110](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L110)*



Gets the parent list folder of the folder.




**Returns:** [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)





___

<a id="properties"></a>

###  Properties

► **Properties**(): [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)




*Defined in [definitions/file/folder.ts:115](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L115)*



Property Bag




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)





___

<a id="storagemetrics"></a>

###  StorageMetrics

► **StorageMetrics**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/folder.ts:117](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L117)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


