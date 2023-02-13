const vendors = require('./vendors.mongo');

const getAllVendors = async () => {
    const vendorsList = vendors.find();
    return vendorsList;
}

module.exports = {
    getAllVendors
};