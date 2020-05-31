export function autoFixSetTimeout (func: Function, initInterval: number): NodeJS.Timeout {
    let timer: NodeJS.Timeout;
    let interval: number = initInterval;
    let nextTime: number = new Date().getTime();
    function timeout (): NodeJS.Timeout {
        clearTimeout(timer);
        func();
        const now: number = new Date().getTime();
        nextTime += interval;
        interval = nextTime - now;
        return timer = setTimeout(timeout, interval);
    }
    return timeout();
}