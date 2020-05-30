export function autoFixSetTimeout (func: Function, initInterval: number): NodeJS.Timeout {
    let timer: NodeJS.Timeout;
    let interval: number = initInterval;
    let nextTime: number = new Date().getTime() + interval * 1000;
    function timeout (): NodeJS.Timeout {
        clearTimeout(timer);
        func();
        const now: number = new Date().getTime();
        interval = nextTime - now;
        return timer = setTimeout(timeout, interval);
    }
    return timeout();
}