[gd-sprest](../README.md) > ["definitions/lib/helper"](../modules/_definitions_lib_helper_.md) > [ISPCfgViewInfo](../interfaces/_definitions_lib_helper_.ispcfgviewinfo.md)



# Interface: ISPCfgViewInfo


SharePoint Configuration - View Information


## Properties
<a id="jslink"></a>

### «Optional» JSLink

**●  JSLink**:  *`string`* 

*Defined in [definitions/lib/helper.ts:275](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L275)*



The JSLink property.




___

<a id="viewfields"></a>

### «Optional» ViewFields

**●  ViewFields**:  *`Array`.<`string`>* 

*Defined in [definitions/lib/helper.ts:278](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L278)*



The view fields.




___

<a id="viewname"></a>

###  ViewName

**●  ViewName**:  *`string`* 

*Defined in [definitions/lib/helper.ts:281](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L281)*



The view name.




___

<a id="viewquery"></a>

### «Optional» ViewQuery

**●  ViewQuery**:  *`string`* 

*Defined in [definitions/lib/helper.ts:284](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L284)*



The view query.




___

<a id="oncreated"></a>

### «Optional» onCreated

**●  onCreated**:  *function* 

*Defined in [definitions/lib/helper.ts:289](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L289)*



Event triggered after the view is created or updated.

#### Type declaration
(view: *[IViewResult](_definitions_list_view_.iviewresult.md)*): `void`


*Defined in [definitions/lib/helper.ts:289](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L289)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| view | [IViewResult](_definitions_list_view_.iviewresult.md)   |  - |





**Returns:** `void`






___

<a id="onupdated"></a>

### «Optional» onUpdated

**●  onUpdated**:  *function* 

*Defined in [definitions/lib/helper.ts:294](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L294)*



Event triggered after the view is updated.

#### Type declaration
(view: *[IView](_definitions_list_view_.iview.md)*): `void`


*Defined in [definitions/lib/helper.ts:294](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L294)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| view | [IView](_definitions_list_view_.iview.md)   |  - |





**Returns:** `void`






___


