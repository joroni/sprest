[gd-sprest](../README.md) > ["definitions/list/view"](../modules/_definitions_list_view_.md) > [IViewResult](../interfaces/_definitions_list_view_.iviewresult.md)



# Interface: IViewResult


View Result

## Hierarchy


 [IViewMethods](_definitions_list_view_.iviewmethods.md)




 [IViewProps](_definitions_list_view_.iviewprops.md)




 [IViewQueryProps](_definitions_list_view_.iviewqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)

**↳ IViewResult**








## Properties
<a id="aggregations"></a>

###  Aggregations

**●  Aggregations**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Aggregations](_definitions_list_view_.iviewprops.md#aggregations)*

*Defined in [definitions/list/view.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L35)*



Gets or sets a value that specifies fields and functions that define totals shown in a list view. If not null, the XML must conform to FieldRefDefinitionAggregation, as specified in [MS-WSSCAML].




___

<a id="aggregationsstatus"></a>

###  AggregationsStatus

**●  AggregationsStatus**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[AggregationsStatus](_definitions_list_view_.iviewprops.md#aggregationsstatus)*

*Defined in [definitions/list/view.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L38)*



Gets or sets a value that specifies whether totals are shown in the list view.




___

<a id="baseviewid"></a>

###  BaseViewId

**●  BaseViewId**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[BaseViewId](_definitions_list_view_.iviewprops.md#baseviewid)*

*Defined in [definitions/list/view.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L41)*



Gets a value that specifies the base view identifier of the list view.




___

<a id="contenttypeid"></a>

###  ContentTypeId

**●  ContentTypeId**:  *[IStringValue](_definitions_lib_types_.istringvalue.md)* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ContentTypeId](_definitions_list_view_.iviewprops.md#contenttypeid)*

*Defined in [definitions/list/view.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L44)*



Gets or sets the identifier of the content type with which the view is associated so that the view is available only on folders of this content type.




___

<a id="defaultview"></a>

###  DefaultView

**●  DefaultView**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[DefaultView](_definitions_list_view_.iviewprops.md#defaultview)*

*Defined in [definitions/list/view.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L47)*



Gets or sets a value that specifies whether the list view is the default list view.




___

<a id="defaultviewforcontenttype"></a>

###  DefaultViewForContentType

**●  DefaultViewForContentType**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[DefaultViewForContentType](_definitions_list_view_.iviewprops.md#defaultviewforcontenttype)*

*Defined in [definitions/list/view.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L50)*



Gets or sets a value that specifies whether the list view is the default list view for the content type specified by contentTypeId.




___

<a id="editormodified"></a>

###  EditorModified

**●  EditorModified**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[EditorModified](_definitions_list_view_.iviewprops.md#editormodified)*

*Defined in [definitions/list/view.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L53)*



Gets or sets a value that specifies whether the list view was modified in an editor.




___

<a id="formats"></a>

###  Formats

**●  Formats**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Formats](_definitions_list_view_.iviewprops.md#formats)*

*Defined in [definitions/list/view.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L56)*



Gets or sets a value that specifies the column and row formatting for the list view. If not null, the XML must conform to ViewFormatDefinitions, as specified in [MS-WSSCAML].




___

<a id="hidden"></a>

###  Hidden

**●  Hidden**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Hidden](_definitions_list_view_.iviewprops.md#hidden)*

*Defined in [definitions/list/view.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L59)*



Gets or sets a value that specifies whether the list view is hidden.




___

<a id="htmlschemaxml"></a>

###  HtmlSchemaXml

**●  HtmlSchemaXml**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[HtmlSchemaXml](_definitions_list_view_.iviewprops.md#htmlschemaxml)*

*Defined in [definitions/list/view.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L62)*



Gets a value that specifies the XML document that represents the list view.




___

<a id="id"></a>

###  Id

**●  Id**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Id](_definitions_list_view_.iviewprops.md#id)*

*Defined in [definitions/list/view.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L65)*



Gets a value that specifies the view identifier of the list view.




___

<a id="imageurl"></a>

###  ImageUrl

**●  ImageUrl**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ImageUrl](_definitions_list_view_.iviewprops.md#imageurl)*

*Defined in [definitions/list/view.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L68)*



Gets a value that specifies the URI (Uniform Resource Identifier) of the image for the list view.




___

<a id="includerootfolder"></a>

###  IncludeRootFolder

**●  IncludeRootFolder**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[IncludeRootFolder](_definitions_list_view_.iviewprops.md#includerootfolder)*

*Defined in [definitions/list/view.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L71)*



Gets or sets a value that specifies whether the current folder is displayed in the list view.




___

<a id="jslink"></a>

###  JSLink

**●  JSLink**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[JSLink](_definitions_list_view_.iviewprops.md#jslink)*

*Defined in [definitions/list/view.ts:74](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L74)*



Gets or sets the name of the JavaScript file used for the view.




___

<a id="listviewxml"></a>

###  ListViewXml

**●  ListViewXml**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ListViewXml](_definitions_list_view_.iviewprops.md#listviewxml)*

*Defined in [definitions/list/view.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L77)*



Gets or sets a string that represents the view XML.




___

<a id="method"></a>

###  Method

**●  Method**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Method](_definitions_list_view_.iviewprops.md#method)*

*Defined in [definitions/list/view.ts:80](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L80)*



Gets or sets a value that specifies the view method for the list view. If not null, the XML must conform to Method, as specified in [MS-WSSCAP].




___

<a id="mobiledefaultview"></a>

###  MobileDefaultView

**●  MobileDefaultView**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[MobileDefaultView](_definitions_list_view_.iviewprops.md#mobiledefaultview)*

*Defined in [definitions/list/view.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L83)*



Gets or sets a value that specifies whether the list view is the default mobile list view.




___

<a id="mobileview"></a>

###  MobileView

**●  MobileView**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[MobileView](_definitions_list_view_.iviewprops.md#mobileview)*

*Defined in [definitions/list/view.ts:86](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L86)*



Gets or sets a value that specifies whether the list view is a mobile list view.




___

<a id="moderationtype"></a>

###  ModerationType

**●  ModerationType**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ModerationType](_definitions_list_view_.iviewprops.md#moderationtype)*

*Defined in [definitions/list/view.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L89)*



Gets a value that specifies the content approval type for the list view.




___

<a id="orderedview"></a>

###  OrderedView

**●  OrderedView**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[OrderedView](_definitions_list_view_.iviewprops.md#orderedview)*

*Defined in [definitions/list/view.ts:92](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L92)*



Gets a value that specifies whether list items can be reordered in the list view.




___

<a id="paged"></a>

###  Paged

**●  Paged**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Paged](_definitions_list_view_.iviewprops.md#paged)*

*Defined in [definitions/list/view.ts:95](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L95)*



Gets or sets a value that specifies whether the list view is a paged view.




___

<a id="personalview"></a>

###  PersonalView

**●  PersonalView**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[PersonalView](_definitions_list_view_.iviewprops.md#personalview)*

*Defined in [definitions/list/view.ts:98](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L98)*



Gets a value that specifies whether the list view is a personal view.




___

<a id="readonlyview"></a>

###  ReadOnlyView

**●  ReadOnlyView**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ReadOnlyView](_definitions_list_view_.iviewprops.md#readonlyview)*

*Defined in [definitions/list/view.ts:101](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L101)*



Gets a value that specifies whether the list view is read-only.




___

<a id="requiresclientintegration"></a>

###  RequiresClientIntegration

**●  RequiresClientIntegration**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[RequiresClientIntegration](_definitions_list_view_.iviewprops.md#requiresclientintegration)*

*Defined in [definitions/list/view.ts:104](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L104)*



Gets a value that specifies whether the list view requires client integration rights.




___

<a id="rowlimit"></a>

###  RowLimit

**●  RowLimit**:  *`number`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[RowLimit](_definitions_list_view_.iviewprops.md#rowlimit)*

*Defined in [definitions/list/view.ts:107](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L107)*



Gets or sets a value that specifies the maximum number of list items to display in a visual page of the list view.




___

<a id="scope"></a>

###  Scope

**●  Scope**:  *`number`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Scope](_definitions_list_view_.iviewprops.md#scope)*

*Defined in [definitions/list/view.ts:110](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L110)*



Gets or sets a value that specifies the scope for the list view. Represents a ViewScope value. DefaultValue = 0, Recursive = 1, RecursiveAll = 2, FilesOnly = 3.




___

<a id="serverrelativeurl"></a>

###  ServerRelativeUrl

**●  ServerRelativeUrl**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ServerRelativeUrl](_definitions_list_view_.iviewprops.md#serverrelativeurl)*

*Defined in [definitions/list/view.ts:113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L113)*



Gets a value that specifies the server-relative URL of the list view page.




___

<a id="styleid"></a>

###  StyleId

**●  StyleId**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[StyleId](_definitions_list_view_.iviewprops.md#styleid)*

*Defined in [definitions/list/view.ts:116](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L116)*



Gets a value that specifies the identifier of the view style for the list view.




___

<a id="tabularview"></a>

###  TabularView

**●  TabularView**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[TabularView](_definitions_list_view_.iviewprops.md#tabularview)*

*Defined in [definitions/list/view.ts:118](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L118)*





___

<a id="threaded"></a>

###  Threaded

**●  Threaded**:  *`boolean`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Threaded](_definitions_list_view_.iviewprops.md#threaded)*

*Defined in [definitions/list/view.ts:121](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L121)*



Gets a value that specifies whether the list view is a threaded view.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Title](_definitions_list_view_.iviewprops.md#title)*

*Defined in [definitions/list/view.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L124)*



Gets or sets a value that specifies the display name of the list view.




___

<a id="toolbar"></a>

###  Toolbar

**●  Toolbar**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[Toolbar](_definitions_list_view_.iviewprops.md#toolbar)*

*Defined in [definitions/list/view.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L127)*



Gets or sets a value that specifies the toolbar for the list view.




___

<a id="toolbartemplatename"></a>

###  ToolbarTemplateName

**●  ToolbarTemplateName**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ToolbarTemplateName](_definitions_list_view_.iviewprops.md#toolbartemplatename)*

*Defined in [definitions/list/view.ts:130](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L130)*



Gets a value that specifies the name of the template for the toolbar that is used in the list view.




___

<a id="viewdata"></a>

###  ViewData

**●  ViewData**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ViewData](_definitions_list_view_.iviewprops.md#viewdata)*

*Defined in [definitions/list/view.ts:133](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L133)*



Gets or sets a value that specifies the view data for the list view. If not null, the XML must conform to FieldRefDefinitionViewData, as specified in [MS-WSSCAML].




___

<a id="viewjoins"></a>

###  ViewJoins

**●  ViewJoins**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ViewJoins](_definitions_list_view_.iviewprops.md#viewjoins)*

*Defined in [definitions/list/view.ts:138](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L138)*



Gets or sets a value that specifies the joins that are used in the list view. If not null, the XML must conform to ListJoinsDefinition, as specified in [MS-WSSCAML].




___

<a id="viewprojectedfields"></a>

###  ViewProjectedFields

**●  ViewProjectedFields**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ViewProjectedFields](_definitions_list_view_.iviewprops.md#viewprojectedfields)*

*Defined in [definitions/list/view.ts:141](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L141)*



Gets or sets a value that specifies the projected fields that will be used by the list view. If not null, the XML must conform to ProjectedFieldsDefinitionType, as specified in [MS-WSSCAML].




___

<a id="viewquery"></a>

###  ViewQuery

**●  ViewQuery**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ViewQuery](_definitions_list_view_.iviewprops.md#viewquery)*

*Defined in [definitions/list/view.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L144)*



Gets or sets a value that specifies the query that is used by the list view. If not null, the XML must conform to CamlQueryRoot, as specified in [MS-WSSCAML].




___

<a id="viewtype"></a>

###  ViewType

**●  ViewType**:  *`string`* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[ViewType](_definitions_list_view_.iviewprops.md#viewtype)*

*Defined in [definitions/list/view.ts:147](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L147)*



Gets a value that specifies the type of the list view. Can be HTML, GRID, CALENDAR, RECURRENCE, CHART, or GANTT.




___

<a id="visualizationinfo"></a>

###  VisualizationInfo

**●  VisualizationInfo**:  *[IVisualization](_definitions_lib_types_.ivisualization.md)* 

*Inherited from [IViewProps](_definitions_list_view_.iviewprops.md).[VisualizationInfo](_definitions_list_view_.iviewprops.md#visualizationinfo)*

*Defined in [definitions/list/view.ts:135](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L135)*





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
<a id="viewfields"></a>

###  ViewFields

► **ViewFields**(): [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)




*Inherited from [IViewQueryProps](_definitions_list_view_.iviewqueryprops.md).[ViewFields](_definitions_list_view_.iviewqueryprops.md#viewfields)*

*Defined in [definitions/list/view.ts:155](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L155)*



Gets a value that specifies the collection of fields in the list view.




**Returns:** [IViewFields](_definitions_list_viewfieldcollection_.iviewfields.md)





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IViewMethods](_definitions_list_view_.iviewmethods.md).[delete](_definitions_list_view_.iviewmethods.md#delete)*

*Defined in [definitions/list/view.ts:16](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L16)*



Deletes the view.




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

► **execute**(callback?: *function*): [IView](_definitions_list_view_.iview.md)

► **execute**(waitFl: *`boolean`*): [IView](_definitions_list_view_.iview.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IView](_definitions_list_view_.iview.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IView](_definitions_list_view_.iview.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IView](_definitions_list_view_.iview.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IView](_definitions_list_view_.iview.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IViewResult](_definitions_list_view_.iviewresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IViewResult](_definitions_list_view_.iviewresult.md)





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

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)





___

<a id="renderashtml"></a>

###  renderAsHtml

► **renderAsHtml**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IViewMethods](_definitions_list_view_.iviewmethods.md).[renderAsHtml](_definitions_list_view_.iviewmethods.md#renderashtml)*

*Defined in [definitions/list/view.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L21)*



Returns the list view as HTML.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IViewResult](_definitions_list_view_.iviewresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IViewResult](_definitions_list_view_.iviewresult.md)>





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IViewMethods](_definitions_list_view_.iviewmethods.md).[update](_definitions_list_view_.iviewmethods.md#update)*

*Defined in [definitions/list/view.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L27)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The list properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


