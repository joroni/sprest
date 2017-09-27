[gd-sprest](../README.md) > ["definitions/social/socialFeed"](../modules/_definitions_social_socialfeed_.md) > [ISocialFeed](../interfaces/_definitions_social_socialfeed_.isocialfeed.md)



# Interface: ISocialFeed


Social Feed


## Methods
<a id="actor"></a>

###  actor

► **actor**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestActor](_definitions_social_socialfeed_.isocialrestactor.md)




*Defined in [definitions/social/socialFeed.ts:17](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L17)*



Gets information about the specified user and the current user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The login name of the user. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestActor](_definitions_social_socialfeed_.isocialrestactor.md)





___

<a id="actorfeed"></a>

###  actorFeed

► **actorFeed**(accountName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




*Defined in [definitions/social/socialFeed.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L23)*



Gets the feed of activity by the specified user (Personal feed type) or gets the specified site feed.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The login name of the user. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)





___

<a id="clearmyunreadmentioncount"></a>

###  clearMyUnreadMentionCount

► **clearMyUnreadMentionCount**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/social/socialFeed.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L28)*



Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types, and sets the user's unread mention count to 0.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="my"></a>

###  my

► **my**(): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestActor](_definitions_social_socialfeed_.isocialrestactor.md)




*Defined in [definitions/social/socialFeed.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L33)*



Gets information about the current user.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestActor](_definitions_social_socialfeed_.isocialrestactor.md)





___

<a id="myfeed"></a>

###  myFeed

► **myFeed**(): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)




*Defined in [definitions/social/socialFeed.ts:38](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L38)*



Gets the feed of activity by the current user (Personal feed type).




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)





___

<a id="mylikes"></a>

###  myLikes

► **myLikes**(): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)




*Defined in [definitions/social/socialFeed.ts:43](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L43)*



Gets the feed of microblog posts that the current user likes, represented by LikeReference thread types. See Reference threads and digest threads in SharePoint Server 2013 social feeds.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)





___

<a id="mymentionfeed"></a>

###  myMentionFeed

► **myMentionFeed**(): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)




*Defined in [definitions/social/socialFeed.ts:48](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L48)*



Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)





___

<a id="mynews"></a>

###  myNews

► **myNews**(): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)




*Defined in [definitions/social/socialFeed.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L53)*



Gets the feed of activity by the current user and by people and content the user is following, sorted by last modified date (News feed type).




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)





___

<a id="mytimelinefeed"></a>

###  myTimelineFeed

► **myTimelineFeed**(): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)




*Defined in [definitions/social/socialFeed.ts:58](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L58)*



Gets the feed of activity by the current user and by people and content the user is following, sorted by created date (Timeline feed type).




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)





___

<a id="myunreadmentioncount"></a>

###  myUnreadMentionCount

► **myUnreadMentionCount**(): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)




*Defined in [definitions/social/socialFeed.ts:63](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L63)*



Gets the count of unread mentions for the current user.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestFeed](_definitions_social_socialfeed_.isocialrestfeed.md)





___

<a id="posttofeed"></a>

###  postToFeed

► **postToFeed**(accountName: *`string`*, postInfo: *[SocialPostCreationData](_definitions_complextypes_.socialpostcreationdata.md)*): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




*Defined in [definitions/social/socialFeed.ts:69](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L69)*



Creates a root post in the specified site feed.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accountName | `string`   |  The login name of the user. |
| postInfo | [SocialPostCreationData](_definitions_complextypes_.socialpostcreationdata.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)





___

<a id="posttomyfeed"></a>

###  postToMyFeed

► **postToMyFeed**(creationData: *[SocialPostCreationData](_definitions_complextypes_.socialpostcreationdata.md)*): [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)




*Defined in [definitions/social/socialFeed.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/social/socialFeed.ts#L75)*



Creates a root post in the current user's feed.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| creationData | [SocialPostCreationData](_definitions_complextypes_.socialpostcreationdata.md)   |  The post creation data. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ISocialRestThread](_definitions_social_socialfeed_.isocialrestthread.md)





___


