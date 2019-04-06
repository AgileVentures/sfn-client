The debug script will facilitate debugging, akin to `binding.pry` in Rails, but not quite.

Add `debugger` statements that act as breakpoints:

<img width="1043" alt="Screen Shot 2019-03-17 at 11 46 30 AM" src="https://user-images.githubusercontent.com/11988089/54494652-8bf70880-48d4-11e9-89d7-75d911ea08d6.png">


We can then run: 
```
yarn test:debug
```

<img width="1023" alt="Screen Shot 2019-03-17 at 11 36 28 AM" src="https://user-images.githubusercontent.com/11988089/54494531-27877980-48d3-11e9-9104-653c9c17d4eb.png">

Then navigate to [chrome://inspect](chrome://inspect), in your browser, and click on **inspect** in the target that you've added:
 
<img width="794" alt="Screen Shot 2019-03-17 at 11 41 33 AM" src="https://user-images.githubusercontent.com/11988089/54494599-fa879680-48d3-11e9-8e6f-b4ce75c1e99d.png">

Click on the **_Resume script execution_** button (or `cmd` + `\`) to jump to each breakpoint (debugger statement):
 
<img width="643" alt="Screen Shot 2019-03-17 at 11 49 11 AM" src="https://user-images.githubusercontent.com/11988089/54494690-f1e39000-48d4-11e9-82c6-32095d23c342.png">

You can then watch variables or explore via the console:

<img width="677" alt="Screen Shot 2019-03-17 at 11 54 03 AM" src="https://user-images.githubusercontent.com/11988089/54494782-e17fe500-48d5-11e9-878b-62b880ff7269.png">

You might also find it useful to step to the next line:
 
<img width="678" alt="Screen Shot 2019-03-17 at 11 59 11 AM" src="https://user-images.githubusercontent.com/11988089/54494818-44717c00-48d6-11e9-8cd5-9d8dc92c2711.png">

**Be sure to close this window, when you're done, so that the tests can finish running in your terminal.**