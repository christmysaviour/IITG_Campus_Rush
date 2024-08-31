
# Campus Rush

Campus Rush is an website thst uses Depth First Search (DFS) algorithm to display the top 5 shortest path betwen two points in IIT Guwahati. This can be modified to dijikstra algorithm to only find the shortest distance between the source and destination.


## Features

- displays the top 5 shortest distance between source and destination using dfs.
- displays shortest path one must take to reach destintion with minimum distance.


## API Reference

#### Get shortest distance between node A and node B 

```http
  GET /shortd/<int:A>/<int:B>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `source` | `integer` | **Required**|
| `destination` | `integer` |     **Required**      |




## Tech Stack

**Client:** React

**Server:** Node,Express



#### How will obtain my shortest path from source to destination?

Every possible source and destination is mapped with a number ranging from (1 to 64). Path in the application will display the nodes in order to reach the destination using DFS Algorithm





