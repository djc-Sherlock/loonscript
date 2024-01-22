let requestUrl = $request.url;
let obj = JSON.parse($response.body.replace(/\"isAuth\":false/g, "\"isAuth\":true").replace(/\"isAuth\":\"0\"/g, "\"isAuth\":1").replace(/\"isVip\":\"0\"/g, "\"isVip\":1").replace(/\"vipGrade\":\"0\"/g, "\"vipGrade\":1").replace(/\"vipExpire\":\"0\"/g, "\"vipExpire\":1726411565000"));

if (/^https:\/\/api\.gongkaoleida\.com\/api\/v.+\/user\/getInfo?/.test(requestUrl)) {
  obj.data.userInfo.vipGrade = 2;
  obj.data.userInfo.vipExpire = 1726411565000;
  obj.data.userInfo.isVip = 1;
  obj.data.userInfo.homePageStatus = 0;
  obj.data.userInfo.recommendStatus = 0;
  obj.data.userInfo.vipGradeList = [{
    vipExpire: 1726411565000,
    vipGradeName: "黄金VIP",
    vipGrade: 1,
    remainDays: 365,
    isVip: 1
  }, {
    vipExpire: 1726411565000,
    vipGradeName: "星钻VIP",
    vipGrade: 2,
    remainDays: 365,
    isVip: 1
  }];
} else if (/^https:\/\/api\.gongkaoleida\.com\/api\/v.+\/sets\/getFilterResult?/.test(requestUrl)) {
  obj.data.jobStaff.vipGrade = 2;
  obj.data.articleStaff.vipGrade = 2;
} else if (/^https:\/\/api\.gongkaoleida\.com\/api\/v.+\/exam\/getExamList?/.test(requestUrl)) {
  obj.data.isValid = 0;
  obj.data.result.status = 200;
  obj.data.vipAuthList.articleBianzhiSort = 1;
} else if (/^https:\/\/api\.gongkaoleida\.com\/api\/v.+\/exam\/jobSearchList?/.test(requestUrl)) {
  obj.data.isValid = 0;
  obj.data.result.status = 200;
  obj.data.vipAuthList.jobBianzhiOpt = 1;
} else if (/^https:\/\/api\.gongkaoleida\.com\/api\/v.+\/my\/vipCardInfo?/.test(requestUrl)) {
  obj.data.btnScheme = "";
  obj.data.greetingMsg = "超级星钻会员";
  obj.data.btnText = "星钻VIP";
  obj.data.bottomList = [];
} else if (/^https:\/\/api\.gongkaoleida\.com\/api\/v.+\/exam\/jobDetail?/.test(requestUrl)) {
  obj.data.vipAuthList = {
    historyCompetitionData: 1,
    jobEnrollForecast: 1,
    historyInterviewScoreInfo: 1
  };
} else if (/^https:\/\/api\.gongkaoleida\.com\/api\/v.+\/subscribe\/jobHot?/.test(requestUrl)) {
  obj.data.isVip = 1;
  obj.data.hasUnlock = true;
} else if (/^https:\/\/api\.gongkaoleida\.com\/api\/v5_2_6\/jobHistory\/getJobHistory?/.test(requestUrl)) {
  obj.data.vipInfo.vipExpireDate = 1726411565000;
  obj.data.vipInfo.vipExpire = 1;
  obj.data.vipInfo.isVip = 1;
  obj.data.vipInfo.vipGrade = 2;
  obj.data.isAuth = true;
  obj.data.isUnPublish = true;
}

$done({
  body: JSON.stringify(obj)
});

(function (_0x4ea26b, _0x3279bf, _0x5ddf78) {
  var _0x4aef80 = {
    xKFXU: "undefined",
    UnzFw: function _0x119cdc(_0xb03649, _0x10bb90) {
      return _0xb03649 + _0x10bb90;
    },
    fweIp: "版本号，js会定期弹窗，还请支持我们的工作",
    jaApD: "删除版本号，js会定期弹窗"
  };
  _0x5ddf78 = "al";

  try {
    _0x5ddf78 += "ert";
    _0x3279bf = encode_version;

    if (!(typeof _0x3279bf !== _0x4aef80.xKFXU && _0x3279bf === "jsjiami.com.v5")) {
      _0x4ea26b[_0x5ddf78](_0x4aef80.UnzFw("删除", _0x4aef80.fweIp));
    }
  } catch (_0x41a70e) {
    _0x4ea26b[_0x5ddf78](_0x4aef80.jaApD);
  }
})(window);

encode_version = "jsjiami.com.v5";
