[gd-sprest](../README.md) > ["definitions/lib/base"](../modules/_definitions_lib_base_.md) > [IBase](../interfaces/_definitions_lib_base_.ibase.md)



# Interface: IBase


The base class

## Type parameters
#### Type 
#### Result 
#### QueryResult 
## Hierarchy

**IBase**

↳  [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)




↳  [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)




↳  [IUserCustomActionResult](_definitions_customaction_usercustomaction_.iusercustomactionresult.md)




↳  [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)




↳  [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)




↳  [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




↳  [IFieldResult](_definitions_field_field_.ifieldresult.md)




↳  [IField](_definitions_field_field_.ifield.md)




↳  [IFileResult](_definitions_file_file_.ifileresult.md)




↳  [IFile](_definitions_file_file_.ifile.md)




↳  [IFileVersionResult](_definitions_file_fileversion_.ifileversionresult.md)




↳  [IFileVersion](_definitions_file_fileversion_.ifileversion.md)




↳  [IFolderResult](_definitions_file_folder_.ifolderresult.md)




↳  [IFolder](_definitions_file_folder_.ifolder.md)




↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)




↳  [ISearch](_definitions_lib_search_.isearch.md)




↳  [IListItemResult](_definitions_list_item_.ilistitemresult.md)




↳  [IListItem](_definitions_list_item_.ilistitem.md)




↳  [IListResult](_definitions_list_list_.ilistresult.md)




↳  [IList](_definitions_list_list_.ilist.md)




↳  [IViewResult](_definitions_list_view_.iviewresult.md)




↳  [IView](_definitions_list_view_.iview.md)




↳  [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)




↳  [IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)




↳  [IRoleAssignmentResult](_definitions_security_roleassignment_.iroleassignmentresult.md)




↳  [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)




↳  [IRoleDefinitionResult](_definitions_security_roledefinition_.iroledefinitionresult.md)




↳  [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)




↳  [ISiteResult](_definitions_site_site_.isiteresult.md)




↳  [ISite](_definitions_site_site_.isite.md)




↳  [IWebResult](_definitions_site_web_.iwebresult.md)




↳  [IWeb](_definitions_site_web_.iweb.md)




↳  [IPeopleManager](_definitions_social_peoplemanager_.ipeoplemanager.md)




↳  [IPersonProperties](_definitions_social_personproperties_.ipersonproperties.md)




↳  [IProfileLoader](_definitions_social_profileloader_.iprofileloader.md)




↳  [ISocialRestActor](_definitions_social_socialfeed_.isocialrestactor.md)




↳  [ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)




↳  [ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




↳  [IUserProfile](_definitions_social_userprofile_.iuserprofile.md)




↳  [IGroupResult](_definitions_user_group_.igroupresult.md)




↳  [IGroup](_definitions_user_group_.igroup.md)




↳  [IPeoplePicker](_definitions_user_peoplepicker_.ipeoplepicker.md)




↳  [IUserResult](_definitions_user_user_.iuserresult.md)




↳  [IUser](_definitions_user_user_.iuser.md)




↳  [ILimitedWebPartManager](_definitions_webpart_limitedwebpartmanager_.ilimitedwebpartmanager.md)









## Properties
<a id="existsfl"></a>

###  existsFl

**●  existsFl**:  *`boolean`* 

*Defined in [definitions/lib/base.ts:12](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L12)*



True, if the object exists, false otherwise.




___

<a id="parent"></a>

###  parent

**●  parent**:  *`any`* 

*Defined in [definitions/lib/base.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L15)*



The parent object, which created this object.




___

<a id="requesttype"></a>

###  requestType

**●  requestType**:  *[IRequestType](../modules/_definitions_lib_requesttype_.md#irequesttype)* 

*Defined in [definitions/lib/base.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L21)*



The request type




___

<a id="response"></a>

###  response

**●  response**:  *`string`* 

*Defined in [definitions/lib/base.ts:18](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L18)*



The response




___


## Methods
<a id="done"></a>

###  done

► **done**(callback?: *function*): `any`

► **done**(callback?: *function*): `any`




*Defined in [definitions/lib/base.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L27)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`




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

► **execute**(callback?: *function*): `Type`

► **execute**(waitFl: *`boolean`*): `Type`

► **execute**(callback: *function*, waitFl: *`boolean`*): `Type`




*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `Type`




*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** `Type`




*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** `Type`





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): `Result`




*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** `Result`





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)`Result`, `QueryResult`




*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)`Result`, `QueryResult`





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<`Result`>




*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<`Result`>





___


