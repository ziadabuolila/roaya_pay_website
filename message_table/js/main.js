const tableBody = document.getElementById("tableBody");
  const allData = JSON.parse(localStorage.getItem("formData")) || [];

  allData.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.name}</td>
      <td>${entry.number}</td>
      <td>${entry.email}</td>
      <td>${entry.subject}</td>
      <td>${entry.complaints}</td>
      <td>${entry.message}</td>
    `;
    tableBody.appendChild(row);
  });