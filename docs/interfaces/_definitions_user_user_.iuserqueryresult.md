[gd-sprest](../README.md) > ["definitions/user/user"](../modules/_definitions_user_user_.md) > [IUserQueryResult](../interfaces/_definitions_user_user_.iuserqueryresult.md)



# Interface: IUserQueryResult


User Query Result

## Hierarchy


 [IUserMethods](_definitions_user_user_.iusermethods.md)




 [IUserProps](_definitions_user_user_.iuserprops.md)

**↳ IUserQueryResult**








## Properties
<a id="email"></a>

###  Email

**●  Email**:  *`string`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[Email](_definitions_user_user_.iuserprops.md#email)*

*Defined in [definitions/user/user.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L24)*



Gets or sets the email address of the user.




___

<a id="groups"></a>

###  Groups

**●  Groups**:  *[ISiteGroupResults](_definitions_user_groups_.isitegroupresults.md)* 

*Defined in [definitions/user/user.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L73)*



Gets the groups of which the user is a member.




___

<a id="id"></a>

###  Id

**●  Id**:  *`string`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[Id](_definitions_user_user_.iuserprops.md#id)*

*Defined in [definitions/user/user.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L27)*



Gets a value that specifies the member identifier for the user or group.




___

<a id="ishiddeninui"></a>

###  IsHiddenInUI

**●  IsHiddenInUI**:  *`boolean`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[IsHiddenInUI](_definitions_user_user_.iuserprops.md#ishiddeninui)*

*Defined in [definitions/user/user.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L30)*



Gets a value that indicates whether this member should be hidden in the UI.




___

<a id="issharedbyemailguestuser"></a>

###  IsSharedByEmailGuestUser

**●  IsSharedByEmailGuestUser**:  *`boolean`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[IsSharedByEmailGuestUser](_definitions_user_user_.iuserprops.md#issharedbyemailguestuser)*

*Defined in [definitions/user/user.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L32)*





___

<a id="issiteadmin"></a>

###  IsSiteAdmin

**●  IsSiteAdmin**:  *`boolean`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[IsSiteAdmin](_definitions_user_user_.iuserprops.md#issiteadmin)*

*Defined in [definitions/user/user.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L35)*



Gets or sets a Boolean value that specifies whether the user is a site collection administrator.




___

<a id="loginname"></a>

###  LoginName

**●  LoginName**:  *`string`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[LoginName](_definitions_user_user_.iuserprops.md#loginname)*

*Defined in [definitions/user/user.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L38)*



Gets the login name of the user.




___

<a id="principaltype"></a>

###  PrincipalType

**●  PrincipalType**:  *`string`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[PrincipalType](_definitions_user_user_.iuserprops.md#principaltype)*

*Defined in [definitions/user/user.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L41)*



Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[Title](_definitions_user_user_.iuserprops.md#title)*

*Defined in [definitions/user/user.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L44)*



Gets or sets a value that specifies the name of the principal.




___

<a id="userid"></a>

###  UserId

**●  UserId**:  *`string`* 

*Inherited from [IUserProps](_definitions_user_user_.iuserprops.md).[UserId](_definitions_user_user_.iuserprops.md#userid)*

*Defined in [definitions/user/user.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L47)*



Gets the information of the user that contains the user's name identifier and the issuer of the user's name identifier.




___


## Methods
<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IUserMethods](_definitions_user_user_.iusermethods.md).[delete](_definitions_user_user_.iusermethods.md#delete)*

*Defined in [definitions/user/user.ts:16](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/user/user.ts#L16)*



Deletes the user custom action.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


