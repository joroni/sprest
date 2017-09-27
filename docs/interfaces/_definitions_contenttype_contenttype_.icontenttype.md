[gd-sprest](../README.md) > ["definitions/contentType/contentType"](../modules/_definitions_contenttype_contenttype_.md) > [IContentType](../interfaces/_definitions_contenttype_contenttype_.icontenttype.md)



# Interface: IContentType


Content Type

## Hierarchy


 [IContentTypeMethods](_definitions_contenttype_contenttype_.icontenttypemethods.md)




 [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IContentType](_definitions_contenttype_contenttype_.icontenttype.md), [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md), [IContentTypeQueryResult](_definitions_contenttype_contenttype_.icontenttypequeryresult.md)

**↳ IContentType**








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
<a id="descriptionresource"></a>

###  DescriptionResource

► **DescriptionResource**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md).[DescriptionResource](_definitions_contenttype_contenttype_.icontenttypequeryprops.md#descriptionresource)*

*Defined in [definitions/contentType/contentType.ts:103](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L103)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="fieldlinks"></a>

###  FieldLinks

► **FieldLinks**(): [IFieldLinks](_definitions_field_fieldlinks_.ifieldlinks.md)

► **FieldLinks**(guid: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IFieldLink](_definitions_lib_types_.ifieldlink.md)




*Inherited from [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md).[FieldLinks](_definitions_contenttype_contenttype_.icontenttypequeryprops.md#fieldlinks)*

*Defined in [definitions/contentType/contentType.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L108)*



Gets the column (also known as field) references in the content type.




**Returns:** [IFieldLinks](_definitions_field_fieldlinks_.ifieldlinks.md)




*Inherited from [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md).[FieldLinks](_definitions_contenttype_contenttype_.icontenttypequeryprops.md#fieldlinks)*

*Defined in [definitions/contentType/contentType.ts:114](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L114)*



Gets the column (also known as field) reference in the content type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| guid | `string`   |  The guid of the field link. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFieldLink](_definitions_lib_types_.ifieldlink.md)





___

<a id="fields"></a>

###  Fields

► **Fields**(): [IFields](_definitions_field_fields_.ifields.md)

► **Fields**(internalNameOrTitle: *`string`*): [IFields](_definitions_field_fields_.ifields.md)




*Inherited from [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md).[Fields](_definitions_contenttype_contenttype_.icontenttypequeryprops.md#fields)*

*Defined in [definitions/contentType/contentType.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L119)*



Gets the fields for the content type.




**Returns:** [IFields](_definitions_field_fields_.ifields.md)




*Inherited from [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md).[Fields](_definitions_contenttype_contenttype_.icontenttypequeryprops.md#fields)*

*Defined in [definitions/contentType/contentType.ts:125](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L125)*



Gets the field for the content type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| internalNameOrTitle | `string`   |  The internal name or title of the field. |





**Returns:** [IFields](_definitions_field_fields_.ifields.md)





___

<a id="nameresource"></a>

###  NameResource

► **NameResource**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md).[NameResource](_definitions_contenttype_contenttype_.icontenttypequeryprops.md#nameresource)*

*Defined in [definitions/contentType/contentType.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L127)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="parent-1"></a>

###  Parent

► **Parent**(): [IContentTypeMethods](_definitions_contenttype_contenttype_.icontenttypemethods.md)




*Inherited from [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md).[Parent](_definitions_contenttype_contenttype_.icontenttypequeryprops.md#parent)*

*Defined in [definitions/contentType/contentType.ts:130](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L130)*



Gets the parent content type of the content type.




**Returns:** [IContentTypeMethods](_definitions_contenttype_contenttype_.icontenttypemethods.md)





___

<a id="workflowassociations"></a>

###  WorkflowAssociations

► **WorkflowAssociations**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IContentTypeQueryProps](_definitions_contenttype_contenttype_.icontenttypequeryprops.md).[WorkflowAssociations](_definitions_contenttype_contenttype_.icontenttypequeryprops.md#workflowassociations)*

*Defined in [definitions/contentType/contentType.ts:135](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L135)*



Gets a value that specifies the collection of workflow associations for the content type.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IContentTypeMethods](_definitions_contenttype_contenttype_.icontenttypemethods.md).[delete](_definitions_contenttype_contenttype_.icontenttypemethods.md#delete)*

*Defined in [definitions/contentType/contentType.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L19)*



Deletes the content type.




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

► **execute**(callback?: *function*): [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)

► **execute**(waitFl: *`boolean`*): [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)





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

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md), [IContentTypeQueryResult](_definitions_contenttype_contenttype_.icontenttypequeryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md), [IContentTypeQueryResult](_definitions_contenttype_contenttype_.icontenttypequeryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)>





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IContentTypeMethods](_definitions_contenttype_contenttype_.icontenttypemethods.md).[update](_definitions_contenttype_contenttype_.icontenttypemethods.md#update)*

*Defined in [definitions/contentType/contentType.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L25)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The content type properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


