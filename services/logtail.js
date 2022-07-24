const { Logtail } = require("@logtail/browser");

const _logtailSourceToken = process.env.NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN;

const logtail = () => {
  if (!_logtailSourceToken) {
    return null;
  }

  return new Logtail(_logtailSourceToken);
};

export default logtail;
