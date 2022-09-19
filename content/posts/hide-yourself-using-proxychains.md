---
title: Hide Yourself While Hacking Using ProxyChains
date: 2022-09-19 14:11
tags:
  - security
  - hacking
description: Looking to scan an IP or a domain? You can't just spin up a Kali
  Linux and Nmap here and there. Because doing so, will expose yourself to the
  target that you are scanning.
---
## ProxyChains

ProxyChains come preinstalled in Kali Linux. All you have to do is find it. I wasn't able to make the locate command work, but found it in /etc directory.

```shell
sudo vim /etc/proxychains4.conf
```