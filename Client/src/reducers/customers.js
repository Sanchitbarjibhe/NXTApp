// eslint-disable-next-line
export default (customers = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "FETCH_FILTER_CUSTOMERS":
            return action.payload;
        case "CREATE":
            return [...customers, action.payload];
        case "UPDATE":
            return customers.map((customer) =>
                customer._id === action.payload._id ? action.payload : customer
            );
        case "DELETE":
            return customers.filter((customer) => customer._id !== action.payload);
        default:
            return customers;
    }
};
