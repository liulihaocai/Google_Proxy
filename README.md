# Google_Proxy
A node-js proxy makes you can visit google on mainland.
## How to use
1. A server which can connect Google
Buy a server without record.
You can buy a HK,TW or USA server to do this.
> BUT DONT BUY A SERVER ON ALI-CLOUD!
2. install nodejs
on CentOS
~~~
yum install nodejs
~~~
on Ubuntu
~~~
apt install nodejs
~~~
3. Clone the repo
~~~
git clone https://github.com/liulihaocai/Google_Proxy.git
~~~
4. Run the proxy
~~~
node proxy.js
~~~
5. Have fun!
open yourserverip:80 to search on Google!

## Change Settings
You can change it at ./config.json

## The programmer's words
Somedays ago,I bought a Hong Kong server to create a ShadowSocksR Server to visit Google.
Then I found my server port 233 was banned because of ShadowSocksR server was detected!
But I need to visit Google to search sth.Then I write this proxy.
This proxy was imperfect but safe.I'll gradually improve this.