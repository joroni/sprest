[gd-sprest](../README.md) > ["definitions/eventReceiver/eventReceiver"](../modules/_definitions_eventreceiver_eventreceiver_.md) > [IEventReceiverProps](../interfaces/_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md)



# Interface: IEventReceiverProps


Event Receiver Properties

## Hierarchy

**IEventReceiverProps**

↳  [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)




↳  [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)









## Properties
<a id="eventtype"></a>

###  EventType

**●  EventType**:  *`SPTypes.EventReceiverType`⎮`number`* 

*Defined in [definitions/eventReceiver/eventReceiver.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L27)*



Specifies the type of event.




___

<a id="receiverassembly"></a>

### «Optional» ReceiverAssembly

**●  ReceiverAssembly**:  *`string`* 

*Defined in [definitions/eventReceiver/eventReceiver.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L30)*



The strong name of the assembly that is used for receiving events.




___

<a id="receiverclass"></a>

### «Optional» ReceiverClass

**●  ReceiverClass**:  *`string`* 

*Defined in [definitions/eventReceiver/eventReceiver.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L33)*



A string that represents the class that is used for receiving events.




___

<a id="receiverid"></a>

### «Optional» ReceiverId

**●  ReceiverId**:  *`string`* 

*Defined in [definitions/eventReceiver/eventReceiver.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L36)*



The unique identifier of the event receiver.




___

<a id="receivername"></a>

###  ReceiverName

**●  ReceiverName**:  *`string`* 

*Defined in [definitions/eventReceiver/eventReceiver.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L39)*



The name of the event receiver.




___

<a id="receiverurl"></a>

### «Optional» ReceiverUrl

**●  ReceiverUrl**:  *`string`* 

*Defined in [definitions/eventReceiver/eventReceiver.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L42)*



The URL of a web service that is used for receiving events.




___

<a id="sequencenumber"></a>

### «Optional» SequenceNumber

**●  SequenceNumber**:  *`number`* 

*Defined in [definitions/eventReceiver/eventReceiver.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L45)*



An integer that represents the relative sequence of the event.




___

<a id="synchronization"></a>

### «Optional» Synchronization

**●  Synchronization**:  *`SPTypes.EventReceiverSynchronizationType`⎮`number`* 

*Defined in [definitions/eventReceiver/eventReceiver.ts:48](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L48)*



The execution synchronization of the event receiver.




___


