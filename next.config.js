module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/redirect-me",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
