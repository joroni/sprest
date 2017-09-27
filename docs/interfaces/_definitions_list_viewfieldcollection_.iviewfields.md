[gd-sprest](../README.md) > ["definitions/list/viewFieldCollection"](../modules/_definitions_list_viewfieldcollection_.md) > [IViewFields](../interfaces/_definitions_list_viewfieldcollection_.iviewfields.md)



# Interface: IViewFields


View Fields

## Hierarchy


 [IBase](_definitions_lib_base_.ibase.md)[IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md), [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md), [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)

**↳ IViewFields**








## Properties
<a id="items"></a>

###  Items

**●  Items**:  *`string`* 

*Defined in [definitions/list/viewFieldCollection.ts:17](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/viewFieldCollection.ts#L17)*



Specifies the XML schema of the collection of fields. The Items property is returned with the resource, but it doesn't have a URI-addressable endpoint.




___

<a id="schemaxml"></a>

###  SchemaXml

**●  SchemaXml**:  *`string`* 

*Defined in [definitions/list/viewFieldCollection.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/viewFieldCollection.ts#L14)*



Gets a value that specifies the XML schema that represents the collection.




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

<a id="results"></a>

###  results

**●  results**:  *`Array`.<`any`>* 

*Defined in [definitions/list/viewFieldCollection.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/viewFieldCollection.ts#L20)*



The view field collection.




___


## Methods
<a id="addviewfield"></a>

###  addViewField

► **addViewField**(fieldName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/viewFieldCollection.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/viewFieldCollection.ts#L30)*



Adds the field with the specified field internal name or display name to the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fieldName | `any`   |  The case-sensitive internal name or display name of the field to add. |





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

► **execute**(callback?: *function*): [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)

► **execute**(waitFl: *`boolean`*): [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="moveviewfieldto"></a>

###  moveViewFieldTo

► **moveViewFieldTo**(field: *`any`*, index: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/viewFieldCollection.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/viewFieldCollection.ts#L37)*



Moves the field with the specified field internal name to the specified position in the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | `any`   |  The case-sensitive internal name of the field to move. Send this parameter and the index parameter in the request body, as shown in the example. |
| index | `any`   |  The zero-based index of the new position for the field. Send this parameter and the field parameter in the request body, as shown in the example. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)




*Defined in [definitions/list/viewFieldCollection.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/viewFieldCollection.ts#L42)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md), [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md), [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)





___

<a id="removeallviewfields"></a>

###  removeAllViewFields

► **removeAllViewFields**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/viewFieldCollection.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/viewFieldCollection.ts#L47)*



Removes all the fields from the collection.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="removeviewfield"></a>

###  removeViewField

► **removeViewField**(fieldName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/viewFieldCollection.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/viewFieldCollection.ts#L53)*



Removes the field with the specified field internal name from the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fieldName | `any`   |  The case-sensitive internal name or display name of the field to add. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)>





___


