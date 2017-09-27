[gd-sprest](../README.md) > ["definitions/file/file"](../modules/_definitions_file_file_.md) > [IFileQueryResult](../interfaces/_definitions_file_file_.ifilequeryresult.md)



# Interface: IFileQueryResult


File Query Result

## Hierarchy


 [IFileMethods](_definitions_file_file_.ifilemethods.md)




 [IFileProps](_definitions_file_file_.ifileprops.md)

**↳ IFileQueryResult**








## Properties
<a id="author"></a>

###  Author

**●  Author**:  *[IUserResult](_definitions_user_user_.iuserresult.md)* 

*Defined in [definitions/file/file.ts:266](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L266)*



Gets a value that specifies the user who added the file.




___

<a id="checkincomment"></a>

###  CheckInComment

**●  CheckInComment**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[CheckInComment](_definitions_file_file_.ifileprops.md#checkincomment)*

*Defined in [definitions/file/file.ts:152](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L152)*



Gets a value that returns the comment used when a document is checked in to a document library.




___

<a id="checkouttype"></a>

###  CheckOutType

**●  CheckOutType**:  *`SPTypes.CheckOutType`⎮`number`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[CheckOutType](_definitions_file_file_.ifileprops.md#checkouttype)*

*Defined in [definitions/file/file.ts:155](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L155)*



Gets a value that indicates how the file is checked out of a document library. Represents an SP.CheckOutType value: . The checkout state of a file is independent of its locked state.




___

<a id="checkedoutbyuser"></a>

###  CheckedOutByUser

**●  CheckedOutByUser**:  *[IUserResult](_definitions_user_user_.iuserresult.md)* 

*Defined in [definitions/file/file.ts:271](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L271)*



Gets a value that returns the user who has checked out the file.




___

<a id="contenttag"></a>

###  ContentTag

**●  ContentTag**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[ContentTag](_definitions_file_file_.ifileprops.md#contenttag)*

*Defined in [definitions/file/file.ts:158](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L158)*



Returns internal version of content, used to validate document equality for read purposes.




___

<a id="customizedpagestatus"></a>

###  CustomizedPageStatus

**●  CustomizedPageStatus**:  *`number`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[CustomizedPageStatus](_definitions_file_file_.ifileprops.md#customizedpagestatus)*

*Defined in [definitions/file/file.ts:161](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L161)*



Gets a value that specifies the customization status of the file. Represents an SP.CustomizedPageStatus value: None = 0; Uncustomized = 1; Customized = 2.




___

<a id="etag"></a>

###  ETag

**●  ETag**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[ETag](_definitions_file_file_.ifileprops.md#etag)*

*Defined in [definitions/file/file.ts:164](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L164)*



Gets a value that specifies the ETag value.




___

<a id="effectiveinformationrightsmanagementsettings"></a>

###  EffectiveInformationRightsManagementSettings

**●  EffectiveInformationRightsManagementSettings**:  *[IBase](_definitions_lib_base_.ibase.md)* 

*Defined in [definitions/file/file.ts:273](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L273)*





___

<a id="exists"></a>

###  Exists

**●  Exists**:  *`boolean`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[Exists](_definitions_file_file_.ifileprops.md#exists)*

*Defined in [definitions/file/file.ts:167](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L167)*



Gets a value that specifies whether the file exists.




___

<a id="informationrightsmanagementsettings"></a>

###  InformationRightsManagementSettings

**●  InformationRightsManagementSettings**:  *[IInformationRightsManagementSettings](_definitions_lib_types_.iinformationrightsmanagementsettings.md)* 

*Defined in [definitions/file/file.ts:275](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L275)*





___

<a id="length"></a>

###  Length

**●  Length**:  *`number`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[Length](_definitions_file_file_.ifileprops.md#length)*

*Defined in [definitions/file/file.ts:170](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L170)*



Gets the size of the file in bytes, excluding the size of any Web Parts that are used in the file.




___

<a id="level"></a>

###  Level

**●  Level**:  *`number`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[Level](_definitions_file_file_.ifileprops.md#level)*

*Defined in [definitions/file/file.ts:173](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L173)*



Gets a value that specifies the publishing level of the file. Represents an SP.FileLevel value: Published = 1; Draft = 2; Checkout = 255.




___

<a id="linkingurl"></a>

###  LinkingUrl

**●  LinkingUrl**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[LinkingUrl](_definitions_file_file_.ifileprops.md#linkingurl)*

*Defined in [definitions/file/file.ts:175](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L175)*





___

<a id="listitemallfields"></a>

###  ListItemAllFields

**●  ListItemAllFields**:  *[IListItemResult](_definitions_list_item_.ilistitemresult.md)* 

*Defined in [definitions/file/file.ts:280](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L280)*



Gets a value that specifies the list item field values for the list item corresponding to the file.




___

<a id="lockedbyuser"></a>

###  LockedByUser

**●  LockedByUser**:  *[IUserResult](_definitions_user_user_.iuserresult.md)* 

*Defined in [definitions/file/file.ts:285](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L285)*



Gets a value that returns the user that owns the current lock on the file.




___

<a id="majorversion"></a>

###  MajorVersion

**●  MajorVersion**:  *`number`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[MajorVersion](_definitions_file_file_.ifileprops.md#majorversion)*

*Defined in [definitions/file/file.ts:178](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L178)*



Gets a value that specifies the major version of the file.




___

<a id="minorversion"></a>

###  MinorVersion

**●  MinorVersion**:  *`number`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[MinorVersion](_definitions_file_file_.ifileprops.md#minorversion)*

*Defined in [definitions/file/file.ts:181](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L181)*



Gets a value that specifies the minor version of the file.




___

<a id="modifiedby"></a>

###  ModifiedBy

**●  ModifiedBy**:  *[IUserResult](_definitions_user_user_.iuserresult.md)* 

*Defined in [definitions/file/file.ts:290](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L290)*



Gets a value that returns the user who last modified the file.




___

<a id="name"></a>

###  Name

**●  Name**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[Name](_definitions_file_file_.ifileprops.md#name)*

*Defined in [definitions/file/file.ts:184](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L184)*



Gets the name of the file including the extension.




___

<a id="properties"></a>

###  Properties

**●  Properties**:  *[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)* 

*Defined in [definitions/file/file.ts:295](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L295)*



Property Bag




___

<a id="serverrelativepath"></a>

###  ServerRelativePath

**●  ServerRelativePath**:  *[IResourcePath](_definitions_lib_types_.iresourcepath.md)* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[ServerRelativePath](_definitions_file_file_.ifileprops.md#serverrelativepath)*

*Defined in [definitions/file/file.ts:186](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L186)*





___

<a id="serverrelativeurl"></a>

###  ServerRelativeUrl

**●  ServerRelativeUrl**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[ServerRelativeUrl](_definitions_file_file_.ifileprops.md#serverrelativeurl)*

*Defined in [definitions/file/file.ts:189](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L189)*



Gets the relative URL of the file based on the URL for the server.




___

<a id="siteid"></a>

###  SiteId

**●  SiteId**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[SiteId](_definitions_file_file_.ifileprops.md#siteid)*

*Defined in [definitions/file/file.ts:191](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L191)*





___

<a id="timecreated"></a>

###  TimeCreated

**●  TimeCreated**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[TimeCreated](_definitions_file_file_.ifileprops.md#timecreated)*

*Defined in [definitions/file/file.ts:194](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L194)*



Gets a value that specifies when the file was created.




___

<a id="timelastmodified"></a>

###  TimeLastModified

**●  TimeLastModified**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[TimeLastModified](_definitions_file_file_.ifileprops.md#timelastmodified)*

*Defined in [definitions/file/file.ts:197](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L197)*



Gets a value that specifies when the file was last modified.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[Title](_definitions_file_file_.ifileprops.md#title)*

*Defined in [definitions/file/file.ts:200](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L200)*



Gets a value that specifies the display name of the file.




___

<a id="uiversion"></a>

###  UiVersion

**●  UiVersion**:  *`number`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[UiVersion](_definitions_file_file_.ifileprops.md#uiversion)*

*Defined in [definitions/file/file.ts:203](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L203)*



Gets a value that specifies the implementation-specific version identifier of the file.




___

<a id="uiversionlabel"></a>

###  UiVersionLabel

**●  UiVersionLabel**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[UiVersionLabel](_definitions_file_file_.ifileprops.md#uiversionlabel)*

*Defined in [definitions/file/file.ts:206](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L206)*



Gets a value that specifies the implementation-specific version identifier of the file.




___

<a id="uniqueid"></a>

###  UniqueId

**●  UniqueId**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[UniqueId](_definitions_file_file_.ifileprops.md#uniqueid)*

*Defined in [definitions/file/file.ts:208](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L208)*





___

<a id="versionevents"></a>

###  VersionEvents

**●  VersionEvents**:  *[IResults](_definitions_lib_types_.iresults.md)`any`* 

*Defined in [definitions/file/file.ts:297](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L297)*





___

<a id="versions"></a>

###  Versions

**●  Versions**:  *[IResults](_definitions_lib_types_.iresults.md)[IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md)* 

*Defined in [definitions/file/file.ts:302](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L302)*



Gets a value that returns a collection of file version objects that represent the versions of the file.




___

<a id="webid"></a>

###  WebId

**●  WebId**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[WebId](_definitions_file_file_.ifileprops.md#webid)*

*Defined in [definitions/file/file.ts:210](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L210)*





___


## Methods
<a id="approve"></a>

###  approve

► **approve**(comment: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[approve](_definitions_file_file_.ifilemethods.md#approve)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[cancelupload](_definitions_file_file_.ifilemethods.md#cancelupload)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[checkin](_definitions_file_file_.ifilemethods.md#checkin)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[checkout](_definitions_file_file_.ifilemethods.md#checkout)*

*Defined in [definitions/file/file.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L41)*



Checks out the file from a document library based on the check-out type.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="content"></a>

###  content

► **content**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[content](_definitions_file_file_.ifilemethods.md#content)*

*Defined in [definitions/file/file.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L46)*



Returns the file content.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="continueupload"></a>

###  continueUpload

► **continueUpload**(uploadId: *`any`*, fileOffset: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[continueUpload](_definitions_file_file_.ifilemethods.md#continueupload)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[copyTo](_definitions_file_file_.ifilemethods.md#copyto)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[delete](_definitions_file_file_.ifilemethods.md#delete)*

*Defined in [definitions/file/file.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L67)*



Deletes the File.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="deny"></a>

###  deny

► **deny**(comment: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[deny](_definitions_file_file_.ifilemethods.md#deny)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[finishUpload](_definitions_file_file_.ifilemethods.md#finishupload)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[getlimitedwebpartmanager](_definitions_file_file_.ifilemethods.md#getlimitedwebpartmanager)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[moveTo](_definitions_file_file_.ifilemethods.md#moveto)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[openBinaryStream](_definitions_file_file_.ifilemethods.md#openbinarystream)*

*Defined in [definitions/file/file.ts:102](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L102)*



Opens the file as a stream.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="publish"></a>

###  publish

► **publish**(comment: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[publish](_definitions_file_file_.ifilemethods.md#publish)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[recycle](_definitions_file_file_.ifilemethods.md#recycle)*

*Defined in [definitions/file/file.ts:113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L113)*



Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="savebinarystream"></a>

###  saveBinaryStream

► **saveBinaryStream**(stream: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[saveBinaryStream](_definitions_file_file_.ifilemethods.md#savebinarystream)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[startUpload](_definitions_file_file_.ifilemethods.md#startupload)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[undoCheckOut](_definitions_file_file_.ifilemethods.md#undocheckout)*

*Defined in [definitions/file/file.ts:132](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L132)*



Reverts an existing checkout for the file.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="unpublish"></a>

###  unpublish

► **unpublish**(comment: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[unpublish](_definitions_file_file_.ifilemethods.md#unpublish)*

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




*Inherited from [IFileMethods](_definitions_file_file_.ifilemethods.md).[update](_definitions_file_file_.ifilemethods.md#update)*

*Defined in [definitions/file/file.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L144)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The file properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


