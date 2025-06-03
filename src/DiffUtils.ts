type SetUpdate<V> = {
    tag: "Set";
    inner: {
        index: number;
        value: V;
    };
};

type PushBackUpdate<V> = {
    tag: "PushBack";
    inner: {
        value: V;
    };
};

type PushFrontUpdate<V> = {
    tag: "PushFront";
    inner: {
        value: V;
    };
};

type ClearUpdate = {
    tag: "Clear";
};

type PopFrontUpdate = {
    tag: "PopFront";
};

type PopBackUpdate = {
    tag: "PopBack";
};

type InsertUpdate<V> = {
    tag: "Insert";
    inner: {
        index: number;
        value: V;
    };
};

type RemoveUpdate = {
    tag: "Remove";
    inner: {
        index: number;
    };
};

type TruncateUpdate = {
    tag: "Truncate";
    inner: {
        length: number;
    };
};

type ResetUpdate<V> = {
    tag: "Reset";
    inner: {
        values: V[];
    };
};

type AppendUpdate<V> = {
    tag: "Append";
    inner: {
        values: V[];
    };
};

type Update<V> =
    | SetUpdate<V>
    | PushBackUpdate<V>
    | PushFrontUpdate<V>
    | ClearUpdate
    | PopFrontUpdate
    | PopBackUpdate
    | InsertUpdate<V>
    | RemoveUpdate
    | TruncateUpdate
    | ResetUpdate<V>
    | AppendUpdate<V>;

export function applyDiff<I, V>(
    items: V[],
    updates: Update<I>[],
    mapper: (value: I) => V,
): Array<V> {
    let newItems = [...items];

    for (const update of updates) {
        switch (update.tag) {
            case "Set":
                newItems[update.inner.index] = mapper(update.inner.value);
                newItems = [...newItems];
                break;
            case "PushBack":
                newItems = [...newItems, mapper(update.inner.value)];
                break;
            case "PushFront":
                newItems = [mapper(update.inner.value), ...newItems];
                break;
            case "Clear":
                newItems = [];
                break;
            case "PopFront":
                newItems.shift();
                newItems = [...newItems];
                break;
            case "PopBack":
                newItems.pop();
                newItems = [...newItems];
                break;
            case "Insert":
                newItems.splice(
                    update.inner.index,
                    0,
                    mapper(update.inner.value),
                );
                newItems = [...newItems];
                break;
            case "Remove":
                newItems.splice(update.inner.index, 1);
                newItems = [...newItems];
                break;
            case "Truncate":
                newItems = newItems.slice(0, update.inner.length);
                break;
            case "Reset":
                newItems = [...update.inner.values.map(mapper)];
                break;
            case "Append":
                newItems = [...newItems, ...update.inner.values.map(mapper)];
                break;
        }
    }

    return newItems;
}
