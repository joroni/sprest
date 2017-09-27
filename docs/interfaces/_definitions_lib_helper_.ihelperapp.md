[gd-sprest](../README.md) > ["definitions/lib/helper"](../modules/_definitions_lib_helper_.md) > [IHelperApp](../interfaces/_definitions_lib_helper_.ihelperapp.md)



# Interface: IHelperApp


App Helper Methods


## Methods
<a id="copyfiletohostweb"></a>

###  copyFileToHostWeb

► **copyFileToHostWeb**(srcFileUrl: *`string`*, dstFolder: *[IFolderResult](_definitions_file_folder_.ifolderresult.md)*, overwriteFl?: *`boolean`*, rootWebFl?: *`boolean`*): [IPromise](_definitions_lib_promise_.ipromise.md)

► **copyFileToHostWeb**(srcFileUrl: *`string`*, dstFolderUrl: *`string`*, overwriteFl?: *`boolean`*, rootWebFl?: *`boolean`*): [IPromise](_definitions_lib_promise_.ipromise.md)




*Defined in [definitions/lib/helper.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L26)*



Method to copy a file from the app web to the host web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| srcFileUrl | `string`   |  The source file url, relative to the app web. |
| dstFolder | [IFolderResult](_definitions_file_folder_.ifolderresult.md)   |  The destination folder. |
| overwriteFl | `boolean`   |  Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default. |
| rootWebFl | `boolean`   |  Flag to target the root web of the site collection, otherwise the host web. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)




*Defined in [definitions/lib/helper.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L35)*



Method to copy a file from the app web to the host web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| srcFileUrl | `string`   |  The source file url, relative to the app web. |
| dstFolderUrl | `string`   |  The destination folder url, relative to the host web. |
| overwriteFl | `boolean`   |  Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default. |
| rootWebFl | `boolean`   |  Flag to target the root web of the site collection, otherwise the host web. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)





___

<a id="copyfilestohostweb"></a>

###  copyFilesToHostWeb

► **copyFilesToHostWeb**(fileUrls: *`Array`.<`string`>*, folderUrls: *`Array`.<`string`>*, overwriteFl?: *`boolean`*, rootWebFl?: *`boolean`*): [IPromise](_definitions_lib_promise_.ipromise.md)




*Defined in [definitions/lib/helper.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L43)*



Method to copy a file from the app web to the host web


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fileUrls | `Array`.<`string`>   |  An array of source file urls, relative to the app web. |
| folderUrls | `Array`.<`string`>   |  An array of destination folder urls, relative to the host web. |
| overwriteFl | `boolean`   |  - |
| rootWebFl | `boolean`   |  Flag to target the root web of the site collection, otherwise the host web. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)





___

<a id="createsubfolders"></a>

###  createSubFolders

► **createSubFolders**(folder: *[IFolderResult](_definitions_file_folder_.ifolderresult.md)*, subFolderUrl: *`string`*): [IPromise](_definitions_lib_promise_.ipromise.md)




*Defined in [definitions/lib/helper.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L50)*



Method to create sub-folders.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| folder | [IFolderResult](_definitions_file_folder_.ifolderresult.md)   |  The app web relative url to the source file. |
| subFolderUrl | `string`   |  The host web relative url of the destination folder. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)





___

<a id="getfolder"></a>

###  getFolder

► **getFolder**(web: *[IWebResult](_definitions_site_web_.iwebresult.md)*, folderUrl: *`string`*, createFl?: *`boolean`*): [IPromise](_definitions_lib_promise_.ipromise.md)




*Defined in [definitions/lib/helper.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L58)*



Method to get the file content.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| web | [IWebResult](_definitions_site_web_.iwebresult.md)   |  The web containing the files. |
| folderUrl | `string`   |  - |
| createFl | `boolean`   |  Flag to create the folder, if it doesn't exist. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)





___

<a id="removeemptyfolders"></a>

###  removeEmptyFolders

► **removeEmptyFolders**(web: *[IWebResult](_definitions_site_web_.iwebresult.md)*, folderUrls: *`Array`.<`string`>*): [IPromise](_definitions_lib_promise_.ipromise.md)




*Defined in [definitions/lib/helper.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L65)*



Method to remove empty folders


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| web | [IWebResult](_definitions_site_web_.iwebresult.md)   |  The web containing the files. |
| folderUrls | `Array`.<`string`>   |  An array of folder urls, relative to the web. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)





___

<a id="removefile"></a>

###  removeFile

► **removeFile**(web: *[IWebResult](_definitions_site_web_.iwebresult.md)*, fileUrl: *`string`*): [IPromise](_definitions_lib_promise_.ipromise.md)




*Defined in [definitions/lib/helper.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L72)*



Method to remove files from a web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| web | [IWebResult](_definitions_site_web_.iwebresult.md)   |  The web containing the files. |
| fileUrl | `string`   |  The file url, relative to the web. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)





___

<a id="removefiles"></a>

###  removeFiles

► **removeFiles**(web: *[IWebResult](_definitions_site_web_.iwebresult.md)*, fileUrls: *`Array`.<`string`>*): [IPromise](_definitions_lib_promise_.ipromise.md)




*Defined in [definitions/lib/helper.ts:79](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L79)*



Method to remove files from a web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| web | [IWebResult](_definitions_site_web_.iwebresult.md)   |  The web containing the files. |
| fileUrls | `Array`.<`string`>   |  An array of file urls, relative to the web. |





**Returns:** [IPromise](_definitions_lib_promise_.ipromise.md)





___


