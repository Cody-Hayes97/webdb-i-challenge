const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("accounts")
    .then(acc => {
      res.status(200).json(acc);
    })
    .catch(err => {
      res.status(500).json({ Error: "Failed to access data", err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db("accounts")
    .where("id", id)
    .then(acc => {
      res.status(200).json(acc);
    })
    .catch(err => {
      res.status(500).json({ Error: "Failed to access data", err });
    });
});

router.post("/", (req, res) => {
  db("accounts")
    .insert(req.body)
    .then(acc => {
      res.status(200).json(acc);
    })
    .catch(err => {
      res.status(500).json({ Error: "Failed to access data", err });
    });
});

router.put("/:id", (req, res) => {
  db("accounts")
    .where("id", req.params.id)
    .update(req.body)
    .then(acc => {
      res.status(200).json(acc);
    })
    .catch(err => {
      res.status(500).json({ Error: "Failed to access data", err });
    });
});

router.delete("/:id", (req, res) => {
  db("accounts")
    .where("id", req.params.id)
    .delete()
    .then(acc => {
      res.status(200).json(acc);
    })
    .catch(err => {
      res.status(500).json({ Error: "Failed to access data", err });
    });
});

module.exports = router;
