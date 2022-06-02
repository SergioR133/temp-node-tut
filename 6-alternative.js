// You can module export directly on the data you want to share without having to do so afterwards.
module.exports.items = ['item1', 'item2'];
const person = {
          name: 'bob'
      }

// You can define the property name while exporting
module.exports.singlePerson = person;