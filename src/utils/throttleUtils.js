import throttle from "lodash.throttle";

export const throttledUpdate = throttle((updateFn, data) => {
  updateFn(data);
}, 1000); // Adjust throttle time as needed
