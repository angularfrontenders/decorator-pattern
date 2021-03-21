export abstract class SubscriberTemplate {
    private _amount: number = 0;

    public constructor(amount: number) {
        this._amount = amount;
    }

    public getAmount(): number {
        return this._amount;
    }

    public abstract getDescription(): string;
}