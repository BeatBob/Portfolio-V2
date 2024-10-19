import mixpanelBrowser from "mixpanel-browser";

const isAnalyticsEnabled = process.env.NEXT_PUBLIC_TRACK_ANALYTICS === "true";
const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

const Analytics = {
  init: () => {
    if (isAnalyticsEnabled && mixpanelToken) {
      mixpanelBrowser.init(mixpanelToken);
    }
  },

  track: (eventName, properties = {}) => {
    if ((isAnalyticsEnabled, mixpanelBrowser)) {
      mixpanelBrowser.track(eventName, properties);
    }
  },

  getDistinctId: () => {
    if (isAnalyticsEnabled) {
      return mixpanelBrowser.get_distinct_id();
    }
    return null;
  },

  alias: (alias) => {
    if (isAnalyticsEnabled) {
      return mixpanelBrowser.alias(alias);
    }
  },

  identify: (id) => {
    if (isAnalyticsEnabled) {
      return mixpanelBrowser.identify(id);
    }
  },

  register: (properties) => {
    if (isAnalyticsEnabled) {
      return mixpanelBrowser.register(properties);
    }
  },

  setPeople: (properties) => {
    if (isAnalyticsEnabled) {
      return mixpanelBrowser.people.set(properties);
    }
  },
};

export default Analytics;
