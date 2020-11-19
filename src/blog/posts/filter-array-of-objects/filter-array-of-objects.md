---
title: "Filter Array of Objects based on Values from Another Array"
date: "2020-11-19"
featured: "./filter-array-of-objects.png"
description: "Learn how to filter an array of objects (just like the ones gotten from api responses), based on the values of another array"
tags: ["Tips n' Tricks","JavaScript"]
keywords: "Filter Array of Objects, Filter Deep Nested Array"
---

### Possible Scenario:

Let’s say we have an API response array of objects like `dataSample` below:

```js
const dataSample = [
    {
      "staff": 1000,
      "name": "Apple",
      "logo_url": "biten apple",
      "down":"yes"
    },
    {
      "staff": 500,
      "name": "Microsoft",
      "logo": "squares",
      "down":"no"
    },
    {
      "staff": 4000,
      "name": "Google",
      "logo_url": "letter",
      "down":"no"
    },
    {
      "staff": 2000,
      "name": "Coca Cola",
      "logo": "letters",
      "down":"yes"
    },
  ];

```

We want to loop through `dataSample` and display the info in a tabular manner. But first, we want users to be able to select which columns they want to see. So, we present all `dataSample` object properties : `staff`, `name`, `logo-url` and `down`, as checkboxes. Users click on checkboxes to select which columns they want to see, and we collect their inputs into an array:

```js
const filterArr = [“name”, “down”]
```

### Problem:

How do we filter the objects in the `dataSample` array so that only the properties present in `filterArray` and their matching values are returned, to give us the output below?

```js
[
    {
      "name": "Apple",
      "down": "yes"
    },
    {
      "name": "Microsoft",
      "down": "no"
    },
    {
      "name": "Google",
      "down": "no"
    },
    {
      "name": "Coca Cola",
      "down": "yes"
    },
];
```

### Solution:

#### 1.Using a for-in loop

```js
const filterObjsInArr = (arr, selection) => {
    const filteredArray = [];
    arr.map((obj) => {
      const filteredObj = {};
      for (let key in obj) {
        if (selection.includes(key)) {
          filteredObj[key] = obj[key];
        };
      };
      filteredArray.push(filteredObj);
    })
    return filteredArray;
  }

```
The `filterObjsinArr` function takes in an array of objects: `arr` and a `selection` array as arguments. It maps through `arr` to get individual objects. For each object, it loops through each property, checking if it exists in the `selection` array.

#### 2.Using Lodash’s cloneDeep() and Object.keys()

```js
const filterObjsInArr = (arr, selection) => {
    const filteredArray = _cloneDeep(arr);
    filteredArray.map(obj => Object.keys(obj).forEach((key) => {
      if (!selection.includes(key)) {
        delete obj[key];
      }
    }))
    return filteredArray;
}

```

This second method is shorter in terms of lines of code. Cloning arrays in JavaScript is a bit complicated, because<a target="blank" class="inline-link" href="https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig">arrays are stored as references</a>. So, we use the <a target="blank" class="inline-link" href="https://lodash.com/docs/4.17.15#cloneDeep">cloneDeep method from Lodash</a> to do that. We are cloning the original array so as not to mutate it, we need it to be intact and untouched for future filtering. We loop through each object of the cloned array, then through each property in that particular object, checking if that property exists in the `selection` array. If it doesn’t, we delete it.

That’s it. Go build something great or fun at least :). Say hi on <a target="blank" class="inline-link" href="https://twitter.com/_MsLinda">twitter</a> if you’ll love to connect or have questions. Until next time, ciao.




