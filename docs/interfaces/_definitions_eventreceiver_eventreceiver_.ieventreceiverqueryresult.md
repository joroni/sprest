[gd-sprest](../README.md) > ["definitions/eventReceiver/eventReceiver"](../modules/_definitions_eventreceiver_eventreceiver_.md) > [IEventReceiverQueryResult](../interfaces/_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)



# Interface: IEventReceiverQueryResult


Event Receiver Query Result

## Hierarchy


 [IEventReceiverMethods](_definitions_eventreceiver_eventreceiver_.ieventreceivermethods.md)




 [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md)

**↳ IEventReceiverQueryResult**








## Properties
<a id="eventtype"></a>

###  EventType

**●  EventType**:  *`SPTypes.EventReceiverType`⎮`number`* 

*Inherited from [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md).[EventType](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md#eventtype)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L27)*



Specifies the type of event.




___

<a id="receiverassembly"></a>

### «Optional» ReceiverAssembly

**●  ReceiverAssembly**:  *`string`* 

*Inherited from [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md).[ReceiverAssembly](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md#receiverassembly)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L30)*



The strong name of the assembly that is used for receiving events.




___

<a id="receiverclass"></a>

### «Optional» ReceiverClass

**●  ReceiverClass**:  *`string`* 

*Inherited from [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md).[ReceiverClass](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md#receiverclass)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L33)*



A string that represents the class that is used for receiving events.




___

<a id="receiverid"></a>

### «Optional» ReceiverId

**●  ReceiverId**:  *`string`* 

*Inherited from [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md).[ReceiverId](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md#receiverid)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L36)*



The unique identifier of the event receiver.




___

<a id="receivername"></a>

###  ReceiverName

**●  ReceiverName**:  *`string`* 

*Inherited from [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md).[ReceiverName](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md#receivername)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L39)*



The name of the event receiver.




___

<a id="receiverurl"></a>

### «Optional» ReceiverUrl

**●  ReceiverUrl**:  *`string`* 

*Inherited from [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md).[ReceiverUrl](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md#receiverurl)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L42)*



The URL of a web service that is used for receiving events.




___

<a id="sequencenumber"></a>

### «Optional» SequenceNumber

**●  SequenceNumber**:  *`number`* 

*Inherited from [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md).[SequenceNumber](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md#sequencenumber)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L45)*



An integer that represents the relative sequence of the event.




___

<a id="synchronization"></a>

### «Optional» Synchronization

**●  Synchronization**:  *`SPTypes.EventReceiverSynchronizationType`⎮`number`* 

*Inherited from [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md).[Synchronization](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md#synchronization)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:48](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L48)*



The execution synchronization of the event receiver.




___


## Methods
<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IEventReceiverMethods](_definitions_eventreceiver_eventreceiver_.ieventreceivermethods.md).[delete](_definitions_eventreceiver_eventreceiver_.ieventreceivermethods.md#delete)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:13](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L13)*



Deletes the event receiver.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IEventReceiverMethods](_definitions_eventreceiver_eventreceiver_.ieventreceivermethods.md).[update](_definitions_eventreceiver_eventreceiver_.ieventreceivermethods.md#update)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L19)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The field properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


