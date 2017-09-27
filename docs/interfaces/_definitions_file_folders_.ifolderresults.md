[gd-sprest](../README.md) > ["definitions/file/folders"](../modules/_definitions_file_folders_.md) > [IFolderResults](../interfaces/_definitions_file_folders_.ifolderresults.md)



# Interface: IFolderResults


Folder Results

## Hierarchy


 [IFoldersMethods](_definitions_file_folders_.ifoldersmethods.md)




↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)

**↳ IFolderResults**








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

**●  results**:  *`Array`.<[IFolderResult](_definitions_file_folder_.ifolderresult.md)>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
<a id="add"></a>

###  add

► **add**(url: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md)




*Inherited from [IFoldersMethods](_definitions_file_folders_.ifoldersmethods.md).[add](_definitions_file_folders_.ifoldersmethods.md#add)*

*Defined in [definitions/file/folders.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folders.ts#L14)*



Adds the folder that is located at the specified URL to the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `any`   |  The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md)





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

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="getbyurl"></a>

###  getbyurl

► **getbyurl**(serverRelativeUrl: *`any`*): [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




*Inherited from [IFoldersMethods](_definitions_file_folders_.ifoldersmethods.md).[getbyurl](_definitions_file_folders_.ifoldersmethods.md#getbyurl)*

*Defined in [definitions/file/folders.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folders.ts#L20)*



Get the file at the specified URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| serverRelativeUrl | `any`   |  The server-relative URL of the folder. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IFolders](_definitions_file_folders_.ifolders.md), [IFolderResults](_definitions_file_folders_.ifolderresults.md)




*Inherited from [IFoldersMethods](_definitions_file_folders_.ifoldersmethods.md).[next](_definitions_file_folders_.ifoldersmethods.md#next)*

*Defined in [definitions/file/folders.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folders.ts#L25)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFolders](_definitions_file_folders_.ifolders.md), [IFolderResults](_definitions_file_folders_.ifolderresults.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md), [IResults](_definitions_lib_types_.iresults.md)[IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md), [IResults](_definitions_lib_types_.iresults.md)[IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md)>





___


