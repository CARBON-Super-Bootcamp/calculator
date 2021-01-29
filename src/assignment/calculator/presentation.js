const panel = document.getElementById('panel-calc')
const select = document.getElementById('save');
function renderPanel(state) {
    panel.value = state;
}

function renderOption(state) {
    for (let i = 0; i < state.length; i++) {
        const value = state[i];
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.append(option);
      }
    
}

function showOption(){
    select.style.display="";
};

function hideOption(){
    

    
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }

    const option = document.createElement('option');
    option.value = '';
    option.textContent = "Pilih angka tersimpan";
    option.selected = true;
    option.disabled = true;
    select.append(option);
    select.style.display="none";

};

module.exports = { renderPanel, panel, renderOption,showOption,hideOption, select}
