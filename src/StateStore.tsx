export class StateStore<S> {
    private listeners: CallableFunction[] = [];
    private state: S;

    constructor(initialState: S) {
        this.state = initialState;
    }
    getSnapshot = (): S => {
        return this.state;
    };
    subscribe = (listener: CallableFunction): (() => void) => {
        this.listeners = [...this.listeners, listener];
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    };
    setState = (newState: S): void => {
        this.state = newState;
        for (const listener of this.listeners) {
            listener();
        }
    };
    get viewState(): S {
        return this.state;
    }
}
