[gd-sprest](../README.md) > ["definitions/lib/base"](../modules/_definitions_lib_base_.md) > [IBaseCollection](../interfaces/_definitions_lib_base_.ibasecollection.md)



# Interface: IBaseCollection


Base Collection

## Type parameters
#### Type 
#### Result 
#### QueryResult 
## Hierarchy


 [IResults](_definitions_lib_types_.iresults.md)`Type`




 [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)`Result`, [IResults](_definitions_lib_types_.iresults.md)`Result`, [IResults](_definitions_lib_types_.iresults.md)`QueryResult`

**↳ IBaseCollection**

↳  [IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)




↳  [IContentTypeResults](_definitions_contenttype_contenttypes_.icontenttyperesults.md)




↳  [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)




↳  [IUserCustomActionResults](_definitions_customaction_usercustomactions_.iusercustomactionresults.md)




↳  [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)




↳  [IEventReceiverResults](_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)




↳  [IFieldLinks](_definitions_field_fieldlinks_.ifieldlinks.md)




↳  [IFields](_definitions_field_fields_.ifields.md)




↳  [IFieldResults](_definitions_field_fields_.ifieldresults.md)




↳  [IFiles](_definitions_file_files_.ifiles.md)




↳  [IFileResults](_definitions_file_files_.ifileresults.md)




↳  [IFileVersions](_definitions_file_fileversions_.ifileversions.md)




↳  [IFolders](_definitions_file_folders_.ifolders.md)




↳  [IFolderResults](_definitions_file_folders_.ifolderresults.md)




↳  [IAttachmentFiles](_definitions_list_attachments_.iattachmentfiles.md)




↳  [IListItems](_definitions_list_items_.ilistitems.md)




↳  [IListItemResults](_definitions_list_items_.ilistitemresults.md)




↳  [ILists](_definitions_list_lists_.ilists.md)




↳  [IListResults](_definitions_list_lists_.ilistresults.md)




↳  [IVersions](_definitions_list_versions_.iversions.md)




↳  [IViews](_definitions_list_views_.iviews.md)




↳  [IViewResults](_definitions_list_views_.iviewresults.md)




↳  [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)




↳  [IRoleAssignmentResults](_definitions_security_roleassignments_.iroleassignmentresults.md)




↳  [IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md)




↳  [IRoleDefinitionResults](_definitions_security_roledefinitions_.iroledefinitionresults.md)




↳  [IWebs](_definitions_site_webs_.iwebs.md)




↳  [IWebResults](_definitions_site_webs_.iwebresults.md)




↳  [ISiteGroups](_definitions_user_groups_.isitegroups.md)




↳  [ISiteGroupResults](_definitions_user_groups_.isitegroupresults.md)




↳  [IUsers](_definitions_user_users_.iusers.md)




↳  [IUserResults](_definitions_user_users_.iuserresults.md)











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

**●  results**:  *`Array`.<`Type`>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
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

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)`Result`

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)`Result`

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)`Result`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)`Result`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)`Result`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)`Result`





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)`Result`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)`Result`





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

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)`Result`, [IResults](_definitions_lib_types_.iresults.md)`QueryResult`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)`Result`, [IResults](_definitions_lib_types_.iresults.md)`QueryResult`





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)`Result`>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)`Result`>





___


