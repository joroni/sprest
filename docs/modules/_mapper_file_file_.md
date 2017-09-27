[gd-sprest](../README.md) > ["mapper/file/file"](../modules/_mapper_file_file_.md)



# External module: "mapper/file/file"

## Index

### Object literals

* [file](_mapper_file_file_.md#file)



---
<a id="file"></a>

## Object literal: file


/


<a id="file.properties"></a>

###  properties

**●  properties**:  *`string`[]*  =  [
        "Author|user", "CheckedOutByUser|user", "EffectiveInformationRightsManagementSettings", "InformationRightsManagementSettings",
        "ListItemAllFields", "LockedByUser|user", "ModifiedBy|user", "Properties|propertyvalues", "VersionEvents", "Versions|fileversions"
    ]

*Defined in [mapper/file/file.ts:11](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L11)*



/




___
<a id="file.approve"></a>

###  approve

** approve**:  *`object`* 

*Defined in [mapper/file/file.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L21)*



/



<a id="file.approve.argnames"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["comment"]

*Defined in [mapper/file/file.ts:22](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L22)*





___
<a id="file.approve.requesttype"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/file/file.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L23)*





___

___
<a id="file.cancelupload"></a>

###  cancelupload

** cancelupload**:  *`object`* 

*Defined in [mapper/file/file.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L29)*




<a id="file.cancelupload.argnames-1"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["uploadId"]

*Defined in [mapper/file/file.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L30)*





___
<a id="file.cancelupload.name"></a>

###  name

**●  name**:  *`string`*  = "cancelupload(guid'[[uploadId]]')"

*Defined in [mapper/file/file.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L31)*





___
<a id="file.cancelupload.requesttype-1"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostReplace

*Defined in [mapper/file/file.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L32)*





___

___
<a id="file.checkin"></a>

###  checkin

** checkin**:  *`object`* 

*Defined in [mapper/file/file.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L37)*




<a id="file.checkin.argnames-2"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["comment", "checkInType"]

*Defined in [mapper/file/file.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L38)*





___
<a id="file.checkin.requesttype-2"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/file/file.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L39)*





___

___
<a id="file.checkout"></a>

###  checkout

** checkout**:  *`object`* 

*Defined in [mapper/file/file.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L43)*




<a id="file.checkout.requesttype-3"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/file/file.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L44)*





___

___
<a id="file.content"></a>

###  content

** content**:  *`object`* 

*Defined in [mapper/file/file.ts:48](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L48)*




<a id="file.content.name-1"></a>

###  name

**●  name**:  *`string`*  = "$value"

*Defined in [mapper/file/file.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L49)*





___
<a id="file.content.requesttype-4"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetBuffer

*Defined in [mapper/file/file.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L50)*





___

___
<a id="file.continueupload"></a>

###  continueUpload

** continueUpload**:  *`object`* 

*Defined in [mapper/file/file.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L56)*




<a id="file.continueupload.argnames-3"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["uploadId", "fileOffset"]

*Defined in [mapper/file/file.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L57)*





___
<a id="file.continueupload.name-2"></a>

###  name

**●  name**:  *`string`*  = "continueUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])"

*Defined in [mapper/file/file.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L58)*





___
<a id="file.continueupload.requesttype-5"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostReplace

*Defined in [mapper/file/file.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L59)*





___

___
<a id="file.copyto"></a>

###  copyTo

** copyTo**:  *`object`* 

*Defined in [mapper/file/file.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L63)*




<a id="file.copyto.argnames-4"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["strNewUrl", "bOverWrite"]

*Defined in [mapper/file/file.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L64)*





___
<a id="file.copyto.requesttype-6"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/file/file.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L65)*





___

___
<a id="file.delete"></a>

###  delete

** delete**:  *`object`* 

*Defined in [mapper/file/file.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L69)*




<a id="file.delete.requesttype-7"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Delete

*Defined in [mapper/file/file.ts:70](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L70)*





___

___
<a id="file.deny"></a>

###  deny

** deny**:  *`object`* 

*Defined in [mapper/file/file.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L75)*




<a id="file.deny.argnames-5"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["comment"]

*Defined in [mapper/file/file.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L76)*





___
<a id="file.deny.requesttype-8"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/file/file.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L77)*





___

___
<a id="file.finishupload"></a>

###  finishUpload

** finishUpload**:  *`object`* 

*Defined in [mapper/file/file.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L83)*




<a id="file.finishupload.argnames-6"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["uploadId", "fileOffset"]

*Defined in [mapper/file/file.ts:84](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L84)*





___
<a id="file.finishupload.name-3"></a>

###  name

**●  name**:  *`string`*  = "finishUpload(uploadId=guid'[[uploadId]]', fileOffset=[[fileOffset]])"

*Defined in [mapper/file/file.ts:85](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L85)*





___
<a id="file.finishupload.requesttype-9"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostReplace

*Defined in [mapper/file/file.ts:86](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L86)*





___

___
<a id="file.getlimitedwebpartmanager"></a>

###  getlimitedwebpartmanager

** getlimitedwebpartmanager**:  *`object`* 

*Defined in [mapper/file/file.ts:92](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L92)*




<a id="file.getlimitedwebpartmanager.argnames-7"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["scope"]

*Defined in [mapper/file/file.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L93)*





___
<a id="file.getlimitedwebpartmanager.name-4"></a>

###  name

**●  name**:  *`string`*  = "getLimitedWebPartManager(scope=[[scope]])"

*Defined in [mapper/file/file.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L94)*





___
<a id="file.getlimitedwebpartmanager.requesttype-10"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetReplace

*Defined in [mapper/file/file.ts:95](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L95)*





___

___
<a id="file.moveto"></a>

###  moveTo

** moveTo**:  *`object`* 

*Defined in [mapper/file/file.ts:100](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L100)*




<a id="file.moveto.argnames-8"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["newUrl", "flags"]

*Defined in [mapper/file/file.ts:101](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L101)*





___
<a id="file.moveto.name-5"></a>

###  name

**●  name**:  *`string`*  = "moveTo(newUrl='[[newUrl]]', flags=[[flags]])"

*Defined in [mapper/file/file.ts:102](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L102)*





___
<a id="file.moveto.requesttype-11"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostReplace

*Defined in [mapper/file/file.ts:103](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L103)*





___

___
<a id="file.openbinarystream"></a>

###  openBinaryStream

** openBinaryStream**:  *`object`* 

*Defined in [mapper/file/file.ts:107](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L107)*




<a id="file.openbinarystream.requesttype-12"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetBuffer

*Defined in [mapper/file/file.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L108)*





___

___
<a id="file.publish"></a>

###  publish

** publish**:  *`object`* 

*Defined in [mapper/file/file.ts:112](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L112)*




<a id="file.publish.argnames-9"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["comment"]

*Defined in [mapper/file/file.ts:113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L113)*





___
<a id="file.publish.requesttype-13"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/file/file.ts:114](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L114)*





___

___
<a id="file.query"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/file/file.ts:118](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L118)*




<a id="file.query.argnames-10"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["oData"]

*Defined in [mapper/file/file.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L119)*





___
<a id="file.query.requesttype-14"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.OData

*Defined in [mapper/file/file.ts:120](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L120)*





___

___
<a id="file.recycle"></a>

###  recycle

** recycle**:  *`object`* 

*Defined in [mapper/file/file.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L124)*




<a id="file.recycle.requesttype-15"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Get

*Defined in [mapper/file/file.ts:125](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L125)*





___

___
<a id="file.savebinarystream"></a>

###  saveBinaryStream

** saveBinaryStream**:  *`object`* 

*Defined in [mapper/file/file.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L129)*




<a id="file.savebinarystream.requesttype-16"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/file/file.ts:130](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L130)*





___

___
<a id="file.startupload"></a>

###  startUpload

** startUpload**:  *`object`* 

*Defined in [mapper/file/file.ts:136](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L136)*




<a id="file.startupload.argnames-11"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["uploadId"]

*Defined in [mapper/file/file.ts:137](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L137)*





___
<a id="file.startupload.name-6"></a>

###  name

**●  name**:  *`string`*  = "startupload(uploadId=guid'[[uploadId]]')"

*Defined in [mapper/file/file.ts:138](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L138)*





___
<a id="file.startupload.requesttype-17"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostReplace

*Defined in [mapper/file/file.ts:139](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L139)*





___

___
<a id="file.undocheckout"></a>

###  undoCheckOut

** undoCheckOut**:  *`object`* 

*Defined in [mapper/file/file.ts:143](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L143)*




<a id="file.undocheckout.requesttype-18"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/file/file.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L144)*





___

___
<a id="file.unpublish"></a>

###  unpublish

** unpublish**:  *`object`* 

*Defined in [mapper/file/file.ts:148](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L148)*




<a id="file.unpublish.argnames-12"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["comment"]

*Defined in [mapper/file/file.ts:149](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L149)*





___
<a id="file.unpublish.requesttype-19"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/file/file.ts:150](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L150)*





___

___
<a id="file.update"></a>

###  update

** update**:  *`object`* 

*Defined in [mapper/file/file.ts:154](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L154)*




<a id="file.update.metadatatype"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.File"

*Defined in [mapper/file/file.ts:155](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L155)*





___
<a id="file.update.name-7"></a>

###  name

**●  name**:  *`string`*  = ""

*Defined in [mapper/file/file.ts:156](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L156)*





___
<a id="file.update.requestmethod"></a>

###  requestMethod

**●  requestMethod**:  *`string`*  = "MERGE"

*Defined in [mapper/file/file.ts:157](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L157)*





___
<a id="file.update.requesttype-20"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/file/file.ts:158](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/file/file.ts#L158)*





___

___


