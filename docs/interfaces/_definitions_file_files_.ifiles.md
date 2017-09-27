[gd-sprest](../README.md) > ["definitions/file/files"](../modules/_definitions_file_files_.md) > [IFiles](../interfaces/_definitions_file_files_.ifiles.md)



# Interface: IFiles


Files

## Hierarchy


 [IFilesMethods](_definitions_file_files_.ifilesmethods.md)




↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)

**↳ IFiles**








## Properties
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

<a id="results"></a>

###  results

**●  results**:  *`Array`.<[IFile](_definitions_file_file_.ifile.md)>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
<a id="add"></a>

###  add

► **add**(overwrite: *`any`*, url: *`any`*, content: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md)




*Inherited from [IFilesMethods](_definitions_file_files_.ifilesmethods.md).[add](_definitions_file_files_.ifilesmethods.md#add)*

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




*Inherited from [IFilesMethods](_definitions_file_files_.ifilesmethods.md).[addTemplateFile](_definitions_file_files_.ifilesmethods.md#addtemplatefile)*

*Defined in [definitions/file/files.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/files.ts#L28)*



Adds a ghosted file to an existing list or document library.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| urlOfFile | `any`   |  The server-relative URL where you want to save the file. |
| templateFileType | `SPTypes.FileTemplateType`   |  The SP.TemplateFileType to use to create the file. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md)





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

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)





___

<a id="getbyurl"></a>

###  getByUrl

► **getByUrl**(serverRelativeUrl: *`any`*): [IFile](_definitions_file_file_.ifile.md)[IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)




*Inherited from [IFilesMethods](_definitions_file_files_.ifilesmethods.md).[getByUrl](_definitions_file_files_.ifilesmethods.md#getbyurl)*

*Defined in [definitions/file/files.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/files.ts#L34)*



Get the file at the specified URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| serverRelativeUrl | `any`   |  The name or server relative url of the file. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)[IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IFiles](_definitions_file_files_.ifiles.md)




*Inherited from [IFilesMethods](_definitions_file_files_.ifilesmethods.md).[next](_definitions_file_files_.ifilesmethods.md#next)*

*Defined in [definitions/file/files.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/files.ts#L39)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFiles](_definitions_file_files_.ifiles.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md), [IResults](_definitions_lib_types_.iresults.md)[IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md), [IResults](_definitions_lib_types_.iresults.md)[IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IFileResult](_definitions_file_file_.ifileresult.md)>





___


