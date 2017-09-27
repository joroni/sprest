[gd-sprest](../README.md) > ["mapper/list/list"](../modules/_mapper_list_list_.md)



# External module: "mapper/list/list"

## Index

### Object literals

* [list](_mapper_list_list_.md#list)



---
<a id="list"></a>

## Object literal: list


/


<a id="list.properties"></a>

###  properties

**●  properties**:  *`string`[]*  =  [
        "BrowserFileHandling", "ContentTypes|contenttypes|('[Name]')|contenttype", "CreatablesInfo", "DefaultView|view",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
        "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
        "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views|('[Name]')|view", "WorkflowAssociations"
    ]

*Defined in [mapper/list/list.ts:12](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L12)*



/




___
<a id="list.breakroleinheritance"></a>

###  breakRoleInheritance

** breakRoleInheritance**:  *`object`* 

*Defined in [mapper/list/list.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L26)*



/



<a id="list.breakroleinheritance.argnames"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["copyroleassignments", "clearsubscopes"]

*Defined in [mapper/list/list.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L27)*





___
<a id="list.breakroleinheritance.requesttype"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/list/list.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L28)*





___

___
<a id="list.delete"></a>

###  delete

** delete**:  *`object`* 

*Defined in [mapper/list/list.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L32)*




<a id="list.delete.requesttype-1"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Delete

*Defined in [mapper/list/list.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L33)*





___

___
<a id="list.getchanges"></a>

###  getChanges

** getChanges**:  *`object`* 

*Defined in [mapper/list/list.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L37)*




<a id="list.getchanges.argnames-1"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["query"]

*Defined in [mapper/list/list.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L38)*





___
<a id="list.getchanges.metadatatype"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.ChangeQuery"

*Defined in [mapper/list/list.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L39)*





___
<a id="list.getchanges.requesttype-2"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/list/list.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L40)*





___

___
<a id="list.getitembyid"></a>

###  getItemById

** getItemById**:  *`object`* 

*Defined in [mapper/list/list.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L44)*




<a id="list.getitembyid.argnames-2"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/list/list.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L45)*





___
<a id="list.getitembyid.requesttype-3"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/list/list.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L46)*





___
<a id="list.getitembyid.returntype"></a>

###  returnType

**●  returnType**:  *`string`*  = "item"

*Defined in [mapper/list/list.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L47)*





___

___
<a id="list.getitems"></a>

###  getItems

** getItems**:  *`object`* 

*Defined in [mapper/list/list.ts:51](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L51)*




<a id="list.getitems.argnames-3"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["viewXml"]

*Defined in [mapper/list/list.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L52)*





___
<a id="list.getitems.requesttype-4"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/list/list.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L53)*





___
<a id="list.getitems.data"></a>

###  data

** data**:  *`object`* 

*Defined in [mapper/list/list.ts:54](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L54)*




<a id="list.getitems.data.query"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/list/list.ts:55](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L55)*




<a id="list.getitems.data.query.viewxml"></a>

###  ViewXml

**●  ViewXml**:  *`string`*  = "[[viewXml]]"

*Defined in [mapper/list/list.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L57)*





___
<a id="list.getitems.data.query.___metadata"></a>

###  ___metadata

** ___metadata**:  *`object`* 

*Defined in [mapper/list/list.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L56)*




<a id="list.getitems.data.query.___metadata.type"></a>

###  type

**●  type**:  *`string`*  = "SP.CamlQuery"

*Defined in [mapper/list/list.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L56)*





___

___

___

___

___
<a id="list.getitemsbyquery"></a>

###  getItemsByQuery

** getItemsByQuery**:  *`object`* 

*Defined in [mapper/list/list.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L63)*




<a id="list.getitemsbyquery.argnames-4"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["camlQuery"]

*Defined in [mapper/list/list.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L64)*





___
<a id="list.getitemsbyquery.name"></a>

###  name

**●  name**:  *`string`*  = "getItems"

*Defined in [mapper/list/list.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L65)*





___
<a id="list.getitemsbyquery.requesttype-5"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/list/list.ts:66](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L66)*





___
<a id="list.getitemsbyquery.data-1"></a>

###  data

** data**:  *`object`* 

*Defined in [mapper/list/list.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L67)*




<a id="list.getitemsbyquery.data-1.query-1"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/list/list.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L68)*




<a id="list.getitemsbyquery.data-1.query-1.viewxml-1"></a>

###  ViewXml

**●  ViewXml**:  *`string`*  = "<View>[[camlQuery]]</View>"

*Defined in [mapper/list/list.ts:70](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L70)*





___
<a id="list.getitemsbyquery.data-1.query-1.___metadata-1"></a>

###  ___metadata

** ___metadata**:  *`object`* 

*Defined in [mapper/list/list.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L69)*




<a id="list.getitemsbyquery.data-1.query-1.___metadata-1.type-1"></a>

###  type

**●  type**:  *`string`*  = "SP.CamlQuery"

*Defined in [mapper/list/list.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L69)*





___

___

___

___

___
<a id="list.getlistitemchangessincetoken"></a>

###  getListItemChangesSinceToken

** getListItemChangesSinceToken**:  *`object`* 

*Defined in [mapper/list/list.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L76)*




<a id="list.getlistitemchangessincetoken.argnames-5"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["query"]

*Defined in [mapper/list/list.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L77)*





___
<a id="list.getlistitemchangessincetoken.metadatatype-1"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.ChangeLogItemQuery"

*Defined in [mapper/list/list.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L78)*





___
<a id="list.getlistitemchangessincetoken.requesttype-6"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/list/list.ts:79](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L79)*





___

___
<a id="list.getrelatedfields"></a>

###  getRelatedFields

** getRelatedFields**:  *`object`* 

*Defined in [mapper/list/list.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L83)*




<a id="list.getrelatedfields.requesttype-7"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Get

*Defined in [mapper/list/list.ts:84](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L84)*





___

___
<a id="list.getusereffectivepermissions"></a>

###  getUserEffectivePermissions

** getUserEffectivePermissions**:  *`object`* 

*Defined in [mapper/list/list.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L88)*




<a id="list.getusereffectivepermissions.argnames-6"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["loginName"]

*Defined in [mapper/list/list.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L89)*





___
<a id="list.getusereffectivepermissions.name-1"></a>

###  name

**●  name**:  *`string`*  = "getUserEffectivePermissions(@user)?@user='[[loginName]]'"

*Defined in [mapper/list/list.ts:90](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L90)*





___
<a id="list.getusereffectivepermissions.requesttype-8"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetReplace

*Defined in [mapper/list/list.ts:91](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L91)*





___

___
<a id="list.getviewbyid"></a>

###  getViewById

** getViewById**:  *`object`* 

*Defined in [mapper/list/list.ts:95](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L95)*




<a id="list.getviewbyid.argnames-7"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["viewId"]

*Defined in [mapper/list/list.ts:96](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L96)*





___
<a id="list.getviewbyid.name-2"></a>

###  name

**●  name**:  *`string`*  = "getView"

*Defined in [mapper/list/list.ts:97](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L97)*





___
<a id="list.getviewbyid.requesttype-9"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/list/list.ts:98](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L98)*





___
<a id="list.getviewbyid.returntype-1"></a>

###  returnType

**●  returnType**:  *`string`*  = "view"

*Defined in [mapper/list/list.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L99)*





___

___
<a id="list.query-2"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/list/list.ts:103](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L103)*




<a id="list.query-2.argnames-8"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["oData"]

*Defined in [mapper/list/list.ts:104](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L104)*





___
<a id="list.query-2.requesttype-10"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.OData

*Defined in [mapper/list/list.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L105)*





___

___
<a id="list.recycle"></a>

###  recycle

** recycle**:  *`object`* 

*Defined in [mapper/list/list.ts:109](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L109)*




<a id="list.recycle.requesttype-11"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/list/list.ts:110](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L110)*





___

___
<a id="list.renderlistdata"></a>

###  renderListData

** renderListData**:  *`object`* 

*Defined in [mapper/list/list.ts:114](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L114)*




<a id="list.renderlistdata.argnames-9"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["viewXml"]

*Defined in [mapper/list/list.ts:115](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L115)*





___
<a id="list.renderlistdata.name-3"></a>

###  name

**●  name**:  *`string`*  = "renderListData(@v)?@v='<View>[[viewXml]]</View>'"

*Defined in [mapper/list/list.ts:116](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L116)*





___
<a id="list.renderlistdata.requesttype-12"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostReplace

*Defined in [mapper/list/list.ts:117](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L117)*





___

___
<a id="list.renderlistformdata"></a>

###  renderListFormData

** renderListFormData**:  *`object`* 

*Defined in [mapper/list/list.ts:122](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L122)*




<a id="list.renderlistformdata.argnames-10"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["itemid", "formid", "mode"]

*Defined in [mapper/list/list.ts:123](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L123)*





___
<a id="list.renderlistformdata.requesttype-13"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgs

*Defined in [mapper/list/list.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L124)*





___

___
<a id="list.reservelistitemid"></a>

###  reserveListItemId

** reserveListItemId**:  *`object`* 

*Defined in [mapper/list/list.ts:128](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L128)*




<a id="list.reservelistitemid.requesttype-14"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/list/list.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L129)*





___

___
<a id="list.resetroleinheritance"></a>

###  resetRoleInheritance

** resetRoleInheritance**:  *`object`* 

*Defined in [mapper/list/list.ts:133](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L133)*




<a id="list.resetroleinheritance.requesttype-15"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.Post

*Defined in [mapper/list/list.ts:134](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L134)*





___

___
<a id="list.update"></a>

###  update

** update**:  *`object`* 

*Defined in [mapper/list/list.ts:138](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L138)*




<a id="list.update.metadatatype-2"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.List"

*Defined in [mapper/list/list.ts:139](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L139)*





___
<a id="list.update.name-4"></a>

###  name

**●  name**:  *`string`*  = ""

*Defined in [mapper/list/list.ts:140](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L140)*





___
<a id="list.update.requestmethod"></a>

###  requestMethod

**●  requestMethod**:  *`string`*  = "MERGE"

*Defined in [mapper/list/list.ts:141](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L141)*





___
<a id="list.update.requesttype-16"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/list/list.ts:142](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/list/list.ts#L142)*





___

___


