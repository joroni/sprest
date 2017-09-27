[gd-sprest](../README.md) > ["definitions/file/folders"](../modules/_definitions_file_folders_.md) > [IFoldersMethods](../interfaces/_definitions_file_folders_.ifoldersmethods.md)



# Interface: IFoldersMethods


Methods

## Hierarchy

**IFoldersMethods**

↳  [IFolders](_definitions_file_folders_.ifolders.md)




↳  [IFolderResults](_definitions_file_folders_.ifolderresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(url: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md)




*Defined in [definitions/file/folders.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folders.ts#L14)*



Adds the folder that is located at the specified URL to the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `any`   |  The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md)





___

<a id="getbyurl"></a>

###  getbyurl

► **getbyurl**(serverRelativeUrl: *`any`*): [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




*Defined in [definitions/file/folders.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folders.ts#L20)*



Get the file at the specified URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| serverRelativeUrl | `any`   |  The server-relative URL of the folder. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IFolders](_definitions_file_folders_.ifolders.md), [IFolderResults](_definitions_file_folders_.ifolderresults.md)




*Defined in [definitions/file/folders.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folders.ts#L25)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFolders](_definitions_file_folders_.ifolders.md), [IFolderResults](_definitions_file_folders_.ifolderresults.md)





___


