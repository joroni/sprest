[gd-sprest](../README.md) > ["definitions/file/folder"](../modules/_definitions_file_folder_.md) > [IFolderMethods](../interfaces/_definitions_file_folder_.ifoldermethods.md)



# Interface: IFolderMethods


Folder Methods

## Hierarchy

**IFolderMethods**

↳  [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




↳  [IFolderResult](_definitions_file_folder_.ifolderresult.md)




↳  [IFolder](_definitions_file_folder_.ifolder.md)









## Methods
<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/folder.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L19)*



Deletes the folder.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getbyurl"></a>

###  getByUrl

► **getByUrl**(serverRelativeUrl: *`any`*): [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




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




*Defined in [definitions/file/folder.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L30)*



Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/folder.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L36)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The file properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


