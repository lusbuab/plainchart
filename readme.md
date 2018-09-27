# PlainChart

A text-based, no-dependencies, open-source charting utility in JavaScript.
It is inspired by the Python library [`plainchart`](https://github.com/gduverger/plainchart).

## Usage

```javascript
import PlainChart from "@betterthings/plainchart";
const chart = new PlainChart([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]);
console.log(chart.render());

/*

     ▌     ▌
     ▌     ▌
     ▌     ▌
     ▌ ▌   ▌
    ▌▌ ▌▌ ▌▌
    ▌▌ ▌▌ ▌▌
  ▌ ▌▌ ▌▌ ▌▌
▌ ▌ ▌▌ ▌▌▌▌▌
▌ ▌ ▌▌▌▌▌▌▌▌
▌▌▌▌▌▌▌▌▌▌▌▌

*/
```

Take a look at [`example.mjs`](example.mjs) to see how to generate something like this:

```
         ××××××××                                          ××××××××
      ×××        ×××                                    ×××        ×××
    ××              ××                                ××              ××
  ××                  ××                            ××                  ××
 ×                      ×                          ×                      ×
×                        ××                      ××                        ××                      ×
                           ××                  ××                            ××                  ××
                             ××              ××                                ××              ××
                               ×××        ×××                                    ×××        ×××
                                  ××××××××                                          ××××××××
```

## Example

```sh
node --experimental-modules example.mjs
```

## Contribute

Please feel free to open an issue to propose a new feature or point out a bug. You can also fork the PlainChart repository and submit a pull request.

## Authors

- Florian Hämmerle ([@lusbuab](https://twitter.com/lusbuab)) - [Better Things Digital](https://betterthings.digital)
