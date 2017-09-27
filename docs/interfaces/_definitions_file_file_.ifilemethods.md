[gd-sprest](../README.md) > ["definitions/file/file"](../modules/_definitions_file_file_.md) > [IFileMethods](../interfaces/_definitions_file_file_.ifilemethods.md)



# Interface: IFileMethods


File Methods

## Hierarchy

**IFileMethods**

↳  [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)




↳  [IFileResult](_definitions_file_file_.ifileresult.md)




↳  [IFile](_definitions_file_file_.ifile.md)









## Methods
<a id="approve"></a>

###  approve

► **approve**(comment: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L21)*



Approves the file submitted for content approval with the specified comment.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| comment | `any`   |  The comment for the approval. It's length must be <= 1023. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="cancelupload"></a>

###  cancelupload

► **cancelupload**(uploadId: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L29)*



Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception. Use the uploadId value that was passed to the StartUpload method that started the upload session. This method is currently available only on Office 365.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| uploadId | `any`   |  The unique id of the upload session. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="checkin"></a>

###  checkin

► **checkin**(comment: *`any`*, checkInType: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L36)*



Checks the file in to a document library based on the check-in type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| comment | `any`   |  The comment for the check-in. Its length must be <= 1023. |
| checkInType | `any`   |  The check-in type: MinorCheckIn - 0; MajorCheckIn - 1; OverwriteCheckIn - 2 |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="checkout"></a>

###  checkout

► **checkout**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L41)*



Checks out the file from a document library based on the check-out type.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="content"></a>

###  content

► **content**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L46)*



Returns the file content.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="continueupload"></a>

###  continueUpload

► **continueUpload**(uploadId: *`any`*, fileOffset: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:55](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L55)*



Continues the chunk upload session with an additional fragment. The current file content is not changed. Use the uploadId value that was passed to the StartUpload method that started the upload session. This method is currently available only on Office 365.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| uploadId | `any`   |  The unique id of the upload session. |
| fileOffset | `any`   |  The size of the offset into the file where the fragment starts. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="copyto"></a>

###  copyTo

► **copyTo**(strNewUrl: *`any`*, bOverWrite: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L62)*



Copies the file to the destination URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| strNewUrl | `any`   |  The absolute URL or server relative URL of the destination file path to copy to. |
| bOverWrite | `any`   |  True to overwrite a file with the same name in the location. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L67)*



Deletes the File.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="deny"></a>

###  deny

► **deny**(comment: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:74](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L74)*



Denies approval for a file that was submitted for content approval. Only documents in lists that are enabled for content approval can be denied.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| comment | `any`   |  The comment for the denial. It's length must be <= 1023. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="finishupload"></a>

###  finishUpload

► **finishUpload**(uploadId: *`any`*, fileOffset: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L83)*



Uploads the last file fragment and commits the file. The current file content is changed when this method completes. Use the uploadId value that was passed to the StartUpload method that started the upload session. This method is currently available only on Office 365.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| uploadId | `any`   |  The unique id of the upload session. |
| fileOffset | `any`   |  The size of the offset into the file where the fragment starts. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getlimitedwebpartmanager"></a>

###  getlimitedwebpartmanager

► **getlimitedwebpartmanager**(scope: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:90](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L90)*



Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view. An exception is thrown if the file is not an ASPX page.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scope | `any`   |  The webpart personalization scope: User - 0; Shared - 1 |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="moveto"></a>

###  moveTo

► **moveTo**(newUrl: *`any`*, flags: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:97](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L97)*



Moves the file to the specified destination URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| newUrl | `any`   |  The absolute url or server relative url of the destination file path to move to. |
| flags | `any`   |  The move operation: Overwrite - 1; AllowBrokenThickets (Move even if supporting files are separated from the file) - 8; |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="openbinarystream"></a>

###  openBinaryStream

► **openBinaryStream**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:102](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L102)*



Opens the file as a stream.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="publish"></a>

###  publish

► **publish**(comment: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L108)*



Submits the file for content approval with the specified comment.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| comment | `any`   |  The comment for the published file. It's length must be <= 1023. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="recycle"></a>

###  recycle

► **recycle**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L113)*



Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="savebinarystream"></a>

###  saveBinaryStream

► **saveBinaryStream**(stream: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L119)*



Saves the file as a stream.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| stream | `any`   |  The binary stream of the file. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="startupload"></a>

###  startUpload

► **startUpload**(uploadId: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L127)*



Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes. The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream. The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| uploadId | `any`   |  The unique id of the upload session. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="undocheckout"></a>

###  undoCheckOut

► **undoCheckOut**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:132](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L132)*



Reverts an existing checkout for the file.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="unpublish"></a>

###  unpublish

► **unpublish**(comment: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:138](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L138)*



Removes the file from content approval or unpublish a major version.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| comment | `any`   |  The comment for the unpublish operation. Its length must be <= 1023. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L144)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The file properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


