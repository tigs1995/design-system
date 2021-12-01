const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());

export default fetcher;
