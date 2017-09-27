[gd-sprest](../README.md) > ["definitions/contentType/contentType"](../modules/_definitions_contenttype_contenttype_.md) > [IContentTypeQueryProps](../interfaces/_definitions_contenttype_contenttype_.icontenttypequeryprops.md)



# Interface: IContentTypeQueryProps


Content Type Query Properties

## Hierarchy

**IContentTypeQueryProps**

↳  [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)




↳  [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)









## Methods
<a id="descriptionresource"></a>

###  DescriptionResource

► **DescriptionResource**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/contentType/contentType.ts:103](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L103)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="fieldlinks"></a>

###  FieldLinks

► **FieldLinks**(): [IFieldLinks](_definitions_field_fieldlinks_.ifieldlinks.md)

► **FieldLinks**(guid: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IFieldLink](_definitions_lib_types_.ifieldlink.md)




*Defined in [definitions/contentType/contentType.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L108)*



Gets the column (also known as field) references in the content type.




**Returns:** [IFieldLinks](_definitions_field_fieldlinks_.ifieldlinks.md)




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




*Defined in [definitions/contentType/contentType.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L119)*



Gets the fields for the content type.




**Returns:** [IFields](_definitions_field_fields_.ifields.md)




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




*Defined in [definitions/contentType/contentType.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L127)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="parent"></a>

###  Parent

► **Parent**(): [IContentTypeMethods](_definitions_contenttype_contenttype_.icontenttypemethods.md)




*Defined in [definitions/contentType/contentType.ts:130](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L130)*



Gets the parent content type of the content type.




**Returns:** [IContentTypeMethods](_definitions_contenttype_contenttype_.icontenttypemethods.md)





___

<a id="workflowassociations"></a>

###  WorkflowAssociations

► **WorkflowAssociations**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/contentType/contentType.ts:135](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentType.ts#L135)*



Gets a value that specifies the collection of workflow associations for the content type.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


