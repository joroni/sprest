[gd-sprest](../README.md) > ["lib/helper/spCfg"](../modules/_lib_helper_spcfg_.md) > [SPConfig](../classes/_lib_helper_spcfg_.spconfig.md)



# Class: SPConfig


/

## Index

### Constructors

* [constructor](_lib_helper_spcfg_.spconfig.md#constructor)


### Methods

* [createContentTypes](_lib_helper_spcfg_.spconfig.md#createcontenttypes)
* [createFields](_lib_helper_spcfg_.spconfig.md#createfields)
* [createLists](_lib_helper_spcfg_.spconfig.md#createlists)
* [createUserCustomActions](_lib_helper_spcfg_.spconfig.md#createusercustomactions)
* [createViews](_lib_helper_spcfg_.spconfig.md#createviews)
* [createWebParts](_lib_helper_spcfg_.spconfig.md#createwebparts)
* [install](_lib_helper_spcfg_.spconfig.md#install)
* [installByType](_lib_helper_spcfg_.spconfig.md#installbytype)
* [installList](_lib_helper_spcfg_.spconfig.md#installlist)
* [installSite](_lib_helper_spcfg_.spconfig.md#installsite)
* [installSiteCustomAction](_lib_helper_spcfg_.spconfig.md#installsitecustomaction)
* [installWeb](_lib_helper_spcfg_.spconfig.md#installweb)
* [installWebCustomAction](_lib_helper_spcfg_.spconfig.md#installwebcustomaction)
* [isInCollection](_lib_helper_spcfg_.spconfig.md#isincollection)
* [removeContentTypes](_lib_helper_spcfg_.spconfig.md#removecontenttypes)
* [removeFields](_lib_helper_spcfg_.spconfig.md#removefields)
* [removeLists](_lib_helper_spcfg_.spconfig.md#removelists)
* [removeUserCustomActions](_lib_helper_spcfg_.spconfig.md#removeusercustomactions)
* [removeWebParts](_lib_helper_spcfg_.spconfig.md#removewebparts)
* [uninstall](_lib_helper_spcfg_.spconfig.md#uninstall)
* [uninstallByType](_lib_helper_spcfg_.spconfig.md#uninstallbytype)
* [uninstallList](_lib_helper_spcfg_.spconfig.md#uninstalllist)
* [uninstallSite](_lib_helper_spcfg_.spconfig.md#uninstallsite)
* [uninstallSiteCustomAction](_lib_helper_spcfg_.spconfig.md#uninstallsitecustomaction)
* [uninstallWeb](_lib_helper_spcfg_.spconfig.md#uninstallweb)
* [uninstallWebCustomAction](_lib_helper_spcfg_.spconfig.md#uninstallwebcustomaction)
* [updateFieldSchemaXml](_lib_helper_spcfg_.spconfig.md#updatefieldschemaxml)
* [updateLists](_lib_helper_spcfg_.spconfig.md#updatelists)
* [updateViews](_lib_helper_spcfg_.spconfig.md#updateviews)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new SPConfig**(cfg: *[ISPConfigProps](../interfaces/_definitions_lib_helper_.ispconfigprops.md)*, webUrl?: *`string`*): [SPConfig](_lib_helper_spcfg_.spconfig.md)



*Defined in [lib/helper/spCfg.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L38)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cfg | [ISPConfigProps](../interfaces/_definitions_lib_helper_.ispconfigprops.md)   |  - |
| webUrl | `string`   |  - |





**Returns:** [SPConfig](_lib_helper_spcfg_.spconfig.md)

---



## Methods
<a id="createcontenttypes"></a>

### «Private» createContentTypes

► **createContentTypes**(contentTypes: *[IContentTypeResults](../interfaces/_definitions_contenttype_contenttypes_.icontenttyperesults.md)*, cfgContentTypes: *`Array`.<[ISPCfgContentTypeInfo](../interfaces/_definitions_lib_helper_.ispcfgcontenttypeinfo.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:134](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L134)*



Methods


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| contentTypes | [IContentTypeResults](../interfaces/_definitions_contenttype_contenttypes_.icontenttyperesults.md)   |  - |
| cfgContentTypes | `Array`.<[ISPCfgContentTypeInfo](../interfaces/_definitions_lib_helper_.ispcfgcontenttypeinfo.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="createfields"></a>

### «Private» createFields

► **createFields**(fields: *[IFieldResults](../interfaces/_definitions_field_fields_.ifieldresults.md)*, cfgFields: *`Array`.<[ISPCfgFieldInfo](../interfaces/_definitions_lib_helper_.ispcfgfieldinfo.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:317](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L317)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fields | [IFieldResults](../interfaces/_definitions_field_fields_.ifieldresults.md)   |  - |
| cfgFields | `Array`.<[ISPCfgFieldInfo](../interfaces/_definitions_lib_helper_.ispcfgfieldinfo.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="createlists"></a>

### «Private» createLists

► **createLists**(lists: *[IListResults](../interfaces/_definitions_list_lists_.ilistresults.md)*, cfgLists: *`Array`.<[ISPCfgListInfo](../interfaces/_definitions_lib_helper_.ispcfglistinfo.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:375](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L375)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| lists | [IListResults](../interfaces/_definitions_list_lists_.ilistresults.md)   |  - |
| cfgLists | `Array`.<[ISPCfgListInfo](../interfaces/_definitions_lib_helper_.ispcfglistinfo.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="createusercustomactions"></a>

### «Private» createUserCustomActions

► **createUserCustomActions**(customActions: *[IUserCustomActionResults](../interfaces/_definitions_customaction_usercustomactions_.iusercustomactionresults.md)*, cfgCustomActions: *`Array`.<[IUserCustomActionCreationInformation](../interfaces/_definitions_lib_types_.iusercustomactioncreationinformation.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:468](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L468)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| customActions | [IUserCustomActionResults](../interfaces/_definitions_customaction_usercustomactions_.iusercustomactionresults.md)   |  - |
| cfgCustomActions | `Array`.<[IUserCustomActionCreationInformation](../interfaces/_definitions_lib_types_.iusercustomactioncreationinformation.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="createviews"></a>

### «Private» createViews

► **createViews**(views: *[IViewResults](../interfaces/_definitions_list_views_.iviewresults.md)*, cfgViews: *`Array`.<[ISPCfgViewInfo](../interfaces/_definitions_lib_helper_.ispcfgviewinfo.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:533](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L533)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| views | [IViewResults](../interfaces/_definitions_list_views_.iviewresults.md)   |  - |
| cfgViews | `Array`.<[ISPCfgViewInfo](../interfaces/_definitions_lib_helper_.ispcfgviewinfo.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="createwebparts"></a>

### «Private» createWebParts

► **createWebParts**(): `void`




*Defined in [lib/helper/spCfg.ts:588](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L588)*





**Returns:** `void`





___

<a id="install"></a>

###  install

► **install**(callback?: *`any`*, cfgType?: *`number`*, targetName?: *`string`*): `void`




*Defined in [lib/helper/spCfg.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L56)*



Public Methods


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `any`   |  - |
| cfgType | `number`   |  - |
| targetName | `string`   |  - |





**Returns:** `void`





___

<a id="installbytype"></a>

###  installByType

► **installByType**(cfgType: *`number`*, callback?: *`any`*, targetName?: *`string`*): `void`




*Defined in [lib/helper/spCfg.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L81)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cfgType | `number`   |  - |
| callback | `any`   |  - |
| targetName | `string`   |  - |





**Returns:** `void`





___

<a id="installlist"></a>

###  installList

► **installList**(listName: *`string`*, callback?: *`any`*): `void`




*Defined in [lib/helper/spCfg.ts:84](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L84)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listName | `string`   |  - |
| callback | `any`   |  - |





**Returns:** `void`





___

<a id="installsite"></a>

### «Private» installSite

► **installSite**(): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:682](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L682)*





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="installsitecustomaction"></a>

###  installSiteCustomAction

► **installSiteCustomAction**(caName: *`string`*, callback?: *`any`*): `void`




*Defined in [lib/helper/spCfg.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L87)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| caName | `string`   |  - |
| callback | `any`   |  - |





**Returns:** `void`





___

<a id="installweb"></a>

### «Private» installWeb

► **installWeb**(): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:715](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L715)*





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="installwebcustomaction"></a>

###  installWebCustomAction

► **installWebCustomAction**(caName: *`string`*, callback?: *`any`*): `void`




*Defined in [lib/helper/spCfg.ts:90](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L90)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| caName | `string`   |  - |
| callback | `any`   |  - |





**Returns:** `void`





___

<a id="isincollection"></a>

### «Private» isInCollection

► **isInCollection**(key: *`string`*, value: *`string`*, collection: *`Array`.<`any`>*): `any`




*Defined in [lib/helper/spCfg.ts:750](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L750)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `string`   |  - |
| value | `string`   |  - |
| collection | `Array`.<`any`>   |  - |





**Returns:** `any`





___

<a id="removecontenttypes"></a>

### «Private» removeContentTypes

► **removeContentTypes**(contentTypes: *[IContentTypeResults](../interfaces/_definitions_contenttype_contenttypes_.icontenttyperesults.md)*, cfgContentTypes: *`Array`.<[ISPCfgContentTypeInfo](../interfaces/_definitions_lib_helper_.ispcfgcontenttypeinfo.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:770](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L770)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| contentTypes | [IContentTypeResults](../interfaces/_definitions_contenttype_contenttypes_.icontenttyperesults.md)   |  - |
| cfgContentTypes | `Array`.<[ISPCfgContentTypeInfo](../interfaces/_definitions_lib_helper_.ispcfgcontenttypeinfo.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="removefields"></a>

### «Private» removeFields

► **removeFields**(fields: *[IFieldResults](../interfaces/_definitions_field_fields_.ifieldresults.md)*, cfgFields: *`Array`.<[ISPCfgFieldInfo](../interfaces/_definitions_lib_helper_.ispcfgfieldinfo.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:806](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L806)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fields | [IFieldResults](../interfaces/_definitions_field_fields_.ifieldresults.md)   |  - |
| cfgFields | `Array`.<[ISPCfgFieldInfo](../interfaces/_definitions_lib_helper_.ispcfgfieldinfo.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="removelists"></a>

### «Private» removeLists

► **removeLists**(lists: *[IListResults](../interfaces/_definitions_list_lists_.ilistresults.md)*, cfgLists: *`Array`.<[ISPCfgListInfo](../interfaces/_definitions_lib_helper_.ispcfglistinfo.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:842](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L842)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| lists | [IListResults](../interfaces/_definitions_list_lists_.ilistresults.md)   |  - |
| cfgLists | `Array`.<[ISPCfgListInfo](../interfaces/_definitions_lib_helper_.ispcfglistinfo.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="removeusercustomactions"></a>

### «Private» removeUserCustomActions

► **removeUserCustomActions**(customActions: *[IUserCustomActionResults](../interfaces/_definitions_customaction_usercustomactions_.iusercustomactionresults.md)*, cfgCustomActions: *`Array`.<[IUserCustomActionCreationInformation](../interfaces/_definitions_lib_types_.iusercustomactioncreationinformation.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:896](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L896)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| customActions | [IUserCustomActionResults](../interfaces/_definitions_customaction_usercustomactions_.iusercustomactionresults.md)   |  - |
| cfgCustomActions | `Array`.<[IUserCustomActionCreationInformation](../interfaces/_definitions_lib_types_.iusercustomactioncreationinformation.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="removewebparts"></a>

### «Private» removeWebParts

► **removeWebParts**(): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:952](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L952)*





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="uninstall"></a>

###  uninstall

► **uninstall**(callback?: *`any`*, cfgType?: *`number`*, targetName?: *`string`*): `void`




*Defined in [lib/helper/spCfg.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L93)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `any`   |  - |
| cfgType | `number`   |  - |
| targetName | `string`   |  - |





**Returns:** `void`





___

<a id="uninstallbytype"></a>

###  uninstallByType

► **uninstallByType**(cfgType: *`number`*, callback?: *`any`*, targetName?: *`string`*): `void`




*Defined in [lib/helper/spCfg.ts:118](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L118)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cfgType | `number`   |  - |
| callback | `any`   |  - |
| targetName | `string`   |  - |





**Returns:** `void`





___

<a id="uninstalllist"></a>

###  uninstallList

► **uninstallList**(listName: *`string`*, callback?: *`any`*): `void`




*Defined in [lib/helper/spCfg.ts:121](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L121)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listName | `string`   |  - |
| callback | `any`   |  - |





**Returns:** `void`





___

<a id="uninstallsite"></a>

### «Private» uninstallSite

► **uninstallSite**(): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:1193](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L1193)*





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="uninstallsitecustomaction"></a>

###  uninstallSiteCustomAction

► **uninstallSiteCustomAction**(caName: *`string`*, callback?: *`any`*): `void`




*Defined in [lib/helper/spCfg.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L124)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| caName | `string`   |  - |
| callback | `any`   |  - |





**Returns:** `void`





___

<a id="uninstallweb"></a>

### «Private» uninstallWeb

► **uninstallWeb**(): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:1223](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L1223)*





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="uninstallwebcustomaction"></a>

###  uninstallWebCustomAction

► **uninstallWebCustomAction**(caName: *`string`*, callback?: *`any`*): `void`




*Defined in [lib/helper/spCfg.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L127)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| caName | `string`   |  - |
| callback | `any`   |  - |





**Returns:** `void`





___

<a id="updatefieldschemaxml"></a>

### «Private» updateFieldSchemaXml

► **updateFieldSchemaXml**(schemaXml: *`string`*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:1019](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L1019)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| schemaXml | `string`   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="updatelists"></a>

### «Private» updateLists

► **updateLists**(cfgLists: *`Array`.<[ISPCfgListInfo](../interfaces/_definitions_lib_helper_.ispcfglistinfo.md)>*, idx?: *`number`*, promise?: *[Promise](_utils_promise_.promise.md)*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:1057](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L1057)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cfgLists | `Array`.<[ISPCfgListInfo](../interfaces/_definitions_lib_helper_.ispcfglistinfo.md)>   |  - |
| idx | `number`   |  - |
| promise | [Promise](_utils_promise_.promise.md)   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___

<a id="updateviews"></a>

### «Private» updateViews

► **updateViews**(views: *[IViewResults](../interfaces/_definitions_list_views_.iviewresults.md)*, cfgViews: *`Array`.<[ISPCfgViewInfo](../interfaces/_definitions_lib_helper_.ispcfgviewinfo.md)>*): [Promise](_utils_promise_.promise.md)




*Defined in [lib/helper/spCfg.ts:1134](https://github.com/gunjandatta/sprest/blob/3de79f1/src/lib/helper/spCfg.ts#L1134)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| views | [IViewResults](../interfaces/_definitions_list_views_.iviewresults.md)   |  - |
| cfgViews | `Array`.<[ISPCfgViewInfo](../interfaces/_definitions_lib_helper_.ispcfgviewinfo.md)>   |  - |





**Returns:** [Promise](_utils_promise_.promise.md)





___


