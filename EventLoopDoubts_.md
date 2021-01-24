1. When does the event loop actually start ? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️

2. Are only asynchronous web api callbacks are registered in web api environment? - YES, the synchronous callback functions like what we pass inside map, filter and reduce aren't registered in the Web API environment. It's just those async callback functions which go through all this.

3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's adviced to explicitly remove the listeners when not in use so that the garbage collector does its job.

4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait ?
   No, there are trust issues with `setTimeout()` 😅. The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.

5. Everything which goes into the callback queue waits for the Call Stack to be empty.
   So in that case, even the button clicks won't respond. 🤷🏻‍♂️
   Haven't you seen some websites just freeze randomly and just nothing happens? This could be one of the reasons for that.

   `Homework`: Use the while loop to block the main thread for around 30 seconds and also have a button on the page with a click event listener.
   You'll see the page frozen and button not responding.

   `Learnings here`: Never block the main thread!
