export declare function check(script: Buffer | Array<number | Buffer>): boolean;
export declare namespace check {
    var toJSON: () => string;
}
declare const output: {
    check: typeof check;
};
export { output };
