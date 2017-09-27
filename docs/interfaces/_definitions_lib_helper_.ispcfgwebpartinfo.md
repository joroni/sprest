[gd-sprest](../README.md) > ["definitions/lib/helper"](../modules/_definitions_lib_helper_.md) > [ISPCfgWebPartInfo](../interfaces/_definitions_lib_helper_.ispcfgwebpartinfo.md)



# Interface: ISPCfgWebPartInfo


SharePoint Configuration - WebPart Information


## Properties
<a id="filename"></a>

###  FileName

**●  FileName**:  *`string`* 

*Defined in [definitions/lib/helper.ts:302](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L302)*



The file name of the webpart.




___

<a id="group"></a>

### «Optional» Group

**●  Group**:  *`string`* 

*Defined in [definitions/lib/helper.ts:305](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L305)*



The webpart group.




___

<a id="xml"></a>

###  XML

**●  XML**:  *`string`* 

*Defined in [definitions/lib/helper.ts:308](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L308)*



The webpart xml




___

<a id="oncreated"></a>

### «Optional» onCreated

**●  onCreated**:  *function* 

*Defined in [definitions/lib/helper.ts:313](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L313)*



Event triggered after the webpart file is created.

#### Type declaration
(file: *[IFileResult](_definitions_file_file_.ifileresult.md)*): `void`


*Defined in [definitions/lib/helper.ts:313](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L313)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| file | [IFileResult](_definitions_file_file_.ifileresult.md)   |  - |





**Returns:** `void`






___

<a id="onupdated"></a>

### «Optional» onUpdated

**●  onUpdated**:  *function* 

*Defined in [definitions/lib/helper.ts:318](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L318)*



Event triggered after the webpart file is updated.

#### Type declaration
(file: *[IFileResult](_definitions_file_file_.ifileresult.md)*): `void`


*Defined in [definitions/lib/helper.ts:318](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L318)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| file | [IFileResult](_definitions_file_file_.ifileresult.md)   |  - |





**Returns:** `void`






___


