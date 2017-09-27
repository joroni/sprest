[gd-sprest](../README.md) > ["definitions/lib/types"](../modules/_definitions_lib_types_.md) > [IWebCreationInformation](../interfaces/_definitions_lib_types_.iwebcreationinformation.md)



# Interface: IWebCreationInformation


Web Creation Information


## Properties
<a id="description"></a>

### «Optional» Description

**●  Description**:  *`string`* 

*Defined in [definitions/lib/types.ts:710](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L710)*



The description of the new site.




___

<a id="language"></a>

### «Optional» Language

**●  Language**:  *`number`* 

*Defined in [definitions/lib/types.ts:713](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L713)*



The locale ID that specifies the language of the new site.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Defined in [definitions/lib/types.ts:716](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L716)*



A value that specifies the title of the new site.




___

<a id="url"></a>

###  Url

**●  Url**:  *`string`* 

*Defined in [definitions/lib/types.ts:725](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L725)*



The URL leaf name of the new site. The URL must not contain the following: The characters ~, ", #, %, &, *, :, <, >, ?, \, {, |, or } The string \x7f Consecutive . or / characters Starting ., /, or _ characters Ending . or / characters




___

<a id="usesamepermissionsasparentsite"></a>

### «Optional» UseSamePermissionsAsParentSite

**●  UseSamePermissionsAsParentSite**:  *`boolean`* 

*Defined in [definitions/lib/types.ts:728](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L728)*



A value that specifies whether the new site will inherit permissions from its parent site.




___

<a id="webtemplate"></a>

###  WebTemplate

**●  WebTemplate**:  *`string`* 

*Defined in [definitions/lib/types.ts:731](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/types.ts#L731)*



A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site.




___


