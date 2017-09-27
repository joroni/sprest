[gd-sprest](../README.md) > ["definitions/lib/helper"](../modules/_definitions_lib_helper_.md) > [ISPConfig](../interfaces/_definitions_lib_helper_.ispconfig.md)



# Interface: ISPConfig


SharePoint Configuration Methods


## Constructors
<a id="constructor"></a>


### ⊕ **new ISPConfig**(cfg: *[ISPConfigProps](_definitions_lib_helper_.ispconfigprops.md)*, webUrl?: *`string`*): [ISPConfig](_definitions_lib_helper_.ispconfig.md)



*Defined in [definitions/lib/helper.ts:324](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L324)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cfg | [ISPConfigProps](_definitions_lib_helper_.ispconfigprops.md)   |  The SharePoint configuration information. |
| webUrl | `string`   |  An optional string representing the relative web url. |





**Returns:** [ISPConfig](_definitions_lib_helper_.ispconfig.md)

---


## Methods
<a id="install"></a>

###  install

► **install**(callback?: *function*): `any`




*Defined in [definitions/lib/helper.ts:336](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L336)*



Method to install the configuration


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="installbytype"></a>

###  installByType

► **installByType**(cfgType: *[ISPConfigTypes](_definitions_lib_helper_.ispconfigtypes.md)*, callback?: *`any`*, targetName?: *`string`*): `any`




*Defined in [definitions/lib/helper.ts:344](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L344)*



Method to install by the configuration type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cfgType | [ISPConfigTypes](_definitions_lib_helper_.ispconfigtypes.md)   |  The configuration type. |
| callback | `any`   |  An optional function called after the execution completes. |
| targetName | `string`   |  The target configuration type to install. |





**Returns:** `any`





___

<a id="installcontenttype"></a>

###  installContentType

► **installContentType**(ctName: *`string`*, callback?: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:351](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L351)*



Method to install a specific content type


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctName | `string`   |  The content type to install. |
| callback | `any`   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="installlist"></a>

###  installList

► **installList**(listName: *`string`*, callback?: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:358](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L358)*



Method to install a specific list


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listName | `string`   |  The list to install. |
| callback | `any`   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="installsitecustomaction"></a>

###  installSiteCustomAction

► **installSiteCustomAction**(caName: *`string`*, callback?: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:365](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L365)*



Method to install a specific site custom action


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| caName | `string`   |  The site user custom action to install. |
| callback | `any`   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="installwebcustomaction"></a>

###  installWebCustomAction

► **installWebCustomAction**(caName: *`string`*, callback?: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:372](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L372)*



Method to install a specific web custom action


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| caName | `string`   |  The web user custom action to install. |
| callback | `any`   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="uninstall"></a>

###  uninstall

► **uninstall**(callback?: *function*): `any`




*Defined in [definitions/lib/helper.ts:378](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L378)*



Method to install the configuration


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="uninstallbytype"></a>

###  uninstallByType

► **uninstallByType**(cfgType: *[ISPConfigTypes](_definitions_lib_helper_.ispconfigtypes.md)*, callback?: *`any`*, targetName?: *`string`*): `any`




*Defined in [definitions/lib/helper.ts:386](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L386)*



Method to uninstall by the configuration type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cfgType | [ISPConfigTypes](_definitions_lib_helper_.ispconfigtypes.md)   |  The configuration type. |
| callback | `any`   |  An optional function called after the execution completes. |
| targetName | `string`   |  The target configuration type to uninstall. |





**Returns:** `any`





___

<a id="uninstallcontenttype"></a>

###  uninstallContentType

► **uninstallContentType**(ctName: *`string`*, callback?: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:393](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L393)*



Method to uninstall a specific content type


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctName | `string`   |  The content type to uninstall. |
| callback | `any`   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="uninstalllist"></a>

###  uninstallList

► **uninstallList**(listName: *`string`*, callback?: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:400](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L400)*



Method to uninstall a specific list


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listName | `string`   |  The list to uninstall. |
| callback | `any`   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="uninstallsitecustomaction"></a>

###  uninstallSiteCustomAction

► **uninstallSiteCustomAction**(caName: *`string`*, callback?: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:407](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L407)*



Method to uninstall a specific site custom action


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| caName | `string`   |  The site user custom action to uninstall. |
| callback | `any`   |  An optional function called after the execution completes. |





**Returns:** `any`





___

<a id="uninstallwebcustomaction"></a>

###  uninstallWebCustomAction

► **uninstallWebCustomAction**(caName: *`string`*, callback?: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:414](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L414)*



Method to uninstall a specific web custom action


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| caName | `string`   |  The web user custom action to uninstall. |
| callback | `any`   |  An optional function called after the execution completes. |





**Returns:** `any`





___


