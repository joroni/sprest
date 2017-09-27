[gd-sprest](../README.md) > ["definitions/complexTypes"](../modules/_definitions_complextypes_.md) > [SearchRequest](../interfaces/_definitions_complextypes_.searchrequest.md)



# Interface: SearchRequest


Search Request


## Properties
<a id="blockdedupemode"></a>

### «Optional» BlockDedupeMode

**●  BlockDedupeMode**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1024](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1024)*





___

<a id="bypassresulttypes"></a>

### «Optional» BypassResultTypes

**●  BypassResultTypes**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1027](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1027)*



A Boolean value that specifies whether to perform result type processing for the query.




___

<a id="clienttype"></a>

### «Optional» ClientType

**●  ClientType**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1030](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1030)*



The type of the client that issued the query.




___

<a id="collapsespecification"></a>

### «Optional» CollapseSpecification

**●  CollapseSpecification**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1033](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1033)*



The managed properties that are used to determine how to collapse individual search Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications. Within a single collapse specification, results are collapsed if their properties match all individual properties in the collapse specification.




___

<a id="culture"></a>

### «Optional» Culture

**●  Culture**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1036](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1036)*



The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft).




___

<a id="desiredsnippetlength"></a>

### «Optional» DesiredSnippetLength

**●  DesiredSnippetLength**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1039](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1039)*



The preferred number of characters to display in the hit-highlighted summary generated for a search result.




___

<a id="enablefql"></a>

### «Optional» EnableFql

**●  EnableFql**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1042](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1042)*



A Boolean value that specifies whether the query uses the FAST Query Language (FQL).




___

<a id="enableinterleaving"></a>

### «Optional» EnableInterleaving

**●  EnableInterleaving**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1045](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1045)*



A Boolean value that specifies whether the result tables that are returned for the result block are mixed with the result tables that are returned for the original query.




___

<a id="enablenicknames"></a>

### «Optional» EnableNicknames

**●  EnableNicknames**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1048](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1048)*



A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also.




___

<a id="enableorderinghithighlightedproperty"></a>

### «Optional» EnableOrderingHitHighlightedProperty

**●  EnableOrderingHitHighlightedProperty**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1054](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1054)*



A Boolean value that specifies whether the hit highlighted properties can be ordered.




___

<a id="enablephonetic"></a>

### «Optional» EnablePhonetic

**●  EnablePhonetic**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1051](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1051)*



A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches.




___

<a id="enablequeryrules"></a>

### «Optional» EnableQueryRules

**●  EnableQueryRules**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1057](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1057)*



A Boolean value that specifies whether to enable query rules for the query.




___

<a id="enablesorting"></a>

### «Optional» EnableSorting

**●  EnableSorting**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1060](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1060)*



A Boolean value that specifies whether to sort search




___

<a id="enablestemming"></a>

### «Optional» EnableStemming

**●  EnableStemming**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1063](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1063)*



A Boolean value that specifies whether stemming is enabled.




___

<a id="generateblockranklog"></a>

### «Optional» GenerateBlockRankLog

**●  GenerateBlockRankLog**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1066](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1066)*



A Boolean value that specifies whether to return block rank log information in the BlockRankLog property of the interleaved result table. A block rank log contains the textual information on the block score and the documents that were de-duplicated.




___

<a id="hiddenconstraints"></a>

### «Optional» HiddenConstraints

**●  HiddenConstraints**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1069](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1069)*



The additional query terms to append to the query.




___

<a id="hithighlightedmultivaluepropertylimit"></a>

### «Optional» HitHighlightedMultivaluePropertyLimit

**●  HitHighlightedMultivaluePropertyLimit**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1072](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1072)*



The number of properties to show hit highlighting for in the search




___

<a id="hithighlightedproperties"></a>

### «Optional» HithighlightedProperties

**●  HithighlightedProperties**:  *`String`* 

*Defined in [definitions/complexTypes.ts:1075](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1075)*



The properties to highlight in the search result summary when the property value matches the search terms entered by the user.




___

<a id="maxsnippetlength"></a>

### «Optional» MaxSnippetLength

**●  MaxSnippetLength**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1078](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1078)*



The maximum number of characters to display in the hit-highlighted summary generated for a search result.




___

<a id="personalizationdata"></a>

### «Optional» PersonalizationData

**●  PersonalizationData**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1083](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1083)*



The GUID for the user who submitted the search query.




___

<a id="processbestbets"></a>

### «Optional» ProcessBestBets

**●  ProcessBestBets**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1086](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1086)*



A Boolean value that specifies whether to return best bet results for the query.




___

<a id="processpersonalfavorites"></a>

### «Optional» ProcessPersonalFavorites

**●  ProcessPersonalFavorites**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1089](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1089)*



A Boolean value that specifies whether to return personal favorites with the search




___

<a id="properties"></a>

### «Optional» Properties

**●  Properties**:  *[KeyValue](_definitions_complextypes_.keyvalue.md)* 

*Defined in [definitions/complexTypes.ts:1092](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1092)*



Additional properties for the query.




___

<a id="qlsquerysession"></a>

### «Optional» QLSQuerySession

**●  QLSQuerySession**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1080](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1080)*





___

<a id="querytag"></a>

### «Optional» QueryTag

**●  QueryTag**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1095](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1095)*



Custom tags that identify the query. You can specify multiple query tags, separated by semicolons.




___

<a id="querytemplate"></a>

### «Optional» QueryTemplate

**●  QueryTemplate**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1098](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1098)*



A string that contains the text that replaces the query text, as part of a query transform.




___

<a id="querytemplatepropertiesurl"></a>

### «Optional» QueryTemplatePropertiesUrl

**●  QueryTemplatePropertiesUrl**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1101](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1101)*



The location of the queryparametertemplate.xml file. This file is used to enable anonymous users to make Search REST queries.




___

<a id="querytext"></a>

###  Querytext

**●  Querytext**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1104](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1104)*



A string that contains the text for the search query




___

<a id="rankingmodelid"></a>

### «Optional» RankingModelId

**●  RankingModelId**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1107](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1107)*



The ID of the ranking model to use for the query.




___

<a id="refinementfilters"></a>

### «Optional» RefinementFilters

**●  RefinementFilters**:  *`String`* 

*Defined in [definitions/complexTypes.ts:1110](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1110)*



The set of refinement filters used when issuing a refinement query. For GET requests, the RefinementFilters parameter is specified as an FQL filter. For POST requests, the RefinementFilters parameter is specified as an array of FQL filters.




___

<a id="refiners"></a>

### «Optional» Refiners

**●  Refiners**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1113)*



The set of refiners to return in a search result.




___

<a id="reorderingrules"></a>

### «Optional» ReorderingRules

**●  ReorderingRules**:  *`Array`.<[ReorderingRulesCreationInformation](_definitions_complextypes_.reorderingrulescreationinformation.md)>* 

*Defined in [definitions/complexTypes.ts:1116](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1116)*



Special rules for reordering search These rules can specify that documents matching certain conditions are ranked higher or lower in the




___

<a id="resultsurl"></a>

### «Optional» ResultsUrl

**●  ResultsUrl**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1119)*



The URL for the search results page.




___

<a id="rowlimit"></a>

### «Optional» RowLimit

**●  RowLimit**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1122](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1122)*



The maximum number of rows overall that are returned in the search Compared to RowsPerPage, RowLimit is the maximum number of rows returned overall.




___

<a id="rowsperpage"></a>

### «Optional» RowsPerPage

**●  RowsPerPage**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1125](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1125)*



The maximum number of rows to return per page. Compared to RowLimit, RowsPerPage refers to the maximum number of rows to return per page, and is used primarily when you want to implement paging for search




___

<a id="selectproperties"></a>

### «Optional» SelectProperties

**●  SelectProperties**:  *`String`* 

*Defined in [definitions/complexTypes.ts:1128](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1128)*



The managed properties to return in the search To return a managed property, set the property's retrievable flag to true in the search schema.




___

<a id="sortlist"></a>

### «Optional» SortList

**●  SortList**:  *`Array`.<`any`>* 

*Defined in [definitions/complexTypes.ts:1131](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1131)*



The list of properties by which the search results are ordered.




___

<a id="sourceid"></a>

### «Optional» SourceId

**●  SourceId**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1134](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1134)*



The result source ID to use for executing the search query.




___

<a id="startrow"></a>

### «Optional» StartRow

**●  StartRow**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1137](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1137)*



The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search




___

<a id="summarylength"></a>

### «Optional» SummaryLength

**●  SummaryLength**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1140](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1140)*



The number of characters to display in the result summary for a search result.




___

<a id="timezoneid"></a>

### «Optional» TimeZoneId

**●  TimeZoneId**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1145](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1145)*





___

<a id="timeout"></a>

### «Optional» Timeout

**●  Timeout**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1143](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1143)*



The amount of time in milliseconds before the query request times out. The default value is 30000.




___

<a id="totalrowsexactminimum"></a>

### «Optional» TotalRowsExactMinimum

**●  TotalRowsExactMinimum**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1147](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1147)*





___

<a id="trimduplicates"></a>

### «Optional» TrimDuplicates

**●  TrimDuplicates**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1150](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1150)*



A Boolean value that specifies whether duplicate items are removed from the




___

<a id="trimduplicatesincludeid"></a>

### «Optional» TrimDuplicatesIncludeId

**●  TrimDuplicatesIncludeId**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1152](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1152)*





___

<a id="uilanguage"></a>

### «Optional» UIlanguage

**●  UIlanguage**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1155](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1155)*



The locale identifier (LCID) of the user export interface (see Locale IDs Assigned by Microsoft).




___

<a id="useolsquery"></a>

### «Optional» UseOLSQuery

**●  UseOLSQuery**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1157](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1157)*





___


