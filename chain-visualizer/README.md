# Chain Visualizer

## Setup

This project uses pnpm as a package manager. Follow the instructions [here](https://pnpm.io/) to install it.

After installing pnpm, you can set the project up and get all of its dependencies by running

```
pnpm install
```

If the proto specifications have been modified, run `./protos.sh` to regenerate the stubs.

## Running the Visualizer

To run the visualizer, simply execute

```
pnpm dev
```

by default, this should expose the application on `http://localhost:5173`.
To display multiple nodes, simply add the query parameter `count` and set it to the number of nodes to display.
For example, to display 4 nodes, go to `http://localhost:5173/?count=4`.

> **NOTE**
>
> The wsinterceptor that this visualizer connects to crashes when subscribers disconnect from it.
> This happens, for example, when the visualizer is reloaded.
> To prevent this from happening, I recommend starting the mir nodes, waiting for a couple of seconds, and then (re)loading the visualizer.
