[gd-sprest](../README.md) > ["mapper/user/users"](../modules/_mapper_user_users_.md)



# External module: "mapper/user/users"

## Index

### Object literals

* [users](_mapper_user_users_.md#users)



---
<a id="users"></a>

## Object literal: users


/


<a id="users.add"></a>

###  add

** add**:  *`object`* 

*Defined in [mapper/user/users.ts:8](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L8)*




<a id="users.add.metadatatype"></a>

###  metadataType

**●  metadataType**:  *`string`*  = "SP.User"

*Defined in [mapper/user/users.ts:9](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L9)*





___
<a id="users.add.name"></a>

###  name

**●  name**:  *`string`*  = ""

*Defined in [mapper/user/users.ts:10](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L10)*





___
<a id="users.add.requesttype"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsInBody

*Defined in [mapper/user/users.ts:11](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L11)*





___

___
<a id="users.getbyemail"></a>

###  getByEmail

** getByEmail**:  *`object`* 

*Defined in [mapper/user/users.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L15)*




<a id="users.getbyemail.argnames"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["email"]

*Defined in [mapper/user/users.ts:16](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L16)*





___
<a id="users.getbyemail.requesttype-1"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/user/users.ts:17](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L17)*





___
<a id="users.getbyemail.returntype"></a>

###  returnType

**●  returnType**:  *`string`*  = "user"

*Defined in [mapper/user/users.ts:18](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L18)*





___

___
<a id="users.getbyid"></a>

###  getById

** getById**:  *`object`* 

*Defined in [mapper/user/users.ts:22](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L22)*




<a id="users.getbyid.argnames-1"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/user/users.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L23)*





___
<a id="users.getbyid.requesttype-2"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetWithArgsValueOnly

*Defined in [mapper/user/users.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L24)*





___
<a id="users.getbyid.returntype-1"></a>

###  returnType

**●  returnType**:  *`string`*  = "user"

*Defined in [mapper/user/users.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L25)*





___

___
<a id="users.getbyloginname"></a>

###  getByLoginName

** getByLoginName**:  *`object`* 

*Defined in [mapper/user/users.ts:29](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L29)*




<a id="users.getbyloginname.argnames-2"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["loginName"]

*Defined in [mapper/user/users.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L30)*





___
<a id="users.getbyloginname.name-1"></a>

###  name

**●  name**:  *`string`*  = "getByLoginName(@v)?@v='[[loginName]]'"

*Defined in [mapper/user/users.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L31)*





___
<a id="users.getbyloginname.requesttype-3"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.GetReplace

*Defined in [mapper/user/users.ts:32](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L32)*





___
<a id="users.getbyloginname.returntype-2"></a>

###  returnType

**●  returnType**:  *`string`*  = "user"

*Defined in [mapper/user/users.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L33)*





___

___
<a id="users.query"></a>

###  query

** query**:  *`object`* 

*Defined in [mapper/user/users.ts:37](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L37)*




<a id="users.query.argnames-3"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["oData"]

*Defined in [mapper/user/users.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L38)*





___
<a id="users.query.requesttype-4"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.OData

*Defined in [mapper/user/users.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L39)*





___

___
<a id="users.removebyid"></a>

###  removeById

** removeById**:  *`object`* 

*Defined in [mapper/user/users.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L43)*




<a id="users.removebyid.argnames-4"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["id"]

*Defined in [mapper/user/users.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L44)*





___
<a id="users.removebyid.requesttype-5"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostWithArgsValueOnly

*Defined in [mapper/user/users.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L45)*





___

___
<a id="users.removebyloginname"></a>

###  removeByLoginName

** removeByLoginName**:  *`object`* 

*Defined in [mapper/user/users.ts:49](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L49)*




<a id="users.removebyloginname.argnames-5"></a>

###  argNames

**●  argNames**:  *`string`[]*  =  ["loginName"]

*Defined in [mapper/user/users.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L50)*





___
<a id="users.removebyloginname.name-2"></a>

###  name

**●  name**:  *`string`*  = "removeByLoginName(@v)?@v='[[loginName]]'"

*Defined in [mapper/user/users.ts:51](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L51)*





___
<a id="users.removebyloginname.requesttype-6"></a>

###  requestType

**●  requestType**:  *`number`*  =  RequestType.PostReplace

*Defined in [mapper/user/users.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/mapper/user/users.ts#L52)*





___

___


