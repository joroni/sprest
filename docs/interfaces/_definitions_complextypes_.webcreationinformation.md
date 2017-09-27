[gd-sprest](../README.md) > ["definitions/complexTypes"](../modules/_definitions_complextypes_.md) > [WebCreationInformation](../interfaces/_definitions_complextypes_.webcreationinformation.md)



# Interface: WebCreationInformation


Web Creation Information


## Properties
<a id="description"></a>

### «Optional» Description

**●  Description**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1739](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1739)*



The description of the new site.




___

<a id="language"></a>

### «Optional» Language

**●  Language**:  *`number`* 

*Defined in [definitions/complexTypes.ts:1742](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1742)*



The locale ID that specifies the language of the new site.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1745](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1745)*



A value that specifies the title of the new site.




___

<a id="url"></a>

###  Url

**●  Url**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1754](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1754)*



The URL leaf name of the new site. The URL must not contain the following: The characters ~, ", #, %, &, *, :, <, >, ?, \, {, |, or } The string \x7f Consecutive . or / characters Starting ., /, or _ characters Ending . or / characters




___

<a id="usesamepermissionsasparentsite"></a>

### «Optional» UseSamePermissionsAsParentSite

**●  UseSamePermissionsAsParentSite**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:1757](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1757)*



A value that specifies whether the new site will inherit permissions from its parent site.




___

<a id="webtemplate"></a>

###  WebTemplate

**●  WebTemplate**:  *`string`* 

*Defined in [definitions/complexTypes.ts:1760](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L1760)*



A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site.




___


