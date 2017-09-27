[gd-sprest](../README.md) > ["definitions/lib/search"](../modules/_definitions_lib_search_.md) > [ISearch](../interfaces/_definitions_lib_search_.isearch.md)



# Interface: ISearch


Search

## Type parameters
#### QueryResult 
## Hierarchy


 [IBase](_definitions_lib_base_.ibase.md)[ISearch](_definitions_lib_search_.isearch.md), [SearchResult](_definitions_complextypes_.searchresult.md)

**↳ ISearch**








## Constructors
<a id="constructor"></a>


### ⊕ **new ISearch**(url?: *`string`*, settings?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [ISearch](_definitions_lib_search_.isearch.md)



*Defined in [definitions/lib/search.ts:10](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/search.ts#L10)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  The optional url to execute the search against. |
| settings | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  The search settings. |





**Returns:** [ISearch](_definitions_lib_search_.isearch.md)

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

► **execute**(callback?: *function*): [ISearch](_definitions_lib_search_.isearch.md)

► **execute**(waitFl: *`boolean`*): [ISearch](_definitions_lib_search_.isearch.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [ISearch](_definitions_lib_search_.isearch.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [ISearch](_definitions_lib_search_.isearch.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [ISearch](_definitions_lib_search_.isearch.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [ISearch](_definitions_lib_search_.isearch.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [SearchResult](_definitions_complextypes_.searchresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [SearchResult](_definitions_complextypes_.searchresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="postquery"></a>

###  postquery

► **postquery**(settings: *[SearchRequest](_definitions_complextypes_.searchrequest.md)*): [IBase](_definitions_lib_base_.ibase.md)[SearchResult](_definitions_complextypes_.searchresult.md)




*Defined in [definitions/lib/search.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/search.ts#L21)*



Method to execute a search query.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| settings | [SearchRequest](_definitions_complextypes_.searchrequest.md)   |  The search request settings. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[SearchResult](_definitions_complextypes_.searchresult.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[SearchResult](_definitions_complextypes_.searchresult.md), `QueryResult`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[SearchResult](_definitions_complextypes_.searchresult.md), `QueryResult`





___

<a id="searchquery"></a>

###  searchquery

► **searchquery**(settings: *[SearchRequest](_definitions_complextypes_.searchrequest.md)*): [IBase](_definitions_lib_base_.ibase.md)[SearchResult](_definitions_complextypes_.searchresult.md)




*Defined in [definitions/lib/search.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/search.ts#L26)*



Method to execute a search query.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| settings | [SearchRequest](_definitions_complextypes_.searchrequest.md)   |  The search request settings. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[SearchResult](_definitions_complextypes_.searchresult.md)





___

<a id="suggest"></a>

###  suggest

► **suggest**(settings: *[SearchSuggestion](_definitions_complextypes_.searchsuggestion.md)*): [IBase](_definitions_lib_base_.ibase.md)[QuerySuggestionResults](_definitions_complextypes_.querysuggestionresults.md)




*Defined in [definitions/lib/search.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/search.ts#L31)*



Method to execute a search suggestion.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| settings | [SearchSuggestion](_definitions_complextypes_.searchsuggestion.md)   |  The search suggest settings. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[QuerySuggestionResults](_definitions_complextypes_.querysuggestionresults.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[SearchResult](_definitions_complextypes_.searchresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[SearchResult](_definitions_complextypes_.searchresult.md)>





___


