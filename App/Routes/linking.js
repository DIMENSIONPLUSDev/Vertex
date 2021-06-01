const config = {
    screens: {
      Auth: {
        path: "auth/:token",
        parse: {
          token: (token) => `${token}`,
        },
      },
      Profile: {
        path: "profile/:token",
        parse: {
          token: (token) => `${token}`,
        },
      },
    //   Notifications: "notifications",
    //   Settings: "settings",
    },
  };
  
  const linking = {
    prefixes: ["vertex://app"],
    config,
  };
  
  export default linking;