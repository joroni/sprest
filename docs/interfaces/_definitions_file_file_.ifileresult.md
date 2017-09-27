[gd-sprest](../README.md) > ["definitions/file/file"](../modules/_definitions_file_file_.md) > [IFileResult](../interfaces/_definitions_file_file_.ifileresult.md)



# Interface: IFileResult


File Result

## Hierarchy


 [IFileMethods](_definitions_file_file_.ifilemethods.md)




 [IFileProps](_definitions_file_file_.ifileprops.md)




 [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)

**↳ IFileResult**








## Properties
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

<a id="exists"></a>

###  Exists

**●  Exists**:  *`boolean`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[Exists](_definitions_file_file_.ifileprops.md#exists)*

*Defined in [definitions/file/file.ts:167](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L167)*



Gets a value that specifies whether the file exists.




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

<a id="name"></a>

###  Name

**●  Name**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[Name](_definitions_file_file_.ifileprops.md#name)*

*Defined in [definitions/file/file.ts:184](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L184)*



Gets the name of the file including the extension.




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

<a id="webid"></a>

###  WebId

**●  WebId**:  *`string`* 

*Inherited from [IFileProps](_definitions_file_file_.ifileprops.md).[WebId](_definitions_file_file_.ifileprops.md#webid)*

*Defined in [definitions/file/file.ts:210](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L210)*





___

<a id="existsfl"></a>

###  existsFl

**●  existsFl**:  *`boolean`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[existsFl](_definitions_lib_base_.ibase.md#existsfl)*

*Defined in [definitions/lib/base.ts:12](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L12)*



True, if the object exists, false otherwise.




___

<a id="parent"></a>

###  parent

**●  parent**:  *`any`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[parent](_definitions_lib_base_.ibase.md#parent)*

*Defined in [definitions/lib/base.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L15)*



The parent object, which created this object.




___

<a id="requesttype"></a>

###  requestType

**●  requestType**:  *[IRequestType](../modules/_definitions_lib_requesttype_.md#irequesttype)* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[requestType](_definitions_lib_base_.ibase.md#requesttype)*

*Defined in [definitions/lib/base.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L21)*



The request type




___

<a id="response"></a>

###  response

**●  response**:  *`string`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[response](_definitions_lib_base_.ibase.md#response)*

*Defined in [definitions/lib/base.ts:18](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L18)*



The response




___


## Methods
<a id="author"></a>

###  Author

► **Author**(): [IUser](_definitions_user_user_.iuser.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[Author](_definitions_file_file_.ifilequeryprops.md#author)*

*Defined in [definitions/file/file.ts:220](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L220)*



Gets a value that specifies the user who added the file.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="checkedoutbyuser"></a>

###  CheckedOutByUser

► **CheckedOutByUser**(): [IUser](_definitions_user_user_.iuser.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[CheckedOutByUser](_definitions_file_file_.ifilequeryprops.md#checkedoutbyuser)*

*Defined in [definitions/file/file.ts:225](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L225)*



Gets a value that returns the user who has checked out the file.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="effectiveinformationrightsmanagementsettings"></a>

###  EffectiveInformationRightsManagementSettings

► **EffectiveInformationRightsManagementSettings**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[EffectiveInformationRightsManagementSettings](_definitions_file_file_.ifilequeryprops.md#effectiveinformationrightsmanagementsettings)*

*Defined in [definitions/file/file.ts:227](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L227)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="informationrightsmanagementsettings"></a>

###  InformationRightsManagementSettings

► **InformationRightsManagementSettings**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[InformationRightsManagementSettings](_definitions_file_file_.ifilequeryprops.md#informationrightsmanagementsettings)*

*Defined in [definitions/file/file.ts:229](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L229)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="listitemallfields"></a>

###  ListItemAllFields

► **ListItemAllFields**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[ListItemAllFields](_definitions_file_file_.ifilequeryprops.md#listitemallfields)*

*Defined in [definitions/file/file.ts:234](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L234)*



Gets a value that specifies the list item field values for the list item corresponding to the file.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="lockedbyuser"></a>

###  LockedByUser

► **LockedByUser**(): [IUser](_definitions_user_user_.iuser.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[LockedByUser](_definitions_file_file_.ifilequeryprops.md#lockedbyuser)*

*Defined in [definitions/file/file.ts:239](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L239)*



Gets a value that returns the user that owns the current lock on the file.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="modifiedby"></a>

###  ModifiedBy

► **ModifiedBy**(): [IUser](_definitions_user_user_.iuser.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[ModifiedBy](_definitions_file_file_.ifilequeryprops.md#modifiedby)*

*Defined in [definitions/file/file.ts:244](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L244)*



Gets a value that returns the user who last modified the file.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="properties"></a>

###  Properties

► **Properties**(): [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[Properties](_definitions_file_file_.ifilequeryprops.md#properties)*

*Defined in [definitions/file/file.ts:249](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L249)*



Property Bag




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)





___

<a id="versionevents"></a>

###  VersionEvents

► **VersionEvents**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[VersionEvents](_definitions_file_file_.ifilequeryprops.md#versionevents)*

*Defined in [definitions/file/file.ts:251](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L251)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="versions"></a>

###  Versions

► **Versions**(): [IBase](_definitions_lib_base_.ibase.md)[IFileVersions](_definitions_file_fileversions_.ifileversions.md)




*Inherited from [IFileQueryProps](_definitions_file_file_.ifilequeryprops.md).[Versions](_definitions_file_file_.ifilequeryprops.md#versions)*

*Defined in [definitions/file/file.ts:256](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L256)*



Gets a value that returns a collection of file version objects that represent the versions of the file.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFileVersions](_definitions_file_fileversions_.ifileversions.md)





___

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

<a id="done"></a>

###  done

► **done**(callback?: *function*): `any`

► **done**(callback?: *function*): `any`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[done](_definitions_lib_base_.ibase.md#done)*

*Defined in [definitions/lib/base.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L27)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[done](_definitions_lib_base_.ibase.md#done)*

*Defined in [definitions/lib/base.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L33)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`





___

<a id="execute"></a>

###  execute

► **execute**(callback?: *function*): [IFile](_definitions_file_file_.ifile.md)

► **execute**(waitFl: *`boolean`*): [IFile](_definitions_file_file_.ifile.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IFile](_definitions_file_file_.ifile.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IFileResult](_definitions_file_file_.ifileresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IFileResult](_definitions_file_file_.ifileresult.md)





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

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





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

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)





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

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IFileResult](_definitions_file_file_.ifileresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IFileResult](_definitions_file_file_.ifileresult.md)>





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


