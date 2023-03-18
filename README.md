# Data Structure Tool

There is some examples of usage DataStructureTool

```JavaScript
const DataStructureTool = require('data_structure_tool')
```

// ======================================== //

- EXAMPLE FOR `structsFromArrayByKey` method

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

// ======================================== //

- EXAMPLE FOR `mapFromArrayByKey` method

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

// ======================================== //

- EXAMPLE FOR `addToArrayInMap` method

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
It would be nice gather user's numbers in certain key in your map.
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

// ======================================== //
