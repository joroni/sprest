[gd-sprest](../README.md) > ["definitions/user/peoplePicker"](../modules/_definitions_user_peoplepicker_.md) > [IPeoplePicker](../interfaces/_definitions_user_peoplepicker_.ipeoplepicker.md)



# Interface: IPeoplePicker


People Picker

## Type parameters
#### Type 
#### Result 
#### QueryResult 
## Hierarchy


 [IBase](_definitions_lib_base_.ibase.md)

**↳ IPeoplePicker**








## Constructors
<a id="constructor"></a>


### ⊕ **new IPeoplePicker**(settings?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IPeoplePicker](_definitions_user_peoplepicker_.ipeoplepicker.md)



*Defined in [definitions/user/peoplePicker.ts:10](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/peoplePicker.ts#L10)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| settings | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  The search settings. |





**Returns:** [IPeoplePicker](_definitions_user_peoplepicker_.ipeoplepicker.md)

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
<a id="clientpeoplepickerresolveuser"></a>

###  clientPeoplePickerResolveUser

► **clientPeoplePickerResolveUser**(query: *[IPeoplePickerQuery](_definitions_lib_types_.ipeoplepickerquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IPeoplePickerResolveUser](_definitions_lib_types_.ipeoplepickerresolveuser.md)




*Defined in [definitions/user/peoplePicker.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/peoplePicker.ts#L24)*



Method to resolve users.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [IPeoplePickerQuery](_definitions_lib_types_.ipeoplepickerquery.md)   |  The people picker query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPeoplePickerResolveUser](_definitions_lib_types_.ipeoplepickerresolveuser.md)





___

<a id="clientpeoplepickersearchuser"></a>

###  clientPeoplePickerSearchUser

► **clientPeoplePickerSearchUser**(query: *[IPeoplePickerQuery](_definitions_lib_types_.ipeoplepickerquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IPeoplePickerSearchUser](_definitions_lib_types_.ipeoplepickersearchuser.md)




*Defined in [definitions/user/peoplePicker.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/peoplePicker.ts#L29)*



Method to search for users.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [IPeoplePickerQuery](_definitions_lib_types_.ipeoplepickerquery.md)   |  The people picker query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPeoplePickerSearchUser](_definitions_lib_types_.ipeoplepickersearchuser.md)





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

► **execute**(callback?: *function*): `Type`

► **execute**(waitFl: *`boolean`*): `Type`

► **execute**(callback: *function*, waitFl: *`boolean`*): `Type`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `Type`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** `Type`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** `Type`





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

