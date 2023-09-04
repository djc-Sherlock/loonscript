/*************************************

项目名称：彩云天气-净化/SVIP
下载地址：https://t.cn/A66d95hV
脚本作者：Sherlock
Token数据来源：@WeiRenQAQ
电报频道：https://t.me/Sherlock
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/Sherlock/Rewrite/main/caiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var Sherlock = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    Sherlock.vip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
    Sherlock.svip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
}

if ($request.url.indexOf(adhf) != -1){
    Sherlock.activities = [];
}

if ($request.url.indexOf('user') != -1){
    Sherlock.result.ranking_above = 99;
    Sherlock.result.is_vip = true;
    Sherlock.result.vip_expired_at = 4092599349;
    Sherlock.result.svip_given = 9999;
    Sherlock.result.is_xy_vip = true;
    Sherlock.result.xy_svip_expire = 4092599349; 
    Sherlock.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    Sherlock.result.wt.svip_given = 9999;
    Sherlock.result.wt.ranking_above = 99;
    Sherlock.result.is_phone_verified = true;
    Sherlock.result.name = "littlegray";
    Sherlock.result.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLia6zPUuGQKVOJk2gnjpjHxSIuH7XaOJF2gEk9ic35ibib4QzUcbvNu6EpdHDc1Vciat1xg63ibK6EptWw/132";
    Sherlock.result.phone_num = "13145200000";
    Sherlock.result.vip_take_effect = 1;
    Sherlock.result.is_primary = true;
    Sherlock.result.xy_vip_expire = 4092599349;
    Sherlock.result.svip_expired_at = 4092599349;
    Sherlock.result.svip_take_effect = 1;
    Sherlock.result.vip_type = "s";
    Sherlock.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    Sherlock.result.bound_status.qq.username = "小灰灰";
    Sherlock.result.bound_status.weixin.username = "小灰灰";
    Sherlock.result.bound_status.caiyun.username = "小灰灰";
    Sherlock.result.bound_status.twitter.username = "小灰灰";
    Sherlock.result.bound_status.facebook.username = "小灰灰";
    Sherlock.result.bound_status.apple.username = "小灰灰";
    Sherlock.result.bound_status.weibo.username = "小灰灰";
}

$done({ body: JSON.stringify(Sherlock)});
