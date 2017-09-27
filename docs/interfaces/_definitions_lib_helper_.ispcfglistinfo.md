[gd-sprest](../README.md) > ["definitions/lib/helper"](../modules/_definitions_lib_helper_.md) > [ISPCfgListInfo](../interfaces/_definitions_lib_helper_.ispcfglistinfo.md)



# Interface: ISPCfgListInfo


SharePoint Configuration - List Information


## Properties
<a id="contenttypes"></a>

### «Optional» ContentTypes

**●  ContentTypes**:  *`Array`.<[ISPCfgContentTypeInfo](_definitions_lib_helper_.ispcfgcontenttypeinfo.md)>* 

*Defined in [definitions/lib/helper.ts:245](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L245)*



The content types.




___

<a id="customfields"></a>

### «Optional» CustomFields

**●  CustomFields**:  *`Array`.<[ISPCfgFieldInfo](_definitions_lib_helper_.ispcfgfieldinfo.md)>* 

*Defined in [definitions/lib/helper.ts:248](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L248)*



The custom list fields.




___

<a id="listinformation"></a>

###  ListInformation

**●  ListInformation**:  *[IListCreationInformation](_definitions_lib_types_.ilistcreationinformation.md)* 

*Defined in [definitions/lib/helper.ts:251](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L251)*



The list creation information.




___

<a id="titlefielddisplayname"></a>

### «Optional» TitleFieldDisplayName

**●  TitleFieldDisplayName**:  *`string`* 

*Defined in [definitions/lib/helper.ts:254](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L254)*



The title display name.




___

<a id="viewinformation"></a>

### «Optional» ViewInformation

**●  ViewInformation**:  *`Array`.<[ISPCfgViewInfo](_definitions_lib_helper_.ispcfgviewinfo.md)>* 

*Defined in [definitions/lib/helper.ts:257](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L257)*



The view information.




___

<a id="oncreated"></a>

### «Optional» onCreated

**●  onCreated**:  *function* 

*Defined in [definitions/lib/helper.ts:262](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L262)*



Event triggered after the list is created or updated.

#### Type declaration
(list: *[IListResult](_definitions_list_list_.ilistresult.md)*): `void`


*Defined in [definitions/lib/helper.ts:262](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L262)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| list | [IListResult](_definitions_list_list_.ilistresult.md)   |  - |





**Returns:** `void`






___

<a id="onupdated"></a>

### «Optional» onUpdated

**●  onUpdated**:  *function* 

*Defined in [definitions/lib/helper.ts:267](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L267)*



Event triggered after the list is updated.

#### Type declaration
(list: *[IListQueryResult](_definitions_list_list_.ilistqueryresult.md)*): `void`


*Defined in [definitions/lib/helper.ts:267](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L267)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| list | [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)   |  - |





**Returns:** `void`






___


