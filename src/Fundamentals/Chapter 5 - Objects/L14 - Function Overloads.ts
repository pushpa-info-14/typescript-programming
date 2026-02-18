type Employee = {
  name: string;
  dept: string;
};

function formatEmployeeMessage(
  employee: Employee,
  isNew?: boolean,
  onBoardedDate?: Date,
): string {
  if (!isNew) {
    return `Employee: ${employee.name}, Dept: ${employee.dept}`;
  }
  return `Employee: ${employee.name}, New: Yes, Onboarded: ${onBoardedDate}`;
}
/**
  Used as-is, this function can be called in 3 different ways:

    formatEmployeeMessage(employee)
    formatEmployeeMessage(employee, boolean)
    formatEmployeeMessage(employee, boolean, Date)

  But we can constrain the function to only allow certain combinations of parameters by using function overloads.
 */

// note: function overloads need to be declared above the implementation
function formatEmployeeMessage2(employee: Employee): string;
function formatEmployeeMessage2(
  employee: Employee,
  isNew: true,
  onBoardedDate: Date,
): string;
function formatEmployeeMessage2(
  employee: Employee,
  isNew?: boolean,
  onBoardedDate?: Date,
): string {
  if (!isNew) {
    return `Employee: ${employee.name}, Dept: ${employee.dept}`;
  }
  return `Employee: ${employee.name}, New: Yes, Onboarded: ${onBoardedDate}`;
}

const employee: Employee = { name: "Joe Exotic", dept: "Zoo" };
const msg = formatEmployeeMessage2(employee);
console.log(msg);
// Employee: Joe Exotic, Dept: Zoo

const employee2: Employee = { name: "Carole Baskin", dept: "Big Cat Rescue" };
const msg2 = formatEmployeeMessage2(employee2, true, new Date());
console.log(msg2);
// Employee: Carole Baskin, New: Yes, Onboarded: 2023-10-01T00:00:00.000Z

const employee3: Employee = { name: "Dillon Passage", dept: "Zoo" };
// Error: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
// const msg3 = formatEmployeeMessage2(employee3, true);
