[gd-sprest](../README.md) > ["definitions/site/web"](../modules/_definitions_site_web_.md) > [IWebMethods](../interfaces/_definitions_site_web_.iwebmethods.md)



# Interface: IWebMethods


Web Methods

## Hierarchy

**IWebMethods**

↳  [IWebQueryResult](_definitions_site_web_.iwebqueryresult.md)




↳  [IWebResult](_definitions_site_web_.iwebresult.md)




↳  [IWeb](_definitions_site_web_.iweb.md)









## Methods
<a id="applytheme"></a>

###  applyTheme

► **applyTheme**(colorpaletteurl: *`any`*, fontschemeurl: *`any`*, backgroundimageurl: *`any`*, sharegenerated: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/site/web.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L58)*



Deletes the web.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="doespushnotificationsubscriberexist"></a>

###  doesPushNotificationSubscriberExist

► **doesPushNotificationSubscriberExist**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/site/web.ts:87](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L87)*



The app BDC catalog.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getappbdccatalogforappinstance"></a>

###  getAppBdcCatalogForAppInstance

► **getAppBdcCatalogForAppInstance**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/site/web.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L129)*



The context information for the site. Static method.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getcustomlisttemplates"></a>

###  getCustomListTemplates

► **getCustomListTemplates**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:134](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L134)*



The custom list templates for the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getdocumentlibraries"></a>

###  getDocumentLibraries

► **getDocumentLibraries**(url: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/site/web.ts:254](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L254)*



Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="unregisterpushnotificationsubscriber"></a>

###  unregisterPushNotificationSubscriber

► **unregisterPushNotificationSubscriber**(id: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/site/web.ts:266](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L266)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The list properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


