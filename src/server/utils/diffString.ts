function diffString(a1 : string[], a2 : string[]) : string[] | undefined {
    return a1.filter(elem => a2.filter(e => e === elem).length === 0);
};

export default diffString;