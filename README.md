# 🐍 Python Learning Path

Welcome to my Python repository! I have been studying Python since I was 15 years old, and this repository represents a significant part of my evolution as a software developer, covering fundamental logic, library practice, and data analysis.

---

## 📁 Repository Structure

### 1. 📚 Core Exercises (`/exercicios`)
A collection of foundational scripts and Jupyter Notebooks focusing on core Python concepts:
* **Control Flow:** `if / elif / else`, `for` loops, and `while` loops.
* **Data Structures:** Tuples, Lists, Dictionaries, and sets.
* **Functions & Methods:** Custom functions, parameters, and return values.
* **String Manipulation:** String slicing, splitting, and formatting methods.

---

### 2. 🛠️ Library Exercises (`/Libs_Exercises`)
Hands-on practice applying external libraries and advanced Python concepts:
* **Data Processing & Manipulation:** Introduction to `pandas` and data cleaning/treatment.
* **Advanced Python:** List comprehensions, advanced dictionary operations, and module practice.
* **Utility Scripts:** 
  * `time` library practice scripts.
  * Random Password Generator.
  * QR Code Generator (`qrcode`).

---

### 3. 📊 Pandas Data Analysis Mini-Project (`/Pandas_Little_Project`)
A practical end-to-end data analysis project automating business insights for a service provider company using dataset cross-referencing (Merging) and aggregations.

#### 🎯 Key Business Questions Answered:
1. **Total Payroll Cost:** Calculated full compensation per employee (Base Salary + Taxes + Benefits + Transportation/Meal allowances) to determine total company payroll expenditure.
2. **Total Revenue:** Merged client contract values with service duration (`BaseServiçosPrestados.xlsx` + `CadastroClientes.csv`) to compute total company revenue.
3. **Employee Conversion Rate:** Determined the percentage of active employees who closed at least one service contract using `.unique()` filtering.
4. **Contract Distribution by Department:** Tracked contract performance across business areas (`Administrativo`, `Operações`, `Comercial`, etc.).
5. **Department Headcount:** Analyzed workforce distribution across different departments.
6. **Average Monthly Ticket:** Computed average contract values using statistical methods (`.mean()`).

---

## 🛠️ Tech Stack & Tools

* **Language:** Python 3.x
* **Data Analysis:** `pandas`, `openpyxl`
* **Development Environment:** Jupyter Notebooks, VS Code