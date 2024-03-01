const sampleData = {
    name: 'Root',
    ntid: 'root',
    children: [
      {
        name: 'Child 1',
        ntid: 'c1',
        children: [
          { name: 'Grandchild 1.1', ntid: 'gc11', children: [] },
          { name: 'Grandchild 1.2', ntid: 'gc12', children: [] }
        ]
      },
      {
        name: 'Child 2',
        ntid: 'c2',
        children: [
          { name: 'Grandchild 2.1', ntid: 'gc21', children: [] },
          { name: 'Grandchild 2.2', ntid: 'gc22', children: [] }
        ]
      }
    ]
  };
  
  export default sampleData;