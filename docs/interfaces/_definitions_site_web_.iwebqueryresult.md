[gd-sprest](../README.md) > ["definitions/site/web"](../modules/_definitions_site_web_.md) > [IWebQueryResult](../interfaces/_definitions_site_web_.iwebqueryresult.md)



# Interface: IWebQueryResult


Web Query Result

## Hierarchy


 [IWebMethods](_definitions_site_web_.iwebmethods.md)




 [IWebProps](_definitions_site_web_.iwebprops.md)

**↳ IWebQueryResult**








## Properties
<a id="allproperties"></a>

### «Optional» AllProperties

**●  AllProperties**:  *`Array`.<`string`>* 

*Defined in [definitions/site/web.ts:696](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L696)*



A collection of metadata for the Web site.




___

<a id="allowcreatedeclarativeworkflowforcurrentuser"></a>

### «Optional» AllowCreateDeclarativeWorkflowForCurrentUser

**●  AllowCreateDeclarativeWorkflowForCurrentUser**:  *`boolean`* 

*Defined in [definitions/site/web.ts:669](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L669)*



Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true.




___

<a id="allowdesignerforcurrentuser"></a>

### «Optional» AllowDesignerForCurrentUser

**●  AllowDesignerForCurrentUser**:  *`boolean`* 

*Defined in [definitions/site/web.ts:671](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L671)*





___

<a id="allowmasterpageeditingforcurrentuser"></a>

### «Optional» AllowMasterPageEditingForCurrentUser

**●  AllowMasterPageEditingForCurrentUser**:  *`boolean`* 

*Defined in [definitions/site/web.ts:676](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L676)*



Specifies whether the current user is allowed to edit the master page.




___

<a id="allowrevertfromtemplateforcurrentuser"></a>

### «Optional» AllowRevertFromTemplateForCurrentUser

**●  AllowRevertFromTemplateForCurrentUser**:  *`boolean`* 

*Defined in [definitions/site/web.ts:681](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L681)*



A value that specifies whether the current user is allowed to revert the site to a default site template.




___

<a id="allowrssfeeds"></a>

###  AllowRssFeeds

**●  AllowRssFeeds**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[AllowRssFeeds](_definitions_site_web_.iwebprops.md#allowrssfeeds)*

*Defined in [definitions/site/web.ts:274](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L274)*



Gets a value that specifies whether the site allows RSS feeds.




___

<a id="allowsavedeclarativeworkflowastemplateforcurrentuser"></a>

### «Optional» AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser

**●  AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser**:  *`boolean`* 

*Defined in [definitions/site/web.ts:686](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L686)*



Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true.




___

<a id="allowsavepublishdeclarativeworkflowforcurrentuser"></a>

### «Optional» AllowSavePublishDeclarativeWorkflowForCurrentUser

**●  AllowSavePublishDeclarativeWorkflowForCurrentUser**:  *`boolean`* 

*Defined in [definitions/site/web.ts:691](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L691)*



Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true.




___

<a id="appinstanceid"></a>

###  AppInstanceId

**●  AppInstanceId**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[AppInstanceId](_definitions_site_web_.iwebprops.md#appinstanceid)*

*Defined in [definitions/site/web.ts:277](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L277)*



The instance Id of the App Instance that this web represents.




___

<a id="apptiles"></a>

### «Optional» AppTiles

**●  AppTiles**:  *[IAppTiles](_definitions_lib_types_.iapptiles.md)* 

*Defined in [definitions/site/web.ts:698](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L698)*





___

<a id="associatedmembergroup"></a>

###  AssociatedMemberGroup

**●  AssociatedMemberGroup**:  *[IGroupResult](_definitions_user_group_.igroupresult.md)* 

*Defined in [definitions/site/web.ts:703](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L703)*



The group of users who have been given contribute permissions to the Web site.




___

<a id="associatedownergroup"></a>

###  AssociatedOwnerGroup

**●  AssociatedOwnerGroup**:  *[IGroupResult](_definitions_user_group_.igroupresult.md)* 

*Defined in [definitions/site/web.ts:708](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L708)*



The associated owner group of the Web site.




___

<a id="associatedvisitorgroup"></a>

###  AssociatedVisitorGroup

**●  AssociatedVisitorGroup**:  *[IGroupResult](_definitions_user_group_.igroupresult.md)* 

*Defined in [definitions/site/web.ts:713](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L713)*



The associated visitor group of the Web site.




___

<a id="author"></a>

###  Author

**●  Author**:  *[IUserResult](_definitions_user_user_.iuserresult.md)* 

*Defined in [definitions/site/web.ts:716](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L716)*





___

<a id="availablecontenttypes"></a>

###  AvailableContentTypes

**●  AvailableContentTypes**:  *[IResults](_definitions_lib_types_.iresults.md)[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)* 

*Defined in [definitions/site/web.ts:721](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L721)*



The collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.




___

<a id="availablefields"></a>

###  AvailableFields

**●  AvailableFields**:  *[IResults](_definitions_lib_types_.iresults.md)[IFieldResult](_definitions_field_field_.ifieldresult.md)* 

*Defined in [definitions/site/web.ts:726](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L726)*



A value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.




___

<a id="clientwebparts"></a>

###  ClientWebParts

**●  ClientWebParts**:  *[IBase](_definitions_lib_base_.ibase.md)* 

*Defined in [definitions/site/web.ts:728](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L728)*





___

<a id="configuration"></a>

###  Configuration

**●  Configuration**:  *`number`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[Configuration](_definitions_site_web_.iwebprops.md#configuration)*

*Defined in [definitions/site/web.ts:279](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L279)*



Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived.




___

<a id="contenttypes"></a>

###  ContentTypes

**●  ContentTypes**:  *[IContentTypeResults](_definitions_contenttype_contenttypes_.icontenttyperesults.md)* 

*Defined in [definitions/site/web.ts:733](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L733)*



Gets the content types that are associated with the web.




___

<a id="created"></a>

###  Created

**●  Created**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[Created](_definitions_site_web_.iwebprops.md#created)*

*Defined in [definitions/site/web.ts:282](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L282)*



Gets a value that specifies when the site was created.




___

<a id="currentuser"></a>

###  CurrentUser

**●  CurrentUser**:  *[IUserResult](_definitions_user_user_.iuserresult.md)* 

*Defined in [definitions/site/web.ts:738](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L738)*



Gets the current user of the site.




___

<a id="custommasterurl"></a>

###  CustomMasterUrl

**●  CustomMasterUrl**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[CustomMasterUrl](_definitions_site_web_.iwebprops.md#custommasterurl)*

*Defined in [definitions/site/web.ts:285](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L285)*



Gets or sets the URL for a custom master page file to apply to the website.




___

<a id="dataleakagepreventionstatusinfo"></a>

###  DataLeakagePreventionStatusInfo

**●  DataLeakagePreventionStatusInfo**:  *[IContainsConfidentialInfo](_definitions_lib_types_.icontainsconfidentialinfo.md)* 

*Defined in [definitions/site/web.ts:740](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L740)*





___

<a id="description"></a>

###  Description

**●  Description**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[Description](_definitions_site_web_.iwebprops.md#description)*

*Defined in [definitions/site/web.ts:288](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L288)*



Gets or sets the description for the site.




___

<a id="descriptionresource"></a>

###  DescriptionResource

**●  DescriptionResource**:  *[IResourcePath](_definitions_lib_types_.iresourcepath.md)* 

*Defined in [definitions/site/web.ts:742](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L742)*





___

<a id="designerdownloadurlforcurrentuser"></a>

###  DesignerDownloadUrlForCurrentUser

**●  DesignerDownloadUrlForCurrentUser**:  *`string`* 

*Defined in [definitions/site/web.ts:747](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L747)*



Gets the URL where the current user can download SharePoint Designer.




___

<a id="documentlibrarycalloutofficewebapppreviewersdisabled"></a>

###  DocumentLibraryCalloutOfficeWebAppPreviewersDisabled

**●  DocumentLibraryCalloutOfficeWebAppPreviewersDisabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[DocumentLibraryCalloutOfficeWebAppPreviewersDisabled](_definitions_site_web_.iwebprops.md#documentlibrarycalloutofficewebapppreviewersdisabled)*

*Defined in [definitions/site/web.ts:291](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L291)*



Determines if the Document Library Callout's WAC previewers are enabled or not.




___

<a id="effectivebasepermissions"></a>

###  EffectiveBasePermissions

**●  EffectiveBasePermissions**:  *[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)* 

*Defined in [definitions/site/web.ts:752](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L752)*



Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method.




___

<a id="enableminimaldownload"></a>

###  EnableMinimalDownload

**●  EnableMinimalDownload**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[EnableMinimalDownload](_definitions_site_web_.iwebprops.md#enableminimaldownload)*

*Defined in [definitions/site/web.ts:294](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L294)*



Gets or sets a Boolean value that specifies whether the Web site should use Minimal Download Strategy.




___

<a id="eventreceivers"></a>

###  EventReceivers

**●  EventReceivers**:  *[IEventReceiverResults](_definitions_eventreceiver_eventreceivers_.ieventreceiverresults.md)* 

*Defined in [definitions/site/web.ts:757](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L757)*



Gets the event receivers associated with the web.




___

<a id="excludefromofflineclient"></a>

###  ExcludeFromOfflineClient

**●  ExcludeFromOfflineClient**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[ExcludeFromOfflineClient](_definitions_site_web_.iwebprops.md#excludefromofflineclient)*

*Defined in [definitions/site/web.ts:296](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L296)*





___

<a id="features"></a>

###  Features

**●  Features**:  *[IResults](_definitions_lib_types_.iresults.md)[IFeature](_definitions_lib_types_.ifeature.md)* 

*Defined in [definitions/site/web.ts:762](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L762)*



Gets a value that specifies the collection of features that are currently activated in the site.




___

<a id="fields"></a>

###  Fields

**●  Fields**:  *[IFieldResults](_definitions_field_fields_.ifieldresults.md)* 

*Defined in [definitions/site/web.ts:767](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L767)*



The fields in the web.




___

<a id="folders"></a>

###  Folders

**●  Folders**:  *[IFolderResults](_definitions_file_folders_.ifolderresults.md)* 

*Defined in [definitions/site/web.ts:772](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L772)*



The folders contained in the root folder.




___

<a id="id"></a>

###  Id

**●  Id**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[Id](_definitions_site_web_.iwebprops.md#id)*

*Defined in [definitions/site/web.ts:299](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L299)*



Gets a value that specifies the site identifier for the site.




___

<a id="language"></a>

###  Language

**●  Language**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[Language](_definitions_site_web_.iwebprops.md#language)*

*Defined in [definitions/site/web.ts:302](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L302)*



Gets a value that specifies the LCID for the language that is used on the site.




___

<a id="lastitemmodifieddate"></a>

###  LastItemModifiedDate

**●  LastItemModifiedDate**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[LastItemModifiedDate](_definitions_site_web_.iwebprops.md#lastitemmodifieddate)*

*Defined in [definitions/site/web.ts:305](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L305)*



Gets a value that specifies when an item was last modified in the site.




___

<a id="listtemplates"></a>

###  ListTemplates

**●  ListTemplates**:  *[IResults](_definitions_lib_types_.iresults.md)[IListTemplate](_definitions_lib_types_.ilisttemplate.md)* 

*Defined in [definitions/site/web.ts:782](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L782)*



The list definitions and list templates available for creating lists on the site.




___

<a id="lists"></a>

###  Lists

**●  Lists**:  *[IListResults](_definitions_list_lists_.ilistresults.md)* 

*Defined in [definitions/site/web.ts:777](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L777)*



Gets the lists in the Web.




___

<a id="masterurl"></a>

###  MasterUrl

**●  MasterUrl**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[MasterUrl](_definitions_site_web_.iwebprops.md#masterurl)*

*Defined in [definitions/site/web.ts:308](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L308)*



Gets or sets the URL of the master page that is used for the website.




___

<a id="memberscanshare"></a>

###  MembersCanShare

**●  MembersCanShare**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[MembersCanShare](_definitions_site_web_.iwebprops.md#memberscanshare)*

*Defined in [definitions/site/web.ts:310](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L310)*





___

<a id="navigation"></a>

###  Navigation

**●  Navigation**:  *[INavigation](_definitions_lib_types_.inavigation.md)* 

*Defined in [definitions/site/web.ts:787](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L787)*



Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.




___

<a id="nocrawl"></a>

###  NoCrawl

**●  NoCrawl**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[NoCrawl](_definitions_site_web_.iwebprops.md#nocrawl)*

*Defined in [definitions/site/web.ts:312](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L312)*





___

<a id="notificationsinonedriveforbusinessenabled"></a>

###  NotificationsInOneDriveForBusinessEnabled

**●  NotificationsInOneDriveForBusinessEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[NotificationsInOneDriveForBusinessEnabled](_definitions_site_web_.iwebprops.md#notificationsinonedriveforbusinessenabled)*

*Defined in [definitions/site/web.ts:314](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L314)*





___

<a id="notificationsinsharepointenabled"></a>

###  NotificationsInSharePointEnabled

**●  NotificationsInSharePointEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[NotificationsInSharePointEnabled](_definitions_site_web_.iwebprops.md#notificationsinsharepointenabled)*

*Defined in [definitions/site/web.ts:316](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L316)*





___

<a id="overwritetranslationsonchange"></a>

###  OverwriteTranslationsOnChange

**●  OverwriteTranslationsOnChange**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[OverwriteTranslationsOnChange](_definitions_site_web_.iwebprops.md#overwritetranslationsonchange)*

*Defined in [definitions/site/web.ts:318](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L318)*





___

<a id="parentweb"></a>

###  ParentWeb

**●  ParentWeb**:  *[IWebResult](_definitions_site_web_.iwebresult.md)* 

*Defined in [definitions/site/web.ts:792](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L792)*



Gets the parent website of the specified website.




___

<a id="previewfeaturesenabled"></a>

###  PreviewFeaturesEnabled

**●  PreviewFeaturesEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[PreviewFeaturesEnabled](_definitions_site_web_.iwebprops.md#previewfeaturesenabled)*

*Defined in [definitions/site/web.ts:320](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L320)*





___

<a id="quicklaunchenabled"></a>

###  QuickLaunchEnabled

**●  QuickLaunchEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[QuickLaunchEnabled](_definitions_site_web_.iwebprops.md#quicklaunchenabled)*

*Defined in [definitions/site/web.ts:323](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L323)*



Gets or sets a value that specifies whether the Quick Launch area is enabled on the site.




___

<a id="recyclebin"></a>

###  RecycleBin

**●  RecycleBin**:  *[IResults](_definitions_lib_types_.iresults.md)[IRecycleBinItem](_definitions_lib_types_.irecyclebinitem.md)* 

*Defined in [definitions/site/web.ts:802](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L802)*



Specifies the collection of recycle bin items of the recycle bin of the site.




___

<a id="recyclebinenabled"></a>

###  RecycleBinEnabled

**●  RecycleBinEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[RecycleBinEnabled](_definitions_site_web_.iwebprops.md#recyclebinenabled)*

*Defined in [definitions/site/web.ts:326](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L326)*



Gets or sets a value that determines whether the recycle bin is enabled for the website.




___

<a id="regionalsettings"></a>

###  RegionalSettings

**●  RegionalSettings**:  *[IRegionalSettings](_definitions_lib_types_.iregionalsettings.md)* 

*Defined in [definitions/site/web.ts:807](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L807)*



Gets the regional settings that are currently implemented on the website.




___

<a id="requestaccessemail"></a>

###  RequestAccessEmail

**●  RequestAccessEmail**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[RequestAccessEmail](_definitions_site_web_.iwebprops.md#requestaccessemail)*

*Defined in [definitions/site/web.ts:328](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L328)*





___

<a id="roledefinitions"></a>

###  RoleDefinitions

**●  RoleDefinitions**:  *[IRoleDefinitionResults](_definitions_security_roledefinitions_.iroledefinitionresults.md)* 

*Defined in [definitions/site/web.ts:812](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L812)*



Gets the role definitions for the web.




___

<a id="rootfolder"></a>

###  RootFolder

**●  RootFolder**:  *[IFolderResult](_definitions_file_folder_.ifolderresult.md)* 

*Defined in [definitions/site/web.ts:817](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L817)*



Gets the root folder in the web.




___

<a id="savesiteastemplateenabled"></a>

###  SaveSiteAsTemplateEnabled

**●  SaveSiteAsTemplateEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[SaveSiteAsTemplateEnabled](_definitions_site_web_.iwebprops.md#savesiteastemplateenabled)*

*Defined in [definitions/site/web.ts:333](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L333)*



Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template.




___

<a id="serverrelativepath"></a>

###  ServerRelativePath

**●  ServerRelativePath**:  *[IResourcePath](_definitions_lib_types_.iresourcepath.md)* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[ServerRelativePath](_definitions_site_web_.iwebprops.md#serverrelativepath)*

*Defined in [definitions/site/web.ts:335](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L335)*





___

<a id="serverrelativeurl"></a>

###  ServerRelativeUrl

**●  ServerRelativeUrl**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[ServerRelativeUrl](_definitions_site_web_.iwebprops.md#serverrelativeurl)*

*Defined in [definitions/site/web.ts:338](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L338)*



Gets or sets the server-relative URL for the Web site.




___

<a id="showurlstructureforcurrentuser"></a>

###  ShowUrlStructureForCurrentUser

**●  ShowUrlStructureForCurrentUser**:  *`boolean`* 

*Defined in [definitions/site/web.ts:822](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L822)*



Gets a value that specifies whether the current user is able to view the file system structure of this site.




___

<a id="sitegroups"></a>

###  SiteGroups

**●  SiteGroups**:  *[ISiteGroupResults](_definitions_user_groups_.isitegroupresults.md)* 

*Defined in [definitions/site/web.ts:827](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L827)*



Gets the site groups for the web.




___

<a id="sitelogodescription"></a>

###  SiteLogoDescription

**●  SiteLogoDescription**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[SiteLogoDescription](_definitions_site_web_.iwebprops.md#sitelogodescription)*

*Defined in [definitions/site/web.ts:340](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L340)*





___

<a id="sitelogourl"></a>

###  SiteLogoUrl

**●  SiteLogoUrl**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[SiteLogoUrl](_definitions_site_web_.iwebprops.md#sitelogourl)*

*Defined in [definitions/site/web.ts:342](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L342)*





___

<a id="siteuserinfolist"></a>

###  SiteUserInfoList

**●  SiteUserInfoList**:  *[IListResult](_definitions_list_list_.ilistresult.md)* 

*Defined in [definitions/site/web.ts:832](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L832)*



Gets the UserInfo list of the site collection that contains the Web site.




___

<a id="siteusers"></a>

###  SiteUsers

**●  SiteUsers**:  *[IUserResults](_definitions_user_users_.iuserresults.md)* 

*Defined in [definitions/site/web.ts:837](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L837)*



The collection of all users that belong to the site collection.




___

<a id="supporteduilanguageids"></a>

###  SupportedUILanguageIds

**●  SupportedUILanguageIds**:  *[IResults](_definitions_lib_types_.iresults.md)`number`* 

*Defined in [definitions/site/web.ts:842](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L842)*



Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.




___

<a id="syndicationenabled"></a>

###  SyndicationEnabled

**●  SyndicationEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[SyndicationEnabled](_definitions_site_web_.iwebprops.md#syndicationenabled)*

*Defined in [definitions/site/web.ts:345](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L345)*



Gets or sets a value that specifies whether the RSS feeds are enabled on the site.




___

<a id="tenanttagpolicyenabled"></a>

###  TenantTagPolicyEnabled

**●  TenantTagPolicyEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[TenantTagPolicyEnabled](_definitions_site_web_.iwebprops.md#tenanttagpolicyenabled)*

*Defined in [definitions/site/web.ts:347](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L347)*





___

<a id="themedata"></a>

###  ThemeData

**●  ThemeData**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[ThemeData](_definitions_site_web_.iwebprops.md#themedata)*

*Defined in [definitions/site/web.ts:349](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L349)*





___

<a id="themeinfo"></a>

###  ThemeInfo

**●  ThemeInfo**:  *[IThemeInfo](_definitions_lib_types_.ithemeinfo.md)* 

*Defined in [definitions/site/web.ts:847](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L847)*



The theming information for this site. This includes information like colors, fonts, border radii sizes etc.




___

<a id="themedcssfolderurl"></a>

###  ThemedCssFolderUrl

**●  ThemedCssFolderUrl**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[ThemedCssFolderUrl](_definitions_site_web_.iwebprops.md#themedcssfolderurl)*

*Defined in [definitions/site/web.ts:351](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L351)*





___

<a id="thirdpartymdmenabled"></a>

###  ThirdPartyMdmEnabled

**●  ThirdPartyMdmEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[ThirdPartyMdmEnabled](_definitions_site_web_.iwebprops.md#thirdpartymdmenabled)*

*Defined in [definitions/site/web.ts:353](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L353)*





___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[Title](_definitions_site_web_.iwebprops.md#title)*

*Defined in [definitions/site/web.ts:356](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L356)*



Gets or sets the title for the Web site.




___

<a id="titleresource"></a>

###  TitleResource

**●  TitleResource**:  *[IResourcePath](_definitions_lib_types_.iresourcepath.md)* 

*Defined in [definitions/site/web.ts:849](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L849)*





___

<a id="treeviewenabled"></a>

###  TreeViewEnabled

**●  TreeViewEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[TreeViewEnabled](_definitions_site_web_.iwebprops.md#treeviewenabled)*

*Defined in [definitions/site/web.ts:359](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L359)*



Gets or sets value that specifies whether the tree view is enabled on the site.




___

<a id="uiversion"></a>

###  UIVersion

**●  UIVersion**:  *`number`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[UIVersion](_definitions_site_web_.iwebprops.md#uiversion)*

*Defined in [definitions/site/web.ts:362](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L362)*



Gets or sets the user export interface (UI) version of the Web site.




___

<a id="uiversionconfigurationenabled"></a>

###  UIVersionConfigurationEnabled

**●  UIVersionConfigurationEnabled**:  *`boolean`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[UIVersionConfigurationEnabled](_definitions_site_web_.iwebprops.md#uiversionconfigurationenabled)*

*Defined in [definitions/site/web.ts:365](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L365)*



Gets or sets a value that specifies whether the settings UI for visual upgrade is shown or hidden.




___

<a id="url"></a>

###  Url

**●  Url**:  *`string`* 

*Inherited from [IWebProps](_definitions_site_web_.iwebprops.md).[Url](_definitions_site_web_.iwebprops.md#url)*

*Defined in [definitions/site/web.ts:368](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L368)*



Gets the absolute URL for the website.




___

<a id="usercustomactions"></a>

###  UserCustomActions

**●  UserCustomActions**:  *[IUserCustomActionResults](_definitions_customaction_usercustomactions_.iusercustomactionresults.md)* 

*Defined in [definitions/site/web.ts:854](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L854)*



Gets the user custom actions for the web.




___

<a id="webinfos"></a>

###  WebInfos

**●  WebInfos**:  *[IResults](_definitions_lib_types_.iresults.md)[IWebInfo](_definitions_lib_types_.iwebinfo.md)* 

*Defined in [definitions/site/web.ts:859](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L859)*



Represents key properties of the subsites of a site.




___

<a id="webtemplate"></a>

###  WebTemplate

**●  WebTemplate**:  *`string`* 

*Overrides [IWebProps](_definitions_site_web_.iwebprops.md).[WebTemplate](_definitions_site_web_.iwebprops.md#webtemplate)*

*Defined in [definitions/site/web.ts:867](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L867)*



The name of the site definition or site template that was used to create the site.




___

<a id="webs"></a>

###  Webs

**●  Webs**:  *[IWebResults](_definitions_site_webs_.iwebresults.md)* 

*Defined in [definitions/site/web.ts:864](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L864)*



A Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.




___

<a id="workflowassociations"></a>

###  WorkflowAssociations

**●  WorkflowAssociations**:  *[IResults](_definitions_lib_types_.iresults.md)`any`* 

*Defined in [definitions/site/web.ts:872](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L872)*



A value that specifies the collection of all workflow associations for the site.




___

<a id="workflowtemplates"></a>

###  WorkflowTemplates

**●  WorkflowTemplates**:  *[IResults](_definitions_lib_types_.iresults.md)[IWorkflowTemplate](_definitions_lib_types_.iworkflowtemplate.md)* 

*Defined in [definitions/site/web.ts:877](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L877)*



A value that specifies the collection of workflow templates associated with the site.




___


## Methods
<a id="pushnotificationsubscribers"></a>

###  PushNotificationSubscribers

► **PushNotificationSubscribers**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:797](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L797)*



Gets the collection of push notification subscribers over the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="applytheme"></a>

###  applyTheme

► **applyTheme**(colorpaletteurl: *`any`*, fontschemeurl: *`any`*, backgroundimageurl: *`any`*, sharegenerated: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[applyTheme](_definitions_site_web_.iwebmethods.md#applytheme)*

*Defined in [definitions/site/web.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L40)*



Applies the theme specified by the contents of each of the files specified in the arguments to the site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| colorpaletteurl | `any`   |  The server-relative URL of the color palette file. |
| fontschemeurl | `any`   |  The server-relative URL of the font scheme. |
| backgroundimageurl | `any`   |  The server-relative URL of the background image. |
| sharegenerated | `any`   |  True to store the generated theme files in the root site, or false to store them in this site. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="applywebtemplate"></a>

###  applyWebTemplate

► **applyWebTemplate**(name: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[applyWebTemplate](_definitions_site_web_.iwebmethods.md#applywebtemplate)*

*Defined in [definitions/site/web.ts:46](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L46)*



Applies the specified site definition or site template to the Web site that has no template applied to it.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `any`   |  The site definition or web template name to apply. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="breakroleinheritance"></a>

###  breakRoleInheritance

► **breakRoleInheritance**(copyRoleAssignments: *`any`*, clearSubScopes: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[breakRoleInheritance](_definitions_site_web_.iwebmethods.md#breakroleinheritance)*

*Defined in [definitions/site/web.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L53)*



Creates unique role assignments for the securable object.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| copyRoleAssignments | `any`   |  True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user. |
| clearSubScopes | `any`   |  True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[delete](_definitions_site_web_.iwebmethods.md#delete)*

*Defined in [definitions/site/web.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L58)*



Deletes the web.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="doespushnotificationsubscriberexist"></a>

###  doesPushNotificationSubscriberExist

► **doesPushNotificationSubscriberExist**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[doesPushNotificationSubscriberExist](_definitions_site_web_.iwebmethods.md#doespushnotificationsubscriberexist)*

*Defined in [definitions/site/web.ts:64](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L64)*



Checks whether the push notification subscriber exist for the current user with the given device application instance ID.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the device app instance. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="doesuserhavepermissions"></a>

###  doesUserHavePermissions

► **doesUserHavePermissions**(high: *`any`*, low: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[doesUserHavePermissions](_definitions_site_web_.iwebmethods.md#doesuserhavepermissions)*

*Defined in [definitions/site/web.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L71)*



Returns whether the current user has the given set of permissions.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| high | `any`   |  The highest permission range value. |
| low | `any`   |  The lowest permission range value. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="ensureuser"></a>

###  ensureUser

► **ensureUser**(loginName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[ensureUser](_definitions_site_web_.iwebmethods.md#ensureuser)*

*Defined in [definitions/site/web.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L76)*



Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, it will add the user to the site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `string`   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)





___

<a id="executeremotelob"></a>

###  executeRemoteLOB

► **executeRemoteLOB**(inputStream: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[executeRemoteLOB](_definitions_site_web_.iwebmethods.md#executeremotelob)*

*Defined in [definitions/site/web.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L82)*



Sends data to an OData service.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| inputStream | `any`   |  The OData input object. Used for create or update operations only. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getappbdccatalog"></a>

###  getAppBdcCatalog

► **getAppBdcCatalog**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getAppBdcCatalog](_definitions_site_web_.iwebmethods.md#getappbdccatalog)*

*Defined in [definitions/site/web.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L87)*



The app BDC catalog.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getappbdccatalogforappinstance"></a>

###  getAppBdcCatalogForAppInstance

► **getAppBdcCatalogForAppInstance**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getAppBdcCatalogForAppInstance](_definitions_site_web_.iwebmethods.md#getappbdccatalogforappinstance)*

*Defined in [definitions/site/web.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L93)*



The app BDC catalog for the specified app instance.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the app instance. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getappinstancebyid"></a>

###  getAppInstanceById

► **getAppInstanceById**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getAppInstanceById](_definitions_site_web_.iwebmethods.md#getappinstancebyid)*

*Defined in [definitions/site/web.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L99)*



Retrieves an AppInstance installed on this Site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the app instance. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getappinstancesbyproductid"></a>

###  getAppInstancesByProductId

► **getAppInstancesByProductId**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getAppInstancesByProductId](_definitions_site_web_.iwebmethods.md#getappinstancesbyproductid)*

*Defined in [definitions/site/web.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L105)*



Retrieves all AppInstances installed on this site that are instances of the specified App.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The product ID of the app. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getavailablewebtemplates"></a>

###  getAvailableWebTemplates

► **getAvailableWebTemplates**(lcid: *`any`*, doIncludeCrossLanguage: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getAvailableWebTemplates](_definitions_site_web_.iwebmethods.md#getavailablewebtemplates)*

*Defined in [definitions/site/web.ts:112](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L112)*



Returns a collection of site templates available for the site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| lcid | `any`   |  The LCID of the site templates to get. |
| doIncludeCrossLanguage | `any`   |  True to include language-neutral site templates; otherwise false. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getcatalog"></a>

###  getCatalog

► **getCatalog**(galleryType: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getCatalog](_definitions_site_web_.iwebmethods.md#getcatalog)*

*Defined in [definitions/site/web.ts:118](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L118)*



Returns the list gallery on the site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| galleryType | `any`   |  The gallery type. Represents a ListTemplateType value such as WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114, MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getchanges"></a>

###  getChanges

► **getChanges**(query: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getChanges](_definitions_site_web_.iwebmethods.md#getchanges)*

*Defined in [definitions/site/web.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L124)*



Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | `any`   |  The change query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getcontextwebinformation"></a>

###  getContextWebInformation

► **getContextWebInformation**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getContextWebInformation](_definitions_site_web_.iwebmethods.md#getcontextwebinformation)*

*Defined in [definitions/site/web.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L129)*



The context information for the site. Static method.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getcustomlisttemplates"></a>

###  getCustomListTemplates

► **getCustomListTemplates**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getCustomListTemplates](_definitions_site_web_.iwebmethods.md#getcustomlisttemplates)*

*Defined in [definitions/site/web.ts:134](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L134)*



The custom list templates for the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getdocumentlibraries"></a>

###  getDocumentLibraries

► **getDocumentLibraries**(url: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getDocumentLibraries](_definitions_site_web_.iwebmethods.md#getdocumentlibraries)*

*Defined in [definitions/site/web.ts:140](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L140)*



The document libraries on a site. Static method. (SharePoint Online only)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `any`   |  The full URL of the site. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getentity"></a>

###  getEntity

► **getEntity**(namespace: *`any`*, name: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getEntity](_definitions_site_web_.iwebmethods.md#getentity)*

*Defined in [definitions/site/web.ts:147](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L147)*



The specified external content type in a line-of-business (LOB) system application.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| namespace | `any`   |  The namespace of the external content type. |
| name | `any`   |  The name of the external content type. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getfilebyserverrelativeurl"></a>

###  getFileByServerRelativeUrl

► **getFileByServerRelativeUrl**(url: *`any`*): [IFile](_definitions_file_file_.ifile.md)[IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getFileByServerRelativeUrl](_definitions_site_web_.iwebmethods.md#getfilebyserverrelativeurl)*

*Defined in [definitions/site/web.ts:153](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L153)*



Returns the file object located at the specified server-relative URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `any`   |  The server relative url of the file. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)[IBase](_definitions_lib_base_.ibase.md)[IFile](_definitions_file_file_.ifile.md), [IFileResult](_definitions_file_file_.ifileresult.md), [IFileQueryResult](_definitions_file_file_.ifilequeryresult.md)





___

<a id="getfolderbyserverrelativeurl"></a>

###  getFolderByServerRelativeUrl

► **getFolderByServerRelativeUrl**(url: *`any`*): [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getFolderByServerRelativeUrl](_definitions_site_web_.iwebmethods.md#getfolderbyserverrelativeurl)*

*Defined in [definitions/site/web.ts:159](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L159)*



Returns the folder object located at the specified server-relative URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `any`   |  The server relative url of the folder. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)[IBase](_definitions_lib_base_.ibase.md)[IFolder](_definitions_file_folder_.ifolder.md), [IFolderResult](_definitions_file_folder_.ifolderresult.md), [IFolderQueryResult](_definitions_file_folder_.ifolderqueryresult.md)





___

<a id="getlist"></a>

###  getList

► **getList**(url: *`any`*): [IList](_definitions_list_list_.ilist.md)[IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getList](_definitions_site_web_.iwebmethods.md#getlist)*

*Defined in [definitions/site/web.ts:165](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L165)*



The list at the specified site-relative URL. (SharePoint Online only)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `any`   |  The server relative url of the list. |





**Returns:** [IList](_definitions_list_list_.ilist.md)[IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)





___

<a id="getpushnotificationsubscriber"></a>

###  getPushNotificationSubscriber

► **getPushNotificationSubscriber**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getPushNotificationSubscriber](_definitions_site_web_.iwebmethods.md#getpushnotificationsubscriber)*

*Defined in [definitions/site/web.ts:171](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L171)*



The push notification subscriber over the site for the specified device application instance ID.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the device app instance. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getpushnotificationsubscribersbyargs"></a>

###  getPushNotificationSubscribersByArgs

► **getPushNotificationSubscribersByArgs**(args: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getPushNotificationSubscribersByArgs](_definitions_site_web_.iwebmethods.md#getpushnotificationsubscribersbyargs)*

*Defined in [definitions/site/web.ts:177](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L177)*



Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| args | `any`   |  Arguments to filter the results. Passed arguments are compared to the subscribers' custom arguments in the store. Pass null or empty arguments to return unfiltered results. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getpushnotificationsubscribersbyuser"></a>

###  getPushNotificationSubscribersByUser

► **getPushNotificationSubscribersByUser**(loginName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getPushNotificationSubscribersByUser](_definitions_site_web_.iwebmethods.md#getpushnotificationsubscribersbyuser)*

*Defined in [definitions/site/web.ts:183](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L183)*



Queries for the push notification subscribers over the site for the specified user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The login name of the user. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getsubwebsfilteredforcurrentuser"></a>

###  getSubwebsFilteredForCurrentUser

► **getSubwebsFilteredForCurrentUser**(nWebTemplateFilter: *`any`*, nConfigurationFilter: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IWebInfo](_definitions_lib_types_.iwebinfo.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getSubwebsFilteredForCurrentUser](_definitions_site_web_.iwebmethods.md#getsubwebsfilteredforcurrentuser)*

*Defined in [definitions/site/web.ts:190](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L190)*



Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| nWebTemplateFilter | `any`   |  The ID of the template used in the site definition of the sites. |
| nConfigurationFilter | `any`   |  The ID of the site template used to provision the sites. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResults](_definitions_lib_types_.iresults.md)[IWebInfo](_definitions_lib_types_.iwebinfo.md)





___

<a id="getuserbyid"></a>

###  getUserById

► **getUserById**(id: *`any`*): [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getUserById](_definitions_site_web_.iwebmethods.md#getuserbyid)*

*Defined in [definitions/site/web.ts:196](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L196)*



Returns the user corresponding to the specified member identifier for the current site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The user id. |





**Returns:** [IUser](_definitions_user_user_.iuser.md)[IBase](_definitions_lib_base_.ibase.md)[IUser](_definitions_user_user_.iuser.md), [IUserResult](_definitions_user_user_.iuserresult.md), [IUserQueryResult](_definitions_user_user_.iuserqueryresult.md)





___

<a id="getusereffectivepermissions"></a>

###  getUserEffectivePermissions

► **getUserEffectivePermissions**(loginName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getUserEffectivePermissions](_definitions_site_web_.iwebmethods.md#getusereffectivepermissions)*

*Defined in [definitions/site/web.ts:202](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L202)*



The effective permissions that the specified user has within the current application scope.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The user login name. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getweburlfrompageurl"></a>

###  getWebUrlFromPageUrl

► **getWebUrlFromPageUrl**(url: *`any`*): `any`




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[getWebUrlFromPageUrl](_definitions_site_web_.iwebmethods.md#getweburlfrompageurl)*

*Defined in [definitions/site/web.ts:208](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L208)*



The site URL from a page URL. Static method.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `any`   |  The full URL of the SharePoint page, with URL encoded characters as needed. |





**Returns:** `any`





___

<a id="loadandinstallapp"></a>

###  loadAndInstallApp

► **loadAndInstallApp**(appPackageStream: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[loadAndInstallApp](_definitions_site_web_.iwebmethods.md#loadandinstallapp)*

*Defined in [definitions/site/web.ts:214](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L214)*



Uploads and installs an app package to this site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| appPackageStream | `any`   |  The app package stream. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="loadandinstallappinspecifiedlocale"></a>

###  loadAndInstallAppInSpecifiedLocale

► **loadAndInstallAppInSpecifiedLocale**(appPackageStream: *`any`*, installationLocaleLCID: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[loadAndInstallAppInSpecifiedLocale](_definitions_site_web_.iwebmethods.md#loadandinstallappinspecifiedlocale)*

*Defined in [definitions/site/web.ts:221](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L221)*



Uploads and installs an App package on the site in a specified locale.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| appPackageStream | `any`   |  The app package stream. |
| installationLocaleLCID | `any`   |  The LCID of the locale to use to create the app instance. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="loadapp"></a>

###  loadApp

► **loadApp**(appPackageStream: *`any`*, installationLocaleLCID: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[loadApp](_definitions_site_web_.iwebmethods.md#loadapp)*

*Defined in [definitions/site/web.ts:228](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L228)*



Uploads an App package and creates an instance from it.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| appPackageStream | `any`   |  The app package stream. |
| installationLocaleLCID | `any`   |  The LCID of the locale to use to create the app instance. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="maptoicon"></a>

###  mapToIcon

► **mapToIcon**(filename: *`any`*, progid: *`any`*, size: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[mapToIcon](_definitions_site_web_.iwebmethods.md#maptoicon)*

*Defined in [definitions/site/web.ts:236](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L236)*



Returns the name of the image file for the icon that is used to represent the specified file.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| filename | `any`   |  The file name. If this parameter is empty, the server returns an empty string. |
| progid | `any`   |  The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide). This is the ID used by the Windows registry to uniquely identify an object. |
| size | `any`   |  The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="processexternalnotification"></a>

###  processExternalNotification

► **processExternalNotification**(stream: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[processExternalNotification](_definitions_site_web_.iwebmethods.md#processexternalnotification)*

*Defined in [definitions/site/web.ts:242](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L242)*



Processes a notification from an external system.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| stream | `any`   |  The notification message from the external system. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="registerpushnotificationsubscriber"></a>

###  registerPushNotificationSubscriber

► **registerPushNotificationSubscriber**(deviceAppInstanceId: *`any`*, serviceToken: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[registerPushNotificationSubscriber](_definitions_site_web_.iwebmethods.md#registerpushnotificationsubscriber)*

*Defined in [definitions/site/web.ts:249](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L249)*



Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| deviceAppInstanceId | `any`   |  The ID of the device app instance. |
| serviceToken | `any`   |  The token provided by the notification service to the device to receive notifications. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="resetroleinheritance"></a>

###  resetRoleInheritance

► **resetRoleInheritance**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[resetRoleInheritance](_definitions_site_web_.iwebmethods.md#resetroleinheritance)*

*Defined in [definitions/site/web.ts:254](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L254)*



Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="unregisterpushnotificationsubscriber"></a>

###  unregisterPushNotificationSubscriber

► **unregisterPushNotificationSubscriber**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[unregisterPushNotificationSubscriber](_definitions_site_web_.iwebmethods.md#unregisterpushnotificationsubscriber)*

*Defined in [definitions/site/web.ts:260](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L260)*



Unregisters the subscriber for push notifications from the site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the device app instance. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IWebMethods](_definitions_site_web_.iwebmethods.md).[update](_definitions_site_web_.iwebmethods.md#update)*

*Defined in [definitions/site/web.ts:266](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L266)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The list properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


