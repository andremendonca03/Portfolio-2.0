import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ProjectIntro from "@/components/projectIntro/ProjectIntro";
import data from "@/content/projectsPage.json";

const Projects = () => {

  return (
    <div>
      <Header />

      <main className="main">
        <h1 className="font-heading1 text-r-text container mb-7">Projects Showcase</h1>

        <div className="space-y-7 mb-8">
          {data.map((item, index) => {
            return (
              <ProjectIntro data={item} key={index} />
            );
          })}
        </div>

      </main>


      <Footer />
    </div>
  )
}

export default Projects