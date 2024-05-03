const core = require("@actions/core");

const ENV_REGION_MAP = {
  dev: {
    kor: {
      lang: "한국어(dev)",
      service: "서비스(dev)",
    },
    tha: {
      lang: "ภาษาไทย(dev)",
      service: "Service(dev)",
    },
  },
  prod: {
    kor: {
      lang: "한국어(prod)",
      service: "서비스(prod)",
    },
    tha: {
      lang: "ภาษาไทย(prod)",
      service: "Service(prod)",
    },
  },
};

try {
  // action.yml에서 받은 input 값들을 가져옵니다.
  const region = core.getInput("region");
  const env = core.getInput("env");

  const { lang, service } = ENV_REGION_MAP[env][region];

  core.setOutput("lang", lang);
  core.setOutput("service", service);
} catch (error) {
  core.setFailed(error.message);
}
