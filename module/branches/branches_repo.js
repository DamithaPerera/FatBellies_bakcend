const branches = require('../../models/branches');
const buffet = require('../../models/buffet_meal');


exports.addBranchesRepo = async (requestBody) => {
    return branches.create(requestBody)
}

exports.viewOneBranchRepo = async (branchId) => {
    return branches.findOne({
        _id: branchId
    })
}

exports.viewAllBranchesControllerRepo = async (skip, limit) => {
    return branches.find({}).skip(skip).limit(limit)
}

exports.updateBranchRepo = async (branchId, requestBody) => {
    return branches.findByIdAndUpdate({
        _id: branchId
    }, {$set: requestBody}, {new: true});
}

exports.deleteBranchRepo = async (branchId) => {
    return branches.deleteOne({
        _id: branchId
    });
}

exports.searchBranchRepo = async (skip, limit, name, price) => {
    // const branches = await branches.aggregate([
    //     {
    //         $geoNear: {
    //             near: {
    //                 type: 'Point',
    //                 coordinates: [-73.99279, 40.719296]},
    //             spherical: true,
    //             distanceField: 'distance',
    //             maxDistance: 1000,
    //         },
    //     },
    //     {
    //         $skip: skip,
    //     },
    //     {
    //         $limit: limit,
    //     }
    // ]);
    // const populateResult = await branches.populate(branches, {
    //     path: 'buffet_meal',
    // });
    //
    // // return populateResult
    // return branches

    const searchQuery = {
        branch_name: new RegExp(name, 'i'),
    };

    return branches.find(searchQuery)
        .populate({
            path: 'buffet_meal',
            model: buffet,
        })
        .skip(skip).limit(limit)

}
