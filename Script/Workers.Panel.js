class APP {
  base_url = "https://api.cloudflare.com";

  constructor(accountId, token) {
    this.accountId = accountId;
    this.token = token;
  }

  async getUsage() {
    const now = new Date();
    const endDate = now.toISOString();
    now.setUTCHours(0, 0, 0, 0);
    const startDate = now.toISOString();

    const r = await new Promise((resolve, reject) =>
      $httpClient.post(
        {
          url: `${this.base_url}/client/v4/graphql`,
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify({
            query: `query getBillingMetrics($accountId: string!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
              viewer {
                accounts(filter: { accountTag: $accountId }) {
                  pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) {
                    sum {
                      requests
                    }
                  }
                  workersInvocationsAdaptive(limit: 10000, filter: $filter) {
                    sum {
                      requests
                    }
                  }
                }
              }
            }`,
            variables: {
              accountId: this.accountId,
              filter: { datetime_geq: startDate, datetime_leq: endDate },
            },
          }),
        },
        (e, r, d) => (e ? reject(e) : resolve(d))
      )
    );

    const { data, errors } = JSON.parse(r);

    if (errors) throw errors[0]?.message || "Unknown error";

    const {
      pagesFunctionsInvocationsAdaptiveGroups,
      workersInvocationsAdaptive,
    } = data?.viewer?.accounts?.[0];

    // Add Pages
    const pagesArray = pagesFunctionsInvocationsAdaptiveGroups;
    const pages = pagesArray?.reduce((a, b) => a + b?.sum?.requests, 0);

    // Add Workers
    const workersArray = workersInvocationsAdaptive;
    const workers = workersArray?.reduce((a, b) => a + b?.sum?.requests, 0);

    return { pages: pages || 0, workers: workers || 0 };
  }
}

const result = {
  title: "Workers & Pages",
  content: "",
};

(async () => {
  const [accountId, token, total = 100000] = $argument.split(",");

  const app = new APP(accountId, token);
  const { pages, workers } = await app.getUsage();

  result.content = `Workers: ${workers}
Pages: ${pages}
Remaining: ${Number(total) - workers - pages}`;
})()
  .catch((e) => (result.content = e))
  .finally(() => $done(result));
