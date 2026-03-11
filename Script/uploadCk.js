/*
#!name=云盘获取ck
#!desc=djc-Sherlock
#!category=javascrpit

[Script]
云盘获取ck = type=http-response, pattern=^https:\/\/uesr-njs\.yun\.139\.com\/user\/auth\/refreshToken, script-path=https://raw.githubusercontent.com/, requires-body=true, max-size=-1, timeout=300

[MITM]
hostname = %APPEND% uesr-njs.yun.139.com
*/
