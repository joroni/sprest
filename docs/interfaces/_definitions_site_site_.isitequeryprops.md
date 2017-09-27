[gd-sprest](../README.md) > ["definitions/site/site"](../modules/_definitions_site_site_.md) > [ISiteQueryProps](../interfaces/_definitions_site_site_.isitequeryprops.md)



# Interface: ISiteQueryProps


Site Query Properties

## Hierarchy

**ISiteQueryProps**

↳  [ISiteResult](_definitions_site_site_.isiteresult.md)




↳  [ISite](_definitions_site_site_.isite.md)









## Methods
<a id="audit"></a>

###  Audit

► **Audit**(): [IBase](_definitions_lib_base_.ibase.md)[IAudit](_definitions_lib_types_.iaudit.md)




*Defined in [definitions/site/site.ts:228](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L228)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IAudit](_definitions_lib_types_.iaudit.md)





___

<a id="eventreceivers"></a>

###  EventReceivers

► **EventReceivers**(): [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)

► **EventReceivers**(id: *`string`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




*Defined in [definitions/site/site.ts:233](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L233)*



Gets the event receivers associated with the site.




**Returns:** [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)




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




*Defined in [definitions/site/site.ts:244](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L244)*



Gets a value that specifies the collection of the site collection features for the site collection that contains the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="owner"></a>

###  Owner

► **Owner**(): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/site/site.ts:249](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L249)*



Gets or sets the owner of the site collection. (Read-only in sandboxed solutions.)




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="recyclebin"></a>

###  RecycleBin

► **RecycleBin**(): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IRecycleBinItem](_definitions_lib_types_.irecyclebinitem.md)




*Defined in [definitions/site/site.ts:252](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L252)*



Gets a value that specifies the collection of recycle bin items for the site collection.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IRecycleBinItem](_definitions_lib_types_.irecyclebinitem.md)





___

<a id="rootweb"></a>

###  RootWeb

► **RootWeb**(): [IWeb](_definitions_site_web_.iweb.md)




*Defined in [definitions/site/site.ts:257](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L257)*



Gets a value that returns the top-level site of the site collection.




**Returns:** [IWeb](_definitions_site_web_.iweb.md)





___

<a id="secondarycontact"></a>

###  SecondaryContact

► **SecondaryContact**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/site.ts:259](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L259)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="usercustomactions"></a>

###  UserCustomActions

► **UserCustomActions**(): [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)

► **UserCustomActions**(id: *`string`*): [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)




*Defined in [definitions/site/site.ts:264](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L264)*



Gets the user custom action for the list.




**Returns:** [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)




*Defined in [definitions/site/site.ts:270](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/site.ts#L270)*



Gets the user custom action(s) for the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the user custom action. |





**Returns:** [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)





___


