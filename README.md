# Dad Joke Mastodon Bot

Posts random jokes from https://icanhazdadjoke.com/ to a Mastodon Account

```
docker build -t my-nodejs-app .
docker run -e TOKEN=<your api token> -e URL=<your mastodon url> -it --rm my-nodejs-app
```

An example of the bot posts can be see on this Mastodon account [https://mastodon.me.uk/@dadjokes](https://mastodon.me.uk/@dadjokes).

This is done by running the Docker container via crontab.

