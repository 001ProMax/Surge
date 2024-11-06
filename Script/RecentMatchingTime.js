$httpAPI("GET", "/v1/requests/recent", null, ({ requests }) => {
    let count = 0,
        time = 0;
    requests.forEach((item) => {
        const timing = item.timingRecords?.[0];
        if (timing?.name === "Rule Evaluating") {
            time += timing.duration;
            count++;
        }
    });
    $notification.post("平均匹配时间", `${(time * 1000) / count}ms`);
    $done();
});
