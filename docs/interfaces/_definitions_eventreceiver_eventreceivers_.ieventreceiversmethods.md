[gd-sprest](../README.md) > ["definitions/eventReceiver/eventReceivers"](../modules/_definitions_eventreceiver_eventreceivers_.md) > [IEventReceiversMethods](../interfaces/_definitions_eventreceiver_eventreceivers_.ieventreceiversmethods.md)



# Interface: IEventReceiversMethods


Methods

## Hierarchy

**IEventReceiversMethods**

↳  [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)




↳  [IEventReceiverResults](_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(parameters: *[IEventReceiverDefinitionCreationInformation](_definitions_lib_types_.ieventreceiverdefinitioncreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)




*Defined in [definitions/eventReceiver/eventReceivers.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceivers.ts#L14)*



Adds an event receiver to the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parameters | [IEventReceiverDefinitionCreationInformation](_definitions_lib_types_.ieventreceiverdefinitioncreationinformation.md)   |  The event receiver definition creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`string`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)[IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)




*Defined in [definitions/eventReceiver/eventReceivers.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceivers.ts#L20)*



Gets an event receiver in the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the event receiver. |





**Returns:** [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)[IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md), [IEventReceiverResults](_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)




*Defined in [definitions/eventReceiver/eventReceivers.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceivers.ts#L25)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md), [IEventReceiverResults](_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)





___


