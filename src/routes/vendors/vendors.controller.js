const {} = '../../models/vendors/vendors.model';

const httpGetAllVendors = async (req, res) => {
    const vendors = await getAllVendors();
    console.log(vendors);
    return res.status(200).json(vendors);
}

module.exports = {
    httpGetAllVendors
}