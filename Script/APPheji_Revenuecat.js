/*

Revenuecat解锁合集，已解锁APP及下载地址请见说明：https://github.com/a88/Script/blob/main/Readme.md

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/djc-Sherlock/loonscript/main/Script/APPheji_Revenuecat.js
//^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/djc-Sherlock/loonscript/main/Script/APPheji_Revenuecat.js

[MITM]
hostname = api.revenuecat.com

*/
const a = {};
const a6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  a.headers = $request.headers;
} else if (a6 && a6.subscriber) {
  a6.subscriber.subscriptions = a6.subscriber.subscriptions || {};
  a6.subscriber.entitlements = a6.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = 'gd';
  const UAMappings = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8/1 CFNetwork/1331.0.7 Darwin/21.4.0':{ name: 'vip', id: 'eticket_family_sharing_for_old_member'},
  };
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-06-06T06:06:06Z",
    "purchase_date": "2023-06-06T06:06:06Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      a6.subscriber.subscriptions = {};
      a6.subscriber.subscriptions[id] = data;
      a6.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      a6.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  a.body = JSON.stringify(a6);
}
$done(a);
