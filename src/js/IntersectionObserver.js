function createObserver(IntersectionHandler) {
  
    return new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.intersectionRatio > 0) {
                IntersectionHandler(entry);
            }
        })
    });
  }

  export default createObserver;