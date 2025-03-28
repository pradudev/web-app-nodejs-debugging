document.addEventListener("DOMContentLoaded", () => {
  function ProductViewModel() {
      var self = this;
      self.products = ko.observableArray([]);
      
      fetch('/api/products')
          .then(response => response.json())
          .then(data => self.products(data))
          .catch(error => console.error('Error fetching products:', error));
  }
  
  ko.applyBindings(new ProductViewModel());
});