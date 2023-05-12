import Model from "../models/ownerInfo.js";


  //update infos
  export function put(req, res) {
    let { id } = req.params;
    let body = req.body;
    Model.findOneAndUpdate({ _id: id }, { $set: body }, { new: true})
      .then((response) => {
        console.log(response);
        res.status(200).send({ success: true, response });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }



const controller = {put};
export default controller;



