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
a6 = {
  "request_date_ms" : 1691745938403,
  "request_date" : "2023-08-11T09:25:38Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-08-11T09:15:51Z",
    "original_application_version" : "2",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "eticket_family_sharing_for_old_member" : {
        "original_purchase_date" : "2023-08-11T09:18:00Z",
        "expires_date" : "9999-08-18T09:18:00Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "430001519739141",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-08-11T09:18:00Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "vip" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-11T09:18:00Z",
        "product_identifier" : "eticket_family_sharing_for_old_member",
        "expires_date" : "9999-08-18T09:18:00Z"
      }
    },
    "original_purchase_date" : "2023-08-11T09:14:59Z",
    "original_app_user_id" : "$RCAnonymousID:13a81f8ed4e7439d9b826ac61dafba31",
    "last_seen" : "2023-08-11T09:15:51Z"
  }
}

  a.body = JSON.stringify(a6);
}
$done(a);
