[gd-sprest](../README.md) > ["definitions/file/fileVersion"](../modules/_definitions_file_fileversion_.md) > [IFileVersionResult](../interfaces/_definitions_file_fileversion_.ifileversionresult.md)



# Interface: IFileVersionResult


File Version Result

## Hierarchy


 [IFileVersionMethods](_definitions_file_fileversion_.ifileversionmethods.md)




 [IFileVersionProps](_definitions_file_fileversion_.ifileversionprops.md)




 [IFileVersionQueryProps](_definitions_file_fileversion_.ifileversionqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IFileVersion](_definitions_file_fileversion_.ifileversion.md), [IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md), [IFileVersionQueryResult](_definitions_file_fileversion_.ifileversionqueryresult.md)

**↳ IFileVersionResult**








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
<a id="createdby"></a>

###  CreatedBy

► **CreatedBy**(): [IUser](_definitions_user_user_.iuser.md)




*Inherited from [IFileVersionQueryProps](_definitions_file_fileversion_.ifileversionqueryprops.md).[CreatedBy](_definitions_file_fileversion_.ifileversionqueryprops.md#createdby)*

*Defined in [definitions/file/fileVersion.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L49)*



Gets a value that specifies the user that represents the creator of the file version.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="delete"></a>

###  delete

► **delete**(): `any`




*Inherited from [IFileVersionMethods](_definitions_file_fileversion_.ifileversionmethods.md).[delete](_definitions_file_fileversion_.ifileversionmethods.md#delete)*

*Defined in [definitions/file/fileVersion.ts:13](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/fileVersion.ts#L13)*



Deletes the file version.




**Returns:** `any`





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

► **execute**(callback?: *function*): [IFileVersion](_definitions_file_fileversion_.ifileversion.md)

► **execute**(waitFl: *`boolean`*): [IFileVersion](_definitions_file_fileversion_.ifileversion.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IFileVersion](_definitions_file_fileversion_.ifileversion.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IFileVersion](_definitions_file_fileversion_.ifileversion.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IFileVersion](_definitions_file_fileversion_.ifileversion.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IFileVersion](_definitions_file_fileversion_.ifileversion.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md), [IFileVersionQueryResult](_definitions_file_fileversion_.ifileversionqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md), [IFileVersionQueryResult](_definitions_file_fileversion_.ifileversionqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md)>





___

