var basicCalculatorIV = function(expression, evalvars, evalints) {

    const valueMap = new Map();
    for (let i = 0; i < evalvars.length; i++) valueMap.set(evalvars[i], evalints[i]);

    function add(a, b) {
        const res = new Map(a);
        for (const [k, v] of b) {
            res.set(k, (res.get(k) || 0) + v);
            if (res.get(k) === 0) res.delete(k);
        }
        return res;
    }

    function sub(a, b) {
        const res = new Map(a);
        for (const [k, v] of b) {
            res.set(k, (res.get(k) || 0) - v);
            if (res.get(k) === 0) res.delete(k);
        }
        return res;
    }

    function mul(a, b) {
        const res = new Map();
        for (const [k1, v1] of a) {
            for (const [k2, v2] of b) {
                const vars = [];
                if (k1) vars.push(...k1.split("*"));
                if (k2) vars.push(...k2.split("*"));
                vars.sort();
                const key = vars.join("*");
                res.set(key, (res.get(key) || 0) + v1 * v2);
            }
        }
        return res;
    }
    const tokens = expression.replace(/\(/g, " ( ").replace(/\)/g, " ) ").split(" ").filter(Boolean);
    let idx = 0;

    function parseExpr() {
        let res = parseTerm();
        while (idx < tokens.length && (tokens[idx] === "+" || tokens[idx] === "-")) {
            const op = tokens[idx++];
            const right = parseTerm();
            res = op === "+" ? add(res, right) : sub(res, right);
        }
        return res;
    }

    function parseTerm() {
        let res = parseFactor();
        while (idx < tokens.length && tokens[idx] === "*") {
            idx++;
            res = mul(res, parseFactor());
        }
        return res;
    }

    function parseFactor() {
        const token = tokens[idx++];
        if (token === "(") {
            const res = parseExpr();
            idx++;
            return res;
        }
        if (/^\d+$/.test(token)) return new Map([["", Number(token)]]);
        if (valueMap.has(token)) return new Map([["", valueMap.get(token)]]);
        return new Map([[token, 1]]);
    }

    let poly = parseExpr();
    poly = new Map([...poly.entries()].filter(([k, v]) => v !== 0));
    return [...poly.entries()]
        .sort((a, b) => {
            const da = a[0] ? a[0].split("*").length : 0;
            const db = b[0] ? b[0].split("*").length : 0;
            if (da !== db) return db - da;
            return a[0].localeCompare(b[0]);
        })
        .map(([k, v]) => k ? `${v}*${k}` : `${v}`);
};
