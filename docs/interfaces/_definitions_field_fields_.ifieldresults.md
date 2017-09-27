[gd-sprest](../README.md) > ["definitions/field/fields"](../modules/_definitions_field_fields_.md) > [IFieldResults](../interfaces/_definitions_field_fields_.ifieldresults.md)



# Interface: IFieldResults


Field Results

## Hierarchy


 [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md)




↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)[IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)

**↳ IFieldResults**








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

**●  results**:  *`Array`.<[IFieldResult](_definitions_field_field_.ifieldresult.md)>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
<a id="add"></a>

###  add

► **add**(parameters: *[IField](_definitions_field_field_.ifield.md)*): [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md).[add](_definitions_field_fields_.ifieldsmethods.md#add)*

*Defined in [definitions/field/fields.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L14)*



Adds a field to the field collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parameters | [IField](_definitions_field_field_.ifield.md)   |  The field properties. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)





___

<a id="adddependentlookupfield"></a>

###  addDependentLookupField

► **addDependentLookupField**(displayName: *`any`*, primaryLookupField: *`any`*, showField: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md).[addDependentLookupField](_definitions_field_fields_.ifieldsmethods.md#adddependentlookupfield)*

*Defined in [definitions/field/fields.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L28)*



Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| displayName | `any`   |  The title of the new field. |
| primaryLookupField | `any`   |  The ID of the lookup field to associate this dependent lookup field with. |
| showField | `any`   |  The name of the field from the target list to include data from. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)





___

<a id="addfield"></a>

###  addField

► **addField**(parameters: *[IFieldCreationInformation](_definitions_lib_types_.ifieldcreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md).[addField](_definitions_field_fields_.ifieldsmethods.md#addfield)*

*Defined in [definitions/field/fields.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L20)*



Adds a field to the field collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parameters | [IFieldCreationInformation](_definitions_lib_types_.ifieldcreationinformation.md)   |  The field creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)





___

<a id="createfieldasxml"></a>

###  createFieldAsXml

► **createFieldAsXml**(schemaXml: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md).[createFieldAsXml](_definitions_field_fields_.ifieldsmethods.md#createfieldasxml)*

*Defined in [definitions/field/fields.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L35)*



Creates a field based on the specified schema, Boolean value, and field options. Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| schemaXml | `any`   |  The schema XML definition of the field. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)





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

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IField](_definitions_field_field_.ifield.md)[IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)




*Inherited from [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md).[getById](_definitions_field_fields_.ifieldsmethods.md#getbyid)*

*Defined in [definitions/field/fields.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L41)*



Gets the field with the specified ID.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The field id. |





**Returns:** [IField](_definitions_field_field_.ifield.md)[IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)





___

<a id="getbyinternalnameortitle"></a>

###  getByInternalNameOrTitle

► **getByInternalNameOrTitle**(internalNameOrTitle: *`any`*): [IField](_definitions_field_field_.ifield.md)[IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)




*Inherited from [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md).[getByInternalNameOrTitle](_definitions_field_fields_.ifieldsmethods.md#getbyinternalnameortitle)*

*Defined in [definitions/field/fields.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L47)*



Returns the first Field object with the specified internal name or title from the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| internalNameOrTitle | `any`   |  The internal name or title of the field. |





**Returns:** [IField](_definitions_field_field_.ifield.md)[IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)





___

<a id="getbytitle"></a>

###  getByTitle

► **getByTitle**(title: *`any`*): [IField](_definitions_field_field_.ifield.md)[IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)




*Inherited from [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md).[getByTitle](_definitions_field_fields_.ifieldsmethods.md#getbytitle)*

*Defined in [definitions/field/fields.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L53)*



Returns the first field object in the collection based on the title of the specified field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `any`   |  The title of the field. |





**Returns:** [IField](_definitions_field_field_.ifield.md)[IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)





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

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IFields](_definitions_field_fields_.ifields.md), [IFieldResults](_definitions_field_fields_.ifieldresults.md)




*Inherited from [IFieldsMethods](_definitions_field_fields_.ifieldsmethods.md).[next](_definitions_field_fields_.ifieldsmethods.md#next)*

*Defined in [definitions/field/fields.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L58)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFields](_definitions_field_fields_.ifields.md), [IFieldResults](_definitions_field_fields_.ifieldresults.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md), [IResults](_definitions_lib_types_.iresults.md)[IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md), [IResults](_definitions_lib_types_.iresults.md)[IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)>





___


