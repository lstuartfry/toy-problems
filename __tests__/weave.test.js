const weave = require("../weave");
const Queue = require("../queue");

describe("weave", () => {
  it("combines two sets of data into a single queue, alternating the insertion of values between the two sets", () => {
    const numbers = new Queue();
    numbers.add(1);
    numbers.add(2);
    numbers.add(3);
    numbers.add(4);

    const strings = new Queue();
    strings.add("one");
    strings.add("two");
    strings.add("three");
    strings.add("four");

    const queue = weave(numbers, strings);

    expect(queue.remove()).toEqual(1);
    expect(queue.remove()).toEqual("one");
    expect(queue.remove()).toEqual(2);
    expect(queue.remove()).toEqual("two");
    expect(queue.remove()).toEqual(3);
    expect(queue.remove()).toEqual("three");
    expect(queue.remove()).toEqual(4);
    expect(queue.remove()).toEqual("four");
  });
});
