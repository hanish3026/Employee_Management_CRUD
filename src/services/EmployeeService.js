import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {
    getAllEmployees() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
            .catch(error => {
                console.error("Error fetching employees:", error);
            });
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
            .catch(error => {
                console.error("Error creating employee:", error);
            });
    }

    getEmployeeById(employeeId) {
        if (!employeeId || isNaN(employeeId)) {
            console.error("Invalid employee ID provided:", employeeId);
            throw new Error("Invalid employee ID");
        }
        return axios.get(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`)
            .catch(error => {
                console.error("Error fetching employee by ID:", error);
            });
    }

    updateEmployee(employeeId, employee) {
        if (!employeeId || isNaN(employeeId)) {
            console.error("Invalid employee ID provided:", employeeId);
            throw new Error("Invalid employee ID"); 
        }
        return axios.put(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`, employee)
            .catch(error => {
                console.error("Error updating employee:", error);
            });
    }

    deleteEmployee(employeeId) {
        if (!employeeId || isNaN(employeeId)) {
            console.error("Invalid employee ID provided:", employeeId);
            throw new Error("Invalid employee ID");
        }
        return axios.delete(`${EMPLOYEE_BASE_REST_API_URL}/${employeeId}`)
            .catch(error => {
                console.error("Error deleting employee:", error);
            });
    }
}

export default new EmployeeService();
