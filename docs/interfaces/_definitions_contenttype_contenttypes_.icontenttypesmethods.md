[gd-sprest](../README.md) > ["definitions/contentType/contentTypes"](../modules/_definitions_contenttype_contenttypes_.md) > [IContentTypesMethods](../interfaces/_definitions_contenttype_contenttypes_.icontenttypesmethods.md)



# Interface: IContentTypesMethods


Methods

## Hierarchy

**IContentTypesMethods**

↳  [IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)




↳  [IContentTypeResults](_definitions_contenttype_contenttypes_.icontenttyperesults.md)









## Methods
<a id="add"></a>

###  add

► **add**(parameters: *[IContentTypeCreationInformation](_definitions_lib_types_.icontenttypecreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IContentType](_definitions_contenttype_contenttype_.icontenttype.md), [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)




*Defined in [definitions/contentType/contentTypes.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentTypes.ts#L14)*



Adds a content type to the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parameters | [IContentTypeCreationInformation](_definitions_lib_types_.icontenttypecreationinformation.md)   |  The content type creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IContentType](_definitions_contenttype_contenttype_.icontenttype.md), [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)





___

<a id="addavailablecontenttype"></a>

###  addAvailableContentType

► **addAvailableContentType**(contentTypeId: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IContentType](_definitions_contenttype_contenttype_.icontenttype.md), [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)




*Defined in [definitions/contentType/contentTypes.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentTypes.ts#L20)*



Adds an existing content type to this collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| contentTypeId | `any`   |  The content type id to add. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IContentType](_definitions_contenttype_contenttype_.icontenttype.md), [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)[IBase](_definitions_lib_base_.ibase.md)[IContentType](_definitions_contenttype_contenttype_.icontenttype.md), [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md), [IContentTypeQueryResult](_definitions_contenttype_contenttype_.icontenttypequeryresult.md)




*Defined in [definitions/contentType/contentTypes.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentTypes.ts#L26)*



Gets a content type by id.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The content type id. |





**Returns:** [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)[IBase](_definitions_lib_base_.ibase.md)[IContentType](_definitions_contenttype_contenttype_.icontenttype.md), [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md), [IContentTypeQueryResult](_definitions_contenttype_contenttype_.icontenttypequeryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md), [IContentTypeResults](_definitions_contenttype_contenttypes_.icontenttyperesults.md)




*Defined in [definitions/contentType/contentTypes.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/contentType/contentTypes.ts#L31)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md), [IContentTypeResults](_definitions_contenttype_contenttypes_.icontenttyperesults.md)





___


