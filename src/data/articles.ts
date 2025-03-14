import brandingPicture from '../../public/articles/branding.webp';
import ebsPicture from '../../public/articles/ebs.webp';
import gitlabPicture from '../../public/articles/gitlab.webp';
import srsPicture from '../../public/articles/srs.webp';

export interface Article {
   title: string;
   content: string;
   date: string;
   picture: StaticImageData;
   link: string;
}

export const ARTICLES: Article[] = [
   {
      title: 'Spaced Repetition for Learning French: A Practical Guide',
      content: `Explore the science behind SRS, its integration into Frencheers, and how combining it with immersion creates an effective learning strategy.`,
      date: 'Monday, 3 Mar 2025',
      picture: srsPicture,
      link: 'https://www.frencheers.com/blog/spaced-repetition-for-learning-french',
   },
   {
      title: 'Type Branding & Flavoring : Rendez votre code TypeScript plus lisible et plus robuste',
      content: `Le système de types de TypeScript est structurel et c'est l'un de ses principaux avantages. Cette caractéristique offre de nombreux outils puissants pour rendre les états non valides irreprésentables, permettant ainsi de détecter des bugs potentiels à la compilation et non au moment de l'exécution.`,
      date: 'Wednesday, 22 Mar 2023',
      picture: brandingPicture,
      link: 'https://galadrim.fr/blog/type-branding-and-flavoring-rendez-votre-code-typescript-plus-lisible-et-robuste',
   },
   {
      title: 'Comment déployer votre back-end sur AWS Elastic Beanstalk avec Github Actions ?',
      content: `Mettre en place une architecture scalable pour votre back-end peut sonner comme un véritable challenge. Pour cause, la scalabilité d'une application est toujours présentée comme un problème difficile à surmonter : même si vous avez choisi les meilleures technologies pour votre projet, vous aurez des besoins croissants en ressources, une inconsistance de la demande et peut-être même des difficultés à assurer un uptime compétitif.`,
      date: 'Monday, 30 Nov 2020',
      picture: ebsPicture,
      link: 'https://galadrim.fr/blog/comment-deployer-votre-back-end-sur-aws-elastic-beanstalk-avec-github-actions',
   },
   {
      title: 'Comment utiliser GitLab CI/CD pour améliorer votre flow de développement ?',
      content: `Lors du développement d'une application, il y a toujours une petite appréhension lors la mise en production. Cette petite voix qui vous dit "est-ce que mon code ne va rien casser ?" ou encore "est-ce que je suis sûr d'avoir passé tous les tests avant de push ?".`,
      date: 'Friday, 4 Sep 2020',
      picture: gitlabPicture,
      link: 'https://galadrim.fr/blog/comment-utiliser-gitlab-ci-cd-pour-ameliorer-votre-flow-de-developpement',
   },
];
