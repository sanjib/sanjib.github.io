let loadProjects = async () => {
      let res  = await fetch('./assets/data/projects.json')
      let data = await res.json()

      let projectsContainerHtml = ''
      data.forEach(project => {
        projectsContainerHtml += `
          <div class="col-12 col-md-6 col-xl-4 mb-4">
            <div class="card">
              <img class="card-img-top"
                                 src="${project.thumb}" 
                                 alt="Thumbnail image for ${project.name}">
              <div class="card-body">
                <h5 class="card-title">${project.name}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.page}"
                   target="_blank"
                   rel="noreferrer noopener" 
                   class="btn btn-primary">View Page</a>
                <a href="${project.repo}"
                   target="_blank"
                   rel="noreferrer noopener" 
                   class="btn btn-dark">View Repo</a>
              </div>
            </div>
          </div>`
      })

      document.querySelector('.projects-container').innerHTML = projectsContainerHtml
    }


;(async () => {
  await loadProjects()
  document.querySelector('.copyright-year').textContent = `${new Date().getFullYear()}`
})()
