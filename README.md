# Data Structure Tool

There is some examples of usage DataStructureTool

```JavaScript
const DataStructureTool = require('data_structure_tool')
```

`structsFromArrayByKey` method

```JavaScript
const users = []

for (let i = 0; i < 3; i++) {
  users.push({ id: i, name: `User ${i}`, branchId: (i % 100) + 3 })
}

const [nameById, branchIdByName, allBranchIds] = DataStructureTool.structsFromArrayByKey({
  arr: users,
  structs: [
    {
      key: 'id',
      valKey: 'name',
      type: 'map'
    },
    {
      key: 'name',
      valKey: 'branchId',
      type: 'map'
    },
    {
      key: 'branchId',
      type: 'set'
    }
  ]
})

nameById === Map(3) { 11 => 'Michael', 12 => 'Karen', 13 => 'Tony' }
branchIdByName === Map(3) { 'Michael' => 1, 'Karen' => 2, 'Tony' => 3 }
allBranchIds === Set(3) { 1, 2, 3 }
```

`mapFromArrayByKey` method

```JavaScript
const persIdByName = DataStructureTool.mapFromArrayByKey({
  arr: users,
  key: 'name',
  valKey: 'id'
})
```

result will be following:

```JavaScript
Map(3) { 'Michael' => 11, 'Karen' => 12, 'Tony' => 13 }
```

`addToArrayInMap` method

```JavaScript
const users = [
  {
    name: 'Jim',
    clientNumber: '+77071126486'
  },
  {
    name: 'Jim',
    clientNumber: '+77072126486'
  },
  {
    name: 'Dwight',
    clientNumber: '+77073126486'
  },
  {
    name: 'Dwight',
    clientNumber: '+77073126486'
  }
]

const clientsNumbersByName = new Map()

for (const user of users) {
  // ... you do something, for example
  const error = await validateNumber(user.clientNumber)

  if (!error) {
   // and you want gather valid numbers into groups by names of users
    DataStructureTool.addToArrayInMap({
      map: clientsNumbersByName,
      key: user.name,
      val: user.clientNumber
    })
  }
}
```

In this case result will be following:

```JavaScript
Map(2) {
  'Jim' => [ '+77071126486', '+77072126486' ],
  'Dwight' => [ '+77073126486', '+77073126486' ]
}
```

But you can improve your collection. Imagine you're gonna add another information about your users in future.
It would be nice gather user's numbers in certain key in object as value of your map.
To reach this you should just add key `"valKey"` with name of your key.
Example:

```JavaScript
DataStructureTool.addToArrayInMap({
  map: clientsNumbersByName,
  key: user.name,
  val: user.clientNumber,
  valKey: 'clientsNumbers'
})
```

And this is the output:

```JavaScript
Map(2) {
  'Jim' => { clientsNumbers: [ '+77071126486', '+77072126486' ] },
  'Dwight' => { clientsNumbers: [ '+77073126486', '+77073126486' ] }
}
```

You can gather data not only from certain primitive key of object in array(as number or string).
It is possible to collect data from keys containing arrays as well.

There is example:

```JavaScript
const users = [
  {
    name: 'Jim',
    clientNumbers: ['+77071126486', '+77771125647']
  }
]

const clientsNumbersByName = new Map()

for (const user of users) {
  DataStructureTool.addToArrayInMap({
    map: clientsNumbersByName,
    key: user.name,
    val: user.clientNumbers
    // you can use "valKey" here as well
  })
}
```

In this case result will be following:

```JavaScript
Map(2) {
  'Jim' => ['+77071126486', '+77771125647'],
}
```

`setFromArrayByKey` method

```JavaScript
const salesmen = [
  {
    name: 'Jim',
    clientNumber: '+77071126486',
    orderNumbers: ['353', '743']
  },
  {
    name: 'Dwight',
    clientNumber: '+77072126486',
    orderNumbers: ['453', '843']
  },
  {
    name: 'Andy',
    clientNumber: '+77073126486',
    orderNumbers: ['953', '234']
  },
]
```

You can use `setFromArrayByKey` method to gather set of certain values from any array

Examples:
1 way of usage:

```JavaScript
const salesmenNames = DataStructureTool.setFromArrayByKey(salesmen, 'name')
```

This is result:

```JavaScript
Set(3) { 'Jim', 'Dwight', 'Andy' }
```

---

2 way of usage:
If necessary you can pass to `setFromArrayByKey` previously created Set.
It can be helpful if you're collecting data from different sources

```JavaScript
const salesmenNames = new Set()

DataStructureTool.setFromArrayByKey(salesmen, 'orderNumbers', salesmenNames)
```

If you've noticed in this example we've used as key 'orderNumbers' which contains array of items.
In this case all items from each object by this keys will be gathered to resulting set.

This is result:

```JavaScript
Set(3) { '353', '743', '453', '843', '953', '234' }
```
