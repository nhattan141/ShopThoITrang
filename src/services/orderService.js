import axios from 'axios';

const beUrl = 'http://localhost:5000';

const handleGetAllOrderApi = (id) => {
    return axios.get(`${beUrl}/orders/getOrderFilters`);
};

const handleGetOrderbyAcountIdApi = (id) => {
    return axios.get(`${beUrl}/orders/getOrderByAccountId/${id}`);
};

const handleGetOrderDetailsByOrderIdApi = (id) => {
    return axios.get(`${beUrl}/orderDetails/getOrderDetailsByOrderId/${id}`);
};

const handleGetOrderbyIdApi = (id) => {
    return axios.get(`${beUrl}/orders/getOrderById/${id}`);
};

const hadleAddOrderApi = (AccountId, Date, Total, Status, Email, Phone, Address) => {
    return axios.post(`${beUrl}/orders/addOrder/`, { AccountId, Date, Total, Status, Email, Phone, Address });
};

const hadleAddOrderDetailsApi = (OrderId, ProductId, UnitPrice, Quantity, Total) => {
    return axios.post(`${beUrl}/orderDetails/addOrderDetails`, { OrderId, ProductId, UnitPrice, Quantity, Total });
};

const hadleUpdateOrderApi = (id, Status) => {
    return axios.put(`${beUrl}/orders/updateOrder/${id}`, { Status });
};

export {
    handleGetOrderbyAcountIdApi,
    handleGetOrderbyIdApi,
    handleGetOrderDetailsByOrderIdApi,
    hadleAddOrderApi,
    hadleAddOrderDetailsApi,
    handleGetAllOrderApi,
    hadleUpdateOrderApi
};
