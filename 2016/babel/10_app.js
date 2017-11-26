    var json = {
      "name": {
        "first": "Yosuke",
        "family": process.argv[2]
      },
      "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
      }
    };
    // ここでデストラクチャリングを使ってname.familyをfamilyNameに。
    // birth.day を birthDay に束縛してください。
    // var { family: familyName } = json.name
    // var { day: birthDay } = json.birth

    var {name: {family: familyName},birth:{day: birthDay}} = json

    console.log(familyName);
    console.log(birthDay);