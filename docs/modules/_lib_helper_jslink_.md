[gd-sprest](../README.md) > ["lib/helper/jslink"](../modules/_lib_helper_jslink_.md)



# External module: "lib/helper/jslink"

## Index

### Object literals

* [JSLinkHelper](_lib_helper_jslink_.md#jslinkhelper)



---
<a id="jslinkhelper"></a>

## Object literal: JSLinkHelper


JSLink Helper Methods


<a id="jslinkhelper.hideeventfl"></a>

###  hideEventFl

**●  hideEventFl**:  *`boolean`*  = false

*Defined in [lib/helper/jslink.ts:11](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L11)*



Global Variables




___
<a id="jslinkhelper.disableedit"></a>

###  disableEdit

► **disableEdit**(ctx: *`any`*, field: *`any`*, requireValueFl?: *`boolean`*): `string`




*Defined in [lib/helper/jslink.ts:141](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L141)*



Disables edit for the specified field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The field to disable edit. |
| requireValueFl | `boolean`   |  Flag to only disable the field, if a value exists. |





**Returns:** `string`





___
<a id="jslinkhelper.disablequickedit"></a>

###  disableQuickEdit

► **disableQuickEdit**(ctx: *`any`*, field: *`any`*): `any`




*Defined in [lib/helper/jslink.ts:203](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L203)*



Disable quick edit for the specified field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The field to disable edit. |





**Returns:** `any`





___
<a id="jslinkhelper.getlistview"></a>

###  getListView

► **getListView**(ctx: *`any`*): `Element`




*Defined in [lib/helper/jslink.ts:219](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L219)*



Returns the list view.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |





**Returns:** `Element`





___
<a id="jslinkhelper.getlistviewitems"></a>

###  getListViewItems

► **getListViewItems**(ctx: *`any`*): `any`




*Defined in [lib/helper/jslink.ts:235](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L235)*



Returns the list view items.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |





**Returns:** `any`





___
<a id="jslinkhelper.getlistviewselecteditems"></a>

###  getListViewSelectedItems

► **getListViewSelectedItems**(): `any`




*Defined in [lib/helper/jslink.ts:243](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L243)*



Returns the selected list view items




**Returns:** `any`





___
<a id="jslinkhelper.getwebpart"></a>

###  getWebPart

► **getWebPart**(ctx: *`any`*): `Element`




*Defined in [lib/helper/jslink.ts:252](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L252)*



Returns the webpart containing the JSLink field/form/view.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |





**Returns:** `Element`





___
<a id="jslinkhelper.hidefield"></a>

###  hideField

► **hideField**(ctx: *`any`*, field: *`any`*): `void`




*Defined in [lib/helper/jslink.ts:262](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L262)*



Hides the specified field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The field to hide. |





**Returns:** `void`





___
<a id="jslinkhelper.removefield"></a>

###  removeField

► **removeField**(ctx: *`any`*, field: *`any`*): `string`




*Defined in [lib/helper/jslink.ts:300](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L300)*



Removes the field and html from the page.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The field to remove. |





**Returns:** `string`





___
<a id="jslinkhelper.renderfield"></a>

###  renderField

► **renderField**(ctx: *`any`*, field: *`any`*, formType?: *`number`*): `any`




*Defined in [lib/helper/jslink.ts:314](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L314)*



Method to render the default html for a field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The form field. |
| formType | `number`   |  The form type. (Display, Edit, New or View) |





**Returns:** `any`





___
<a id="jslinkhelper._fieldtomethodmapper"></a>

###  _fieldToMethodMapper

** _fieldToMethodMapper**:  *`object`* 

*Defined in [lib/helper/jslink.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L20)*



Field to Method Mapper 1 - Display Form 2 - Edit Form 3 - New Form 4 - View



<a id="jslinkhelper._fieldtomethodmapper.attachments"></a>

###  Attachments

** Attachments**:  *`object`* 

*Defined in [lib/helper/jslink.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L21)*




<a id="jslinkhelper._fieldtomethodmapper.attachments.1"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldAttachments_Default"]

*Defined in [lib/helper/jslink.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L23)*





___
<a id="jslinkhelper._fieldtomethodmapper.attachments.2"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldAttachments_Default"]

*Defined in [lib/helper/jslink.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L24)*





___
<a id="jslinkhelper._fieldtomethodmapper.attachments.3"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldAttachments_Default"]

*Defined in [lib/helper/jslink.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L25)*





___
<a id="jslinkhelper._fieldtomethodmapper.attachments.4"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:22](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L22)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.boolean"></a>

###  Boolean

** Boolean**:  *`object`* 

*Defined in [lib/helper/jslink.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L27)*




<a id="jslinkhelper._fieldtomethodmapper.boolean.1-1"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_DefaultNoEncode"]

*Defined in [lib/helper/jslink.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L29)*





___
<a id="jslinkhelper._fieldtomethodmapper.boolean.2-1"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldBoolean_Edit"]

*Defined in [lib/helper/jslink.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L30)*





___
<a id="jslinkhelper._fieldtomethodmapper.boolean.3-1"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldBoolean_Edit"]

*Defined in [lib/helper/jslink.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L31)*





___
<a id="jslinkhelper._fieldtomethodmapper.boolean.4-1"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L28)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.calculated"></a>

###  Calculated

** Calculated**:  *`object`* 

*Defined in [lib/helper/jslink.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L39)*




<a id="jslinkhelper._fieldtomethodmapper.calculated.1-2"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L41)*





___
<a id="jslinkhelper._fieldtomethodmapper.calculated.2-2"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Empty"]

*Defined in [lib/helper/jslink.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L42)*





___
<a id="jslinkhelper._fieldtomethodmapper.calculated.3-2"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Empty"]

*Defined in [lib/helper/jslink.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L43)*





___
<a id="jslinkhelper._fieldtomethodmapper.calculated.4-2"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L40)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.choice"></a>

###  Choice

** Choice**:  *`object`* 

*Defined in [lib/helper/jslink.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L45)*




<a id="jslinkhelper._fieldtomethodmapper.choice.1-3"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L47)*





___
<a id="jslinkhelper._fieldtomethodmapper.choice.2-3"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldChoice_Edit"]

*Defined in [lib/helper/jslink.ts:48](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L48)*





___
<a id="jslinkhelper._fieldtomethodmapper.choice.3-3"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldChoice_Edit"]

*Defined in [lib/helper/jslink.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L49)*





___
<a id="jslinkhelper._fieldtomethodmapper.choice.4-3"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L46)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.computed"></a>

###  Computed

** Computed**:  *`object`* 

*Defined in [lib/helper/jslink.ts:51](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L51)*




<a id="jslinkhelper._fieldtomethodmapper.computed.1-4"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L53)*





___
<a id="jslinkhelper._fieldtomethodmapper.computed.2-4"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:54](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L54)*





___
<a id="jslinkhelper._fieldtomethodmapper.computed.3-4"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:55](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L55)*





___
<a id="jslinkhelper._fieldtomethodmapper.computed.4-4"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L52)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.currency"></a>

###  Currency

** Currency**:  *`object`* 

*Defined in [lib/helper/jslink.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L33)*




<a id="jslinkhelper._fieldtomethodmapper.currency.1-5"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L35)*





___
<a id="jslinkhelper._fieldtomethodmapper.currency.2-5"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldNumber_Edit"]

*Defined in [lib/helper/jslink.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L36)*





___
<a id="jslinkhelper._fieldtomethodmapper.currency.3-5"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldNumber_Edit"]

*Defined in [lib/helper/jslink.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L37)*





___
<a id="jslinkhelper._fieldtomethodmapper.currency.4-5"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L34)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.datetime"></a>

###  DateTime

** DateTime**:  *`object`* 

*Defined in [lib/helper/jslink.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L57)*




<a id="jslinkhelper._fieldtomethodmapper.datetime.1-6"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldDateTime_Display"]

*Defined in [lib/helper/jslink.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L59)*





___
<a id="jslinkhelper._fieldtomethodmapper.datetime.2-6"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldDateTime_Edit"]

*Defined in [lib/helper/jslink.ts:60](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L60)*





___
<a id="jslinkhelper._fieldtomethodmapper.datetime.3-6"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldDateTime_Edit"]

*Defined in [lib/helper/jslink.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L61)*





___
<a id="jslinkhelper._fieldtomethodmapper.datetime.4-6"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L58)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.file"></a>

###  File

** File**:  *`object`* 

*Defined in [lib/helper/jslink.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L63)*




<a id="jslinkhelper._fieldtomethodmapper.file.1-7"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldFile_Display"]

*Defined in [lib/helper/jslink.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L65)*





___
<a id="jslinkhelper._fieldtomethodmapper.file.2-7"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldFile_Edit"]

*Defined in [lib/helper/jslink.ts:66](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L66)*





___
<a id="jslinkhelper._fieldtomethodmapper.file.3-7"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldFile_Edit"]

*Defined in [lib/helper/jslink.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L67)*





___
<a id="jslinkhelper._fieldtomethodmapper.file.4-7"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L64)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.integer"></a>

###  Integer

** Integer**:  *`object`* 

*Defined in [lib/helper/jslink.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L69)*




<a id="jslinkhelper._fieldtomethodmapper.integer.1-8"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L71)*





___
<a id="jslinkhelper._fieldtomethodmapper.integer.2-8"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldNumber_Edit"]

*Defined in [lib/helper/jslink.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L72)*





___
<a id="jslinkhelper._fieldtomethodmapper.integer.3-8"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldNumber_Edit"]

*Defined in [lib/helper/jslink.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L73)*





___
<a id="jslinkhelper._fieldtomethodmapper.integer.4-8"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:70](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L70)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.lookup"></a>

###  Lookup

** Lookup**:  *`object`* 

*Defined in [lib/helper/jslink.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L75)*




<a id="jslinkhelper._fieldtomethodmapper.lookup.1-9"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldLookup_Display"]

*Defined in [lib/helper/jslink.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L77)*





___
<a id="jslinkhelper._fieldtomethodmapper.lookup.2-9"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldLookup_Edit"]

*Defined in [lib/helper/jslink.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L78)*





___
<a id="jslinkhelper._fieldtomethodmapper.lookup.3-9"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldLookup_Edit"]

*Defined in [lib/helper/jslink.ts:79](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L79)*





___
<a id="jslinkhelper._fieldtomethodmapper.lookup.4-9"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L76)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.lookupmulti"></a>

###  LookupMulti

** LookupMulti**:  *`object`* 

*Defined in [lib/helper/jslink.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L81)*




<a id="jslinkhelper._fieldtomethodmapper.lookupmulti.1-10"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldLookup_Display"]

*Defined in [lib/helper/jslink.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L83)*





___
<a id="jslinkhelper._fieldtomethodmapper.lookupmulti.2-10"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldLookup_Edit"]

*Defined in [lib/helper/jslink.ts:84](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L84)*





___
<a id="jslinkhelper._fieldtomethodmapper.lookupmulti.3-10"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldLookup_Edit"]

*Defined in [lib/helper/jslink.ts:85](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L85)*





___
<a id="jslinkhelper._fieldtomethodmapper.lookupmulti.4-10"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L82)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.multichoice"></a>

###  MultiChoice

** MultiChoice**:  *`object`* 

*Defined in [lib/helper/jslink.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L87)*




<a id="jslinkhelper._fieldtomethodmapper.multichoice.1-11"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L89)*





___
<a id="jslinkhelper._fieldtomethodmapper.multichoice.2-11"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldMultiChoice_Edit"]

*Defined in [lib/helper/jslink.ts:90](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L90)*





___
<a id="jslinkhelper._fieldtomethodmapper.multichoice.3-11"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldMultiChoice_Edit"]

*Defined in [lib/helper/jslink.ts:91](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L91)*





___
<a id="jslinkhelper._fieldtomethodmapper.multichoice.4-11"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L88)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.note"></a>

###  Note

** Note**:  *`object`* 

*Defined in [lib/helper/jslink.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L93)*




<a id="jslinkhelper._fieldtomethodmapper.note.1-12"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldNote_Display"]

*Defined in [lib/helper/jslink.ts:95](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L95)*





___
<a id="jslinkhelper._fieldtomethodmapper.note.2-12"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldNote_Edit"]

*Defined in [lib/helper/jslink.ts:96](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L96)*





___
<a id="jslinkhelper._fieldtomethodmapper.note.3-12"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldNote_Edit"]

*Defined in [lib/helper/jslink.ts:97](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L97)*





___
<a id="jslinkhelper._fieldtomethodmapper.note.4-12"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L94)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.number"></a>

###  Number

** Number**:  *`object`* 

*Defined in [lib/helper/jslink.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L99)*




<a id="jslinkhelper._fieldtomethodmapper.number.1-13"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:101](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L101)*





___
<a id="jslinkhelper._fieldtomethodmapper.number.2-13"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldNumber_Edit"]

*Defined in [lib/helper/jslink.ts:102](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L102)*





___
<a id="jslinkhelper._fieldtomethodmapper.number.3-13"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldNumber_Edit"]

*Defined in [lib/helper/jslink.ts:103](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L103)*





___
<a id="jslinkhelper._fieldtomethodmapper.number.4-13"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:100](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L100)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.text"></a>

###  Text

** Text**:  *`object`* 

*Defined in [lib/helper/jslink.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L105)*




<a id="jslinkhelper._fieldtomethodmapper.text.1-14"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPField_FormDisplay_Default"]

*Defined in [lib/helper/jslink.ts:107](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L107)*





___
<a id="jslinkhelper._fieldtomethodmapper.text.2-14"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldText_Edit"]

*Defined in [lib/helper/jslink.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L108)*





___
<a id="jslinkhelper._fieldtomethodmapper.text.3-14"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldText_Edit"]

*Defined in [lib/helper/jslink.ts:109](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L109)*





___
<a id="jslinkhelper._fieldtomethodmapper.text.4-14"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:106](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L106)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.url"></a>

###  URL

** URL**:  *`object`* 

*Defined in [lib/helper/jslink.ts:111](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L111)*




<a id="jslinkhelper._fieldtomethodmapper.url.1-15"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldUrl_Display"]

*Defined in [lib/helper/jslink.ts:113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L113)*





___
<a id="jslinkhelper._fieldtomethodmapper.url.2-15"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPFieldUrl_Edit"]

*Defined in [lib/helper/jslink.ts:114](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L114)*





___
<a id="jslinkhelper._fieldtomethodmapper.url.3-15"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPFieldUrl_Edit"]

*Defined in [lib/helper/jslink.ts:115](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L115)*





___
<a id="jslinkhelper._fieldtomethodmapper.url.4-15"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:112](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L112)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.user"></a>

###  User

** User**:  *`object`* 

*Defined in [lib/helper/jslink.ts:117](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L117)*




<a id="jslinkhelper._fieldtomethodmapper.user.1-16"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldUser_Display"]

*Defined in [lib/helper/jslink.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L119)*





___
<a id="jslinkhelper._fieldtomethodmapper.user.2-16"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPClientPeoplePickerCSRTemplate"]

*Defined in [lib/helper/jslink.ts:120](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L120)*





___
<a id="jslinkhelper._fieldtomethodmapper.user.3-16"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPClientPeoplePickerCSRTemplate"]

*Defined in [lib/helper/jslink.ts:121](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L121)*





___
<a id="jslinkhelper._fieldtomethodmapper.user.4-16"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:118](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L118)*





___

___
<a id="jslinkhelper._fieldtomethodmapper.usermulti"></a>

###  UserMulti

** UserMulti**:  *`object`* 

*Defined in [lib/helper/jslink.ts:123](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L123)*




<a id="jslinkhelper._fieldtomethodmapper.usermulti.1-17"></a>

###  1

**●  1**:  *`any`*  =  ContextInfo.window["SPFieldUserMulti_Display"]

*Defined in [lib/helper/jslink.ts:125](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L125)*





___
<a id="jslinkhelper._fieldtomethodmapper.usermulti.2-17"></a>

###  2

**●  2**:  *`any`*  =  ContextInfo.window["SPClientPeoplePickerCSRTemplate"]

*Defined in [lib/helper/jslink.ts:126](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L126)*





___
<a id="jslinkhelper._fieldtomethodmapper.usermulti.3-17"></a>

###  3

**●  3**:  *`any`*  =  ContextInfo.window["SPClientPeoplePickerCSRTemplate"]

*Defined in [lib/helper/jslink.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L127)*





___
<a id="jslinkhelper._fieldtomethodmapper.usermulti.4-17"></a>

###  4

**●  4**:  *`any`*  =  ContextInfo.window["RenderFieldValueDefault"]

*Defined in [lib/helper/jslink.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/jslink.ts#L124)*





___

___

___


