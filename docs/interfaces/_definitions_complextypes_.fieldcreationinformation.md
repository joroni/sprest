[gd-sprest](../README.md) > ["definitions/complexTypes"](../modules/_definitions_complextypes_.md) > [FieldCreationInformation](../interfaces/_definitions_complextypes_.fieldcreationinformation.md)



# Interface: FieldCreationInformation


Field Creation Information


## Properties
<a id="choices"></a>

### «Optional» Choices

**●  Choices**:  *object* 

*Defined in [definitions/complexTypes.ts:332](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L332)*



The choices.

#### Type declaration


results: `Array`.<`string`>






___

<a id="fieldtypekind"></a>

###  FieldTypeKind

**●  FieldTypeKind**:  *`SPTypes.FieldType`⎮`number`* 

*Defined in [definitions/complexTypes.ts:335](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L335)*



The field type.




___

<a id="iscompactname"></a>

### «Optional» IsCompactName

**●  IsCompactName**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:338](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L338)*



Indicates whether only the first eight characters are used for the field name.




___

<a id="lookupfieldname"></a>

### «Optional» LookupFieldName

**●  LookupFieldName**:  *`string`* 

*Defined in [definitions/complexTypes.ts:341](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L341)*



The name of the source lookup field.




___

<a id="lookuplistid"></a>

### «Optional» LookupListId

**●  LookupListId**:  *`any`* 

*Defined in [definitions/complexTypes.ts:344](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L344)*



The ID of the target list for the source lookup field.




___

<a id="lookupwebid"></a>

### «Optional» LookupWebId

**●  LookupWebId**:  *`any`* 

*Defined in [definitions/complexTypes.ts:347](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L347)*



The ID of the site that contains the list that is the source for the lookup field value.




___

<a id="required"></a>

### «Optional» Required

**●  Required**:  *`boolean`* 

*Defined in [definitions/complexTypes.ts:350](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L350)*



A value that specifies whether the field requires a value.




___

<a id="title"></a>

###  Title

**●  Title**:  *`string`* 

*Defined in [definitions/complexTypes.ts:353](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/complexTypes.ts#L353)*



A value that specifies the display name of the field.




___


