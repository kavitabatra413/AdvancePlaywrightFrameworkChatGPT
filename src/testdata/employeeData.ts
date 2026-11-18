const runId = Date.now().toString().slice(-6);

export const employeeData = {
  firstName: 'Test',
  middleName: 'Playwright',
  lastName: `Employee${runId}`
};

/*
runid: It generates a 6-digit value using the current timestamp. 
This helps create a unique employee last name for test data.
Date.now() Returns the current timestamp in milliseconds.
Date.now().toString() Converts the timestamp number into a string.
"1794825000123".slice(-6) reruns the last 6 characters of the string, 
which is a unique identifier for the employee.
{
  firstName: 'Test',
  middleName: 'Playwright',
  lastName: 'Employee500123'
}
*/
