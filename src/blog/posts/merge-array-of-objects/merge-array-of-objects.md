---
title: "Merge Objects in Array by Key"
date: 2021-02-17
featured: "./merge-array-of-objects.png"
description: "Find out how to merge objects in an array based on a key and create a new array that contains the merged objects."
tags: ["DevLife",]
keywords: "Merge Array, Merge Object Javascript"
---

Let’s assume you’re working on a dashboard app for an automobile repair shop and one of the API’s that keep track of customers singular activities returns an array, like `customerActivities` below:

```js
const customerActivities =[
  {
    name:"Linda",
    phoneNumber:"094567",
    activity:"spraying",
    date:"2020-08-05",
    time:"23:11",
  },
  {
    name:"Moses",
    phoneNumber:"012322",
    activity:"oil change",
    date:"2020-10-02",
    time:"07:11",
  },
  {
    name:"Linda",
    phoneNumber:"094567",
    activity:"brake service",
    date:"2020-10-02",
    time:"07:11",
  }
]
```

### Challenge:

Your client (automobile repair shop owner) has requested for a page that will showcase each customer in a list, alongside a dropdown that shows their activity history.

You need to group the activities of each customer. You can do that by merging all objects in the `customerActivities` array with the same `name` key value into one object. But how? How can you go from the `customerActivities` to `mergedCustomerActivities` below?

```js
const mergedCustomerActivities = [
  {
    name:"Linda",
    phoneNumber:"094567",
    activities: [
      {
        activity:"spraying",
        date:"2020-08-05",
        time:"23:11",
      },
      {
        activity:"brake service",
        date:"2020-10-02",
        time:"07:11",
      }
    ]
  },
  {
    name:"Moses",
    phoneNumber:"012322",
    activities:[
      {
         activity:"oil change",
         date:"2020-10-02",
         time:"07:11",
      }
    ]

  },

]
```

The first thing you need to do is to group objects in `customerActivities` by the `name` key. You can do that using the `reduce` array method

```js
const groupedByNameActivities = customerActivities.reduce((result, currentValue) => {
    /* If an array already exists in the result object for the name key of the current object,
    push it into the array. Else create an array and push the object*/
    (result[currentValue['name']] = result[currentValue['name']] || []).push(
      currentValue
    );
    // Return result for the next iteration
    return result;
  }, {}); //initial value of empty object for accumulator

```

This returns `groupedByNameActivities` as:

```js
const groupedByNameActivities = {
    "Linda":[
        {name: "Linda", phoneNumber: "094567", activity: "spraying", date: "2020-08-05", time: "23:11"}
        {name: "Linda", phoneNumber: "094567", activity: "brake service", date: "2020-10-02", time: "07:11"}
    ],
    "Moses":[
        {name: "Moses", phoneNumber: "012322", activity: "oil change", date: "2020-10-02", time: "07:11"}
    ]
}
```

You can now merge all objects assigned to each key into one object using the array `map` method:

```js
const groupedActivityHistory = [];

//loop through each key value pair in the groupedByNameActivities object
for(let customer in groupedByNameActivities){
  //create a new object which will store merged activities
  let activityHistory = {
    //get name and phonenumber value from the first object in the current key's array value.
    //remember name and phone number values are the same for all objects in the current key's array value
    name: groupedByNameActivities[customer][0].name,
    phoneNumber:groupedByNameActivities[customer][0].phoneNumber,
    activities: []
  }
   //loop through each object of the current key's array to get each activity details.
    groupedByNameActivities[customer].map(obj => {
      let activity={
        activity: obj.activity,
        time:obj.time,
        date: obj.date,
      }
      return activityHistory.activities.push(activity);
    })
     groupedActivityHistory.push(activityHistory)
}
```

And that's it. `groupedActivityHistory` now contains our desired array format. You can rewrite these operations into reusable functions.
