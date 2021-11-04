import { expect } from "chai";
import Counter from "/src/lib/Counter";


describe("Counter", () => {
    it("should count", () => {
        const counter = new Counter();
        expect(counter.getCount()).to.be.equal(0);

        counter.increase();
        expect(counter.getCount()).to.be.equal(1);
    });
});
