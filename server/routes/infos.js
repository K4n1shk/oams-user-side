const router = require("express").Router();
const { Info, validate } = require("../models/info");


router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { error } = validate(req.body);
    if (error) {
      console.log(error);
      return res.status(400).send({ message: error.details[0].message });
    }
    const result = await new Info({ ...req.body }).save();
    res.status(200).send({ message: "Applied for Admmission Successfully!", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
})

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  Info.findOne({ email: req.params.id })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.put('/:id', async (req, res) => {
  try {
    const data = await Info.findOneAndUpdate(req.params.id, req.body)
    res.status(200).send({ message: "Updated Successfully!", data: data });
  } catch (err) {
    console.log(error);
    res.status(500).send({ message: "Unable to update data" });
  }
  // .then(book => res.json({ msg: 'Updated successfully' }))
  // .catch(err =>
  //   res.status(400).json({ error: 'Unable to update the Database' })
  // );
});

module.exports = router;