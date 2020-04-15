let obj = JSON.parse($response.body);

obj.defineProperty = {
  "timezone":"Asia/Tokyo",
  "divisionCode":0,
  "isoCountryCode":"JP",
  "isAllowed":true,
  "status":false
  }

$done({body: JSON.stringify(obj)});
