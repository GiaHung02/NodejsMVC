const Tour = require("../models/tourModel");

// // GET ALL TOURS
// const getAllTour = async (req, res) => {
//   try {
//     // 1. FILTERING
//     const queryObj = { ...req.query };
//     const excludedFields = ["page", "limit", "fields", "sort"];
//     excludedFields.forEach((el) => {
//       delete queryObj[el];
//     });

//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
//     let query = Tour.find(JSON.parse(queryStr));

//     // SORTING
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(",").join(" ");
//       console.log("sortBy: ", sortBy);

//       query = query.sort(sortBy);
//     } else {
//       query = query.sort("_id");
//     }

//     // FIELD LIMITING
//     if (req.query.fields) {
//       const fields = req.query.fields.split(",").join(" ");
//       query = query.select(fields);
//     } else {
//       query = query.select("-__v");
//     }

//     const tours = await query;
//     res.status(200).json({
//       status: "success",
//       results: tours.length,
//       data: {
//         tours: tours,
//       },
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: error,
//     });
//   }
// };

// // CREATING TOUR
// const createTour = async (req, res) => {
//   try {
//     console.log(req.body);

//     const newTour = await Tour.create(req.body);
//     res.status(201).json({
//       status: "success",
//       data: {
//         tour: newTour,
//       },
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };

// const getTourById = async (req, res) => {
//   try {
//     const tour = await Tour.findById(req.params.id);
//     res.status(200).json({
//       status: "success",
//       data: {
//         tour: tour,
//       },
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };

// module.exports = {
//   getAllTour,
//   createTour,
//   getTourById,
// };

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

// Create a new tour
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.renderCreateTourForm = (req, res) => {
  res.render("createTour");
};

exports.submitTourForm = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
};
