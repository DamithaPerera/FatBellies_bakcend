const {
    addBranchesService,
    viewOneBranchService,
    viewAllBranchesControllerService,
    updateBranchService,
    deleteBranchService
} = require('./branches_service')
const {commonResponse} = require("../../util/response");


let response;
exports.addBranchesController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await addBranchesService(requestBody);

        response = commonResponse(
            true,
            data,
            'Branch creation success',
            null
        );
        res.status(201).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Branch creation failed',
            err
        );
        res.status(400).send(response);
    }
}

exports.viewOneBranchController = async (req, res, next) => {
    try {
        const branchId = req.params.id;
        const data = await viewOneBranchService(branchId);

        response = commonResponse(
            true,
            data,
            'Branch retrieved successfully',
            null
        );
        res.status(200).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Branch retrieved failed',
            err
        );
        res.status(400).send(response);
    }
}

exports.viewAllBranchesController = async (req, res, next) => {
    try {
        const {page, limit} = req.query
        const data = await viewAllBranchesControllerService(page, limit);
        response = commonResponse(
            true,
            data,
            'All Branches retrieved successfully',
            null
        );
        res.status(200).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Branch retrieved failed',
            err
        );
        res.status(400).send(response);
    }
}

exports.updateBranchController = async (req, res, next) => {
    try {
        const branchId = req.params.id;
        const requestBody = req.body;
        const data = await updateBranchService(branchId, requestBody);

        response = commonResponse(
            true,
            data,
            'Branch update successfully',
            null
        );
        res.status(200).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Branch update failed',
            err
        );
        res.status(400).send(response);
    }
}

exports.deleteBranchController = async (req, res, next) => {
    try {
        const branchId = req.params.id;
        await deleteBranchService(branchId);

        response = commonResponse(
            true,
            null,
            'Branch deleted successfully',
            null
        );
        res.status(200).send(response);
    } catch (err) {
        response = commonResponse(
            true,
            null,
            'Branch delete failed',
            err
        );
        res.status(400).send(response);
    }
}
