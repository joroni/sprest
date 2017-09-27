[gd-sprest](../README.md) > ["definitions/field/fields"](../modules/_definitions_field_fields_.md) > [IFieldsMethods](../interfaces/_definitions_field_fields_.ifieldsmethods.md)



# Interface: IFieldsMethods


Methods

## Hierarchy

**IFieldsMethods**

↳  [IFields](_definitions_field_fields_.ifields.md)




↳  [IFieldResults](_definitions_field_fields_.ifieldresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(parameters: *[IField](_definitions_field_field_.ifield.md)*): [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)




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




*Defined in [definitions/field/fields.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L35)*



Creates a field based on the specified schema, Boolean value, and field options. Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| schemaXml | `any`   |  The schema XML definition of the field. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IField](_definitions_field_field_.ifield.md)[IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)




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




*Defined in [definitions/field/fields.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L53)*



Returns the first field object in the collection based on the title of the specified field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `any`   |  The title of the field. |





**Returns:** [IField](_definitions_field_field_.ifield.md)[IBase](_definitions_lib_base_.ibase.md)[IField](_definitions_field_field_.ifield.md), [IFieldResult](_definitions_field_field_.ifieldresult.md), [IFieldQueryResult](_definitions_field_field_.ifieldqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IFields](_definitions_field_fields_.ifields.md), [IFieldResults](_definitions_field_fields_.ifieldresults.md)




*Defined in [definitions/field/fields.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/fields.ts#L58)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFields](_definitions_field_fields_.ifields.md), [IFieldResults](_definitions_field_fields_.ifieldresults.md)





___


