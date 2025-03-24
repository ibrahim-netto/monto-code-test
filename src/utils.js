/**
 * @typedef MappedProperty
 *
 * @type {object}
 * @property {string} id - A property ID.
 * @property {string} name - A property name.
 * @property {string} description - A property description.
 * @property {string} status - A property status.
 * @property {string} location - A property location.
 * @property {string} brokerEmail - A property broker email.
 */

/**
 * Get portal authentication data.
 *
 * @param {string} rootUrl - Root URL.
 * @param {string} username - Portal username.
 * @param {string} password - Portal password.
 * @return {Object} Authentication data.
 */
export async function getAuthentication(rootUrl, username, password) {
    const authentication = {};
    // @TODO implementation.

    return authentication;
}

/**
 * Search for properties by query.
 *
 * @param {string} rootUrl - Root URL.
 * @param {string} query - Location search query.
 * @return {Object[]} A list of properties.
 */
export async function searchProperties(rootUrl, query) {
    // @TODO implementation.
}

/**
 * Get portal property details.
 *
 * @param {Object} authentication - Authentication data.
 * @param {Object} property - A portal property.
 * @return {Object} Property details data.
 */
export async function getPropertyDetails(authentication, property) {
    const details = {
        brokerEmail: "" // Only this information is required.
    };
    // @TODO implementation.

    return details;
}

/**
 * Map a raw property.
 *
 * @param {Object} property - A property.
 * @return {MappedProperty} A mapped property.
 */
export async function mapProperty(property) {
    // @TODO implementation.

    const mappedProperty = {
        id: "",
        name: "",
        status: "",
        location: "",
        brokerEmail: ""
    };

    return mappedProperty;
}
