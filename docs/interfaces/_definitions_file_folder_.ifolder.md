[gd-sprest](../README.md) > ["definitions/file/folder"](../modules/_definitions_file_folder_.md) > [IFolder](../interfaces/_definitions_file_folder_.ifolder.md)



# Interface: IFolder


Folder

## Hierarchy


 [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)




 [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)

**↳ IFolder**








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


## Methods
<a id="files"></a>

###  Files

► **Files**(): [IFiles](_definitions_file_files_.ifiles.md)

► **Files**(url: *`string`*): [IFile](_definitions_file_file_.ifile.md)




*Inherited from [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md).[Files](_definitions_file_folder_.ifolderqueryprops.md#files)*

*Defined in [definitions/file/folder.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L83)*



Gets the files contained in the folder.




**Returns:** [IFiles](_definitions_file_files_.ifiles.md)




*Inherited from [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md).[Files](_definitions_file_folder_.ifolderqueryprops.md#files)*

*Defined in [definitions/file/folder.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L89)*



Gets the file contained in the folder.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  The url of the file within the current folder. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)





___

<a id="folders"></a>

###  Folders

► **Folders**(): [IFolders](_definitions_file_folders_.ifolders.md)

► **Folders**(url: *`string`*): [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)




*Inherited from [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md).[Folders](_definitions_file_folder_.ifolderqueryprops.md#folders)*

*Defined in [definitions/file/folder.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L94)*



Gets the folders contained in the list folder.




**Returns:** [IFolders](_definitions_file_folders_.ifolders.md)




*Inherited from [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md).[Folders](_definitions_file_folder_.ifolderqueryprops.md#folders)*

*Defined in [definitions/file/folder.ts:100](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L100)*



Gets the folder contained in the list folder.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  The url of the sub-folder within the current folder. |





**Returns:** [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)





___

<a id="listitemallfields"></a>

###  ListItemAllFields

► **ListItemAllFields**(): [IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md)




*Inherited from [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md).[ListItemAllFields](_definitions_file_folder_.ifolderqueryprops.md#listitemallfields)*

*Defined in [definitions/file/folder.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L105)*



Specifies the list item field (2) values for the list item corresponding to the file.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md)





___

<a id="parentfolder"></a>

###  ParentFolder

► **ParentFolder**(): [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)




*Inherited from [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md).[ParentFolder](_definitions_file_folder_.ifolderqueryprops.md#parentfolder)*

*Defined in [definitions/file/folder.ts:110](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L110)*



Gets the parent list folder of the folder.




**Returns:** [IFolderMethods](_definitions_file_folder_.ifoldermethods.md)





___

<a id="properties"></a>

###  Properties

► **Properties**(): [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)




*Inherited from [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md).[Properties](_definitions_file_folder_.ifolderqueryprops.md#properties)*

*Defined in [definitions/file/folder.ts:115](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L115)*



Property Bag




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)





___

<a id="storagemetrics"></a>

###  StorageMetrics

► **StorageMetrics**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFolderQueryProps](_definitions_file_folder_.ifolderqueryprops.md).[StorageMetrics](_definitions_file_folder_.ifolderqueryprops.md#storagemetrics)*

*Defined in [definitions/file/folder.ts:117](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L117)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFolderMethods](_definitions_file_folder_.ifoldermethods.md).[delete](_definitions_file_folder_.ifoldermethods.md#delete)*

*Defined in [definitions/file/folder.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L19)*



Deletes the folder.




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

► **execute**(callback?: *function*): [IFolder](_definitions_file_folder_.ifolder.md)

► **execute**(waitFl: *`boolean`*): [IFolder](_definitions_file_folder_.ifolder.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IFolder](_definitions_file_folder_.ifolder.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IFolderResult](_definitions_file_folder_.ifolderresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IFolderResult](_definitions_file_folder_.ifolderresult.md)





___

<a id="getbyurl"></a>

###  getByUrl

► **getByUrl**(serverRelativeUrl: *`any`*): [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




*Inherited from [IFolderMethods](_definitions_file_folder_.ifoldermethods.md).[getByUrl](_definitions_file_folder_.ifoldermethods.md#getbyurl)*

*Defined in [definitions/file/folder.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L25)*



Get the folder at the specified URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| serverRelativeUrl | `any`   |  The server-relative URL of the folder. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)





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

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)





___

<a id="recycle"></a>

###  recycle

► **recycle**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFolderMethods](_definitions_file_folder_.ifoldermethods.md).[recycle](_definitions_file_folder_.ifoldermethods.md#recycle)*

*Defined in [definitions/file/folder.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L30)*



Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IFolderResult](_definitions_file_folder_.ifolderresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IFolderResult](_definitions_file_folder_.ifolderresult.md)>





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFolderMethods](_definitions_file_folder_.ifoldermethods.md).[update](_definitions_file_folder_.ifoldermethods.md#update)*

*Defined in [definitions/file/folder.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/folder.ts#L36)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The file properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


