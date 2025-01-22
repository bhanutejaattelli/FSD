class InfiniteIterator {
    constructor() {
        this.current = 1;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                return { value: this.current++, done: false };
            }
        };
    }
}
const infiniteIter = new InfiniteIterator();
const iter = infiniteIter[Symbol.iterator]();
for (let i = 0; i < 10; i++) {
    console.log(iter.next().value);
}