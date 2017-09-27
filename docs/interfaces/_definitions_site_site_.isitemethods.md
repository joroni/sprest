[gd-sprest](../README.md) > ["definitions/site/site"](../modules/_definitions_site_site_.md) > [ISiteMethods](../interfaces/_definitions_site_site_.isitemethods.md)



# Interface: ISiteMethods


Site Methods

## Hierarchy

**ISiteMethods**

↳  [ISiteQueryResult](_definitions_site_site_.isitequeryresult.md)




↳  [ISiteResult](_definitions_site_site_.isiteresult.md)




↳  [ISite](_definitions_site_site_.isite.md)









## Methods
<a id="createpreviewspsite"></a>

###  createPreviewSPSite

► **createPreviewSPSite**(upgrade: *`any`*, sendEmail: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L26)*



Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| upgrade | `any`   |  If true, the evaluation site collection MUST be upgraded when it is created. If false, the evaluation site collection MUST NOT be upgraded when it is created. |
| sendEmail | `any`   |  If true, a notification email MUST be sent to the requestor and the site collection administrators at the completion of the creation of the evaluation site collection. If false, such notification MUST NOT be sent. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="extendupgradereminderdate"></a>

###  extendUpgradeReminderDate

► **extendUpgradeReminderDate**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L31)*



Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getcatalog"></a>

###  getCatalog

► **getCatalog**(typeCatalog: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L37)*



Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| typeCatalog | `any`   |  Specifies the list template type for the gallery. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getchanges"></a>

###  getChanges

► **getChanges**(query: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L43)*



Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | `any`   |  The change query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getcustomlisttemplates"></a>

###  getCustomListTemplates

► **getCustomListTemplates**(web: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L49)*



Specifies the collection of custom list templates for a given site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| web | `any`   |  Specifies the site that contains the custom list templates to be returned. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getwebtemplates"></a>

###  getWebTemplates

► **getWebTemplates**(LCID: *`any`*, overrideCompatLevel: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L56)*



Returns the collection of site definitions that are available for creating Web sites within the site collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| LCID | `any`   |  A 32-bit unsigned integer that specifies the language of the site definitions that are returned from the site collection. |
| overrideCompatLevel | `any`   |  Specifies the compatibility level of the site to return from the site collection. If this value is 0, the compatibility level of the site is used. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="invalidate"></a>

###  invalidate

► **invalidate**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L61)*



Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="needsupgradebytype"></a>

###  needsUpgradeByType

► **needsUpgradeByType**(versionUpgrade: *`any`*, recursive: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L68)*



Returns true if the object needs to be upgraded; otherwise, false.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| versionUpgrade | `any`   |  If true, version-to-version site collection upgrade is requested; otherwise false for build-to-build site collection upgrade. |
| recursive | `any`   |  If true, child upgradable objects will be inspected; otherwise false. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="openweb"></a>

###  openWeb

► **openWeb**(strUrl: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IWeb](_definitions_site_web_.iweb.md), [IWebResult](_definitions_site_web_.iwebresult.md), [IWebQueryResult](_definitions_site_web_.iwebqueryresult.md)




*Defined in [definitions/site/site.ts:74](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L74)*



Returns the site at the specified URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| strUrl | `any`   |  The server-relative URL or site-relative URL of the site to return. If strUrl is empty, the top-level site is returned. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IWeb](_definitions_site_web_.iweb.md), [IWebResult](_definitions_site_web_.iwebresult.md), [IWebQueryResult](_definitions_site_web_.iwebqueryresult.md)





___

<a id="openwebbyid"></a>

###  openWebById

► **openWebById**(gWebId: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IWeb](_definitions_site_web_.iweb.md), [IWebResult](_definitions_site_web_.iwebresult.md), [IWebQueryResult](_definitions_site_web_.iwebqueryresult.md)




*Defined in [definitions/site/site.ts:80](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L80)*



Returns the site with the specified GUID.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gWebId | `any`   |  A GUID that specifies which site to return. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IWeb](_definitions_site_web_.iweb.md), [IWebResult](_definitions_site_web_.iwebresult.md), [IWebQueryResult](_definitions_site_web_.iwebqueryresult.md)





___

<a id="runhealthcheck"></a>

###  runHealthCheck

► **runHealthCheck**(ruleId: *`any`*, bRepair: *`any`*, bRunAlways: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L88)*



Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ruleId | `any`   |  Specifies the rule or rules to be run. If the value is an empty GUID, all rules are run, otherwise only the specified rule is run. |
| bRepair | `any`   |  Specifies whether repairable rules are to be run in repair mode. |
| bRunAlways | `any`   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="runupgradesitesession"></a>

###  runUpgradeSiteSession

► **runUpgradeSiteSession**(versionUpgrade: *`any`*, queueOnly: *`any`*, sendEmail: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:96](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L96)*



Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| versionUpgrade | `any`   |  If true, specifies that a version-to-version upgrade will be performed. If false, specifies that a build-to-build upgrade will be performed. |
| queueOnly | `any`   |  If true, specifies that the upgrade will not be run immediately; it will be queued for a later run. |
| sendEmail | `any`   |  If true, a notification email will be sent to the requestor and the site collection administrators at the completion of the site collection upgrade. If false, such notification will not be sent. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:102](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L102)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The list properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="updateclientobjectmodeluseremoteapispermissionsetting"></a>

###  updateClientObjectModelUseRemoteAPIsPermissionSetting

► **updateClientObjectModelUseRemoteAPIsPermissionSetting**(requireUseRemoteAPIs: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L108)*



Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requireUseRemoteAPIs | `any`   |  Specifies whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


