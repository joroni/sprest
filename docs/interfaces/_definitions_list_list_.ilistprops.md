[gd-sprest](../README.md) > ["definitions/list/list"](../modules/_definitions_list_list_.md) > [IListProps](../interfaces/_definitions_list_list_.ilistprops.md)



# Interface: IListProps


List Properties

## Hierarchy

**IListProps**

↳  [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




↳  [IListResult](_definitions_list_list_.ilistresult.md)









## Properties
<a id="allowcontenttypes"></a>

###  AllowContentTypes

**●  AllowContentTypes**:  *`boolean`* 

*Defined in [definitions/list/list.ts:139](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L139)*



Gets a value that specifies whether the list supports content types.




___

<a id="allowdeletion"></a>

###  AllowDeletion

**●  AllowDeletion**:  *`boolean`* 

*Defined in [definitions/list/list.ts:141](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L141)*





___

<a id="basetemplate"></a>

###  BaseTemplate

**●  BaseTemplate**:  *`SPTypes.ListTemplateType`⎮`number`* 

*Defined in [definitions/list/list.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L144)*



Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values.




___

<a id="basetype"></a>

###  BaseType

**●  BaseType**:  *`number`* 

*Defined in [definitions/list/list.ts:147](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L147)*



Gets the base type for the list. Represents an SP.BaseType value: Generic List = 0; Document Library = 1; Discussion Board = 3; Survey = 4; Issue = 5.




___

<a id="browserfilehandling"></a>

###  BrowserFileHandling

**●  BrowserFileHandling**:  *`number`* 

*Defined in [definitions/list/list.ts:152](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L152)*



Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. Represents an SP.BrowserFileHandling value: Permissive = 0; Strict = 1.




___

<a id="contenttypesenabled"></a>

###  ContentTypesEnabled

**●  ContentTypesEnabled**:  *`boolean`* 

*Defined in [definitions/list/list.ts:155](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L155)*



Gets or sets a value that specifies whether content types are enabled for the list.




___

<a id="created"></a>

###  Created

**●  Created**:  *`string`* 

*Defined in [definitions/list/list.ts:158](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L158)*



Gets a value that specifies when the list was created.




___

<a id="currentchangetoken"></a>

###  CurrentChangeToken

**●  CurrentChangeToken**:  *[IStringValue](_definitions_lib_types_.istringvalue.md)* 

*Defined in [definitions/list/list.ts:160](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L160)*





___

<a id="defaultcontentapprovalworkflowid"></a>

###  DefaultContentApprovalWorkflowId

**●  DefaultContentApprovalWorkflowId**:  *`string`* 

*Defined in [definitions/list/list.ts:163](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L163)*



Gets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow.




___

<a id="description"></a>

###  Description

**●  Description**:  *`string`* 

*Defined in [definitions/list/list.ts:166](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L166)*



Gets or sets a value that specifies the description of the list.




___

<a id="direction"></a>

###  Direction

**●  Direction**:  *`string`* 

*Defined in [definitions/list/list.ts:169](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L169)*



Gets or sets a value that specifies the reading order of the list. Returns ""NONE"", ""LTR"", or ""RTL"".




___

<a id="documenttemplateurl"></a>

###  DocumentTemplateUrl

**●  DocumentTemplateUrl**:  *`string`* 

*Defined in [definitions/list/list.ts:172](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L172)*



Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null.




___

<a id="draftversionvisibility"></a>

###  DraftVersionVisibility

**●  DraftVersionVisibility**:  *`number`* 

*Defined in [definitions/list/list.ts:175](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L175)*



Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. Represents an SP.DraftVisibilityType value: Reader = 0; Author = 1; Approver = 2.




___

<a id="enableassigntoemail"></a>

###  EnableAssignToEmail

**●  EnableAssignToEmail**:  *`boolean`* 

*Defined in [definitions/list/list.ts:177](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L177)*





___

<a id="enableattachments"></a>

###  EnableAttachments

**●  EnableAttachments**:  *`boolean`* 

*Defined in [definitions/list/list.ts:180](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L180)*



Gets or sets a value that specifies whether list item attachments are enabled for the list.




___

<a id="enablefoldercreation"></a>

###  EnableFolderCreation

**●  EnableFolderCreation**:  *`boolean`* 

*Defined in [definitions/list/list.ts:183](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L183)*



Gets or sets a value that specifies whether new list folders can be added to the list.




___

<a id="enableminorversions"></a>

###  EnableMinorVersions

**●  EnableMinorVersions**:  *`boolean`* 

*Defined in [definitions/list/list.ts:186](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L186)*



Gets or sets a value that specifies whether minor versions are enabled for the list.




___

<a id="enablemoderation"></a>

###  EnableModeration

**●  EnableModeration**:  *`boolean`* 

*Defined in [definitions/list/list.ts:189](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L189)*



Gets or sets a value that specifies whether content approval is enabled for the list.




___

<a id="enableversioning"></a>

###  EnableVersioning

**●  EnableVersioning**:  *`boolean`* 

*Defined in [definitions/list/list.ts:192](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L192)*



Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list.




___

<a id="entitytypename"></a>

###  EntityTypeName

**●  EntityTypeName**:  *`string`* 

*Defined in [definitions/list/list.ts:195](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L195)*





___

<a id="excludefromofflineclient"></a>

###  ExcludeFromOfflineClient

**●  ExcludeFromOfflineClient**:  *`boolean`* 

*Defined in [definitions/list/list.ts:197](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L197)*





___

<a id="filesavepostprocessingenabled"></a>

###  FileSavePostProcessingEnabled

**●  FileSavePostProcessingEnabled**:  *`boolean`* 

*Defined in [definitions/list/list.ts:199](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L199)*





___

<a id="forcecheckout"></a>

###  ForceCheckout

**●  ForceCheckout**:  *`boolean`* 

*Defined in [definitions/list/list.ts:202](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L202)*



Gets or sets a value that indicates whether forced checkout is enabled for the document library.




___

<a id="hasexternaldatasource"></a>

###  HasExternalDataSource

**●  HasExternalDataSource**:  *`boolean`* 

*Defined in [definitions/list/list.ts:205](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L205)*



Gets a value that specifies whether the list is an external list.




___

<a id="hidden"></a>

###  Hidden

**●  Hidden**:  *`boolean`* 

*Defined in [definitions/list/list.ts:208](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L208)*



Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false.




___

<a id="id"></a>

###  Id

**●  Id**:  *`string`* 

*Defined in [definitions/list/list.ts:211](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L211)*



Gets the GUID that identifies the list in the database.




___

<a id="imageurl"></a>

###  ImageUrl

**●  ImageUrl**:  *`string`* 

*Defined in [definitions/list/list.ts:214](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L214)*



Gets a value that specifies the URI for the icon of the list.




___

<a id="irmenabled"></a>

###  IrmEnabled

**●  IrmEnabled**:  *`boolean`* 

*Defined in [definitions/list/list.ts:217](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L217)*





___

<a id="irmexpire"></a>

###  IrmExpire

**●  IrmExpire**:  *`boolean`* 

*Defined in [definitions/list/list.ts:220](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L220)*





___

<a id="irmreject"></a>

###  IrmReject

**●  IrmReject**:  *`boolean`* 

*Defined in [definitions/list/list.ts:223](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L223)*





___

<a id="isapplicationlist"></a>

###  IsApplicationList

**●  IsApplicationList**:  *`boolean`* 

*Defined in [definitions/list/list.ts:226](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L226)*



Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list.




___

<a id="iscatalog"></a>

###  IsCatalog

**●  IsCatalog**:  *`boolean`* 

*Defined in [definitions/list/list.ts:229](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L229)*



Gets a value that specifies whether the list is a gallery.




___

<a id="isprivate"></a>

###  IsPrivate

**●  IsPrivate**:  *`boolean`* 

*Defined in [definitions/list/list.ts:232](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L232)*





___

<a id="itemcount"></a>

###  ItemCount

**●  ItemCount**:  *`number`* 

*Defined in [definitions/list/list.ts:235](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L235)*



Gets a value that specifies the number of list items in the list.




___

<a id="lastitemdeleteddate"></a>

###  LastItemDeletedDate

**●  LastItemDeletedDate**:  *`string`* 

*Defined in [definitions/list/list.ts:238](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L238)*



Gets a value that specifies the last time a list item was deleted from the list.




___

<a id="lastitemmodifieddate"></a>

###  LastItemModifiedDate

**●  LastItemModifiedDate**:  *`string`* 

*Defined in [definitions/list/list.ts:241](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L241)*



Gets a value that specifies the last time a list item, field, or property of the list was modified.




___

<a id="listexperienceoptions"></a>

###  ListExperienceOptions

**●  ListExperienceOptions**:  *`number`* 

*Defined in [definitions/list/list.ts:243](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L243)*





___

<a id="listitementitytypefullname"></a>

###  ListItemEntityTypeFullName

**●  ListItemEntityTypeFullName**:  *`string`* 

*Defined in [definitions/list/list.ts:246](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L246)*





___

<a id="majorversionlimit"></a>

###  MajorVersionLimit

**●  MajorVersionLimit**:  *`number`* 

*Defined in [definitions/list/list.ts:248](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L248)*





___

<a id="majorwithminorversionslimit"></a>

###  MajorWithMinorVersionsLimit

**●  MajorWithMinorVersionsLimit**:  *`number`* 

*Defined in [definitions/list/list.ts:250](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L250)*





___

<a id="multipledatalist"></a>

###  MultipleDataList

**●  MultipleDataList**:  *`boolean`* 

*Defined in [definitions/list/list.ts:253](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L253)*



Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site.




___

<a id="nocrawl"></a>

###  NoCrawl

**●  NoCrawl**:  *`boolean`* 

*Defined in [definitions/list/list.ts:256](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L256)*



Gets or sets a value that specifies that the crawler must not crawl the list.




___

<a id="parentweburl"></a>

###  ParentWebUrl

**●  ParentWebUrl**:  *`string`* 

*Defined in [definitions/list/list.ts:259](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L259)*



Gets a value that specifies the server-relative URL of the site that contains the list.




___

<a id="parserdisabled"></a>

###  ParserDisabled

**●  ParserDisabled**:  *`boolean`* 

*Defined in [definitions/list/list.ts:261](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L261)*





___

<a id="readsecurity"></a>

###  ReadSecurity

**●  ReadSecurity**:  *`number`* 

*Defined in [definitions/list/list.ts:263](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L263)*





___

<a id="servertemplatecancreatefolders"></a>

###  ServerTemplateCanCreateFolders

**●  ServerTemplateCanCreateFolders**:  *`boolean`* 

*Defined in [definitions/list/list.ts:266](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L266)*



Gets a value that indicates whether folders can be created within the list.




___

<a id="templatefeatureid"></a>

###  TemplateFeatureId

**●  TemplateFeatureId**:  *`string`* 

*Defined in [definitions/list/list.ts:269](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L269)*



Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Defined in [definitions/list/list.ts:272](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L272)*



Gets or sets the displayed title for the list. Its length must be <= 255 characters.




___


