[gd-sprest](../README.md) > ["mapper/web/web"](../modules/_mapper_web_web_.md)



# External module: "mapper/web/web"

## Index

### Object literals

* [web](_mapper_web_web_.md#web)



---
<a id="web"></a>

## Object literal: web


/


<a id="web.properties"></a>

###  properties

**●  properties**:  *`string`[]*  =  [
        "AllProperties|propertyvalues", "AppTiles", "AssociatedMemberGroup|group", "AssociatedOwnerGroup|group",
        "AssociatedVisitorGroup|group", "Author|user", "AvailableContentTypes|contenttypes", "AvailableFields|fields",
        "ClientWebParts", "ContentTypes|contenttypes|('[Name]')|contenttype", "CurrentUser|user", "DataLeakagePreventionStatusInfo",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features",
        "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "FirstUniqueAncestorSecurableObject",
        "Folders|folders|/getByUrl('[Name]')|folder", "Lists|lists|/getByTitle('[Name]')|list",
        "ListTemplates|listtemplates|('[Name]')|listtemplate", "Navigation", "ParentWeb",
        "PushNotificationSubscribers", "RecycleBin", "RegionalSettings", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RoleDefinitions|roledefinitions|/getByName('[Name]')|roledefinition", "RootFolder|folder|/getByUrl('[Name]')|file",
        "SiteGroups|sitegroups|/getByName('[Name]')|group", "SiteUserInfoList", "SiteUsers|users|/getById([Name])|user", "ThemeInfo", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "WebInfos|webinfos", "Webs|webs", "WorkflowAssociations", "WorkflowTemplates"
    ]

*Defined in [mapper/web/web.ts:11](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L11)*



/




___
<a id="web.applytheme"></a>

###  applyTheme

** applyTheme**:  *`object`* 

*Defined in [mapper/web/web.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L30)*



/



<a id="web.applytheme.argnames"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"]

*Defined in [mapper/web/web.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L31)*





___
<a id="web.applytheme.requesttype"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/web/web.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L32)*





___

___
<a id="web.applywebtemplate"></a>

###  applyWebTemplate

** applyWebTemplate**:  *`object`* 

*Defined in [mapper/web/web.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L36)*




<a id="web.applywebtemplate.argname"></a>

###  argName

**●  argName**:  *`string`[]*  =  ["name"]

*Defined in [mapper/web/web.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L37)*





___
<a id="web.applywebtemplate.requesttype-1"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInQS

*Defined in [mapper/web/web.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L38)*





___

___
<a id="web.breakroleinheritance"></a>

###  breakRoleInheritance

** breakRoleInheritance**:  *`object`* 

*Defined in [mapper/web/web.ts:42](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L42)*




<a id="web.breakroleinheritance.argnames-1"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["copyroleassignments", "clearsubscopes"]

*Defined in [mapper/web/web.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L43)*





___
<a id="web.breakroleinheritance.requesttype-2"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/web/web.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L44)*





___

___
<a id="web.delete"></a>

###  delete

** delete**:  *`object`* 

*Defined in [mapper/web/web.ts:48](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L48)*




<a id="web.delete.requesttype-3"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Delete

*Defined in [mapper/web/web.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L49)*





___

___
<a id="web.doespushnotificationsubscriberexist"></a>

###  doesPushNotificationSubscriberExist

** doesPushNotificationSubscriberExist**:  *`object`* 

*Defined in [mapper/web/web.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L53)*




<a id="web.doespushnotificationsubscriberexist.argnames-2"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/web/web.ts:54](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L54)*





___
<a id="web.doespushnotificationsubscriberexist.requesttype-4"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:55](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L55)*





___

___
<a id="web.doesuserhavepermissions"></a>

###  doesUserHavePermissions

** doesUserHavePermissions**:  *`object`* 

*Defined in [mapper/web/web.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L59)*




<a id="web.doesuserhavepermissions.argnames-3"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["High", "Low"]

*Defined in [mapper/web/web.ts:60](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L60)*





___
<a id="web.doesuserhavepermissions.requesttype-5"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsInQS

*Defined in [mapper/web/web.ts:61](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L61)*





___

___
<a id="web.ensureuser"></a>

###  ensureUser

** ensureUser**:  *`object`* 

*Defined in [mapper/web/web.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L65)*




<a id="web.ensureuser.argnames-4"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["logonName"]

*Defined in [mapper/web/web.ts:66](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L66)*





___
<a id="web.ensureuser.requesttype-6"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/web/web.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L67)*





___

___
<a id="web.executeremotelob"></a>

###  executeRemoteLOB

** executeRemoteLOB**:  *`object`* 

*Defined in [mapper/web/web.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L71)*




<a id="web.executeremotelob.requesttype-7"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/web/web.ts:72](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L72)*





___

___
<a id="web.getappbdccatalog"></a>

###  getAppBdcCatalog

** getAppBdcCatalog**:  *`object`* 

*Defined in [mapper/web/web.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L76)*




<a id="web.getappbdccatalog.requesttype-8"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/web/web.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L77)*





___

___
<a id="web.getappbdccatalogforappinstance"></a>

###  getAppBdcCatalogForAppInstance

** getAppBdcCatalogForAppInstance**:  *`object`* 

*Defined in [mapper/web/web.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L81)*




<a id="web.getappbdccatalogforappinstance.argnames-5"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/web/web.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L82)*





___
<a id="web.getappbdccatalogforappinstance.requesttype-9"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsValueOnly

*Defined in [mapper/web/web.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L83)*





___

___
<a id="web.getappinstancebyid"></a>

###  getAppInstanceById

** getAppInstanceById**:  *`object`* 

*Defined in [mapper/web/web.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L87)*




<a id="web.getappinstancebyid.argnames-6"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/web/web.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L88)*





___
<a id="web.getappinstancebyid.requesttype-10"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L89)*





___

___
<a id="web.getappinstancesbyproductid"></a>

###  getAppInstancesByProductId

** getAppInstancesByProductId**:  *`object`* 

*Defined in [mapper/web/web.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L93)*




<a id="web.getappinstancesbyproductid.argnames-7"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/web/web.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L94)*





___
<a id="web.getappinstancesbyproductid.requesttype-11"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:95](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L95)*





___

___
<a id="web.getavailablewebtemplates"></a>

###  getAvailableWebTemplates

** getAvailableWebTemplates**:  *`object`* 

*Defined in [mapper/web/web.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L99)*




<a id="web.getavailablewebtemplates.argnames-8"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["lcid", "doincludecrosslanguage"]

*Defined in [mapper/web/web.ts:100](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L100)*





___
<a id="web.getavailablewebtemplates.requesttype-12"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgs

*Defined in [mapper/web/web.ts:101](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L101)*





___

___
<a id="web.getcatalog"></a>

###  getCatalog

** getCatalog**:  *`object`* 

*Defined in [mapper/web/web.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L105)*




<a id="web.getcatalog.argnames-9"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["galleryType"]

*Defined in [mapper/web/web.ts:106](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L106)*





___
<a id="web.getcatalog.requesttype-13"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:107](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L107)*





___

___
<a id="web.getchanges"></a>

###  getChanges

** getChanges**:  *`object`* 

*Defined in [mapper/web/web.ts:111](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L111)*




<a id="web.getchanges.argnames-10"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["query"]

*Defined in [mapper/web/web.ts:112](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L112)*





___
<a id="web.getchanges.metadatatype"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.ChangeQuery"

*Defined in [mapper/web/web.ts:113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L113)*





___
<a id="web.getchanges.requesttype-14"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/web/web.ts:114](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L114)*





___

___
<a id="web.getcontextwebinformation"></a>

###  getContextWebInformation

** getContextWebInformation**:  *`object`* 

*Defined in [mapper/web/web.ts:118](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L118)*




<a id="web.getcontextwebinformation.name"></a>

###  name

**●  name**:  *`string`*  = "contextInfo"

*Defined in [mapper/web/web.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L119)*





___
<a id="web.getcontextwebinformation.replaceendpointfl"></a>

###  replaceEndpointFl

**●  replaceEndpointFl**:  *`boolean`*  = true

*Defined in [mapper/web/web.ts:120](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L120)*





___
<a id="web.getcontextwebinformation.requesttype-15"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/web/web.ts:121](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L121)*





___

___
<a id="web.getcustomlisttemplates"></a>

###  getCustomListTemplates

** getCustomListTemplates**:  *`object`* 

*Defined in [mapper/web/web.ts:125](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L125)*




<a id="web.getcustomlisttemplates.requesttype-16"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Get

*Defined in [mapper/web/web.ts:126](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L126)*





___

___
<a id="web.getdocumentlibraries"></a>

###  getDocumentLibraries

** getDocumentLibraries**:  *`object`* 

*Defined in [mapper/web/web.ts:130](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L130)*




<a id="web.getdocumentlibraries.argnames-11"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["url"]

*Defined in [mapper/web/web.ts:131](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L131)*





___
<a id="web.getdocumentlibraries.name-1"></a>

###  name

**●  name**:  *`string`*  = "sp.web.getDocumentLibraries"

*Defined in [mapper/web/web.ts:132](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L132)*





___
<a id="web.getdocumentlibraries.requesttype-17"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsInQS

*Defined in [mapper/web/web.ts:133](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L133)*





___

___
<a id="web.getentity"></a>

###  getEntity

** getEntity**:  *`object`* 

*Defined in [mapper/web/web.ts:137](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L137)*




<a id="web.getentity.argnames-12"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["namespace", "name"]

*Defined in [mapper/web/web.ts:138](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L138)*





___
<a id="web.getentity.requesttype-18"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/web/web.ts:139](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L139)*





___

___
<a id="web.getfilebyserverrelativeurl"></a>

###  getFileByServerRelativeUrl

** getFileByServerRelativeUrl**:  *`object`* 

*Defined in [mapper/web/web.ts:143](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L143)*




<a id="web.getfilebyserverrelativeurl.argnames-13"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["url"]

*Defined in [mapper/web/web.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L144)*





___
<a id="web.getfilebyserverrelativeurl.requesttype-19"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:145](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L145)*





___
<a id="web.getfilebyserverrelativeurl.returntype"></a>

###  returnType

**●  returnType**:  *`string`*  = "file"

*Defined in [mapper/web/web.ts:146](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L146)*





___

___
<a id="web.getfolderbyserverrelativeurl"></a>

###  getFolderByServerRelativeUrl

** getFolderByServerRelativeUrl**:  *`object`* 

*Defined in [mapper/web/web.ts:150](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L150)*




<a id="web.getfolderbyserverrelativeurl.argnames-14"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["url"]

*Defined in [mapper/web/web.ts:151](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L151)*





___
<a id="web.getfolderbyserverrelativeurl.requesttype-20"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:152](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L152)*





___
<a id="web.getfolderbyserverrelativeurl.returntype-1"></a>

###  returnType

**●  returnType**:  *`string`*  = "folder"

*Defined in [mapper/web/web.ts:153](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L153)*





___

___
<a id="web.getlist"></a>

###  getList

** getList**:  *`object`* 

*Defined in [mapper/web/web.ts:157](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L157)*




<a id="web.getlist.argnames-15"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["url"]

*Defined in [mapper/web/web.ts:158](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L158)*





___
<a id="web.getlist.requesttype-21"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:159](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L159)*





___
<a id="web.getlist.returntype-2"></a>

###  returnType

**●  returnType**:  *`string`*  = "list"

*Defined in [mapper/web/web.ts:160](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L160)*





___

___
<a id="web.getpushnotificationsubscriber"></a>

###  getPushNotificationSubscriber

** getPushNotificationSubscriber**:  *`object`* 

*Defined in [mapper/web/web.ts:164](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L164)*




<a id="web.getpushnotificationsubscriber.argnames-16"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/web/web.ts:165](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L165)*





___
<a id="web.getpushnotificationsubscriber.requesttype-22"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:166](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L166)*





___

___
<a id="web.getpushnotificationsubscribersbyargs"></a>

###  getPushNotificationSubscribersByArgs

** getPushNotificationSubscribersByArgs**:  *`object`* 

*Defined in [mapper/web/web.ts:170](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L170)*




<a id="web.getpushnotificationsubscribersbyargs.argnames-17"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["args"]

*Defined in [mapper/web/web.ts:171](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L171)*





___
<a id="web.getpushnotificationsubscribersbyargs.requesttype-23"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:172](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L172)*





___

___
<a id="web.getpushnotificationsubscribersbyuser"></a>

###  getPushNotificationSubscribersByUser

** getPushNotificationSubscribersByUser**:  *`object`* 

*Defined in [mapper/web/web.ts:176](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L176)*




<a id="web.getpushnotificationsubscribersbyuser.argnames-18"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["loginName"]

*Defined in [mapper/web/web.ts:177](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L177)*





___
<a id="web.getpushnotificationsubscribersbyuser.requesttype-24"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsInQS

*Defined in [mapper/web/web.ts:178](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L178)*





___

___
<a id="web.getsubwebsfilteredforcurrentuser"></a>

###  getSubwebsFilteredForCurrentUser

** getSubwebsFilteredForCurrentUser**:  *`object`* 

*Defined in [mapper/web/web.ts:182](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L182)*




<a id="web.getsubwebsfilteredforcurrentuser.argnames-19"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["nwebtemplatefilter", "nconfigurationfilter"]

*Defined in [mapper/web/web.ts:183](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L183)*





___
<a id="web.getsubwebsfilteredforcurrentuser.requesttype-25"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgs

*Defined in [mapper/web/web.ts:184](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L184)*





___
<a id="web.getsubwebsfilteredforcurrentuser.returntype-3"></a>

###  returnType

**●  returnType**:  *`string`*  = "webinfos"

*Defined in [mapper/web/web.ts:185](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L185)*





___

___
<a id="web.getuserbyid"></a>

###  getUserById

** getUserById**:  *`object`* 

*Defined in [mapper/web/web.ts:189](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L189)*




<a id="web.getuserbyid.argnames-20"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/web/web.ts:190](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L190)*





___
<a id="web.getuserbyid.requesttype-26"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/web/web.ts:191](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L191)*





___
<a id="web.getuserbyid.returntype-4"></a>

###  returnType

**●  returnType**:  *`string`*  = "user"

*Defined in [mapper/web/web.ts:192](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L192)*





___

___
<a id="web.getusereffectivepermissions"></a>

###  getUserEffectivePermissions

** getUserEffectivePermissions**:  *`object`* 

*Defined in [mapper/web/web.ts:196](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L196)*




<a id="web.getusereffectivepermissions.argnames-21"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["loginName"]

*Defined in [mapper/web/web.ts:197](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L197)*





___
<a id="web.getusereffectivepermissions.name-2"></a>

###  name

**●  name**:  *`string`*  = "getUserEffectivePermissions(@user)?@user='[[loginName]]'"

*Defined in [mapper/web/web.ts:198](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L198)*





___
<a id="web.getusereffectivepermissions.requesttype-27"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetReplace

*Defined in [mapper/web/web.ts:199](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L199)*





___

___
<a id="web.getweburlfrompageurl"></a>

###  getWebUrlFromPageUrl

** getWebUrlFromPageUrl**:  *`object`* 

*Defined in [mapper/web/web.ts:203](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L203)*




<a id="web.getweburlfrompageurl.name-3"></a>

###  name

**●  name**:  *`string`*  = "sp.web.getWebUrlFromPageUrl"

*Defined in [mapper/web/web.ts:204](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L204)*





___
<a id="web.getweburlfrompageurl.requesttype-28"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsInQS

*Defined in [mapper/web/web.ts:205](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L205)*





___

___
<a id="web.loadandinstallapp"></a>

###  loadAndInstallApp

** loadAndInstallApp**:  *`object`* 

*Defined in [mapper/web/web.ts:209](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L209)*




<a id="web.loadandinstallapp.requesttype-29"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/web/web.ts:210](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L210)*





___

___
<a id="web.loadandinstallappinspecifiedlocale"></a>

###  loadAndInstallAppInSpecifiedLocale

** loadAndInstallAppInSpecifiedLocale**:  *`object`* 

*Defined in [mapper/web/web.ts:214](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L214)*




<a id="web.loadandinstallappinspecifiedlocale.argnames-22"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["appPackageStream", "installationLocaleLCID"]

*Defined in [mapper/web/web.ts:215](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L215)*





___
<a id="web.loadandinstallappinspecifiedlocale.requesttype-30"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/web/web.ts:216](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L216)*





___

___
<a id="web.loadapp"></a>

###  loadApp

** loadApp**:  *`object`* 

*Defined in [mapper/web/web.ts:220](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L220)*




<a id="web.loadapp.argnames-23"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["appPackageStream", "installationLocaleLCID"]

*Defined in [mapper/web/web.ts:221](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L221)*





___
<a id="web.loadapp.requesttype-31"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/web/web.ts:222](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L222)*





___

___
<a id="web.maptoicon"></a>

###  mapToIcon

** mapToIcon**:  *`object`* 

*Defined in [mapper/web/web.ts:226](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L226)*




<a id="web.maptoicon.argnames-24"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["filename", "progid", "size"]

*Defined in [mapper/web/web.ts:227](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L227)*





___
<a id="web.maptoicon.requesttype-32"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgs

*Defined in [mapper/web/web.ts:228](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L228)*





___

___
<a id="web.processexternalnotification"></a>

###  processExternalNotification

** processExternalNotification**:  *`object`* 

*Defined in [mapper/web/web.ts:232](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L232)*




<a id="web.processexternalnotification.requesttype-33"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/web/web.ts:233](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L233)*





___

___
<a id="web.query"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/web/web.ts:237](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L237)*




<a id="web.query.argnames-25"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["oData"]

*Defined in [mapper/web/web.ts:238](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L238)*





___
<a id="web.query.requesttype-34"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.OData

*Defined in [mapper/web/web.ts:239](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L239)*





___

___
<a id="web.registerpushnotificationsubscriber"></a>

###  registerPushNotificationSubscriber

** registerPushNotificationSubscriber**:  *`object`* 

*Defined in [mapper/web/web.ts:243](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L243)*




<a id="web.registerpushnotificationsubscriber.argnames-26"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["deviceappinstanceid", "servicetoken"]

*Defined in [mapper/web/web.ts:244](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L244)*





___
<a id="web.registerpushnotificationsubscriber.requesttype-35"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/web/web.ts:245](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L245)*





___

___
<a id="web.resetroleinheritance"></a>

###  resetRoleInheritance

** resetRoleInheritance**:  *`object`* 

*Defined in [mapper/web/web.ts:249](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L249)*




<a id="web.resetroleinheritance.requesttype-36"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/web/web.ts:250](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L250)*





___

___
<a id="web.unregisterpushnotificationsubscriber"></a>

###  unregisterPushNotificationSubscriber

** unregisterPushNotificationSubscriber**:  *`object`* 

*Defined in [mapper/web/web.ts:254](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L254)*




<a id="web.unregisterpushnotificationsubscriber.requesttype-37"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsValueOnly

*Defined in [mapper/web/web.ts:255](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L255)*





___

___
<a id="web.update"></a>

###  update

** update**:  *`object`* 

*Defined in [mapper/web/web.ts:259](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L259)*




<a id="web.update.metadatatype-1"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.Web"

*Defined in [mapper/web/web.ts:260](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L260)*





___
<a id="web.update.name-4"></a>

###  name

**●  name**:  *`string`*  = ""

*Defined in [mapper/web/web.ts:261](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L261)*





___
<a id="web.update.requestmethod"></a>

###  requestMethod

**●  requestMethod**:  *`string`*  = "MERGE"

*Defined in [mapper/web/web.ts:262](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L262)*





___
<a id="web.update.requesttype-38"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/web/web.ts:263](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/web/web.ts#L263)*





___

___


