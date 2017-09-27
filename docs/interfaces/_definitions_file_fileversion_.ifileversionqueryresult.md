[gd-sprest](../README.md) > ["definitions/file/fileVersion"](../modules/_definitions_file_fileversion_.md) > [IFileVersionQueryResult](../interfaces/_definitions_file_fileversion_.ifileversionqueryresult.md)



# Interface: IFileVersionQueryResult


File Version Query Result

## Hierarchy


 [IFileVersionMethods](_definitions_file_fileversion_.ifileversionmethods.md)




 [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md)

**↳ IFileVersionQueryResult**








## Properties
<a id="checkincomment"></a>

###  CheckInComment

**●  CheckInComment**:  *`string`* 

*Inherited from [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md).[CheckInComment](_definitions_file_fileversion_.ifileversionprops.md#checkincomment)*

*Defined in [definitions/file/fileVersion.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L21)*



Gets a value that specifies the check-in comment.




___

<a id="created"></a>

###  Created

**●  Created**:  *`string`* 

*Inherited from [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md).[Created](_definitions_file_fileversion_.ifileversionprops.md#created)*

*Defined in [definitions/file/fileVersion.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L24)*



Gets a value that specifies the creation date and time for the file version.




___

<a id="createdby"></a>

###  CreatedBy

**●  CreatedBy**:  *[IUserResult](_definitions_user_user_.iuserresult.md)* 

*Defined in [definitions/file/fileVersion.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L59)*



A value that specifies the user that represents the creator of the file version.




___

<a id="id"></a>

###  ID

**●  ID**:  *`number`* 

*Inherited from [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md).[ID](_definitions_file_fileversion_.ifileversionprops.md#id)*

*Defined in [definitions/file/fileVersion.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L27)*



Gets the internal identifier for the file version.




___

<a id="iscurrentversion"></a>

###  IsCurrentVersion

**●  IsCurrentVersion**:  *`string`* 

*Inherited from [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md).[IsCurrentVersion](_definitions_file_fileversion_.ifileversionprops.md#iscurrentversion)*

*Defined in [definitions/file/fileVersion.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L30)*



Gets a value that specifies whether the file version is the current version.




___

<a id="size"></a>

###  Size

**●  Size**:  *`number`* 

*Inherited from [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md).[Size](_definitions_file_fileversion_.ifileversionprops.md#size)*

*Defined in [definitions/file/fileVersion.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L33)*





___

<a id="url"></a>

###  Url

**●  Url**:  *`string`* 

*Inherited from [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md).[Url](_definitions_file_fileversion_.ifileversionprops.md#url)*

*Defined in [definitions/file/fileVersion.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L36)*



Gets a value that specifies the relative URL of the file version based on the URL for the site or subsite.




___

<a id="versionlabel"></a>

###  VersionLabel

**●  VersionLabel**:  *`string`* 

*Inherited from [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md).[VersionLabel](_definitions_file_fileversion_.ifileversionprops.md#versionlabel)*

*Defined in [definitions/file/fileVersion.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L39)*



Gets a value that specifies the implementation specific identifier of the file. Uses the majorVersionNumber.minorVersionNumber format, for example: 1.2.




___


## Methods
<a id="delete"></a>

###  delete

► **delete**(): `any`




*Inherited from [IFileVersionMethods](_definitions_file_fileversion_.ifileversionmethods.md).[delete](_definitions_file_fileversion_.ifileversionmethods.md#delete)*

*Defined in [definitions/file/fileVersion.ts:13](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L13)*



Deletes the file version.




**Returns:** `any`





___


