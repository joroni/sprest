[gd-sprest](../README.md) > ["definitions/list/view"](../modules/_definitions_list_view_.md) > [IViewProps](../interfaces/_definitions_list_view_.iviewprops.md)



# Interface: IViewProps


View Properties

## Hierarchy

**IViewProps**

↳  [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)




↳  [IViewResult](_definitions_list_view_.iviewresult.md)









## Properties
<a id="aggregations"></a>

###  Aggregations

**●  Aggregations**:  *`string`* 

*Defined in [definitions/list/view.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L35)*



Gets or sets a value that specifies fields and functions that define totals shown in a list view. If not null, the XML must conform to FieldRefDefinitionAggregation, as specified in [MS-WSSCAML].




___

<a id="aggregationsstatus"></a>

###  AggregationsStatus

**●  AggregationsStatus**:  *`string`* 

*Defined in [definitions/list/view.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L38)*



Gets or sets a value that specifies whether totals are shown in the list view.




___

<a id="baseviewid"></a>

###  BaseViewId

**●  BaseViewId**:  *`string`* 

*Defined in [definitions/list/view.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L41)*



Gets a value that specifies the base view identifier of the list view.




___

<a id="contenttypeid"></a>

###  ContentTypeId

**●  ContentTypeId**:  *[IStringValue](_definitions_lib_types_.istringvalue.md)* 

*Defined in [definitions/list/view.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L44)*



Gets or sets the identifier of the content type with which the view is associated so that the view is available only on folders of this content type.




___

<a id="defaultview"></a>

###  DefaultView

**●  DefaultView**:  *`boolean`* 

*Defined in [definitions/list/view.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L47)*



Gets or sets a value that specifies whether the list view is the default list view.




___

<a id="defaultviewforcontenttype"></a>

###  DefaultViewForContentType

**●  DefaultViewForContentType**:  *`boolean`* 

*Defined in [definitions/list/view.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L50)*



Gets or sets a value that specifies whether the list view is the default list view for the content type specified by contentTypeId.




___

<a id="editormodified"></a>

###  EditorModified

**●  EditorModified**:  *`boolean`* 

*Defined in [definitions/list/view.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L53)*



Gets or sets a value that specifies whether the list view was modified in an editor.




___

<a id="formats"></a>

###  Formats

**●  Formats**:  *`string`* 

*Defined in [definitions/list/view.ts:56](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L56)*



Gets or sets a value that specifies the column and row formatting for the list view. If not null, the XML must conform to ViewFormatDefinitions, as specified in [MS-WSSCAML].




___

<a id="hidden"></a>

###  Hidden

**●  Hidden**:  *`boolean`* 

*Defined in [definitions/list/view.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L59)*



Gets or sets a value that specifies whether the list view is hidden.




___

<a id="htmlschemaxml"></a>

###  HtmlSchemaXml

**●  HtmlSchemaXml**:  *`string`* 

*Defined in [definitions/list/view.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L62)*



Gets a value that specifies the XML document that represents the list view.




___

<a id="id"></a>

###  Id

**●  Id**:  *`string`* 

*Defined in [definitions/list/view.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L65)*



Gets a value that specifies the view identifier of the list view.




___

<a id="imageurl"></a>

###  ImageUrl

**●  ImageUrl**:  *`string`* 

*Defined in [definitions/list/view.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L68)*



Gets a value that specifies the URI (Uniform Resource Identifier) of the image for the list view.




___

<a id="includerootfolder"></a>

###  IncludeRootFolder

**●  IncludeRootFolder**:  *`boolean`* 

*Defined in [definitions/list/view.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L71)*



Gets or sets a value that specifies whether the current folder is displayed in the list view.




___

<a id="jslink"></a>

###  JSLink

**●  JSLink**:  *`string`* 

*Defined in [definitions/list/view.ts:74](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L74)*



Gets or sets the name of the JavaScript file used for the view.




___

<a id="listviewxml"></a>

###  ListViewXml

**●  ListViewXml**:  *`string`* 

*Defined in [definitions/list/view.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L77)*



Gets or sets a string that represents the view XML.




___

<a id="method"></a>

###  Method

**●  Method**:  *`string`* 

*Defined in [definitions/list/view.ts:80](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L80)*



Gets or sets a value that specifies the view method for the list view. If not null, the XML must conform to Method, as specified in [MS-WSSCAP].




___

<a id="mobiledefaultview"></a>

###  MobileDefaultView

**●  MobileDefaultView**:  *`boolean`* 

*Defined in [definitions/list/view.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L83)*



Gets or sets a value that specifies whether the list view is the default mobile list view.




___

<a id="mobileview"></a>

###  MobileView

**●  MobileView**:  *`boolean`* 

*Defined in [definitions/list/view.ts:86](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L86)*



Gets or sets a value that specifies whether the list view is a mobile list view.




___

<a id="moderationtype"></a>

###  ModerationType

**●  ModerationType**:  *`string`* 

*Defined in [definitions/list/view.ts:89](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L89)*



Gets a value that specifies the content approval type for the list view.




___

<a id="orderedview"></a>

###  OrderedView

**●  OrderedView**:  *`boolean`* 

*Defined in [definitions/list/view.ts:92](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L92)*



Gets a value that specifies whether list items can be reordered in the list view.




___

<a id="paged"></a>

###  Paged

**●  Paged**:  *`boolean`* 

*Defined in [definitions/list/view.ts:95](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L95)*



Gets or sets a value that specifies whether the list view is a paged view.




___

<a id="personalview"></a>

###  PersonalView

**●  PersonalView**:  *`boolean`* 

*Defined in [definitions/list/view.ts:98](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L98)*



Gets a value that specifies whether the list view is a personal view.




___

<a id="readonlyview"></a>

###  ReadOnlyView

**●  ReadOnlyView**:  *`boolean`* 

*Defined in [definitions/list/view.ts:101](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L101)*



Gets a value that specifies whether the list view is read-only.




___

<a id="requiresclientintegration"></a>

###  RequiresClientIntegration

**●  RequiresClientIntegration**:  *`boolean`* 

*Defined in [definitions/list/view.ts:104](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L104)*



Gets a value that specifies whether the list view requires client integration rights.




___

<a id="rowlimit"></a>

###  RowLimit

**●  RowLimit**:  *`number`* 

*Defined in [definitions/list/view.ts:107](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L107)*



Gets or sets a value that specifies the maximum number of list items to display in a visual page of the list view.




___

<a id="scope"></a>

###  Scope

**●  Scope**:  *`number`* 

*Defined in [definitions/list/view.ts:110](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L110)*



Gets or sets a value that specifies the scope for the list view. Represents a ViewScope value. DefaultValue = 0, Recursive = 1, RecursiveAll = 2, FilesOnly = 3.




___

<a id="serverrelativeurl"></a>

###  ServerRelativeUrl

**●  ServerRelativeUrl**:  *`string`* 

*Defined in [definitions/list/view.ts:113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L113)*



Gets a value that specifies the server-relative URL of the list view page.




___

<a id="styleid"></a>

###  StyleId

**●  StyleId**:  *`string`* 

*Defined in [definitions/list/view.ts:116](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L116)*



Gets a value that specifies the identifier of the view style for the list view.




___

<a id="tabularview"></a>

###  TabularView

**●  TabularView**:  *`boolean`* 

*Defined in [definitions/list/view.ts:118](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L118)*





___

<a id="threaded"></a>

###  Threaded

**●  Threaded**:  *`boolean`* 

*Defined in [definitions/list/view.ts:121](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L121)*



Gets a value that specifies whether the list view is a threaded view.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Defined in [definitions/list/view.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L124)*



Gets or sets a value that specifies the display name of the list view.




___

<a id="toolbar"></a>

###  Toolbar

**●  Toolbar**:  *`string`* 

*Defined in [definitions/list/view.ts:127](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L127)*



Gets or sets a value that specifies the toolbar for the list view.




___

<a id="toolbartemplatename"></a>

###  ToolbarTemplateName

**●  ToolbarTemplateName**:  *`string`* 

*Defined in [definitions/list/view.ts:130](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L130)*



Gets a value that specifies the name of the template for the toolbar that is used in the list view.




___

<a id="viewdata"></a>

###  ViewData

**●  ViewData**:  *`string`* 

*Defined in [definitions/list/view.ts:133](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L133)*



Gets or sets a value that specifies the view data for the list view. If not null, the XML must conform to FieldRefDefinitionViewData, as specified in [MS-WSSCAML].




___

<a id="viewjoins"></a>

###  ViewJoins

**●  ViewJoins**:  *`string`* 

*Defined in [definitions/list/view.ts:138](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L138)*



Gets or sets a value that specifies the joins that are used in the list view. If not null, the XML must conform to ListJoinsDefinition, as specified in [MS-WSSCAML].




___

<a id="viewprojectedfields"></a>

###  ViewProjectedFields

**●  ViewProjectedFields**:  *`string`* 

*Defined in [definitions/list/view.ts:141](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L141)*



Gets or sets a value that specifies the projected fields that will be used by the list view. If not null, the XML must conform to ProjectedFieldsDefinitionType, as specified in [MS-WSSCAML].




___

<a id="viewquery"></a>

###  ViewQuery

**●  ViewQuery**:  *`string`* 

*Defined in [definitions/list/view.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L144)*



Gets or sets a value that specifies the query that is used by the list view. If not null, the XML must conform to CamlQueryRoot, as specified in [MS-WSSCAML].




___

<a id="viewtype"></a>

###  ViewType

**●  ViewType**:  *`string`* 

*Defined in [definitions/list/view.ts:147](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L147)*



Gets a value that specifies the type of the list view. Can be HTML, GRID, CALENDAR, RECURRENCE, CHART, or GANTT.




___

<a id="visualizationinfo"></a>

###  VisualizationInfo

**●  VisualizationInfo**:  *[IVisualization](_definitions_lib_types_.ivisualization.md)* 

*Defined in [definitions/list/view.ts:135](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/view.ts#L135)*





___


