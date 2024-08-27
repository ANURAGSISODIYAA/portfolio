import styles from './ProjectsStyles.module.css';
import social from '../../assets/Social.png';
import chat from '../../assets/chat.png';
import cricket from '../../assets/CrfciWhizz.png';
import video from '../../assets/video.gif';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={social}
          link="https://github.com/ANURAGSISODIYAA/SocialSphere"
          h3="
Social Sphere"
          p="Social platform for coders"
        />
        <ProjectCard
          src={chat}
          link="https://github.com/ANURAGSISODIYAA/Converse"
          h3="Converse"
          p="One-to-One Chat application"
        />
        <ProjectCard
          src={cricket}
          link="https://github.com/ANURAGSISODIYAA/CricWhizz_Backend"
          h3="CricWhizz"
          p="Provides live cricket scores"
        />
        <ProjectCard
          src={video}
          link="https://github.com/ANURAGSISODIYAA/Video_Calling_Application"
          h3="Video Calling Application"
          p="Connect easily, chat instantly"
        />
      </div>
    </section>
  );
}

export default Projects;
