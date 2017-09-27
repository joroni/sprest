[gd-sprest](../README.md) > ["definitions/lib/sptypes"](../modules/_definitions_lib_sptypes_.md)



# External module: "definitions/lib/sptypes"

## Index

### Type aliases

* [CalendarType](_definitions_lib_sptypes_.md#calendartype)
* [CheckOutType](_definitions_lib_sptypes_.md#checkouttype)
* [ChoiceFormatType](_definitions_lib_sptypes_.md#choiceformattype)
* [ControlMode](_definitions_lib_sptypes_.md#controlmode)
* [DateFormat](_definitions_lib_sptypes_.md#dateformat)
* [DraftVisibilityType](_definitions_lib_sptypes_.md#draftvisibilitytype)
* [EventReceiverSynchronizationType](_definitions_lib_sptypes_.md#eventreceiversynchronizationtype)
* [EventReceiverType](_definitions_lib_sptypes_.md#eventreceivertype)
* [FieldType](_definitions_lib_sptypes_.md#fieldtype)
* [FieldUserSelectionType](_definitions_lib_sptypes_.md#fielduserselectiontype)
* [FileTemplateType](_definitions_lib_sptypes_.md#filetemplatetype)
* [FriendlyDateFormat](_definitions_lib_sptypes_.md#friendlydateformat)
* [ListTemplateType](_definitions_lib_sptypes_.md#listtemplatetype)
* [LocaleLCIDType](_definitions_lib_sptypes_.md#localelcidtype)
* [PageType](_definitions_lib_sptypes_.md#pagetype)
* [PersonalSiteCapabilities](_definitions_lib_sptypes_.md#personalsitecapabilities)
* [PrincipalSources](_definitions_lib_sptypes_.md#principalsources)
* [PrincipalTypes](_definitions_lib_sptypes_.md#principaltypes)
* [RelationshipDeleteBehaviorType](_definitions_lib_sptypes_.md#relationshipdeletebehaviortype)
* [ReorderingRuleMatchType](_definitions_lib_sptypes_.md#reorderingrulematchtype)
* [RoleType](_definitions_lib_sptypes_.md#roletype)
* [URLZones](_definitions_lib_sptypes_.md#urlzones)
* [UrlFormatType](_definitions_lib_sptypes_.md#urlformattype)
* [UserCustomActionRegistrationType](_definitions_lib_sptypes_.md#usercustomactionregistrationtype)
* [ViewType](_definitions_lib_sptypes_.md#viewtype)



---
## Type aliases
<a id="calendartype"></a>

###  CalendarType

**Τ CalendarType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:4](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L4)*



Calendar Types

#### Type declaration


ChineseLunar: `any`

Chinese Lunar




Gregorian: `any`

Gregorian (localized)




GregorianArabic: `any`

Gregorian (Arabic)




GregorianMiddleEastFrench: `any`

Gregorian (Middle East French)




GregorianTransliteratedEnglish: `any`

Gregorian (Transliterated English)




GregorianTransliteratedFrench: `any`

Gregorian (Transliterated French)




HebrewLunar: `any`

Hebrew Lunar




Hijri: `any`

Hijri (Arabic Lunar)




JapaneseEmperorEra: `any`

Japanese Emperor Era




KoreanTangunEra: `any`

Korean Tangun Era




KoreanandJapaneseLunar: `any`

Korean and Japanese Lunar




SakaEra: `any`

Saka Era




TaiwanCalendar: `any`

Taiwan Calendar




Thai: `any`

Thai







___

<a id="checkouttype"></a>

###  CheckOutType

**Τ CheckOutType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:51](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L51)*



Check Out Types

#### Type declaration


None: `any`

None




Offline: `any`

Offline




Online: `any`

Online







___

<a id="choiceformattype"></a>

###  ChoiceFormatType

**Τ ChoiceFormatType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L65)*



Choice Format Types

#### Type declaration


Dropdown: `any`

Dropdown




RadioButtons: `any`

Radio buttons







___

<a id="controlmode"></a>

###  ControlMode

**Τ ControlMode**:  *object* 

*Defined in [definitions/lib/sptypes.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L77)*



Control Modes

#### Type declaration


Display: `any`

Specifies that the control is in display mode.




Edit: `any`

Specifies that the control is in edit mode.




Invalid: `any`

A placeholder value in the export typeeration indicating that it has no valid display mode from one of the other export typeeration values.




New: `any`

Specifies that the control is in New mode.







___

<a id="dateformat"></a>

###  DateFormat

**Τ DateFormat**:  *object* 

*Defined in [definitions/lib/sptypes.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L94)*



Date Format

#### Type declaration


DateOnly: `any`

Displays only the date.




DateTime: `any`

Displays the date and time.







___

<a id="draftvisibilitytype"></a>

###  DraftVisibilityType

**Τ DraftVisibilityType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L105)*



Draft Visibility Types

#### Type declaration


Approver: `any`

export typeeration whose values specify that the minimum permission is approver.




Author: `any`

export typeeration whose values specify that the minimum permission is author.




Reader: `any`

export typeeration whose values specify that the minimum permission is reader.







___

<a id="eventreceiversynchronizationtype"></a>

###  EventReceiverSynchronizationType

**Τ EventReceiverSynchronizationType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:349](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L349)*



Event Receiver Synchronization Types

#### Type declaration


Asynchronous: `any`

Event to be triggered asynchronously.




Synchronization: `any`

Event to be triggered synchronously.







___

<a id="eventreceivertype"></a>

###  EventReceiverType

**Τ EventReceiverType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L119)*



Event Receiver Types

#### Type declaration


AppInstalled: `any`

Event that occurs after an app is installed.




AppUninstalling: `any`

Event that occurs before an app is uninstalled.




AppUpgraded: `any`

Event that occurs after an app is upgraded.




ContextEvent: `any`

Identifies workflow event receivers, and is therefore not a true event type.




EmailReceived: `any`

Event that occurs after a list receives an e-mail message.




EntityInstanceAdded: `any`

Event that occurs when an instance of an external content type has been added.




EntityInstanceDeleted: `any`

Event that occurs when an instance of an external content type has been deleted.




EntityInstanceUpdated: `any`

Event that occurs when an instance of an external content type has been updated.




FieldAdded: `any`

Event that occurs after a field has been added.




FieldAdding: `any`

Event that occurs before a field is added to a list.




FieldDeleted: `any`

Event that occurs after a field has been removed.




FieldDeleting: `any`

Event that occurs before a field is removed from a list.




FieldUpdated: `any`

Event that occurs after a field has been updated.




FieldUpdating: `any`

Event that occurs before a field is updated.




GroupAdded: `any`

Event that occurs happens after a security group is added.




GroupAdding: `any`

Event that occurs before a security group is added.




GroupDeleted: `any`

Event that occurs after a security group is deleted.




GroupDeleting: `any`

Event that occurs before a security group is deleted.




GroupUpdated: `any`

Event that occurs after a security group is updated.




GroupUpdating: `any`

Event that occurs before a security group is updated.




GroupUserAdded: `any`

Event that occurs after a user is added to a security group.




GroupUserAdding: `any`

Event that occurs before a user is added to a security group.




GroupUserDeleted: `any`

Event that occurs after a user is deleted from a security group.




GroupUserDeleting: `any`

Event that occurs before a user is deleted from a security group.




InheritanceBreaking: `any`

Event that occurs before an inheritance is broken.




InheritanceBroken: `any`

Event that occurs after an inheritance is broken.




InheritanceReset: `any`

Event that occurs after an inheritance is restored.




InheritanceResetting: `any`

Event that occurs before an inheritance is restored.




ItemAdded: `any`

Event that occurs after an item has been added.




ItemAdding: `any`

Event that occurs before an item has been added.




ItemAttachmentAdded: `any`

Event that occurs after an attachment has been added to the item.




ItemAttachmentAdding: `any`

Event that occurs before an attachment has been added to an item.




ItemAttachmentDeleted: `any`

Event that occurs after an attachment has been removed from the item.




ItemAttachmentDeleting: `any`

Event that occurs before an attachment has been removed from the item.




ItemCheckedIn: `any`

Event that occurs after an item has been checked in.




ItemCheckedOut: `any`

Event that occurs after an item has been checked out.




ItemCheckingIn: `any`

Event that occurs before an item has been checked in.




ItemCheckingOut: `any`

Event that occurs before an item is checked out.




ItemDeleted: `any`

Event that occurs after an item has been deleted.




ItemDeleting: `any`

Event that occurs before an item is deleted.




ItemFileConverted: `any`

Event that occurs after a file is transformed from one type to another.




ItemFileMoved: `any`

Event that occurs after a file has been moved.




ItemFileMoving: `any`

Event that occurs before a file is moved.




ItemUncheckedOut: `any`

Event that occurs after an item has been unchecked out.




ItemUncheckingOut: `any`

Event that occurs before an item is unchecked out.




ItemUpdated: `any`

Event that occurs after an item has been updated.




ItemUpdating: `any`

Event that occurs before an item is updated.




ItemVersionDeleted: `any`

Event that occurs after a document version is deleted.




ItemVersionDeleting: `any`

Event that occurs before a document version is deleted.




ListAdded: `any`

Event that occurs after a list has been created.




ListAdding: `any`

Event that occurs before a list is created.




ListDeleted: `any`

Event that occurs after a list has been deleted.




ListDeleting: `any`

Event that occurs before a list is deleted.




RoleAssignmentAdded: `any`

Event that occurs after a role assignment is added.




RoleAssignmentAdding: `any`

Event that occurs before a role assignment is added.




RoleAssignmentDeleted: `any`

Event that occurs after a role definition is deleted.




RoleAssignmentDeleting: `any`

Event that occurs before a role assignment is deleted.




RoleDefinitionAdded: `any`

Event that occurs after a role definition is added.




RoleDefinitionAdding: `any`

Event that occurs before a role definition is added.




RoleDefinitionDeleted: `any`

Event that occurs after a role definition is deleted.




RoleDefinitionDeleting: `any`

Event that occurs before a role definition is deleted.




RoleDefinitionUpdated: `any`

Event that occurs after a role definition is updated.




RoleDefinitionUpdating: `any`

Event that occurs before a role definition is updated.




SiteDeleted: `any`

Event that occurs after a site collection has been deleted.




SiteDeleting: `any`

Event that occurs before a site collection is deleted.




WebAdding: `any`

Event that occurs before a new site is created.




WebDeleted: `any`

Event that occurs after a site has been deleted.




WebDeleting: `any`

Event that occurs before a site is deleted.




WebMoved: `any`

Event that occurs after a site URL has been changed.




WebMoving: `any`

Event that occurs before a site URL has been changed.




WebProvisioned: `any`

Event that occurs after a new site has been created, but before that new site is provisioned.




WorkflowCompleted: `any`

Event that occurs after a workflow has completed running.




WorkflowPostponed: `any`

Event that occurs after a workflow has been postponed.




WorkflowStarted: `any`

Event that occurs after a workflow has started running.




WorkflowStarting: `any`

Event that occurs before a workflow starts running.







___

<a id="fieldtype"></a>

###  FieldType

**Τ FieldType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:360](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L360)*



Field Types

#### Type declaration


AllDayEvent: `any`

Specifies that the field indicates whether a meeting in a calendar list is an all-day event.




Attachments: `any`

Specifies that the field indicates whether the list item has attachments.




Boolean: `any`

Specifies that the field contains a Boolean value.




Calculated: `any`

Specifies that the field is a calculated field.




Choice: `any`

Specifies that the field contains a single value from a set of specified values.




Computed: `any`

Specifies that the field is a computed field.




ContentTypeId: `any`

Specifies that the field contains a content type identifier as a value.




Counter: `any`

Specifies that the field contains a monotonically increasing integer.




CrossProjectLink: `any`

Specifies that the field contains a link between projects in a Meeting Workspace site.




Currency: `any`

Specifies that the field contains a currency value.




DateTime: `any`

Specifies that the field contains a date and time value or a date-only value.




Error: `any`

Specifies that the type of the field was set to an invalid value.




File: `any`

Specifies that the field contains the leaf name of a document as a value.




Geolocation: `any`

Specifies that the field contains geographical location values.




GridChoice: `any`

Specifies that the field contains rating scale values for a survey list.




Guid: `any`

Specifies that the field contains a GUID value.




Integer: `any`

Specifies that the field contains an integer value.




Invalid: `any`

Must not be used.




Lookup: `any`

Specifies that the field is a lookup field.




MaxItems: `any`

Must not be used.




ModStat: `any`

Specifies that the field indicates moderation status.




MultiChoice: `any`

Specifies that the field contains one or more values from a set of specified values.




Note: `any`

Specifies that the field contains multiple lines of text.




Number: `any`

Specifies that the field contains a floating-point number value.




PageSeparator: `any`

Specifies that the field separates questions in a survey list onto multiple pages.




Recurrence: `any`

Specifies that the field indicates whether a meeting in a calendar list recurs.




Text: `any`

Specifies that the field contains a single line of text.




ThreadIndex: `any`

Specifies that the field indicates the position of a discussion item in a threaded view of a discussion board.




Threading: `any`

Specifies that the field indicates the thread for a discussion item in a threaded view of a discussion board.




URL: `any`

Specifies that the field contains a URI and an optional description of the URI.




User: `any`

Specifies that the field contains one or more users and groups as values.




WorkflowEventType: `any`

Specifies that the field contains the most recent event in a workflow instance.




WorkflowStatus: `any`

Specifies that the field indicates the status of a workflow instance on a list item.







___

<a id="fielduserselectiontype"></a>

###  FieldUserSelectionType

**Τ FieldUserSelectionType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:464](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L464)*



Field User Selection Types

#### Type declaration


PeopleAndGroups: `any`

People and groups.




PeopleOnly: `any`

People only.







___

<a id="filetemplatetype"></a>

###  FileTemplateType

**Τ FileTemplateType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:475](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L475)*



File Template Types

#### Type declaration


FormPage: `any`

export typeeration whose value specifies default form template.




StandardPage: `any`

export typeeration whose value specifies default view template.




WikiPage: `any`

export typeeration whose value specifies default wiki template.







___

<a id="friendlydateformat"></a>

###  FriendlyDateFormat

**Τ FriendlyDateFormat**:  *object* 

*Defined in [definitions/lib/sptypes.ts:489](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L489)*



Friendly Date Format

#### Type declaration


Disabled: `any`

Disabled (standard absolute)




Relative: `any`

Relative (standard friendly relative)




Unspecified: `any`

Unspecified







___

<a id="listtemplatetype"></a>

###  ListTemplateType

**Τ ListTemplateType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:503](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L503)*



List Template Types

#### Type declaration


AccessRequest: `any`

Access Request List




AdminTasks: `any`

Administrator Tasks




Agenda: `any`

Agenda (Meeting)




Announcements: `any`

Announcements




AppDataCatalog: `any`

App Data Catalog




CallTrack: `any`

Call Track




Categories: `any`

Categories (Blog)




Circulation: `any`

Circulation




Comments: `any`

Comments (Blog)




Contacts: `any`

Contacts




CustomGrid: `any`

Custom grid for a list




DataConnectionLibrary: `any`

Data connection library for sharing information about external data connections




DataSources: `any`

Data sources for a site




Decision: `any`

Decisions (Meeting)




DesignCatalog: `any`

Design Catalog




DeveloperSiteDraftApps: `any`

Draft Apps library in Developer Site




DiscussionBoard: `any`

Discussion board




DocumentLibrary: `any`

Document library




Events: `any`

Calendar




ExternalList: `any`

External




Facility: `any`

Facility




GanttTasks: `any`

Project Tasks




GenericList: `any`

Custom list




HealthReports: `any`

Health Reports




HealthRules: `any`

Health Rules




HelpLibrary: `any`

Help Library




Holidays: `any`

Holidays




HomePageLibrary: `any`

Workspace Pages (Meeting)




IMEDic: `any`

IME (Input Method Editor) Dictionary




IssueTracking: `any`

Issue tracking




Links: `any`

Links




ListTemplateCatalog: `any`

List Template gallery




MaintenanceLogs: `any`

Maintenance Logs Library




MasterPageCatalog: `any`

Master Page gallery




MeetingObjective: `any`

Objectives (Meeting)




MeetingUser: `any`

Attendees (Meeting)




Meetings: `any`

Meeting Series (Meeting)




MySiteDocumentLibrary: `any`

My Site Document Library




NoCodePublic: `any`

No Code Public Workflow




NoCodeWorkflows: `any`

No Code Workflows




PictureLibrary: `any`

Picture library




Posts: `any`

Posts (Blog)




SolutionCatalog: `any`

Solutions




Survey: `any`

Survey




Tasks: `any`

Tasks




TasksWithTimelineAndHierarchy: `any`

Tasks with Timeline and Hierarchy




TextBox: `any`

Text Box (Meeting)




ThemeCatalog: `any`

Themes




ThingsToBring: `any`

Things To Bring (Meeting)




Timecard: `any`

Timecard




UserInformation: `any`

User Information




WebPageLibrary: `any`

Wiki Page Library




WebPartCatalog: `any`

Web Part gallery




WebTemplateCatalog: `any`

Site template gallery




Whereabouts: `any`

Whereabouts




WorkflowHistory: `any`

Workflow History




WorkflowProcess: `any`

Custom Workflow Process




XMLForm: `any`

XML Form library







___

<a id="localelcidtype"></a>

###  LocaleLCIDType

**Τ LocaleLCIDType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:682](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L682)*



Locale LCID Types

#### Type declaration


Afrikaans: `any`



Albanian: `any`



ArabicAlgeria: `any`



ArabicBahrain: `any`



ArabicEgypt: `any`



ArabicIraq: `any`



ArabicJordan: `any`



ArabicLebanon: `any`



ArabicLibya: `any`



ArabicMorocco: `any`



ArabicOman: `any`



ArabicQatar: `any`



ArabicSaudiArabia: `any`



ArabicSyria: `any`



ArabicTunisia: `any`



ArabicUAE: `any`



ArabicYemen: `any`



Armenian: `any`



AzeriCyrillic: `any`



AzeriLatin: `any`



Basque: `any`



Belarusian: `any`



Bulgarian: `any`



Catalan: `any`



ChineseHongKongSAR: `any`



ChineseMacaoSAR: `any`



ChinesePRC: `any`



ChineseSingapore: `any`



ChineseTaiwan: `any`



CroatianCroatia: `any`



Czech: `any`



Danish: `any`



Divehi: `any`



DutchBelgium: `any`



DutchNetherlands: `any`



EnglishAustralia: `any`



EnglishBelize: `any`



EnglishCanada: `any`



EnglishCaribbean: `any`



EnglishIreland: `any`



EnglishJamaica: `any`



EnglishNewZealand: `any`



EnglishPhilippines: `any`



EnglishSouthAfrica: `any`



EnglishTrinidad: `any`



EnglishUnitedKingdom: `any`



EnglishUnitedStates: `any`



EnglishZimbabwe: `any`



Estonian: `any`



Faeroese: `any`



Finnish: `any`



FrenchBelgium: `any`



FrenchCanada: `any`



FrenchFrance: `any`



FrenchLuxembourg: `any`



FrenchMonaco: `any`



FrenchSwitzerland: `any`



Galician: `any`



Georgian: `any`



GermanAustria: `any`



GermanGermany: `any`



GermanLiechtenstein: `any`



GermanLuxembourg: `any`



GermanSwitzerland: `any`



Greek: `any`



Gujarati: `any`



HebrewIsrael: `any`



HindiIndia: `any`



Hungarian: `any`



Icelandic: `any`



Indonesian: `any`



ItalianItaly: `any`



ItalianSwitzerland: `any`



Japanese: `any`



Kannada: `any`



Kazakh: `any`



Konkani: `any`



Korean: `any`



KyrgyzCyrillic: `any`



Latvian: `any`



Lithuanian: `any`



MacedonianFYROM: `any`



Malay: `any`



MalayBruneiDarussalam: `any`



Marathi: `any`



MongolianCyrillic: `any`



NorwegianBokmal: `any`



NorwegianNynorsk: `any`



PersianIran: `any`



Polish: `any`



PortugueseBrazil: `any`



PortuguesePortugal: `any`



Punjabi: `any`



Romanian: `any`



Russian: `any`



Sanskrit: `any`



SerbianCyrillic: `any`



SerbianLatin: `any`



Slovak: `any`



Slovenian: `any`



SpanishArgentina: `any`



SpanishBolivia: `any`



SpanishChile: `any`



SpanishColombia: `any`



SpanishCostaRica: `any`



SpanishDominicanRepublic: `any`



SpanishEcuador: `any`



SpanishElSalvador: `any`



SpanishGuatemala: `any`



SpanishHonduras: `any`



SpanishMexico: `any`



SpanishNicaragua: `any`



SpanishPanama: `any`



SpanishParaguay: `any`



SpanishPeru: `any`



SpanishPuertoRico: `any`



SpanishSpain: `any`



SpanishUruguay: `any`



SpanishVenezuela: `any`



Swahili: `any`



Swedish: `any`



SwedishFinland: `any`



Syriac: `any`



Tamil: `any`



Tatar: `any`



Telugu: `any`



ThaiThailand: `any`



Turkish: `any`



Ukrainian: `any`



UrduPakistan: `any`



UzbekCyrillic: `any`



UzbekLatin: `any`



Vietnamese: `any`






___

<a id="pagetype"></a>

###  PageType

**Τ PageType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:821](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L821)*



Page Types

#### Type declaration


DefaultView: `any`

export typeeration whose values specify a page that is the default view for a list.




DialogView: `any`

export typeeration whose values specify a page suitable for display within a dialog box on a client computer.




DisplayForm: `any`

export typeeration whose values specify a list form for displaying a list item.




DisplayFormDialog: `any`

export typeeration whose values specify a list form for displaying a list item, suitable for display within a dialog box on a client computer.




EditForm: `any`

export typeeration whose values specify a list form for editing a list item.




EditFormDialog: `any`

export typeeration whose values specify a list form for editing a list item, suitable for display within a dialog box on a client computer.




Invalid: `any`

export typeeration whose values specify a page that does not correspond to a list view or a list form.




NewForm: `any`

export typeeration whose values specify a list form for creating a new list item.




NewFormDialog: `any`

export typeeration whose values specify a list form for creating a new list item, suitable for display within a dialog box on a client computer.




NormalView: `any`

export typeeration whose values specify a page that is a list view and is not the default view for a list.




Page_MAXITEMS: `any`

export typeeration whose values specify the total number of valid page types.




SolutionForm: `any`

export typeeration whose values specify a list form for displaying or editing a list item and represented by a form template (.xsn) file.




View: `any`

export typeeration whose values specify a page that is a list view.







___

<a id="personalsitecapabilities"></a>

###  PersonalSiteCapabilities

**Τ PersonalSiteCapabilities**:  *object* 

*Defined in [definitions/lib/sptypes.ts:886](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L886)*



Personal Site Capabilities

#### Type declaration


Education: `any`



Guest: `any`



MyTasksDashboard: `any`



None: `any`



Profile: `any`



Social: `any`



Storage: `any`






___

<a id="principalsources"></a>

###  PrincipalSources

**Τ PrincipalSources**:  *object* 

*Defined in [definitions/lib/sptypes.ts:899](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L899)*



Principal Sources

#### Type declaration


All: `any`

Search all principal sources.




MembershipProvider: `any`

Search the current membership provider.




None: `any`

Search no principal sources.




RoleProvider: `any`

Search the current role provider.




UserInfoList: `any`

Search the user information list.




Windows: `any`

Search active directory.







___

<a id="principaltypes"></a>

###  PrincipalTypes

**Τ PrincipalTypes**:  *object* 

*Defined in [definitions/lib/sptypes.ts:922](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L922)*



Principal Types

#### Type declaration


All: `any`

Return all entity types.




DistributionList: `any`

Return distribution list entity types.




None: `any`

Return no principal types.




SecurityGroup: `any`

Return security group entity types.




SharePointGroup: `any`

Return sharepoint group entity types.




User: `any`

Return user entity types.







___

<a id="relationshipdeletebehaviortype"></a>

###  RelationshipDeleteBehaviorType

**Τ RelationshipDeleteBehaviorType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:945](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L945)*



Relationship Delete Behavior Types

#### Type declaration


Cascade: `any`

Cascade behavior.




None: `any`

No relationship behavior is applied.




Restrict: `any`

Restrict behavior.







___

<a id="reorderingrulematchtype"></a>

###  ReorderingRuleMatchType

**Τ ReorderingRuleMatchType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:959](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L959)*



Reordering Rule Match Types

#### Type declaration


ContentTypeIs: `any`



FileExtensionMatches: `any`



ManualCondition: `any`



ResultContainsKeyword: `any`



ResultHasTag: `any`



TitleContainsKeyword: `any`



TitleMatchesKeyword: `any`



UrlExactlyMatches: `any`



UrlStartsWith: `any`






___

<a id="roletype"></a>

###  RoleType

**Τ RoleType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:974](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L974)*



Role Types

#### Type declaration


Administrator: `any`

Has all rights from other roles, plus rights to manage roles and view usage analysis data. Includes all rights in the WebDesigner role, plus the following: ManageListPermissions, ManageRoles, ManageSubwebs, ViewUsageData. The Administrator role cannot be customized or deleted, and must always contain at least one member. Members of the Administrator role always have access to, or can grant themselves access to, any item in the Web site.




Contributor: `any`

Has Reader rights, plus rights to add items, edit items, delete items, manage list permissions, manage personal views, personalize Web Part Pages, and browse directories. Includes all rights in the Reader role, plus the following: AddDelPrivateWebParts, AddListItems, BrowseDirectories, CreatePersonalGroups, DeleteListItems, EditListItems, ManagePersonalViews, UpdatePersonalWebParts. Contributors cannot create new lists or document libraries, but they can add content to existing lists and document libraries.




Editor: `any`

Has Contributor rights, plus rights to manage lists. Includes all rights in the Contributor role. Editors can create new lists or document libraries.




Guest: `any`

Has limited rights to view pages and specific page elements. This role is used to give users access to a particular page, list, or item in a list, without granting rights to view the entire site. Users cannot be added explicitly to the Guest role; users who are given access to lists or document libraries by way of per-list permissions are added automatically to the Guest role. The Guest role cannot be customized or deleted.




None: `any`

export typeeration whose values specify that there are no rights on the Web site.




Reader: `any`

Has rights to view items, personalize Web parts, use alerts, and create a top-level Web site using Self-Service Site Creation. A reader can only read a site; the reader cannot add content. When a reader creates a site using Self-Service Site Creation, the reader becomes the site owner and a member of the Administrator role for the new site. This does not affect the user's role membership for any other site. Rights included: CreateSSCSite, ViewListItems, ViewPages.




WebDesigner: `any`

Has Contributor rights, plus rights to cancel check out, delete items, manage lists, add and customize pages, define and apply themes and borders, and link style sheets. Includes all rights in the Contributor role, plus the following: AddAndCustomizePages, ApplyStyleSheets, ApplyThemeAndBorder, CancelCheckout, ManageLists.WebDesigners can modify the structure of the site and create new lists or document libraries.







___

<a id="urlzones"></a>

###  URLZones

**Τ URLZones**:  *object* 

*Defined in [definitions/lib/sptypes.ts:1011](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L1011)*



URL Zones

#### Type declaration


Custom: `any`

Search the custom zone.




Default: `any`

Search the default zone.




Extranet: `any`

Search the extranet zone.




Internet: `any`

Search the internet zone.




Intranet: `any`

Search the intranet zone.







___

<a id="urlformattype"></a>

###  UrlFormatType

**Τ UrlFormatType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:1000](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L1000)*



URL Format Types

#### Type declaration


Hyperlink: `any`

Hyperlink




Image: `any`

Image







___

<a id="usercustomactionregistrationtype"></a>

###  UserCustomActionRegistrationType

**Τ UserCustomActionRegistrationType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:1031](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L1031)*



User Custom Action Registration Types

#### Type declaration


ContentType: `any`

export typeeration whose values specify that the custom action is associated with a content type.




FileType: `any`

export typeeration whose values specify that the custom action is associated with a file extension.




List: `any`

export typeeration whose values specify that the custom action is associated with a list.




None: `any`

export typeeration whose values specify that the object association is not specified.




ProgId: `any`

export typeeration whose values specify that the custom action is associated with a ProgID.







___

<a id="viewtype"></a>

###  ViewType

**Τ ViewType**:  *object* 

*Defined in [definitions/lib/sptypes.ts:1051](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/sptypes.ts#L1051)*



View Types

#### Type declaration


Calendar: `any`

export typeeration whose values specify a calendar list view type.




Chart: `any`

export typeeration whose values specify a chart list view type.




Gantt: `any`

export typeeration whose values specify a Gantt chart list view type.




Grid: `any`

export typeeration whose values specify a datasheet list view type.




Html: `any`

export typeeration whose values specify an HTML list view type.




Recurrence: `any`

export typeeration whose values specify a list view type that displays recurring events.







___


