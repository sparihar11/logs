/***
* Implementation for CatalogService defined in ./cat-service.cds
*
*/
const cds = require('@sap/cds')
const Destination = require('@sap-cloud-sdk/core')
cds.env.features.fetch_csrf = true
module.exports = function () {

    this.on('READ', 'AuditLogs' , async req => {
        try {
           //Logic to be written
        } catch (error) {
            req.reject(400, error.innererror.response.body.error.message.value)
        }
    });

}