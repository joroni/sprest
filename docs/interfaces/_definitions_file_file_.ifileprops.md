[gd-sprest](../README.md) > ["definitions/file/file"](../modules/_definitions_file_file_.md) > [IFileProps](../interfaces/_definitions_file_file_.ifileprops.md)



# Interface: IFileProps


File Properties

## Hierarchy

**IFileProps**

↳  [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)




↳  [IFileResult](_definitions_file_file_.ifileresult.md)









## Properties
<a id="checkincomment"></a>

###  CheckInComment

**●  CheckInComment**:  *`string`* 

*Defined in [definitions/file/file.ts:152](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L152)*



Gets a value that returns the comment used when a document is checked in to a document library.




___

<a id="checkouttype"></a>

###  CheckOutType

**●  CheckOutType**:  *`SPTypes.CheckOutType`⎮`number`* 

*Defined in [definitions/file/file.ts:155](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L155)*



Gets a value that indicates how the file is checked out of a document library. Represents an SP.CheckOutType value: . The checkout state of a file is independent of its locked state.




___

<a id="contenttag"></a>

###  ContentTag

**●  ContentTag**:  *`string`* 

*Defined in [definitions/file/file.ts:158](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L158)*



Returns internal version of content, used to validate document equality for read purposes.




___

<a id="customizedpagestatus"></a>

###  CustomizedPageStatus

**●  CustomizedPageStatus**:  *`number`* 

*Defined in [definitions/file/file.ts:161](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L161)*



Gets a value that specifies the customization status of the file. Represents an SP.CustomizedPageStatus value: None = 0; Uncustomized = 1; Customized = 2.




___

<a id="etag"></a>

###  ETag

**●  ETag**:  *`string`* 

*Defined in [definitions/file/file.ts:164](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L164)*



Gets a value that specifies the ETag value.




___

<a id="exists"></a>

###  Exists

**●  Exists**:  *`boolean`* 

*Defined in [definitions/file/file.ts:167](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L167)*



Gets a value that specifies whether the file exists.




___

<a id="length"></a>

###  Length

**●  Length**:  *`number`* 

*Defined in [definitions/file/file.ts:170](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L170)*



Gets the size of the file in bytes, excluding the size of any Web Parts that are used in the file.




___

<a id="level"></a>

###  Level

**●  Level**:  *`number`* 

*Defined in [definitions/file/file.ts:173](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L173)*



Gets a value that specifies the publishing level of the file. Represents an SP.FileLevel value: Published = 1; Draft = 2; Checkout = 255.




___

<a id="linkingurl"></a>

###  LinkingUrl

**●  LinkingUrl**:  *`string`* 

*Defined in [definitions/file/file.ts:175](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L175)*





___

<a id="majorversion"></a>

###  MajorVersion

**●  MajorVersion**:  *`number`* 

*Defined in [definitions/file/file.ts:178](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L178)*



Gets a value that specifies the major version of the file.




___

<a id="minorversion"></a>

###  MinorVersion

**●  MinorVersion**:  *`number`* 

*Defined in [definitions/file/file.ts:181](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L181)*



Gets a value that specifies the minor version of the file.




___

<a id="name"></a>

###  Name

**●  Name**:  *`string`* 

*Defined in [definitions/file/file.ts:184](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L184)*



Gets the name of the file including the extension.




___

<a id="serverrelativepath"></a>

###  ServerRelativePath

**●  ServerRelativePath**:  *[IResourcePath](_definitions_lib_types_.iresourcepath.md)* 

*Defined in [definitions/file/file.ts:186](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L186)*





___

<a id="serverrelativeurl"></a>

###  ServerRelativeUrl

**●  ServerRelativeUrl**:  *`string`* 

*Defined in [definitions/file/file.ts:189](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L189)*



Gets the relative URL of the file based on the URL for the server.




___

<a id="siteid"></a>

###  SiteId

**●  SiteId**:  *`string`* 

*Defined in [definitions/file/file.ts:191](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L191)*





___

<a id="timecreated"></a>

###  TimeCreated

**●  TimeCreated**:  *`string`* 

*Defined in [definitions/file/file.ts:194](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L194)*



Gets a value that specifies when the file was created.




___

<a id="timelastmodified"></a>

###  TimeLastModified

**●  TimeLastModified**:  *`string`* 

*Defined in [definitions/file/file.ts:197](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L197)*



Gets a value that specifies when the file was last modified.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Defined in [definitions/file/file.ts:200](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L200)*



Gets a value that specifies the display name of the file.




___

<a id="uiversion"></a>

###  UiVersion

**●  UiVersion**:  *`number`* 

*Defined in [definitions/file/file.ts:203](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L203)*



Gets a value that specifies the implementation-specific version identifier of the file.




___

<a id="uiversionlabel"></a>

###  UiVersionLabel

**●  UiVersionLabel**:  *`string`* 

*Defined in [definitions/file/file.ts:206](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L206)*



Gets a value that specifies the implementation-specific version identifier of the file.




___

<a id="uniqueid"></a>

###  UniqueId

**●  UniqueId**:  *`string`* 

*Defined in [definitions/file/file.ts:208](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L208)*





___

<a id="webid"></a>

###  WebId

**●  WebId**:  *`string`* 

*Defined in [definitions/file/file.ts:210](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L210)*





___


