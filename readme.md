API to add User to mailchimp API 

.env file needs 2 Variable:
1) secretauth : A basic auth base64 value consisting username "anystring" and password is mailchimp apikey https://us6.admin.mailchimp.com/account/api/ seperated by :

Example: secretauth:Basic YW55c3RyaW5nOjM0YWIzQVBJS2V5ZnJvbU1haWxjaGltcC11czY=

2) url : url of your region with list ID 

Example: https://us6.api.mailchimp.com/3.0/lists/<listidhere>/members

Its just an express one file api but it took time for me to understand and get this API Endpoint

Using the POST req: Body consists of email and status variable where status can be Subscriber's current status. Possible values: "subscribed", "unsubscribed", "cleaned", "pending", or "transactional".


Reference: https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/

