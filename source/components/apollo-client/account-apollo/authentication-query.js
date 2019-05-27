import gql from 'graphql-tag';

const retrieveAccount = (admin) => { var query;
    if(admin === true) { query = `mutation retrieveAdminAccount($email: String!, $password: String!) { retrieveAdminAccount(email: $email, password: $password) { firstname, lastname, token, authenticateToken, email, city, main_address, secondary_address } }`; }
    else if(admin === false) { query = `mutation retrieveGuestAccount($email: String!, $password: String!) { retrieveGuestAccount(email: $email, password: $password) { firstname, lastname, token, authenticateToken, email, city, main_address, secondary_address } }`; }
    return query;
};

const registerQuery = `mutation makeGuestAccount($civility: String!, $firstname: String!, $lastname: String!, $phone: String!, $email: String!, $password: String!) { makeGuestAccount(email: $email, password: $password, civility: $civility, firstname: $firstname, lastname: $lastname, phone: $phone) 
    { firstname, lastname, token, email } }`;
export { retrieveAccount, registerQuery };