[gd-sprest](../README.md) > ["definitions/lib/helper"](../modules/_definitions_lib_helper_.md) > [ISPCfgFieldInfo](../interfaces/_definitions_lib_helper_.ispcfgfieldinfo.md)



# Interface: ISPCfgFieldInfo


SharePoint Configuration - Field Information


## Properties
<a id="name"></a>

###  Name

**●  Name**:  *`string`* 

*Defined in [definitions/lib/helper.ts:222](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L222)*



The internal field name.




___

<a id="schemaxml"></a>

###  SchemaXml

**●  SchemaXml**:  *`string`* 

*Defined in [definitions/lib/helper.ts:227](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L227)*



The schema definition of the field.




___

<a id="oncreated"></a>

### «Optional» onCreated

**●  onCreated**:  *function* 

*Defined in [definitions/lib/helper.ts:232](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L232)*



Event triggered after the field is created.

#### Type declaration
(field: *[IFieldResult](_definitions_field_field_.ifieldresult.md)*): `void`


*Defined in [definitions/lib/helper.ts:232](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L232)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | [IFieldResult](_definitions_field_field_.ifieldresult.md)   |  - |





**Returns:** `void`






___

<a id="onupdated"></a>

### «Optional» onUpdated

**●  onUpdated**:  *function* 

*Defined in [definitions/lib/helper.ts:237](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L237)*



Event triggered after the field is updated.

#### Type declaration
(field: *[IFieldResult](_definitions_field_field_.ifieldresult.md)*): `void`


*Defined in [definitions/lib/helper.ts:237](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L237)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| field | [IFieldResult](_definitions_field_field_.ifieldresult.md)   |  - |





**Returns:** `void`






___


