[gd-sprest](../README.md) > ["definitions/eventReceiver/eventReceiver"](../modules/_definitions_eventreceiver_eventreceiver_.md) > [IEventReceiverResult](../interfaces/_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)



# Interface: IEventReceiverResult


Event Receiver Result

## Hierarchy


 [IEventReceiverMethods](_definitions_eventreceiver_eventreceiver_.ieventreceivermethods.md)




 [IEventReceiverProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverprops.md)




 [IEventReceiverQueryProps](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)

**↳ IEventReceiverResult**








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
<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IEventReceiverMethods](_definitions_eventreceiver_eventreceiver_.ieventreceivermethods.md).[delete](_definitions_eventreceiver_eventreceiver_.ieventreceivermethods.md#delete)*

*Defined in [definitions/eventReceiver/eventReceiver.ts:13](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceiver.ts#L13)*



Deletes the event receiver.




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

► **execute**(callback?: *function*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)

► **execute**(waitFl: *`boolean`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)>





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


