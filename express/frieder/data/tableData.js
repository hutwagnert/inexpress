// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    name: "Ahmed",
    photo: "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/62012-istock-833768276.jpg?itok=AvAKdWF_&resize=1100x1100",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
