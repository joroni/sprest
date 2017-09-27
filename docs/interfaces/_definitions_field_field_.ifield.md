[gd-sprest](../README.md) > ["definitions/field/field"](../modules/_definitions_field_field_.md) > [IField](../interfaces/_definitions_field_field_.ifield.md)



# Interface: IField


Field

## Hierarchy


 [IFieldMethods](_definitions_field_field_.ifieldmethods.md)




 [IFieldQueryProps](_definitions_field_field_.ifieldqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)

**↳ IField**








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

► **DescriptionResource**(): [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)




*Inherited from [IFieldQueryProps](_definitions_field_field_.ifieldqueryprops.md).[DescriptionResource](_definitions_field_field_.ifieldqueryprops.md#descriptionresource)*

*Defined in [definitions/field/field.ts:136](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L136)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)





___

<a id="titleresource"></a>

###  TitleResource

► **TitleResource**(): [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)




*Inherited from [IFieldQueryProps](_definitions_field_field_.ifieldqueryprops.md).[TitleResource](_definitions_field_field_.ifieldqueryprops.md#titleresource)*

*Defined in [definitions/field/field.ts:138](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L138)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFieldMethods](_definitions_field_field_.ifieldmethods.md).[delete](_definitions_field_field_.ifieldmethods.md#delete)*

*Defined in [definitions/field/field.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L14)*



Deletes the field.




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

► **execute**(callback?: *function*): [IField](_definitions_field_field_.ifield.md)

► **execute**(waitFl: *`boolean`*): [IField](_definitions_field_field_.ifield.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IField](_definitions_field_field_.ifield.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IField](_definitions_field_field_.ifield.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IField](_definitions_field_field_.ifield.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IField](_definitions_field_field_.ifield.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IFieldResult](_definitions_field_field_.ifieldresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IFieldResult](_definitions_field_field_.ifieldresult.md)





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

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)





___

<a id="setshowindisplayform"></a>

###  setShowInDisplayForm

► **setShowInDisplayForm**(showInForm: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFieldMethods](_definitions_field_field_.ifieldmethods.md).[setShowInDisplayForm](_definitions_field_field_.ifieldmethods.md#setshowindisplayform)*

*Defined in [definitions/field/field.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L20)*



Sets the value of the ShowInDisplayForm property for this field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| showInForm | `any`   |  Flag to show the field in the display form. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="setshowineditform"></a>

###  setShowInEditForm

► **setShowInEditForm**(showInForm: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFieldMethods](_definitions_field_field_.ifieldmethods.md).[setShowInEditForm](_definitions_field_field_.ifieldmethods.md#setshowineditform)*

*Defined in [definitions/field/field.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L26)*



Sets the value of the ShowInEditForm property for this field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| showInForm | `any`   |  Flag to show the field in the display form. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="setshowinnewform"></a>

###  setShowInNewForm

► **setShowInNewForm**(showInForm: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFieldMethods](_definitions_field_field_.ifieldmethods.md).[setShowInNewForm](_definitions_field_field_.ifieldmethods.md#setshowinnewform)*

*Defined in [definitions/field/field.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L32)*



Sets the value of the ShowInNewForm property for this field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| showInForm | `any`   |  Flag to show the field in the display form. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IFieldResult](_definitions_field_field_.ifieldresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IFieldResult](_definitions_field_field_.ifieldresult.md)>





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IFieldMethods](_definitions_field_field_.ifieldmethods.md).[update](_definitions_field_field_.ifieldmethods.md#update)*

*Defined in [definitions/field/field.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L38)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The field properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


