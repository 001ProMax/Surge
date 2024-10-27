class API {
    constructor() {
        this.isSilent = false;
        this.base_url = "https://e.dlife.cn";
        this.cookie = "";
    }

    // 获取 Cookie
    async getCookie() {
        return new Promise((resolve, reject) => {
            $httpClient.get(
                {
                    url: $argument,
                },
                (error, response, body) => {
                    try {
                        this.cookie = response.headers["set-cookie"];
                        resolve();
                    } catch (err) {
                        $done(body);
                    }
                }
            );
        });
    }

    // 获取套餐信息
    async getProduct() {
        return new Promise((resolve, reject) => {
            $httpClient.post(
                {
                    url: this.base_url + "/user/package_detail.do",
                    headers: { cookie: this.cookie },
                },
                (error, response, body) => {
                    try {
                        resolve(JSON.parse(body).items[0].items);
                    } catch (err) {
                        $done(body);
                    }
                }
            );
        });
    }
}

function formatBytes(bytes) {
    if (bytes < 1024) {
        return bytes.toFixed(2) + " KB";
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + " MB";
    } else {
        return (bytes / 1024 / 1024).toFixed(2) + " GB";
    }
}

// Main
(async () => {
    const telecom = new API();
    try {
        let stats = {
            balance: { usage: 0, total: 0 },
            traffic: { usage: 0, total: 0 },
        };
        await telecom.getCookie();
        (await telecom.getProduct()).forEach(({ unitTypeId, usageAmount, ratableAmount }) => {
            if (unitTypeId === "3") {
                stats.balance.usage += +usageAmount;
                stats.balance.total += +ratableAmount;
            } else if (unitTypeId === "1") {
                stats.traffic.usage += +usageAmount;
                stats.traffic.total += +ratableAmount;
            }
        });
        // Content
        $done({
            title: "中国电信",
            content: `流量：${formatBytes(stats.balance.usage)} | ${formatBytes(stats.balance.total)}\n` + `话费：${stats.traffic.usage} 分钟 | ${stats.traffic.total} 分钟`,
            icon: "antenna.radiowaves.left.and.right",
            "icon-color": "#2281ff",
        });
    } catch (error) {
        $done(error);
    }
})();
