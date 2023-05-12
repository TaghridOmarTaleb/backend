import fs from "node:fs/promises";
import Model from "../models/image.js";

//get all images
export function getAll(req, res, next) {
  Model.find()
    .then((response) => {
      console.log(response);
      res.status(200).send({ success: true, response });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

//get an image by id
export function getById(req, res, next) {
  console.log("params:", req.params);
  let { id } = req.params;
  Model.findOne({ _id: id })
    .then((response) => {
      console.log(response);
      res.status(200).send({ success: true, response });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

// add an image
export function post(req, res, next) {
    let image = req.image;
    console.log(req.image);

    let doc = new Model({ image, destination: "uploads" });
    doc
      .save()
      .then((response) => {
        console.log(response);
        res.status(200).send({ success: true, response });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

//edit an image
export async function updateimage(req, res, next) {
    try {
      const { id } = req.params;
      const image = await Model.findById(id);
      if (!image) {
        return res.status(404).send({ status: 404, message: "Not Found" });
      }
      const { name } = req.body;
      console.log("before update:", image);
  
      image.name = name || image.name;
      console.log("after update:", image);
  
      await Model.findByIdAndUpdate(id, image, { new: true });
      res.status(200).send({ status: 200, data: image });
    } catch (error) {
      res.status(500).send({ status: 500, message: error.message });
    }
  }


//delete an image
export async function deleteimage(req, res, next) {
    try {
      const { id } = req.params;
      const image = await Model.findByIdAndDelete(id);
      if (!image) {
        return res.status(404).send({ status: 404, message: "Not Found" });
      }
      const imagePath = `images/${image.name}`;
      await fs.unlink(imagePath);
      res.status(200).send({ status: 200, message: "Deleted successfully" });
    } catch (error) {
      res.status(500).send({ status: 500, message: error.message });
    }
  }
  

  const controller = { deleteimage, getAll, getById, post, updateimage };

  export default controller;