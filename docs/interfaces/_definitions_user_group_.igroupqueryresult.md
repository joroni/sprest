[gd-sprest](../README.md) > ["definitions/user/group"](../modules/_definitions_user_group_.md) > [IGroupQueryResult](../interfaces/_definitions_user_group_.igroupqueryresult.md)



# Interface: IGroupQueryResult


Group Query Result

## Hierarchy


 [IGroupMethods](_definitions_user_group_.igroupmethods.md)




 [IGroupProps](_definitions_user_group_.igroupprops.md)

**↳ IGroupQueryResult**








## Properties
<a id="allowmemberseditmembership"></a>

###  AllowMembersEditMembership

**●  AllowMembersEditMembership**:  *`boolean`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[AllowMembersEditMembership](_definitions_user_group_.igroupprops.md#allowmemberseditmembership)*

*Defined in [definitions/user/group.ts:17](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L17)*



Gets or sets a value that indicates whether the group members can edit membership in the group.




___

<a id="allowrequesttojoinleave"></a>

###  AllowRequestToJoinLeave

**●  AllowRequestToJoinLeave**:  *`boolean`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[AllowRequestToJoinLeave](_definitions_user_group_.igroupprops.md#allowrequesttojoinleave)*

*Defined in [definitions/user/group.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L20)*



Gets or sets a value that indicates whether to allow users to request membership in the group and request to leave the group.




___

<a id="autoacceptrequesttojoinleave"></a>

###  AutoAcceptRequestToJoinLeave

**●  AutoAcceptRequestToJoinLeave**:  *`boolean`* 

*Defined in [definitions/user/group.ts:98](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L98)*



Gets or sets a value that indicates whether the request to join or leave the group can be accepted automatically.




___

<a id="cancurrentusereditmembership"></a>

###  CanCurrentUserEditMembership

**●  CanCurrentUserEditMembership**:  *`boolean`* 

*Defined in [definitions/user/group.ts:103](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L103)*



Gets a value that indicates whether the current user can edit the membership of the group.




___

<a id="cancurrentusermanagegroup"></a>

###  CanCurrentUserManageGroup

**●  CanCurrentUserManageGroup**:  *`boolean`* 

*Defined in [definitions/user/group.ts:108](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L108)*



Gets a value that indicates whether the current user can manage the group.




___

<a id="cancurrentuserviewmembership"></a>

###  CanCurrentUserViewMembership

**●  CanCurrentUserViewMembership**:  *`boolean`* 

*Defined in [definitions/user/group.ts:113](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L113)*



Gets a value that indicates whether the current user can view the membership of the group.




___

<a id="description"></a>

###  Description

**●  Description**:  *`string`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[Description](_definitions_user_group_.igroupprops.md#description)*

*Defined in [definitions/user/group.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L23)*



Gets or sets the description of the group.




___

<a id="id"></a>

###  Id

**●  Id**:  *`string`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[Id](_definitions_user_group_.igroupprops.md#id)*

*Defined in [definitions/user/group.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L26)*



Gets a value that specifies the member identifier for the user or group.




___

<a id="ishiddeninui"></a>

###  IsHiddenInUI

**●  IsHiddenInUI**:  *`string`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[IsHiddenInUI](_definitions_user_group_.igroupprops.md#ishiddeninui)*

*Defined in [definitions/user/group.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L29)*



Gets a value that indicates whether this member should be hidden in the UI.




___

<a id="loginname"></a>

###  LoginName

**●  LoginName**:  *`string`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[LoginName](_definitions_user_group_.igroupprops.md#loginname)*

*Defined in [definitions/user/group.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L32)*



Gets the name of the group.




___

<a id="onlyallowmembersviewmembership"></a>

###  OnlyAllowMembersViewMembership

**●  OnlyAllowMembersViewMembership**:  *`boolean`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[OnlyAllowMembersViewMembership](_definitions_user_group_.igroupprops.md#onlyallowmembersviewmembership)*

*Defined in [definitions/user/group.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L35)*



Gets or sets a value that indicates whether only group members are allowed to view the membership of the group.




___

<a id="owner"></a>

###  Owner

**●  Owner**:  *[IUserResult](_definitions_user_user_.iuserresult.md)* 

*Defined in [definitions/user/group.ts:118](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L118)*



Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.




___

<a id="ownertitle"></a>

###  OwnerTitle

**●  OwnerTitle**:  *`string`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[OwnerTitle](_definitions_user_group_.igroupprops.md#ownertitle)*

*Defined in [definitions/user/group.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L38)*



Gets the name for the owner of this group.




___

<a id="principaltype"></a>

###  PrincipalType

**●  PrincipalType**:  *`string`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[PrincipalType](_definitions_user_group_.igroupprops.md#principaltype)*

*Defined in [definitions/user/group.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L44)*



Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15.




___

<a id="requesttojoinleaveemailsetting"></a>

###  RequestToJoinLeaveEmailSetting

**●  RequestToJoinLeaveEmailSetting**:  *`string`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[RequestToJoinLeaveEmailSetting](_definitions_user_group_.igroupprops.md#requesttojoinleaveemailsetting)*

*Defined in [definitions/user/group.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L41)*



Gets or sets the email address to which the requests of the membership are sent.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Inherited from [IGroupProps](_definitions_user_group_.igroupprops.md).[Title](_definitions_user_group_.igroupprops.md#title)*

*Defined in [definitions/user/group.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L47)*



Gets or sets a value that specifies the name of the principal.




___

<a id="users"></a>

###  Users

**●  Users**:  *[IUserResults](_definitions_user_users_.iuserresults.md)* 

*Defined in [definitions/user/group.ts:123](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/group.ts#L123)*



Gets a collection of user objects that represents all of the users in the group.




___


