[gd-sprest](../README.md) > ["definitions/eventReceiver/eventReceivers"](../modules/_definitions_eventreceiver_eventreceivers_.md) > [IEventReceiverResults](../interfaces/_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)



# Interface: IEventReceiverResults


Event Receiver Results

## Hierarchy


 [IEventReceiversMethods](_definitions_eventreceiver_eventreceivers_.ieventreceiversmethods.md)




↳  [IBaseCollection](_definitions_lib_base_.ibasecollection.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)

**↳ IEventReceiverResults**








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

<a id="results"></a>

###  results

**●  results**:  *`Array`.<[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)>* 

*Inherited from [IResults](_definitions_lib_types_.iresults.md).[results](_definitions_lib_types_.iresults.md#results)*

*Defined in [definitions/lib/types.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L493)*



The collection data




___


## Methods
<a id="add"></a>

###  add

► **add**(parameters: *[IEventReceiverDefinitionCreationInformation](_definitions_lib_types_.ieventreceiverdefinitioncreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)




*Inherited from [IEventReceiversMethods](_definitions_eventreceiver_eventreceivers_.ieventreceiversmethods.md).[add](_definitions_eventreceiver_eventreceivers_.ieventreceiversmethods.md#add)*

*Defined in [definitions/eventReceiver/eventReceivers.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceivers.ts#L14)*



Adds an event receiver to the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parameters | [IEventReceiverDefinitionCreationInformation](_definitions_lib_types_.ieventreceiverdefinitioncreationinformation.md)   |  The event receiver definition creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)





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

► **execute**(callback?: *function*): [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)

► **execute**(waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`string`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)[IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)




*Inherited from [IEventReceiversMethods](_definitions_eventreceiver_eventreceivers_.ieventreceiversmethods.md).[getById](_definitions_eventreceiver_eventreceivers_.ieventreceiversmethods.md#getbyid)*

*Defined in [definitions/eventReceiver/eventReceivers.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceivers.ts#L20)*



Gets an event receiver in the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the event receiver. |





**Returns:** [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)[IBase](_definitions_lib_base_.ibase.md)[IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md), [IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md), [IEventReceiverResults](_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)




*Inherited from [IEventReceiversMethods](_definitions_eventreceiver_eventreceivers_.ieventreceiversmethods.md).[next](_definitions_eventreceiver_eventreceivers_.ieventreceiversmethods.md#next)*

*Defined in [definitions/eventReceiver/eventReceivers.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/eventReceiver/eventReceivers.ts#L25)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md), [IEventReceiverResults](_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md), [IResults](_definitions_lib_types_.iresults.md)[IEventReceiverQueryResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverqueryresult.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IResults](_definitions_lib_types_.iresults.md)[IEventReceiverResult](_definitions_eventreceiver_eventreceiver_.ieventreceiverresult.md)>





___


