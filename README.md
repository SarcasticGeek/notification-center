# notification-center

## HOW TO INSTALL (without docker)

- You must have `node version above v12` ,mongodb ,and rabbitmq
- install `sails.js` --> `npm run -g sails`
- then run `npm install`


## HOW TO INSTALL (with docker)

- RUN `docker-compose up`
## APIS

POST /notification
headers: Content-Type: application/json
body:
```json
{
    "body": "hello",
    "type": "individual",
    "channel": "sms",
    "receivers": [
        {
            "phone": 1234344
        }
    ]
}
```
## Commands

`sails run chunk-notifications --limit={integer: the limit of notifactions in a chunk} --channel={string: type of provider (sms or email)}`

## HOW TO TEST

1. hit in the postman(or like that) the API above
2. then run `sails run chunk-notifications --limit=1 --channel=sms`
 Or with docker `docker-compose exec api  sails run chunk-notifications --limit=1 --channel=sms`

## Author

- Mohamed Essam Fathalla <mohamedessamfathalla@gmail.com>