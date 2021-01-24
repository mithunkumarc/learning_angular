source : https://www.joshmorony.com/testing-asynchronous-code-with-fakeasync-in-angular/


FakeAsync  :

flushMicrotasks : 

tick : 

#### microtask vs macrotask  :

Need to clarify : for timebeing , assume 

microtask : javascript level (code level)
macrotask : browser api level (event queue / js engine ) level

first microtask gets completed then macrotask


#### macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering  
#### microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver  

visualize :  

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D  

Event Loop first visits the main stack with macrotasks, executes one function from the top and then visits the microtasks queue and 
executes all functions from there before moving on. 
The Call Stack – is the macrotasks Stack, and since we are executing the entire microtasks queue on each macrostask, 
we can say that every macrotask has its own microtasks queue.

        Examples of macro: I/O tasks, setTimeout, setInterval, setImmediate.

        Examples of micro: promises, process.nextTick.

Wait, what?... Promises are considered as microtasks? Yes, because if they were macro – then a chain of promises would require multiple loops of the Event Loop to complete – not the best variant for promises.

Microtasks are usually scheduled for things that should happen straight after the currently executing script, such as reacting to a batch of actions, or to make something async without taking the penalty of a whole new task.
