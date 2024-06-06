# Next.js app does not stop when requests continuously arrive on HTTP persistent connection

To reproduce the problem, follow these steps.

1. (Window1) `npm run build`
2. (Window1) `npm run start`
3. (window2) `node client.js`
4. (window1) `Ctrl+c`(send SIGINT to Next.js app)
5. Next.js app does not stop

(⚠️ To stop Next.js app, send SIGINT to `node client.js`)
