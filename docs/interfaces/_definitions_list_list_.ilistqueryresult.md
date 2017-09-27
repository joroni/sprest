[gd-sprest](../README.md) > ["definitions/list/list"](../modules/_definitions_list_list_.md) > [IListQueryResult](../interfaces/_definitions_list_list_.ilistqueryresult.md)



# Interface: IListQueryResult


List Query Result

## Hierarchy


 [IListMethods](_definitions_list_list_.ilistmethods.md)




 [IListProps](_definitions_list_list_.ilistprops.md)

**↳ IListQueryResult**








## Properties
<a id="allowcontenttypes"></a>

###  AllowContentTypes

**●  AllowContentTypes**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[AllowContentTypes](_definitions_list_list_.ilistprops.md#allowcontenttypes)*

*Defined in [definitions/list/list.ts:139](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L139)*



Gets a value that specifies whether the list supports content types.




___

<a id="allowdeletion"></a>

###  AllowDeletion

**●  AllowDeletion**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[AllowDeletion](_definitions_list_list_.ilistprops.md#allowdeletion)*

*Defined in [definitions/list/list.ts:141](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L141)*





___

<a id="basetemplate"></a>

###  BaseTemplate

**●  BaseTemplate**:  *`SPTypes.ListTemplateType`⎮`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[BaseTemplate](_definitions_list_list_.ilistprops.md#basetemplate)*

*Defined in [definitions/list/list.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L144)*



Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values.




___

<a id="basetype"></a>

###  BaseType

**●  BaseType**:  *`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[BaseType](_definitions_list_list_.ilistprops.md#basetype)*

*Defined in [definitions/list/list.ts:147](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L147)*



Gets the base type for the list. Represents an SP.BaseType value: Generic List = 0; Document Library = 1; Discussion Board = 3; Survey = 4; Issue = 5.




___

<a id="browserfilehandling"></a>

###  BrowserFileHandling

**●  BrowserFileHandling**:  *`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[BrowserFileHandling](_definitions_list_list_.ilistprops.md#browserfilehandling)*

*Defined in [definitions/list/list.ts:152](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L152)*



Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. Represents an SP.BrowserFileHandling value: Permissive = 0; Strict = 1.




___

<a id="contenttypes"></a>

###  ContentTypes

**●  ContentTypes**:  *[IContentTypeResults](_definitions_contenttype_contenttypes_.icontenttyperesults.md)* 

*Defined in [definitions/list/list.ts:484](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L484)*



Gets the content types that are associated with the list.




___

<a id="contenttypesenabled"></a>

###  ContentTypesEnabled

**●  ContentTypesEnabled**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ContentTypesEnabled](_definitions_list_list_.ilistprops.md#contenttypesenabled)*

*Defined in [definitions/list/list.ts:155](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L155)*



Gets or sets a value that specifies whether content types are enabled for the list.




___

<a id="created"></a>

###  Created

**●  Created**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[Created](_definitions_list_list_.ilistprops.md#created)*

*Defined in [definitions/list/list.ts:158](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L158)*



Gets a value that specifies when the list was created.




___

<a id="currentchangetoken"></a>

###  CurrentChangeToken

**●  CurrentChangeToken**:  *[IStringValue](_definitions_lib_types_.istringvalue.md)* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[CurrentChangeToken](_definitions_list_list_.ilistprops.md#currentchangetoken)*

*Defined in [definitions/list/list.ts:160](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L160)*





___

<a id="datasource"></a>

###  DataSource

**●  DataSource**:  *[IListDataSource](_definitions_lib_types_.ilistdatasource.md)* 

*Defined in [definitions/list/list.ts:489](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L489)*



Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.




___

<a id="defaultcontentapprovalworkflowid"></a>

###  DefaultContentApprovalWorkflowId

**●  DefaultContentApprovalWorkflowId**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[DefaultContentApprovalWorkflowId](_definitions_list_list_.ilistprops.md#defaultcontentapprovalworkflowid)*

*Defined in [definitions/list/list.ts:163](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L163)*



Gets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow.




___

<a id="defaultdisplayformurl"></a>

###  DefaultDisplayFormUrl

**●  DefaultDisplayFormUrl**:  *`string`* 

*Defined in [definitions/list/list.ts:494](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L494)*



Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL




___

<a id="defaulteditformurl"></a>

###  DefaultEditFormUrl

**●  DefaultEditFormUrl**:  *`string`* 

*Defined in [definitions/list/list.ts:499](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L499)*



Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.




___

<a id="defaultnewformurl"></a>

###  DefaultNewFormUrl

**●  DefaultNewFormUrl**:  *`string`* 

*Defined in [definitions/list/list.ts:504](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L504)*



Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.




___

<a id="defaultview"></a>

###  DefaultView

**●  DefaultView**:  *[IViewResult](_definitions_list_view_.iviewresult.md)* 

*Defined in [definitions/list/list.ts:509](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L509)*



Gets the default list view.




___

<a id="defaultviewurl"></a>

###  DefaultViewUrl

**●  DefaultViewUrl**:  *`string`* 

*Defined in [definitions/list/list.ts:514](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L514)*



Gets the URL of the default view for the list.




___

<a id="description"></a>

###  Description

**●  Description**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[Description](_definitions_list_list_.ilistprops.md#description)*

*Defined in [definitions/list/list.ts:166](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L166)*



Gets or sets a value that specifies the description of the list.




___

<a id="descriptionresouce"></a>

###  DescriptionResouce

**●  DescriptionResouce**:  *[IResourcePath](_definitions_lib_types_.iresourcepath.md)* 

*Defined in [definitions/list/list.ts:516](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L516)*





___

<a id="direction"></a>

###  Direction

**●  Direction**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[Direction](_definitions_list_list_.ilistprops.md#direction)*

*Defined in [definitions/list/list.ts:169](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L169)*



Gets or sets a value that specifies the reading order of the list. Returns ""NONE"", ""LTR"", or ""RTL"".




___

<a id="documenttemplateurl"></a>

###  DocumentTemplateUrl

**●  DocumentTemplateUrl**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[DocumentTemplateUrl](_definitions_list_list_.ilistprops.md#documenttemplateurl)*

*Defined in [definitions/list/list.ts:172](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L172)*



Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null.




___

<a id="draftversionvisibility"></a>

###  DraftVersionVisibility

**●  DraftVersionVisibility**:  *`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[DraftVersionVisibility](_definitions_list_list_.ilistprops.md#draftversionvisibility)*

*Defined in [definitions/list/list.ts:175](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L175)*



Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. Represents an SP.DraftVisibilityType value: Reader = 0; Author = 1; Approver = 2.




___

<a id="effectivebasepermissions"></a>

###  EffectiveBasePermissions

**●  EffectiveBasePermissions**:  *[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)* 

*Defined in [definitions/list/list.ts:521](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L521)*



Gets a value that specifies the effective permissions on the list that are assigned to the current user.




___

<a id="effectivebasepermissionsforui"></a>

###  EffectiveBasePermissionsForUI

**●  EffectiveBasePermissionsForUI**:  *[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)* 

*Defined in [definitions/list/list.ts:526](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L526)*



Gets a value that specifies the effective permissions on the list that are for the user export interface.




___

<a id="enableassigntoemail"></a>

###  EnableAssignToEmail

**●  EnableAssignToEmail**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[EnableAssignToEmail](_definitions_list_list_.ilistprops.md#enableassigntoemail)*

*Defined in [definitions/list/list.ts:177](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L177)*





___

<a id="enableattachments"></a>

###  EnableAttachments

**●  EnableAttachments**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[EnableAttachments](_definitions_list_list_.ilistprops.md#enableattachments)*

*Defined in [definitions/list/list.ts:180](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L180)*



Gets or sets a value that specifies whether list item attachments are enabled for the list.




___

<a id="enablefoldercreation"></a>

###  EnableFolderCreation

**●  EnableFolderCreation**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[EnableFolderCreation](_definitions_list_list_.ilistprops.md#enablefoldercreation)*

*Defined in [definitions/list/list.ts:183](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L183)*



Gets or sets a value that specifies whether new list folders can be added to the list.




___

<a id="enableminorversions"></a>

###  EnableMinorVersions

**●  EnableMinorVersions**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[EnableMinorVersions](_definitions_list_list_.ilistprops.md#enableminorversions)*

*Defined in [definitions/list/list.ts:186](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L186)*



Gets or sets a value that specifies whether minor versions are enabled for the list.




___

<a id="enablemoderation"></a>

###  EnableModeration

**●  EnableModeration**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[EnableModeration](_definitions_list_list_.ilistprops.md#enablemoderation)*

*Defined in [definitions/list/list.ts:189](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L189)*



Gets or sets a value that specifies whether content approval is enabled for the list.




___

<a id="enableversioning"></a>

###  EnableVersioning

**●  EnableVersioning**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[EnableVersioning](_definitions_list_list_.ilistprops.md#enableversioning)*

*Defined in [definitions/list/list.ts:192](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L192)*



Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list.




___

<a id="entitytypename"></a>

###  EntityTypeName

**●  EntityTypeName**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[EntityTypeName](_definitions_list_list_.ilistprops.md#entitytypename)*

*Defined in [definitions/list/list.ts:195](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L195)*





___

<a id="eventreceivers"></a>

###  EventReceivers

**●  EventReceivers**:  *[IEventReceiverResults](_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)* 

*Defined in [definitions/list/list.ts:531](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L531)*



Gets the event receivers associated with the list.




___

<a id="excludefromofflineclient"></a>

###  ExcludeFromOfflineClient

**●  ExcludeFromOfflineClient**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ExcludeFromOfflineClient](_definitions_list_list_.ilistprops.md#excludefromofflineclient)*

*Defined in [definitions/list/list.ts:197](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L197)*





___

<a id="fields"></a>

###  Fields

**●  Fields**:  *[IFieldResults](_definitions_field_fields_.ifieldresults.md)* 

*Defined in [definitions/list/list.ts:536](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L536)*



Gets the fields in the list.




___

<a id="filesavepostprocessingenabled"></a>

###  FileSavePostProcessingEnabled

**●  FileSavePostProcessingEnabled**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[FileSavePostProcessingEnabled](_definitions_list_list_.ilistprops.md#filesavepostprocessingenabled)*

*Defined in [definitions/list/list.ts:199](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L199)*





___

<a id="firstuniqueancestorsecurableobject"></a>

###  FirstUniqueAncestorSecurableObject

**●  FirstUniqueAncestorSecurableObject**:  *[IWebResult](_definitions_site_web_.iwebresult.md)* 

*Defined in [definitions/list/list.ts:541](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L541)*



Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.




___

<a id="forcecheckout"></a>

###  ForceCheckout

**●  ForceCheckout**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ForceCheckout](_definitions_list_list_.ilistprops.md#forcecheckout)*

*Defined in [definitions/list/list.ts:202](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L202)*



Gets or sets a value that indicates whether forced checkout is enabled for the document library.




___

<a id="forms"></a>

###  Forms

**●  Forms**:  *[IResults](_definitions_lib_types_.iresults.md)[IForm](_definitions_lib_types_.iform.md)* 

*Defined in [definitions/list/list.ts:546](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L546)*



Gets the list forms in the list.




___

<a id="hasexternaldatasource"></a>

###  HasExternalDataSource

**●  HasExternalDataSource**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[HasExternalDataSource](_definitions_list_list_.ilistprops.md#hasexternaldatasource)*

*Defined in [definitions/list/list.ts:205](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L205)*



Gets a value that specifies whether the list is an external list.




___

<a id="hasuniqueroleassignments"></a>

###  HasUniqueRoleAssignments

**●  HasUniqueRoleAssignments**:  *`boolean`* 

*Defined in [definitions/list/list.ts:551](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L551)*



Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.




___

<a id="hidden"></a>

###  Hidden

**●  Hidden**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[Hidden](_definitions_list_list_.ilistprops.md#hidden)*

*Defined in [definitions/list/list.ts:208](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L208)*



Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false.




___

<a id="id"></a>

###  Id

**●  Id**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[Id](_definitions_list_list_.ilistprops.md#id)*

*Defined in [definitions/list/list.ts:211](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L211)*



Gets the GUID that identifies the list in the database.




___

<a id="imageurl"></a>

###  ImageUrl

**●  ImageUrl**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ImageUrl](_definitions_list_list_.ilistprops.md#imageurl)*

*Defined in [definitions/list/list.ts:214](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L214)*



Gets a value that specifies the URI for the icon of the list.




___

<a id="informationrightsmanagementsettings"></a>

###  InformationRightsManagementSettings

**●  InformationRightsManagementSettings**:  *[IInformationRightsManagementSettings](_definitions_lib_types_.iinformationrightsmanagementsettings.md)* 

*Defined in [definitions/list/list.ts:556](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L556)*



Gets a value that specifies the information rights management settings.




___

<a id="irmenabled"></a>

###  IrmEnabled

**●  IrmEnabled**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[IrmEnabled](_definitions_list_list_.ilistprops.md#irmenabled)*

*Defined in [definitions/list/list.ts:217](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L217)*





___

<a id="irmexpire"></a>

###  IrmExpire

**●  IrmExpire**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[IrmExpire](_definitions_list_list_.ilistprops.md#irmexpire)*

*Defined in [definitions/list/list.ts:220](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L220)*





___

<a id="irmreject"></a>

###  IrmReject

**●  IrmReject**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[IrmReject](_definitions_list_list_.ilistprops.md#irmreject)*

*Defined in [definitions/list/list.ts:223](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L223)*





___

<a id="isapplicationlist"></a>

###  IsApplicationList

**●  IsApplicationList**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[IsApplicationList](_definitions_list_list_.ilistprops.md#isapplicationlist)*

*Defined in [definitions/list/list.ts:226](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L226)*



Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list.




___

<a id="iscatalog"></a>

###  IsCatalog

**●  IsCatalog**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[IsCatalog](_definitions_list_list_.ilistprops.md#iscatalog)*

*Defined in [definitions/list/list.ts:229](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L229)*



Gets a value that specifies whether the list is a gallery.




___

<a id="isprivate"></a>

###  IsPrivate

**●  IsPrivate**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[IsPrivate](_definitions_list_list_.ilistprops.md#isprivate)*

*Defined in [definitions/list/list.ts:232](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L232)*





___

<a id="issiteassetslibrary"></a>

###  IsSiteAssetsLibrary

**●  IsSiteAssetsLibrary**:  *`boolean`* 

*Defined in [definitions/list/list.ts:561](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L561)*



Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.




___

<a id="itemcount"></a>

###  ItemCount

**●  ItemCount**:  *`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ItemCount](_definitions_list_list_.ilistprops.md#itemcount)*

*Defined in [definitions/list/list.ts:235](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L235)*



Gets a value that specifies the number of list items in the list.




___

<a id="items"></a>

###  Items

**●  Items**:  *[IListItemResults](_definitions_list_items_.ilistitemresults.md)* 

*Defined in [definitions/list/list.ts:566](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L566)*



Gets the list items in the list.




___

<a id="lastitemdeleteddate"></a>

###  LastItemDeletedDate

**●  LastItemDeletedDate**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[LastItemDeletedDate](_definitions_list_list_.ilistprops.md#lastitemdeleteddate)*

*Defined in [definitions/list/list.ts:238](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L238)*



Gets a value that specifies the last time a list item was deleted from the list.




___

<a id="lastitemmodifieddate"></a>

###  LastItemModifiedDate

**●  LastItemModifiedDate**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[LastItemModifiedDate](_definitions_list_list_.ilistprops.md#lastitemmodifieddate)*

*Defined in [definitions/list/list.ts:241](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L241)*



Gets a value that specifies the last time a list item, field, or property of the list was modified.




___

<a id="listexperienceoptions"></a>

###  ListExperienceOptions

**●  ListExperienceOptions**:  *`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ListExperienceOptions](_definitions_list_list_.ilistprops.md#listexperienceoptions)*

*Defined in [definitions/list/list.ts:243](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L243)*





___

<a id="listitementitytypefullname"></a>

###  ListItemEntityTypeFullName

**●  ListItemEntityTypeFullName**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ListItemEntityTypeFullName](_definitions_list_list_.ilistprops.md#listitementitytypefullname)*

*Defined in [definitions/list/list.ts:246](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L246)*





___

<a id="majorversionlimit"></a>

###  MajorVersionLimit

**●  MajorVersionLimit**:  *`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[MajorVersionLimit](_definitions_list_list_.ilistprops.md#majorversionlimit)*

*Defined in [definitions/list/list.ts:248](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L248)*





___

<a id="majorwithminorversionslimit"></a>

###  MajorWithMinorVersionsLimit

**●  MajorWithMinorVersionsLimit**:  *`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[MajorWithMinorVersionsLimit](_definitions_list_list_.ilistprops.md#majorwithminorversionslimit)*

*Defined in [definitions/list/list.ts:250](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L250)*





___

<a id="multipledatalist"></a>

###  MultipleDataList

**●  MultipleDataList**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[MultipleDataList](_definitions_list_list_.ilistprops.md#multipledatalist)*

*Defined in [definitions/list/list.ts:253](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L253)*



Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site.




___

<a id="nocrawl"></a>

###  NoCrawl

**●  NoCrawl**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[NoCrawl](_definitions_list_list_.ilistprops.md#nocrawl)*

*Defined in [definitions/list/list.ts:256](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L256)*



Gets or sets a value that specifies that the crawler must not crawl the list.




___

<a id="onquicklaunch"></a>

###  OnQuickLaunch

**●  OnQuickLaunch**:  *`boolean`* 

*Defined in [definitions/list/list.ts:571](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L571)*



Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.




___

<a id="parentweb"></a>

###  ParentWeb

**●  ParentWeb**:  *[IWebResult](_definitions_site_web_.iwebresult.md)* 

*Defined in [definitions/list/list.ts:576](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L576)*



Gets a value that specifies the site that contains the list.




___

<a id="parentweburl"></a>

###  ParentWebUrl

**●  ParentWebUrl**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ParentWebUrl](_definitions_list_list_.ilistprops.md#parentweburl)*

*Defined in [definitions/list/list.ts:259](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L259)*



Gets a value that specifies the server-relative URL of the site that contains the list.




___

<a id="parserdisabled"></a>

###  ParserDisabled

**●  ParserDisabled**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ParserDisabled](_definitions_list_list_.ilistprops.md#parserdisabled)*

*Defined in [definitions/list/list.ts:261](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L261)*





___

<a id="readsecurity"></a>

###  ReadSecurity

**●  ReadSecurity**:  *`number`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ReadSecurity](_definitions_list_list_.ilistprops.md#readsecurity)*

*Defined in [definitions/list/list.ts:263](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L263)*





___

<a id="roleassignments"></a>

###  RoleAssignments

**●  RoleAssignments**:  *[IRoleAssignmentResults](_definitions_security_roleassignments_.iroleassignmentresults.md)* 

*Defined in [definitions/list/list.ts:581](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L581)*



Gets the role assignments for the securable object.




___

<a id="rootfolder"></a>

###  RootFolder

**●  RootFolder**:  *[IFolderResult](_definitions_file_folder_.ifolderresult.md)* 

*Defined in [definitions/list/list.ts:586](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L586)*



Gets the root folder of the list.




___

<a id="schemaxml"></a>

###  SchemaXml

**●  SchemaXml**:  *`string`* 

*Defined in [definitions/list/list.ts:591](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L591)*



Gets a value that specifies the list schema of the list.




___

<a id="servertemplatecancreatefolders"></a>

###  ServerTemplateCanCreateFolders

**●  ServerTemplateCanCreateFolders**:  *`boolean`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[ServerTemplateCanCreateFolders](_definitions_list_list_.ilistprops.md#servertemplatecancreatefolders)*

*Defined in [definitions/list/list.ts:266](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L266)*



Gets a value that indicates whether folders can be created within the list.




___

<a id="subscriptions"></a>

###  Subscriptions

**●  Subscriptions**:  *[IResults](_definitions_lib_types_.iresults.md)[ISubscription](_definitions_lib_types_.isubscription.md)* 

*Defined in [definitions/list/list.ts:593](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L593)*





___

<a id="templatefeatureid"></a>

###  TemplateFeatureId

**●  TemplateFeatureId**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[TemplateFeatureId](_definitions_list_list_.ilistprops.md#templatefeatureid)*

*Defined in [definitions/list/list.ts:269](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L269)*



Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Inherited from [IListProps](_definitions_list_list_.ilistprops.md).[Title](_definitions_list_list_.ilistprops.md#title)*

*Defined in [definitions/list/list.ts:272](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L272)*



Gets or sets the displayed title for the list. Its length must be <= 255 characters.




___

<a id="titleresource"></a>

###  TitleResource

**●  TitleResource**:  *[IResourcePath](_definitions_lib_types_.iresourcepath.md)* 

*Defined in [definitions/list/list.ts:595](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L595)*





___

<a id="usercustomactions"></a>

###  UserCustomActions

**●  UserCustomActions**:  *[IUserCustomActionResults](_definitions_customaction_usercustomactions_.iusercustomactionresults.md)* 

*Defined in [definitions/list/list.ts:600](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L600)*



Gets the user custom actions for the list.




___

<a id="validationformula"></a>

###  ValidationFormula

**●  ValidationFormula**:  *`string`* 

*Defined in [definitions/list/list.ts:605](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L605)*



Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.




___

<a id="validationmessage"></a>

###  ValidationMessage

**●  ValidationMessage**:  *`string`* 

*Defined in [definitions/list/list.ts:610](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L610)*



Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.




___

<a id="views"></a>

###  Views

**●  Views**:  *[IViewResults](_definitions_list_views_.iviewresults.md)* 

*Defined in [definitions/list/list.ts:615](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L615)*



Gets the views in the list.




___

<a id="workflowassociations"></a>

###  WorkflowAssociations

**●  WorkflowAssociations**:  *[IResults](_definitions_lib_types_.iresults.md)`string`* 

*Defined in [definitions/list/list.ts:620](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L620)*



Gets a value that specifies the collection of all workflow associations for the list.




___

<a id="writesecurity"></a>

###  WriteSecurity

**●  WriteSecurity**:  *`number`* 

*Defined in [definitions/list/list.ts:622](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L622)*





___


## Methods
<a id="breakroleinheritance"></a>

###  breakRoleInheritance

► **breakRoleInheritance**(copyRoleAssignments: *`any`*, clearSubScopes: *`any`*): `any`




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[breakRoleInheritance](_definitions_list_list_.ilistmethods.md#breakroleinheritance)*

*Defined in [definitions/list/list.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L35)*



Creates unique role assignments for the securable object.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| copyRoleAssignments | `any`   |  True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user. |
| clearSubScopes | `any`   |  True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object. |





**Returns:** `any`





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[delete](_definitions_list_list_.ilistmethods.md#delete)*

*Defined in [definitions/list/list.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L40)*



Deletes the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getbyentityname"></a>

###  getByEntityName

► **getByEntityName**(entityTypeName: *`string`*, callback: *function*, targetInfo?: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getByEntityName](_definitions_list_list_.ilistmethods.md#getbyentityname)*

*Defined in [definitions/list/list.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L47)*



A static method to get the list by the entity name.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| entityTypeName | `string`   |  The entity type name of the list. |
| callback | function   |  The method to be executed after the request completes. |
| targetInfo | `any`   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)





___

<a id="getchanges"></a>

###  getChanges

► **getChanges**(query: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getChanges](_definitions_list_list_.ilistmethods.md#getchanges)*

*Defined in [definitions/list/list.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L53)*



Returns the collection of changes from the change log that have occurred within the list, based on the specified query.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | `any`   |  The change query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getitembyid"></a>

###  getItemById

► **getItemById**(id: *`any`*): [IListItem](_definitions_list_item_.ilistitem.md)[IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getItemById](_definitions_list_list_.ilistmethods.md#getitembyid)*

*Defined in [definitions/list/list.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L59)*



Returns the list item with the specified list item identifier.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The list item id. |





**Returns:** [IListItem](_definitions_list_item_.ilistitem.md)[IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)





___

<a id="getitems"></a>

###  getItems

► **getItems**(viewXml: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getItems](_definitions_list_list_.ilistmethods.md#getitems)*

*Defined in [definitions/list/list.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L65)*



Returns a collection of items from the list based on the view xml.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| viewXml | `any`   |  The view xml CAML query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)





___

<a id="getitemsbyquery"></a>

###  getItemsByQuery

► **getItemsByQuery**(camlQuery: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getItemsByQuery](_definitions_list_list_.ilistmethods.md#getitemsbyquery)*

*Defined in [definitions/list/list.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L71)*



Returns a collection of items from the list based on the specified query.
*__camlquery__*: *   The caml query.



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| camlQuery | `any`   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)





___

<a id="getlistitemchangessincetoken"></a>

###  getListItemChangesSinceToken

► **getListItemChangesSinceToken**(query: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getListItemChangesSinceToken](_definitions_list_list_.ilistmethods.md#getlistitemchangessincetoken)*

*Defined in [definitions/list/list.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L77)*



Returns a collection of items from the list based on the specified query.
*__query__*: *   The query that contains the change token.



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | `any`   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)





___

<a id="getrelatedfields"></a>

###  getRelatedFields

► **getRelatedFields**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getRelatedFields](_definitions_list_list_.ilistmethods.md#getrelatedfields)*

*Defined in [definitions/list/list.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L82)*



Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getusereffectivepermissions"></a>

###  getUserEffectivePermissions

► **getUserEffectivePermissions**(loginName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getUserEffectivePermissions](_definitions_list_list_.ilistmethods.md#getusereffectivepermissions)*

*Defined in [definitions/list/list.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L88)*



Gets the effective user permissions for the current user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The user login name. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getviewbyid"></a>

###  getViewById

► **getViewById**(viewId: *`any`*): [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getViewById](_definitions_list_list_.ilistmethods.md#getviewbyid)*

*Defined in [definitions/list/list.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L94)*



Returns the list view with the specified view identifier.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| viewId | `any`   |  The view id. |





**Returns:** [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)





___

<a id="recycle"></a>

###  recycle

► **recycle**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[recycle](_definitions_list_list_.ilistmethods.md#recycle)*

*Defined in [definitions/list/list.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L99)*



Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="renderlistdata"></a>

###  renderListData

► **renderListData**(viewXml: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[renderListData](_definitions_list_list_.ilistmethods.md#renderlistdata)*

*Defined in [definitions/list/list.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L105)*



Renders the list data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| viewXml | `any`   |  A CAML query that defines the items and fields that you want returned. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="renderlistformdata"></a>

###  renderListFormData

► **renderListFormData**(itemId: *`any`*, formId: *`any`*, mode: *`SPTypes.ControlMode`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[renderListFormData](_definitions_list_list_.ilistmethods.md#renderlistformdata)*

*Defined in [definitions/list/list.ts:115](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L115)*



Renders the list form data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| itemId | `any`   |  The item id. |
| formId | `any`   |  The identifier of the form. |
| mode | `SPTypes.ControlMode`   |  The SP.ControlMode of the control used to display the item. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="reservelistitemid"></a>

###  reserveListItemId

► **reserveListItemId**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[reserveListItemId](_definitions_list_list_.ilistmethods.md#reservelistitemid)*

*Defined in [definitions/list/list.ts:120](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L120)*



Reserves a list item ID for idempotent list item creation.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="resetroleinheritance"></a>

###  resetRoleInheritance

► **resetRoleInheritance**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[resetRoleInheritance](_definitions_list_list_.ilistmethods.md#resetroleinheritance)*

*Defined in [definitions/list/list.ts:125](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L125)*



Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[update](_definitions_list_list_.ilistmethods.md#update)*

*Defined in [definitions/list/list.ts:131](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L131)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The list properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


