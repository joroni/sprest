[gd-sprest](../README.md) > ["definitions/site/site"](../modules/_definitions_site_site_.md) > [ISite](../interfaces/_definitions_site_site_.isite.md)



# Interface: ISite


Site

## Hierarchy


 [ISiteMethods](_definitions_site_site_.isitemethods.md)




 [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[ISite](_definitions_site_site_.isite.md), [ISiteResult](_definitions_site_site_.isiteresult.md), [ISiteQueryResult](_definitions_site_site_.isitequeryresult.md)

**↳ ISite**








## Constructors
<a id="constructor"></a>


### ⊕ **new ISite**(url?: *`string`*, targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [ISite](_definitions_site_site_.isite.md)



*Defined in [definitions/site/site.ts:318](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L318)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  (Optional) The site url. |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  (Optional) The target information. |





**Returns:** [ISite](_definitions_site_site_.isite.md)

---


## Properties
<a id="existsfl"></a>

###  existsFl

**●  existsFl**:  *`boolean`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[existsFl](_definitions_lib_base_.ibase.md#existsfl)*

*Defined in [definitions/lib/base.ts:12](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L12)*



True, if the object exists, false otherwise.




___

<a id="parent"></a>

###  parent

**●  parent**:  *`any`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[parent](_definitions_lib_base_.ibase.md#parent)*

*Defined in [definitions/lib/base.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L15)*



The parent object, which created this object.




___

<a id="requesttype"></a>

###  requestType

**●  requestType**:  *[IRequestType](../modules/_definitions_lib_requesttype_.md#irequesttype)* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[requestType](_definitions_lib_base_.ibase.md#requesttype)*

*Defined in [definitions/lib/base.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L21)*



The request type




___

<a id="response"></a>

###  response

**●  response**:  *`string`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[response](_definitions_lib_base_.ibase.md#response)*

*Defined in [definitions/lib/base.ts:18](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L18)*



The response




___


## Methods
<a id="audit"></a>

###  Audit

► **Audit**(): [IBase](_definitions_lib_base_.ibase.md)[IAudit](_definitions_lib_types_.iaudit.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[Audit](_definitions_site_site_.isitequeryprops.md#audit)*

*Defined in [definitions/site/site.ts:228](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L228)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IAudit](_definitions_lib_types_.iaudit.md)





___

<a id="eventreceivers"></a>

###  EventReceivers

► **EventReceivers**(): [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)

► **EventReceivers**(id: *`string`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[EventReceivers](_definitions_site_site_.isitequeryprops.md#eventreceivers)*

*Defined in [definitions/site/site.ts:233](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L233)*



Gets the event receivers associated with the site.




**Returns:** [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[EventReceivers](_definitions_site_site_.isitequeryprops.md#eventreceivers)*

*Defined in [definitions/site/site.ts:239](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L239)*



Gets the event receiver associated with the site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the event receiver. |





**Returns:** [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)





___

<a id="features"></a>

###  Features

► **Features**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[Features](_definitions_site_site_.isitequeryprops.md#features)*

*Defined in [definitions/site/site.ts:244](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L244)*



Gets a value that specifies the collection of the site collection features for the site collection that contains the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="owner"></a>

###  Owner

► **Owner**(): [IUser](_definitions_user_user_.iuser.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[Owner](_definitions_site_site_.isitequeryprops.md#owner)*

*Defined in [definitions/site/site.ts:249](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L249)*



Gets or sets the owner of the site collection. (Read-only in sandboxed solutions.)




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="recyclebin"></a>

###  RecycleBin

► **RecycleBin**(): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IRecycleBinItem](_definitions_lib_types_.irecyclebinitem.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[RecycleBin](_definitions_site_site_.isitequeryprops.md#recyclebin)*

*Defined in [definitions/site/site.ts:252](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L252)*



Gets a value that specifies the collection of recycle bin items for the site collection.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IRecycleBinItem](_definitions_lib_types_.irecyclebinitem.md)





___

<a id="rootweb"></a>

###  RootWeb

► **RootWeb**(): [IWeb](_definitions_site_web_.iweb.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[RootWeb](_definitions_site_site_.isitequeryprops.md#rootweb)*

*Defined in [definitions/site/site.ts:257](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L257)*



Gets a value that returns the top-level site of the site collection.




**Returns:** [IWeb](_definitions_site_web_.iweb.md)





___

<a id="secondarycontact"></a>

###  SecondaryContact

► **SecondaryContact**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[SecondaryContact](_definitions_site_site_.isitequeryprops.md#secondarycontact)*

*Defined in [definitions/site/site.ts:259](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L259)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="usercustomactions"></a>

###  UserCustomActions

► **UserCustomActions**(): [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)

► **UserCustomActions**(id: *`string`*): [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[UserCustomActions](_definitions_site_site_.isitequeryprops.md#usercustomactions)*

*Defined in [definitions/site/site.ts:264](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L264)*



Gets the user custom action for the list.




**Returns:** [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)




*Inherited from [ISiteQueryProps](_definitions_site_site_.isitequeryprops.md).[UserCustomActions](_definitions_site_site_.isitequeryprops.md#usercustomactions)*

*Defined in [definitions/site/site.ts:270](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L270)*



Gets the user custom action(s) for the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the user custom action. |





**Returns:** [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)





___

<a id="createpreviewspsite"></a>

###  createPreviewSPSite

► **createPreviewSPSite**(upgrade: *`any`*, sendEmail: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[createPreviewSPSite](_definitions_site_site_.isitemethods.md#createpreviewspsite)*

*Defined in [definitions/site/site.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L26)*



Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| upgrade | `any`   |  If true, the evaluation site collection MUST be upgraded when it is created. If false, the evaluation site collection MUST NOT be upgraded when it is created. |
| sendEmail | `any`   |  If true, a notification email MUST be sent to the requestor and the site collection administrators at the completion of the creation of the evaluation site collection. If false, such notification MUST NOT be sent. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="done"></a>

###  done

► **done**(callback?: *function*): `any`

► **done**(callback?: *function*): `any`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[done](_definitions_lib_base_.ibase.md#done)*

*Defined in [definitions/lib/base.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L27)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[done](_definitions_lib_base_.ibase.md#done)*

*Defined in [definitions/lib/base.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L33)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`





___

<a id="execute"></a>

###  execute

► **execute**(callback?: *function*): [ISite](_definitions_site_site_.isite.md)

► **execute**(waitFl: *`boolean`*): [ISite](_definitions_site_site_.isite.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [ISite](_definitions_site_site_.isite.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [ISite](_definitions_site_site_.isite.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [ISite](_definitions_site_site_.isite.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [ISite](_definitions_site_site_.isite.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [ISiteResult](_definitions_site_site_.isiteresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [ISiteResult](_definitions_site_site_.isiteresult.md)





___

<a id="extendupgradereminderdate"></a>

###  extendUpgradeReminderDate

► **extendUpgradeReminderDate**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[extendUpgradeReminderDate](_definitions_site_site_.isitemethods.md#extendupgradereminderdate)*

*Defined in [definitions/site/site.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L31)*



Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getcatalog"></a>

###  getCatalog

► **getCatalog**(typeCatalog: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[getCatalog](_definitions_site_site_.isitemethods.md#getcatalog)*

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




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[getChanges](_definitions_site_site_.isitemethods.md#getchanges)*

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




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[getCustomListTemplates](_definitions_site_site_.isitemethods.md#getcustomlisttemplates)*

*Defined in [definitions/site/site.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L49)*



Specifies the collection of custom list templates for a given site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| web | `any`   |  Specifies the site that contains the custom list templates to be returned. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="getwebtemplates"></a>

###  getWebTemplates

► **getWebTemplates**(LCID: *`any`*, overrideCompatLevel: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[getWebTemplates](_definitions_site_site_.isitemethods.md#getwebtemplates)*

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




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[invalidate](_definitions_site_site_.isitemethods.md#invalidate)*

*Defined in [definitions/site/site.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L61)*



Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="needsupgradebytype"></a>

###  needsUpgradeByType

► **needsUpgradeByType**(versionUpgrade: *`any`*, recursive: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[needsUpgradeByType](_definitions_site_site_.isitemethods.md#needsupgradebytype)*

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




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[openWeb](_definitions_site_site_.isitemethods.md#openweb)*

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




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[openWebById](_definitions_site_site_.isitemethods.md#openwebbyid)*

*Defined in [definitions/site/site.ts:80](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L80)*



Returns the site with the specified GUID.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gWebId | `any`   |  A GUID that specifies which site to return. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IWeb](_definitions_site_web_.iweb.md), [IWebResult](_definitions_site_web_.iwebresult.md), [IWebQueryResult](_definitions_site_web_.iwebqueryresult.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[ISiteResult](_definitions_site_site_.isiteresult.md), [ISiteQueryResult](_definitions_site_site_.isitequeryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISiteResult](_definitions_site_site_.isiteresult.md), [ISiteQueryResult](_definitions_site_site_.isitequeryresult.md)





___

<a id="runhealthcheck"></a>

###  runHealthCheck

► **runHealthCheck**(ruleId: *`any`*, bRepair: *`any`*, bRunAlways: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[runHealthCheck](_definitions_site_site_.isitemethods.md#runhealthcheck)*

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




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[runUpgradeSiteSession](_definitions_site_site_.isitemethods.md#runupgradesitesession)*

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

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[ISiteResult](_definitions_site_site_.isiteresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[ISiteResult](_definitions_site_site_.isiteresult.md)>





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[update](_definitions_site_site_.isitemethods.md#update)*

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




*Inherited from [ISiteMethods](_definitions_site_site_.isitemethods.md).[updateClientObjectModelUseRemoteAPIsPermissionSetting](_definitions_site_site_.isitemethods.md#updateclientobjectmodeluseremoteapispermissionsetting)*

*Defined in [definitions/site/site.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L108)*



Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| requireUseRemoteAPIs | `any`   |  Specifies whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


