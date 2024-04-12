// Import the required modules and schemas
import { apiModel } from "../model/configdb/schema.js";


// Define an asynchronous function to save data
const save = async (name, data) => {
  // Use the 'await' keyword to wait for the new apiModel instance to be saved
  await new apiModel({ name, data }).save();
}

// Define a function to remove data
const remove = (name) => {
  // Use the 'findOneAndDelete' method to find and delete a document with the given name
  apiModel.findOneAndDelete({ name }).then(dbres => res.send({ message: "removed data successfully" })).catch(dberr => res.send({ message: dberr }))
}

// Define a function to update data
const updates = (name, data) => {
  // Use the 'findOneAndUpdate' method to find a document with the given name and update its data
  apiModel.findOneAndUpdate({ name, data: data }).then(dnres => res.send({ message: "updated successfully" }))
}

// Define a controller function to send data
export const sendController = (req, res) => {
  // Destructure the 'name' parameter from the request parameters
  let { name } = req.params;
  // Use the 'findOne' method to find a document with the given name
  apiModel.findOne(name).then((data) => {
    // Set the response status to 200
    res.status(200);
    // Send the found data as the response
    res.send(data)

  }).catch(err => res.send({ message: "no data found " }));
}

// Define a controller function to set data
export const setController = (req, res) => {
  // Check if the 'name' property exists in the request body
  if (req.body['name']) {
    // Call the 'save' function to save the data with the given name
    save(req.body.name, req.body.data);
    // Send a success message as the response
    res.status(200).send(
      { message: "Added  data successfully", }
    );

  } else {
    // Send an error message as the response if the 'name' property is missing
    res.status(200).send(
    {
      message: 'Please provide the name of file you want to update'
    });
  }
}

// Define a controller function to remove data
export const removeController = (req, res) => {
  // Call the 'remove' function to remove the data with the given name
  console.log("removing");
  remove(req.body['name']);
  // Send a success message as the response
  res.status(200).send(
  { message: "Remove data successfully", }
);
}

// Define a controller function to edit data
export const editController = (req, res) => {
  // Call the 'updates' function to update the data with the given name and data
  updates(req.body['name'], req.body['data']);
  // Send a success message as the response
  res.status(200).send(
 { message: "Edite data successfully" }
);
}