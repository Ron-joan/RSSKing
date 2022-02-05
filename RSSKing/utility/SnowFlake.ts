class SnowFlake {
    private toBeDistributedIDs: number;
    private startTime: number;
    public constructor() { this.startTime = 1644063714710; this.toBeDistributedIDs = 0; }

    public getUserSnowFlake(): bigint {
        let timestamp = new Date().getTime();
        let now = BigInt(timestamp);
        let start = BigInt(this.startTime);
        let difference = now - start;
        let ans = difference << BigInt(22);
        return ans;
    }
}

const snowFlake: SnowFlake = new SnowFlake();

export default snowFlake;