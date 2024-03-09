

export function applyDiff<T>(diff: any, items: T[], parseValue: (value: any) => T) {
    const k = Object.keys(diff)[0];
    const v = Object.values(diff)[0] as any;
    //logDiff(k, v);

    switch (k) {
        case "Set":
            items[v.index] = parseValue(v.value);
            items = [...items];
            break;
        case "PushBack":
            items = [...items, parseValue(v.value)];
            break;
        case "PushFront":
            items = [parseValue(v.value), ...items];
            break;
        case "Clear":
            items = [];
            break;
        case "PopFront":
            items.shift();
            items = [...items];
            break;
        case "PopBack":
            items.pop();
            items = [...items];
            break;
        case "Insert":
            items.splice(v.index, 0, parseValue(v.value));
            items = [...items];
            break;
        case "Remove":
            items.splice(v.index, 1);
            items = [...items];
            break;
        case "Truncate":
            items = items.slice(0, v.length);
            break;
        case "Reset":
            items = [...v.values.map(parseValue)];
            break;
        case "Append":
            items = [...items, ...v.values.map(parseValue)];
            break;
    }
}

