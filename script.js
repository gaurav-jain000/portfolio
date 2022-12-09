const hideLoading = () => {
  setTimeout(()=> {
    document.getElementById("loading").style.opacity = "0";
  }, 1000);
  setTimeout(()=> {
    document.getElementById("loading").style.display = "none";
  }, 3000);
}