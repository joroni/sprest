[gd-sprest](../README.md) > ["definitions/field/field"](../modules/_definitions_field_field_.md) > [IFieldDateTime](../interfaces/_definitions_field_field_.ifielddatetime.md)



# Interface: IFieldDateTime


Date/Time Field

## Hierarchy


↳  [IFieldResult](_definitions_field_field_.ifieldresult.md)

**↳ IFieldDateTime**








## Properties
<a id="autoindexed"></a>

###  AutoIndexed

**●  AutoIndexed**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[AutoIndexed](_definitions_field_field_.ifieldprops.md#autoindexed)*

*Defined in [definitions/field/field.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L45)*





___

<a id="canbedeleted"></a>

###  CanBeDeleted

**●  CanBeDeleted**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[CanBeDeleted](_definitions_field_field_.ifieldprops.md#canbedeleted)*

*Defined in [definitions/field/field.ts:48](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L48)*



Gets a value that specifies whether the field can be deleted.




___

<a id="datetimecalendartype"></a>

###  DateTimeCalendarType

**●  DateTimeCalendarType**:  *`SPTypes.CalendarType`⎮`number`* 

*Defined in [definitions/field/field.ts:217](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L217)*



A value that specifies the calendar type of the field.




___

<a id="defaultvalue"></a>

###  DefaultValue

**●  DefaultValue**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[DefaultValue](_definitions_field_field_.ifieldprops.md#defaultvalue)*

*Defined in [definitions/field/field.ts:51](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L51)*



Gets or sets a value that specifies the default value for the field.




___

<a id="description"></a>

###  Description

**●  Description**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Description](_definitions_field_field_.ifieldprops.md#description)*

*Defined in [definitions/field/field.ts:54](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L54)*



Gets or sets a value that specifies the description of the field.




___

<a id="direction"></a>

###  Direction

**●  Direction**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Direction](_definitions_field_field_.ifieldprops.md#direction)*

*Defined in [definitions/field/field.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L57)*



Gets or sets a value that specifies the reading order of the field.




___

<a id="displayformat"></a>

###  DisplayFormat

**●  DisplayFormat**:  *`SPTypes.DateFormat`⎮`number`* 

*Defined in [definitions/field/field.ts:220](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L220)*



The format of the date and time that is displayed in the field.




___

<a id="enforceuniquevalues"></a>

###  EnforceUniqueValues

**●  EnforceUniqueValues**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[EnforceUniqueValues](_definitions_field_field_.ifieldprops.md#enforceuniquevalues)*

*Defined in [definitions/field/field.ts:60](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L60)*



Gets or sets a value that specifies whether to require unique field values in a list or library column.




___

<a id="entitypropertyname"></a>

###  EntityPropertyName

**●  EntityPropertyName**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[EntityPropertyName](_definitions_field_field_.ifieldprops.md#entitypropertyname)*

*Defined in [definitions/field/field.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L63)*



Gets the name of the entity property for the list item entity that uses this field.




___

<a id="fieldtypekind"></a>

###  FieldTypeKind

**●  FieldTypeKind**:  *`SPTypes.FieldType`⎮`number`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[FieldTypeKind](_definitions_field_field_.ifieldprops.md#fieldtypekind)*

*Defined in [definitions/field/field.ts:66](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L66)*



Gets or sets a value that specifies the type of the field. Represents a FieldType value. See FieldType in the .NET client object model reference for a list of field type values.




___

<a id="filterable"></a>

###  Filterable

**●  Filterable**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Filterable](_definitions_field_field_.ifieldprops.md#filterable)*

*Defined in [definitions/field/field.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L69)*



Gets a value that specifies whether list items in the list can be filtered by the field value.




___

<a id="friendlydisplayformat"></a>

###  FriendlyDisplayFormat

**●  FriendlyDisplayFormat**:  *`SPTypes.FriendlyDateFormat`⎮`number`* 

*Defined in [definitions/field/field.ts:223](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L223)*



Represents a date and time friendly format.




___

<a id="frombasetype"></a>

###  FromBaseType

**●  FromBaseType**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[FromBaseType](_definitions_field_field_.ifieldprops.md#frombasetype)*

*Defined in [definitions/field/field.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L72)*



Gets a Boolean value that indicates whether the field derives from a base field type.




___

<a id="group"></a>

###  Group

**●  Group**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Group](_definitions_field_field_.ifieldprops.md#group)*

*Defined in [definitions/field/field.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L75)*



Gets or sets a value that specifies the field group.




___

<a id="hidden"></a>

###  Hidden

**●  Hidden**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Hidden](_definitions_field_field_.ifieldprops.md#hidden)*

*Defined in [definitions/field/field.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L78)*



Gets or sets a value that specifies whether the field is hidden in list views and list forms.




___

<a id="id"></a>

###  Id

**●  Id**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Id](_definitions_field_field_.ifieldprops.md#id)*

*Defined in [definitions/field/field.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L81)*



Gets a value that specifies the field identifier.




___

<a id="indexed"></a>

###  Indexed

**●  Indexed**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Indexed](_definitions_field_field_.ifieldprops.md#indexed)*

*Defined in [definitions/field/field.ts:84](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L84)*



Gets or sets a Boolean value that specifies whether the field is indexed.




___

<a id="internalname"></a>

###  InternalName

**●  InternalName**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[InternalName](_definitions_field_field_.ifieldprops.md#internalname)*

*Defined in [definitions/field/field.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L87)*



Gets a value that specifies the field internal name.




___

<a id="jslink"></a>

###  JSLink

**●  JSLink**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[JSLink](_definitions_field_field_.ifieldprops.md#jslink)*

*Defined in [definitions/field/field.ts:90](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L90)*



Gets or sets the name of an external JS file containing any client rendering logic for fields of this type.




___

<a id="readonlyfield"></a>

###  ReadOnlyField

**●  ReadOnlyField**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[ReadOnlyField](_definitions_field_field_.ifieldprops.md#readonlyfield)*

*Defined in [definitions/field/field.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L93)*



Gets or sets a value that specifies whether the value of the field is read-only.




___

<a id="required"></a>

###  Required

**●  Required**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Required](_definitions_field_field_.ifieldprops.md#required)*

*Defined in [definitions/field/field.ts:96](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L96)*



Gets or sets a value that specifies whether the field requires a value.




___

<a id="schemaxml"></a>

###  Schemaxml

**●  Schemaxml**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Schemaxml](_definitions_field_field_.ifieldprops.md#schemaxml)*

*Defined in [definitions/field/field.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L99)*



Gets or sets a value that specifies the XML schema that defines the field.




___

<a id="scope"></a>

###  Scope

**●  Scope**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Scope](_definitions_field_field_.ifieldprops.md#scope)*

*Defined in [definitions/field/field.ts:102](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L102)*



Gets a value that specifies the server-relative URL of the list or the site to which the field belongs.




___

<a id="sealed"></a>

###  Sealed

**●  Sealed**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Sealed](_definitions_field_field_.ifieldprops.md#sealed)*

*Defined in [definitions/field/field.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L105)*



Gets a value that specifies whether properties on the field cannot be changed and whether the field cannot be deleted.




___

<a id="sortable"></a>

###  Sortable

**●  Sortable**:  *`boolean`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Sortable](_definitions_field_field_.ifieldprops.md#sortable)*

*Defined in [definitions/field/field.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L108)*



Gets a value that specifies whether list items in the list can be sorted by the field value.




___

<a id="staticname"></a>

###  StaticName

**●  StaticName**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[StaticName](_definitions_field_field_.ifieldprops.md#staticname)*

*Defined in [definitions/field/field.ts:111](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L111)*



Gets or sets a value that specifies a customizable identifier of the field.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[Title](_definitions_field_field_.ifieldprops.md#title)*

*Defined in [definitions/field/field.ts:114](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L114)*



Gets or sets value that specifies the display name of the field.




___

<a id="typeasstring"></a>

###  TypeAsString

**●  TypeAsString**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[TypeAsString](_definitions_field_field_.ifieldprops.md#typeasstring)*

*Defined in [definitions/field/field.ts:117](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L117)*



Gets or sets a value that specifies the type of the field.




___

<a id="typedisplayname"></a>

###  TypeDisplayName

**●  TypeDisplayName**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[TypeDisplayName](_definitions_field_field_.ifieldprops.md#typedisplayname)*

*Defined in [definitions/field/field.ts:120](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L120)*



Gets a value that specifies the display name for the type of the field.




___

<a id="typeshortdescription"></a>

###  TypeShortDescription

**●  TypeShortDescription**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[TypeShortDescription](_definitions_field_field_.ifieldprops.md#typeshortdescription)*

*Defined in [definitions/field/field.ts:123](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L123)*



Gets a value that specifies the description for the type of the field.




___

<a id="validationformula"></a>

###  ValidationFormula

**●  ValidationFormula**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[ValidationFormula](_definitions_field_field_.ifieldprops.md#validationformula)*

*Defined in [definitions/field/field.ts:126](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L126)*



Gets or sets a value that specifies the data validation criteria for the value of the field.




___

<a id="validationmessage"></a>

###  ValidationMessage

**●  ValidationMessage**:  *`string`* 

*Inherited from [IFieldProps](_definitions_field_field_.ifieldprops.md).[ValidationMessage](_definitions_field_field_.ifieldprops.md#validationmessage)*

*Defined in [definitions/field/field.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/field/field.ts#L129)*



Gets or sets a value that specifies the error message returned when data validation fails for the field.




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


