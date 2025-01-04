import axios from "axios";

const api = "http://localhost:8080/api/v1/employees";

class EmployeeServices {
    getAllEmployees() {
        return axios.get(api)
            .catch((error) => {
                console.log(error);
            });
    }
    deleteEmployee(empId) {
        return axios.delete(`${api}/${empId}`)
            .catch((error) => {
                console.log(error);
            });
    }
    updateEmployee(empId, employee) {
        return axios.put(`${api}/${empId}`, employee)
            .catch((error) => {
                console.log(error);
            });
    }
}

export default new EmployeeServices();