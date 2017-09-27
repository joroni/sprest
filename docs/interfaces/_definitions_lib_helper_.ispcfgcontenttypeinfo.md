[gd-sprest](../README.md) > ["definitions/lib/helper"](../modules/_definitions_lib_helper_.md) > [ISPCfgContentTypeInfo](../interfaces/_definitions_lib_helper_.ispcfgcontenttypeinfo.md)



# Interface: ISPCfgContentTypeInfo


SharePoint Configuration - Content Type Information

## Hierarchy


 [IContentTypeCreationInformation](_definitions_lib_types_.icontenttypecreationinformation.md)

**↳ ISPCfgContentTypeInfo**








## Properties
<a id="contenttype"></a>

### «Optional» ContentType

**●  ContentType**:  *[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)* 

*Defined in [definitions/lib/helper.ts:167](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L167)*



The content type. (This value is set internally.)




___

<a id="description"></a>

### «Optional» Description

**●  Description**:  *`string`* 

*Inherited from [IContentTypeCreationInformation](_definitions_lib_types_.icontenttypecreationinformation.md).[Description](_definitions_lib_types_.icontenttypecreationinformation.md#description)*

*Defined in [definitions/lib/types.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L78)*



The content type description.




___

<a id="fieldrefs"></a>

### «Optional» FieldRefs

**●  FieldRefs**:  *`Array`.<`string`>* 

*Defined in [definitions/lib/helper.ts:172](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L172)*



The field references.




___

<a id="group"></a>

### «Optional» Group

**●  Group**:  *`string`* 

*Inherited from [IContentTypeCreationInformation](_definitions_lib_types_.icontenttypecreationinformation.md).[Group](_definitions_lib_types_.icontenttypecreationinformation.md#group)*

*Defined in [definitions/lib/types.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L81)*



The content type group.




___

<a id="id"></a>

### «Optional» Id

**●  Id**:  *`string`* 

*Inherited from [IContentTypeCreationInformation](_definitions_lib_types_.icontenttypecreationinformation.md).[Id](_definitions_lib_types_.icontenttypecreationinformation.md#id)*

*Defined in [definitions/lib/types.ts:84](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L84)*



The content type id.




___

<a id="jslink"></a>

### «Optional» JSLink

**●  JSLink**:  *`string`* 

*Defined in [definitions/lib/helper.ts:177](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L177)*



The JSLink property.




___

<a id="name"></a>

###  Name

**●  Name**:  *`string`* 

*Inherited from [IContentTypeCreationInformation](_definitions_lib_types_.icontenttypecreationinformation.md).[Name](_definitions_lib_types_.icontenttypecreationinformation.md#name)*

*Defined in [definitions/lib/types.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L87)*



The content type name.




___

<a id="parentname"></a>

### «Optional» ParentName

**●  ParentName**:  *`string`* 

*Defined in [definitions/lib/helper.ts:182](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L182)*



The parent content type name, required if different then the name.




___

<a id="parentweburl"></a>

### «Optional» ParentWebUrl

**●  ParentWebUrl**:  *`string`* 

*Defined in [definitions/lib/helper.ts:187](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L187)*



The url of the web containing the parent content type, required if the parent content type doesn't exist in the current web.




___

<a id="oncreated"></a>

### «Optional» onCreated

**●  onCreated**:  *function* 

*Defined in [definitions/lib/helper.ts:192](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L192)*



Event triggered after the content type is created.

#### Type declaration
(ct: *[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)*): `void`


*Defined in [definitions/lib/helper.ts:192](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L192)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ct | [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)   |  - |





**Returns:** `void`






___

<a id="onupdated"></a>

### «Optional» onUpdated

**●  onUpdated**:  *function* 

*Defined in [definitions/lib/helper.ts:197](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L197)*



Event triggered after the content type is updated.

#### Type declaration
(ct: *[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)*): `void`


*Defined in [definitions/lib/helper.ts:197](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L197)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ct | [IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)   |  - |





**Returns:** `void`






___


