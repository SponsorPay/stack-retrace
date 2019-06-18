export const ErrorStacks = {
  chrome:
    "StatusCodeError: No such App\n" +
    "    at new StatusCodeError (http://localhost:8080/nfp.js:8957:28)\n" +
    "    at CollinsFetch.<anonymous> (http://localhost:8080/nfp.js:8863:35)\n" +
    "    at step (http://localhost:8080/vendors~nfp.js:83709:23)\n" +
    "    at Object.next (http://localhost:8080/vendors~nfp.js:83690:53)\n" +
    "    at fulfilled (http://localhost:8080/vendors~nfp.js:83680:58)",
  chromeConsole: "VM360:1 Uncaught Error: 123\n" + "    at foo (<anonymous>:1:24)\n" + "    at <anonymous>:1:1",
  firefox:
    "StatusCodeError@http://localhost:8080/nfp.js:8957:28\n" +
    "../state-actions/build/client/collinsFetch.js/CollinsFetch.prototype.fetch/</<@http://localhost:8080/nfp.js:8863:35\n" +
    "step@http://localhost:8080/vendors~nfp.js:83709:23\n" +
    "verb/<@http://localhost:8080/vendors~nfp.js:83690:53\n" +
    "fulfilled@http://localhost:8080/vendors~nfp.js:83680:58",
  webpackProduction:
    "StatusCodeError: Invalid token\n" +
    "    at new e (https://production.com/nfp.a77bec74f4ae50f3537e.js:1:106328)\n" +
    "    at e.<anonymous> (https://production.com/nfp.a77bec74f4ae50f3537e.js:1:87798)\n" +
    "    at https://production.com/vendors~nfp.dd54f49f907bdba83cf2.js:1:88129\n" +
    "    at Object.next (https://production.com/vendors~nfp.dd54f49f907bdba83cf2.js:1:88234)\n" +
    "    at n (https://production.com/vendors~nfp.dd54f49f907bdba83cf2.js:1:87005)"
}
