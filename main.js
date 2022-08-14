import {parseDate} from "chrono-node";
import * as chrono from 'chrono-node';

// Results in null when run with Node.js v16.15.0
console.log(parseDate("03-27-2022, 02:00 AM"))
console.log(chrono.parseDate("03-27-2022, 02:00 AM"))

// Working as expected
console.log(parseDate("03-27-2022, 01:00 AM"))
console.log(parseDate("03-27-2022, 03:00 AM"))
console.log(parseDate("03-27-2022, 04:00 AM"))
console.log(parseDate("03-27-2022, 01:00 PM"))
console.log(parseDate("03-27-2022, 02:00 PM"))
console.log(parseDate("03-27-2022, 03:00 PM"))
console.log(parseDate("03-26-2022, 02:00 AM"))
console.log(parseDate("03-28-2022, 02:00 AM"))