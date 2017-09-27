[gd-sprest](../README.md) > ["definitions/social/socialFeed"](../modules/_definitions_social_socialfeed_.md) > [ISocialRestThread](../interfaces/_definitions_social_socialfeed_.isocialrestthread.md)



# Interface: ISocialRestThread


Social Rest Thread

## Type parameters
#### Result 
#### QueryResult 
## Hierarchy


 [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)

**↳ ISocialRestThread**








## Properties
<a id="id"></a>

### «Optional» ID

**●  ID**:  *`string`* 

*Defined in [definitions/social/socialFeed.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L127)*



Properties




___

<a id="socialthread"></a>

###  SocialThread

**●  SocialThread**:  *[SocialThread](_definitions_complextypes_.socialthread.md)* 

*Defined in [definitions/social/socialFeed.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L129)*





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

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




*Defined in [definitions/social/socialFeed.ts:135](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L135)*



Methods




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)





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

► **execute**(callback?: *function*): [ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)

► **execute**(waitFl: *`boolean`*): [ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): `Result`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** `Result`





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

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)`Result`, `QueryResult`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)`Result`, `QueryResult`





___

<a id="reply"></a>

###  reply

► **reply**(restCreationData: *[SocialPostCreationData](_definitions_complextypes_.socialpostcreationdata.md)*): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




*Defined in [definitions/social/socialFeed.ts:137](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L137)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| restCreationData | [SocialPostCreationData](_definitions_complextypes_.socialpostcreationdata.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<`Result`>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<`Result`>





___


