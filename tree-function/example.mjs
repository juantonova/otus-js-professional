export const example = {
    name: 1,
    items: [{
      name: 2,
      items: [
        { name: 3 }, 
        { name: 4, items: 
          [ {
            name: 5, 
            items: [{name: 6}, {name: 7}]
          },
          {name: 8, items: [{name: 9}, {name: 10}]}
          ] }]
    }, {
      name: 11,
      items: [{ name: 12, items: [{ name: 13, items: [{ name: 14}]}] }]
    }, {
        name: 15,
        items: [{ name: 16, items: [{ name: 17, items: [{ name: 18, items: [{ name: 19 }]}, { name: 20}]}] }]
      }],
  
    }
