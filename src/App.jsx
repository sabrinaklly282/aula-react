import Navbar from "./Navbar"
import Bio from "./Bio"
import Destaque from "./Destaque"
import Feed from "./Feed"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <div class="container">
          <Bio />
          <div class="row text-center overflow-x-auto flex-nowrap" id="linha-dos-destaques">
            <Destaque numero="1" />
            <Destaque numero="2" />
            <Destaque numero="3" />
            <Destaque numero="4" />
            <Destaque numero="5" />
            <Destaque numero="6" />
            <Destaque numero="7" />
          </div>
          <div id="linha-do-feed">
            <ul class="nav nav-pills mb-3 justify-content-evenly" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                  type="button" role="tab" aria-controls="pills-home" aria-selected="true">feed</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                  type="button" role="tab" aria-controls="pills-profile" aria-selected="false">heels</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                  type="button" role="tab" aria-controls="pills-contact" aria-selected="false">marcados</button>
              </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                tabindex="0">
                <div id="feed" class="row g-1">
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                  <Feed/>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                tabindex="0">
                <div id="heels" class="row g-1">
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                  <img src="https://placehold.co/600x900" alt="post" class="img-fluid col-6 col-sm-4 col-md-3" />
                </div>
              </div>
              <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                tabindex="0">...</div>
            </div>
          </div>
        </div>
      </main>
      <footer>
      </footer>
      
    </>
  )
}

export default App
