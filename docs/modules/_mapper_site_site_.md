[gd-sprest](../README.md) > ["mapper/site/site"](../modules/_mapper_site_site_.md)



# External module: "mapper/site/site"

## Index

### Object literals

* [site](_mapper_site_site_.md#site)



---
<a id="site"></a>

## Object literal: site


/


<a id="site.properties"></a>

###  properties

**●  properties**:  *`string`[]*  =  [
        "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features", "Owner|user", "RootWeb|web",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction"
    ]

*Defined in [mapper/site/site.ts:10](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L10)*



/




___
<a id="site.createpreviewspsite"></a>

###  createPreviewSPSite

** createPreviewSPSite**:  *`object`* 

*Defined in [mapper/site/site.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L20)*



/



<a id="site.createpreviewspsite.argnames"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["upgrade", "sendemail"]

*Defined in [mapper/site/site.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L21)*





___
<a id="site.createpreviewspsite.requesttype"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/site/site.ts:22](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L22)*





___

___
<a id="site.extendupgradereminderdate"></a>

###  extendUpgradeReminderDate

** extendUpgradeReminderDate**:  *`object`* 

*Defined in [mapper/site/site.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L26)*




<a id="site.extendupgradereminderdate.requesttype-1"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/site/site.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L27)*





___

___
<a id="site.getcatalog"></a>

###  getCatalog

** getCatalog**:  *`object`* 

*Defined in [mapper/site/site.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L31)*




<a id="site.getcatalog.argnames-1"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["typeCatalog"]

*Defined in [mapper/site/site.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L32)*





___
<a id="site.getcatalog.requesttype-2"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsValueOnly

*Defined in [mapper/site/site.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L33)*





___

___
<a id="site.getchanges"></a>

###  getChanges

** getChanges**:  *`object`* 

*Defined in [mapper/site/site.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L37)*




<a id="site.getchanges.argnames-2"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["query"]

*Defined in [mapper/site/site.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L38)*





___
<a id="site.getchanges.metadatatype"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.ChangeQuery"

*Defined in [mapper/site/site.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L39)*





___
<a id="site.getchanges.requesttype-3"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/site/site.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L40)*





___

___
<a id="site.getcustomlisttemplates"></a>

###  getCustomListTemplates

** getCustomListTemplates**:  *`object`* 

*Defined in [mapper/site/site.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L44)*




<a id="site.getcustomlisttemplates.argnames-3"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["web"]

*Defined in [mapper/site/site.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L45)*





___
<a id="site.getcustomlisttemplates.requesttype-4"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/site/site.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L46)*





___

___
<a id="site.getwebtemplates"></a>

###  getWebTemplates

** getWebTemplates**:  *`object`* 

*Defined in [mapper/site/site.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L50)*




<a id="site.getwebtemplates.argnames-4"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["LCID", "overrideCompatLevel"]

*Defined in [mapper/site/site.ts:51](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L51)*





___
<a id="site.getwebtemplates.requesttype-5"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/site/site.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L52)*





___

___
<a id="site.invalidate"></a>

###  invalidate

** invalidate**:  *`object`* 

*Defined in [mapper/site/site.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L56)*




<a id="site.invalidate.requesttype-6"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/site/site.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L57)*





___

___
<a id="site.needsupgradebytype"></a>

###  needsUpgradeByType

** needsUpgradeByType**:  *`object`* 

*Defined in [mapper/site/site.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L61)*




<a id="site.needsupgradebytype.argnames-5"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["versionUpgrade", "recursive"]

*Defined in [mapper/site/site.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L62)*





___
<a id="site.needsupgradebytype.requesttype-7"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/site/site.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L63)*





___

___
<a id="site.openweb"></a>

###  openWeb

** openWeb**:  *`object`* 

*Defined in [mapper/site/site.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L67)*




<a id="site.openweb.argnames-6"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["strUrl"]

*Defined in [mapper/site/site.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L68)*





___
<a id="site.openweb.requesttype-8"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsValueOnly

*Defined in [mapper/site/site.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L69)*





___

___
<a id="site.openwebbyid"></a>

###  openWebById

** openWebById**:  *`object`* 

*Defined in [mapper/site/site.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L73)*




<a id="site.openwebbyid.argnames-7"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["gWebId"]

*Defined in [mapper/site/site.ts:74](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L74)*





___
<a id="site.openwebbyid.requesttype-9"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsValueOnly

*Defined in [mapper/site/site.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L75)*





___

___
<a id="site.query"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/site/site.ts:79](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L79)*




<a id="site.query.argnames-8"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["oData"]

*Defined in [mapper/site/site.ts:80](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L80)*





___
<a id="site.query.requesttype-10"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.OData

*Defined in [mapper/site/site.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L81)*





___

___
<a id="site.runhealthcheck"></a>

###  runHealthCheck

** runHealthCheck**:  *`object`* 

*Defined in [mapper/site/site.ts:85](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L85)*




<a id="site.runhealthcheck.argnames-9"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["ruleId", "bRepair", "bRunAlways"]

*Defined in [mapper/site/site.ts:86](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L86)*





___
<a id="site.runhealthcheck.requesttype-11"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/site/site.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L87)*





___

___
<a id="site.runupgradesitesession"></a>

###  runUpgradeSiteSession

** runUpgradeSiteSession**:  *`object`* 

*Defined in [mapper/site/site.ts:91](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L91)*




<a id="site.runupgradesitesession.argnames-10"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["versionUpgrade", "queueOnly", "sendEmail"]

*Defined in [mapper/site/site.ts:92](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L92)*





___
<a id="site.runupgradesitesession.requesttype-12"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/site/site.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L93)*





___

___
<a id="site.update"></a>

###  update

** update**:  *`object`* 

*Defined in [mapper/site/site.ts:97](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L97)*




<a id="site.update.metadatatype-1"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.Site"

*Defined in [mapper/site/site.ts:98](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L98)*





___
<a id="site.update.name"></a>

###  name

**●  name**:  *`string`*  = ""

*Defined in [mapper/site/site.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L99)*





___
<a id="site.update.requestmethod"></a>

###  requestMethod

**●  requestMethod**:  *`string`*  = "MERGE"

*Defined in [mapper/site/site.ts:100](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L100)*





___
<a id="site.update.requesttype-13"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/site/site.ts:101](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L101)*





___

___
<a id="site.updateclientobjectmodeluseremoteapispermissionsetting"></a>

###  updateClientObjectModelUseRemoteAPIsPermissionSetting

** updateClientObjectModelUseRemoteAPIsPermissionSetting**:  *`object`* 

*Defined in [mapper/site/site.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L105)*




<a id="site.updateclientobjectmodeluseremoteapispermissionsetting.argnames-11"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["requireUseRemoteAPIs"]

*Defined in [mapper/site/site.ts:106](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L106)*





___
<a id="site.updateclientobjectmodeluseremoteapispermissionsetting.requesttype-14"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/site/site.ts:107](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/site/site.ts#L107)*





___

___


