import fibonacci from "./fib";

export default (req, res) => {
  // Assuming req.params.num is a string
  const num: string = req.params.num;

  const fibN: number = fibonacci(parseInt(num, 10));
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
