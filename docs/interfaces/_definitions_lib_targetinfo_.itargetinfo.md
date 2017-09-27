[gd-sprest](../README.md) > ["definitions/lib/targetInfo"](../modules/_definitions_lib_targetinfo_.md) > [ITargetInfo](../interfaces/_definitions_lib_targetinfo_.itargetinfo.md)



# Interface: ITargetInfo


Target Information


## Properties
<a id="bufferfl"></a>

### «Optional» bufferFl

**●  bufferFl**:  *`boolean`* 

*Defined in [definitions/lib/targetInfo.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L20)*



True if the expected request returns an array buffer.




___

<a id="callback"></a>

### «Optional» callback

**●  callback**:  *function* 

*Defined in [definitions/lib/targetInfo.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L23)*



The method to execute after the asynchronous request executes.

#### Type declaration
(): `void`


*Defined in [definitions/lib/targetInfo.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L23)*





**Returns:** `void`






___

<a id="data"></a>

### «Optional» data

**●  data**:  *`any`* 

*Defined in [definitions/lib/targetInfo.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L26)*



The data to be passed in the body of the request.




___

<a id="defaulttowebfl"></a>

### «Optional» defaultToWebFl

**●  defaultToWebFl**:  *`boolean`* 

*Defined in [definitions/lib/targetInfo.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L29)*



True to default the request to the web api, site api otherwise.




___

<a id="endpoint"></a>

### «Optional» endpoint

**●  endpoint**:  *`string`* 

*Defined in [definitions/lib/targetInfo.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L32)*



The endpoint of the request.




___

<a id="method"></a>

### «Optional» method

**●  method**:  *`string`* 

*Defined in [definitions/lib/targetInfo.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L35)*



The method to execute.




___

<a id="requestdigest"></a>

### «Optional» requestDigest

**●  requestDigest**:  *`string`* 

*Defined in [definitions/lib/targetInfo.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L38)*



The request digest to use for the request.




___

<a id="requestinfo"></a>

### «Optional» requestInfo

**●  requestInfo**:  *`object`* 

*Defined in [definitions/lib/targetInfo.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L41)*



The request information.




___

<a id="url"></a>

### «Optional» url

**●  url**:  *`string`* 

*Defined in [definitions/lib/targetInfo.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/targetInfo.ts#L44)*



The url of the site/web to execute the request against.




___


