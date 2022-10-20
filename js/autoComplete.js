const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData
}) => {
  //make html element dynamic
  root.innerHTML = `
  <lable><b>Search </b></label>
  <input class="input" >
  <div class="dropdown">
    <div class="dropdown-menu">
        <div class="dropdown-content results">
        
        </div
    </div>
  </div>
  `;
  //connect these varabiles with the uniqe root which i created
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

  const onInput = async (event) => {
    //catch items's data in variable
    const items = await fetchData(event.target.value);
    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }
    //show the results
    dropdown.classList.add("is-active");
    //remove the last result and display new one
    resultsWrapper.innerHTML = "";
    // loop of the items
    for (const item of items) {
      const option = document.createElement("a");
      option.classList.add("dropdown-item");

      // render option to make the display of moives dynamic
      option.innerHTML = renderOption(item);

      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });
      resultsWrapper.appendChild(option);
    }
  };
  input.addEventListener("input", debounce(onInput, 1000));

  //close the dropdown
  document.addEventListener("click", (e) => {
    if (!root.contains(e.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
