[gd-sprest](../README.md) > ["definitions/list/attachments"](../modules/_definitions_list_attachments_.md) > [IAttachmentFilesMethods](../interfaces/_definitions_list_attachments_.iattachmentfilesmethods.md)



# Interface: IAttachmentFilesMethods


Methods

## Hierarchy

**IAttachmentFilesMethods**

↳  [IAttachmentFiles](_definitions_list_attachments_.iattachmentfiles.md)









## Methods
<a id="add"></a>

###  add

► **add**(fileName: *`any`*, content: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IAttachment](_definitions_lib_types_.iattachment.md)




*Defined in [definitions/list/attachments.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/attachments.ts#L15)*



Adds the attachment that is represented by the specified file name and byte array to the list item.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fileName | `any`   |  The filename of the attachment. |
| content | `any`   |  The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IAttachment](_definitions_lib_types_.iattachment.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IAttachmentFiles](_definitions_list_attachments_.iattachmentfiles.md)




*Defined in [definitions/list/attachments.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/attachments.ts#L20)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IAttachmentFiles](_definitions_list_attachments_.iattachmentfiles.md)





___


