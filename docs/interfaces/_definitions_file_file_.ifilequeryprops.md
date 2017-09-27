[gd-sprest](../README.md) > ["definitions/file/file"](../modules/_definitions_file_file_.md) > [IFileQueryProps](../interfaces/_definitions_file_file_.ifilequeryprops.md)



# Interface: IFileQueryProps


File Query Properties

## Hierarchy

**IFileQueryProps**

↳  [IFileResult](_definitions_file_file_.ifileresult.md)




↳  [IFile](_definitions_file_file_.ifile.md)









## Methods
<a id="author"></a>

###  Author

► **Author**(): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/file/file.ts:220](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L220)*



Gets a value that specifies the user who added the file.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="checkedoutbyuser"></a>

###  CheckedOutByUser

► **CheckedOutByUser**(): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/file/file.ts:225](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L225)*



Gets a value that returns the user who has checked out the file.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="effectiveinformationrightsmanagementsettings"></a>

###  EffectiveInformationRightsManagementSettings

► **EffectiveInformationRightsManagementSettings**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:227](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L227)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="informationrightsmanagementsettings"></a>

###  InformationRightsManagementSettings

► **InformationRightsManagementSettings**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:229](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L229)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="listitemallfields"></a>

###  ListItemAllFields

► **ListItemAllFields**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:234](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L234)*



Gets a value that specifies the list item field values for the list item corresponding to the file.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="lockedbyuser"></a>

###  LockedByUser

► **LockedByUser**(): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/file/file.ts:239](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L239)*



Gets a value that returns the user that owns the current lock on the file.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="modifiedby"></a>

###  ModifiedBy

► **ModifiedBy**(): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/file/file.ts:244](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L244)*



Gets a value that returns the user who last modified the file.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="properties"></a>

###  Properties

► **Properties**(): [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)




*Defined in [definitions/file/file.ts:249](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L249)*



Property Bag




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)





___

<a id="versionevents"></a>

###  VersionEvents

► **VersionEvents**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/file/file.ts:251](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L251)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="versions"></a>

###  Versions

► **Versions**(): [IBase](_definitions_lib_base_.ibase.md)[IFileVersions](_definitions_file_fileversions_.ifileversions.md)




*Defined in [definitions/file/file.ts:256](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/file/file.ts#L256)*



Gets a value that returns a collection of file version objects that represent the versions of the file.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFileVersions](_definitions_file_fileversions_.ifileversions.md)





___


