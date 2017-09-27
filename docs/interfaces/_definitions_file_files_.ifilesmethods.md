[gd-sprest](../README.md) > ["definitions/file/files"](../modules/_definitions_file_files_.md) > [IFilesMethods](../interfaces/_definitions_file_files_.ifilesmethods.md)



# Interface: IFilesMethods


Methods

## Hierarchy

**IFilesMethods**

↳  [IFiles](_definitions_file_files_.ifiles.md)




↳  [IFileResults](_definitions_file_files_.ifileresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(overwrite: *`any`*, url: *`any`*, content: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md)




*Defined in [definitions/file/files.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/files.ts#L21)*



Adds a file to this collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| overwrite | `any`   |  true to overwrite the file if it already exists; otherwise false. |
| url | `any`   |  The folder-relative URL of the file. |
| content | `any`   |  The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md)





___

<a id="addtemplatefile"></a>

###  addTemplateFile

► **addTemplateFile**(urlOfFile: *`any`*, templateFileType: *`SPTypes.FileTemplateType`*): [IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md)




*Defined in [definitions/file/files.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/files.ts#L28)*



Adds a ghosted file to an existing list or document library.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| urlOfFile | `any`   |  The server-relative URL where you want to save the file. |
| templateFileType | `SPTypes.FileTemplateType`   |  The SP.TemplateFileType to use to create the file. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md)





___

<a id="getbyurl"></a>

###  getByUrl

► **getByUrl**(serverRelativeUrl: *`any`*): [IFile](_definitions_file_file_.ifile.md)[IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)




*Defined in [definitions/file/files.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/files.ts#L34)*



Get the file at the specified URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| serverRelativeUrl | `any`   |  The name or server relative url of the file. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)[IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IFiles](_definitions_file_files_.ifiles.md)




*Defined in [definitions/file/files.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/files.ts#L39)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFiles](_definitions_file_files_.ifiles.md)





___


