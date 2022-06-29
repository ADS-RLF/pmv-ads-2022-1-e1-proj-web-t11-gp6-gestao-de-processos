
router.get("/todos", function(req, res) {
    res.json(todos);
  });
  
  module.exports = router;